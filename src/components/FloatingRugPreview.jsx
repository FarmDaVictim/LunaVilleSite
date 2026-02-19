import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import Matter from 'matter-js';
import './FloatingRugPreview.css';

const W = 120;
const H = 95;

export default function FloatingRugPreview({ src, onClose }) {
  const containerRef = useRef(null);
  const imgRef = useRef(null);
  const engineRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !imgRef.current || !src) return;

    const { Engine, World, Bodies, Body } = Matter;
    const engine = Engine.create({ gravity: { x: 0, y: 0 } });
    const world = engine.world;

    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    const body = Bodies.rectangle(
      cx,
      cy,
      W * 0.85,
      H * 0.85,
      { restitution: 0.3, friction: 0.001, frictionAir: 0.005 }
    );
    Body.setVelocity(body, {
      x: (Math.random() - 0.5) * 0.8,
      y: (Math.random() - 0.5) * 0.8,
    });
    World.add(world, body);

    gsap.fromTo(imgRef.current, { scale: 0 }, { scale: 1, duration: 0.4, ease: 'back.out' });

    const run = () => {
      Engine.update(engine);
      if (imgRef.current) {
        imgRef.current.style.transform = `translate(${body.position.x - W / 2}px, ${body.position.y - H / 2}px) rotate(${body.angle}rad)`;
      }
      rafRef.current = requestAnimationFrame(run);
    };
    rafRef.current = requestAnimationFrame(run);

    engineRef.current = engine;
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      World.clear(world);
      Engine.clear(engine);
    };
  }, [src]);

  return (
    <div className="floating-preview" ref={containerRef} onClick={onClose}>
      <button className="floating-preview__close" onClick={(e) => { e.stopPropagation(); onClose(); }} aria-label="Close">
        ×
      </button>
      <div className="floating-preview__img-wrap" ref={imgRef}>
        <img src={src} alt="Rug preview" className="floating-preview__img" />
      </div>
    </div>
  );
}
