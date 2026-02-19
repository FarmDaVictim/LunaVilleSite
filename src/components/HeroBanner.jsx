import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import './HeroBanner.css';

const GRID_COLS = 12;
const GRID_ROWS = 8;

export default function HeroBanner() {
  const gridRef = useRef(null);
  const titleRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [cells, setCells] = useState([]);

  useEffect(() => {
    const arr = [];
    for (let i = 0; i < GRID_ROWS * GRID_COLS; i++) arr.push(i);
    setCells(arr);
  }, []);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid || cells.length === 0) return;

    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    const raf = () => {
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const cellEls = grid.querySelectorAll('.hero-banner__cell');
      cellEls.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = mx - cx;
        const dy = my - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const influence = Math.max(0, 1 - dist / 150);
        const tiltX = (dy / 100) * influence;
        const tiltY = (-dx / 100) * influence;
        const glow = influence * 0.5;
        gsap.to(el, {
          transform: `perspective(500px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
          boxShadow: `inset 0 0 ${10 + glow * 25}px rgba(57, 255, 20, ${0.02 + glow * 0.06})`,
          duration: 0.25,
          overwrite: 'auto',
        });
      });
      requestAnimationFrame(raf);
    };
    const id = requestAnimationFrame(raf);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(id);
    };
  }, [cells.length]);

  useEffect(() => {
    if (!titleRef.current) return;
    gsap.fromTo(titleRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, ease: 'power2.out' });
  }, []);

  return (
    <div className="hero-banner">
      <div className="hero-banner__weave" aria-hidden="true" />
      <div className="hero-banner__grid" ref={gridRef} aria-hidden="true">
        {cells.map((i) => (
          <div key={i} className="hero-banner__cell" />
        ))}
      </div>
      <div className="hero-banner__content">
        <h1 className="hero-banner__title hero-banner__title--glow" ref={titleRef}>
          LUNAVILLE
        </h1>
        <p className="hero-banner__tagline">
          East Africa's first luxury tufting experience.
        </p>
        <div className="hero-banner__ctas">
          <a href="/book-a-class" className="hero-banner__cta hero-banner__cta--filled">
            Book a Class
          </a>
          <a href="#shop" className="hero-banner__cta hero-banner__cta--outline">
            Explore Collection
          </a>
        </div>
      </div>
    </div>
  );
}
