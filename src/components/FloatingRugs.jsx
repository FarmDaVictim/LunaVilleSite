import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import Matter from 'matter-js';
import { RUG_IMAGES } from '../data/rugImages';
import './FloatingRugs.css';

const FLOATING_COUNT_DESKTOP = 11;
const FLOATING_COUNT_MOBILE = 6;
const BASE_WIDTH = 160;
const BASE_HEIGHT = 130;
const REPEL_RADIUS = 280;
const REPEL_STRENGTH = 0.005;
const SIZE_SCALES = [0.9, 1.25, 1.6, 2.05, 2.5, 2.95, 3.4, 3.85, 4.3, 4.75, 5.2];

export default function FloatingRugs({ carouselRef, enabled }) {
  const containerRef = useRef(null);
  const rugsRef = useRef([]);
  const engineRef = useRef(null);
  const bodiesRef = useRef([]);
  const scalesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);
  const pausedRef = useRef(false);
  const [opacity, setOpacity] = useState(0.85);
  const [rugCount, setRugCount] = useState(FLOATING_COUNT_DESKTOP);

  useEffect(() => {
    const update = () => setRugCount(window.innerWidth < 768 ? FLOATING_COUNT_MOBILE : FLOATING_COUNT_DESKTOP);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const rugSources = [...RUG_IMAGES];
  while (rugSources.length < rugCount) rugSources.push(...RUG_IMAGES);
  const sources = rugSources.slice(0, rugCount);
  const scales = sources.map((_, i) => SIZE_SCALES[i % SIZE_SCALES.length]);

  useEffect(() => {
    if (!enabled || !containerRef.current || !carouselRef?.current) return;

    const container = containerRef.current;
    const rect = carouselRef.current.getBoundingClientRect();
    const maxScale = Math.max(...scales);
    const maxW = BASE_WIDTH * maxScale;
    const maxH = BASE_HEIGHT * maxScale;
    const originX = rect.left + rect.width / 2 - maxW / 2;
    const originY = rect.top + rect.height / 2 - maxH / 2;

    const { Engine, World, Bodies, Body } = Matter;

    const engine = Engine.create({ gravity: { x: 0, y: 0 } });
    engineRef.current = engine;
    const world = engine.world;

    const padding = 60;
    const minX = padding + maxW / 2;
    const maxX = window.innerWidth - padding - maxW / 2;
    const minY = padding + maxH / 2;
    const maxY = window.innerHeight - padding - maxH / 2;

    const bodies = [];
    const rugElements = rugsRef.current;
    scalesRef.current = scales;

    const getRandomPos = () => ({
      x: minX + Math.random() * (maxX - minX),
      y: minY + Math.random() * (maxY - minY),
    });

    sources.forEach((src, i) => {
      const scale = scales[i];
      const w = BASE_WIDTH * scale * 0.85;
      const h = BASE_HEIGHT * scale * 0.85;
      const pos = getRandomPos();
      const body = Bodies.rectangle(pos.x, pos.y, w, h, {
        restitution: 0.6,
        friction: 0.001,
        frictionAir: 0.0008,
        density: 0.0008,
      });
      const speedMultiplier = i % 3 === 0 ? 5.5 : i % 3 === 1 ? 2 : 7;
      Body.setVelocity(body, {
        x: (Math.random() - 0.5) * speedMultiplier,
        y: (Math.random() - 0.5) * speedMultiplier,
      });
      World.add(world, body);
      bodies.push(body);

      const halfW = (BASE_WIDTH * scale) / 2;
      const halfH = (BASE_HEIGHT * scale) / 2;
      if (rugElements[i]) {
        gsap.set(rugElements[i], { opacity: 0, x: originX, y: originY, rotation: 0 });
        gsap.to(rugElements[i], {
          opacity: 0.85,
          x: pos.x - halfW,
          y: pos.y - halfH,
          rotation: (Math.random() - 0.5) * 30,
          duration: 1.2,
          ease: 'power2.out',
          delay: i * 0.05,
        });
      }
    });

    bodiesRef.current = bodies;

    const startPhysics = () => {
      const run = () => {
        if (!pausedRef.current) {
          const mx = mouseRef.current.x;
          const my = mouseRef.current.y;
          const scaleArr = scalesRef.current;

          bodies.forEach((body, idx) => {
            const dx = body.position.x - mx;
            const dy = body.position.y - my;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < REPEL_RADIUS && dist > 0) {
              const strength = (1 - dist / REPEL_RADIUS) * REPEL_STRENGTH;
              const nx = dx / dist;
              const ny = dy / dist;
              Body.applyForce(body, body.position, { x: nx * strength, y: ny * strength });
            }
            const px = body.position.x;
            const py = body.position.y;
            let vx = body.velocity.x;
            let vy = body.velocity.y;
            const halfW = (BASE_WIDTH * scaleArr[idx]) / 2;
            const halfH = (BASE_HEIGHT * scaleArr[idx]) / 2;
            if (px - halfW < padding) { Body.setPosition(body, { x: padding + halfW, y: py }); vx = Math.abs(vx) * 0.9; }
            if (px + halfW > window.innerWidth - padding) { Body.setPosition(body, { x: window.innerWidth - padding - halfW, y: py }); vx = -Math.abs(vx) * 0.9; }
            if (py - halfH < padding) { Body.setPosition(body, { x: px, y: padding + halfH }); vy = Math.abs(vy) * 0.9; }
            if (py + halfH > window.innerHeight - padding) { Body.setPosition(body, { x: px, y: window.innerHeight - padding - halfH }); vy = -Math.abs(vy) * 0.9; }
            Body.setVelocity(body, { x: vx, y: vy });
          });

          Engine.update(engine);
          rugElements.forEach((el, i) => {
            if (el && bodies[i]) {
              const b = bodies[i];
              const hw = (BASE_WIDTH * scaleArr[i]) / 2;
              const hh = (BASE_HEIGHT * scaleArr[i]) / 2;
              el.style.transform = `translate(${b.position.x - hw}px, ${b.position.y - hh}px) rotate(${b.angle}rad)`;
            }
          });
        }
        rafRef.current = requestAnimationFrame(run);
      };
      rafRef.current = requestAnimationFrame(run);
    };

    const handleVisibility = () => { pausedRef.current = document.hidden; };
    document.addEventListener('visibilitychange', handleVisibility);

    const timer = setTimeout(startPhysics, 1400);

    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('visibilitychange', handleVisibility);
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (engineRef.current) {
        World.clear(world);
        Engine.clear(engine);
      }
    };
  }, [enabled, carouselRef, rugCount]);

  // Scroll-based opacity: fade rugs as user scrolls deeper (avoids overpowering text sections)
  useEffect(() => {
    if (!enabled) return;
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      const t = Math.min(scrollY / (docHeight * 0.6), 1);
      setOpacity(0.85 * (1 - t * 0.75));
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      className="floating-rugs"
      ref={containerRef}
      style={{ opacity }}
      aria-hidden="true"
    >
      {sources.map((src, i) => (
        <div
          key={i}
          ref={(el) => { rugsRef.current[i] = el; }}
          className="floating-rugs__item"
          style={{
            width: BASE_WIDTH * scales[i],
            height: BASE_HEIGHT * scales[i],
          }}
        >
          <img src={src} alt="" className="floating-rugs__img" loading="eager" fetchPriority="high" />
        </div>
      ))}
    </div>
  );
}
