import { useRef, useEffect } from 'react';
import Matter from 'matter-js';
import './YarnBall.css';

export default function YarnBall({ excludeSelector = 'form, input, button, textarea, select' }) {
  const containerRef = useRef(null);
  const ballRef = useRef(null);
  const engineRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !ballRef.current) return;

    const { Engine, World, Bodies, Body } = Matter;
    const engine = Engine.create({ gravity: { x: 0, y: 0 } });
    const world = engine.world;

    const w = 24;
    const body = Bodies.circle(50, 80, w / 2, {
      restitution: 0.5,
      friction: 0.001,
      frictionAir: 0.01,
      density: 0.002,
    });
    Body.setVelocity(body, { x: 0.3, y: 0.2 });
    World.add(world, body);

    const run = () => {
      const rect = containerRef.current.getBoundingClientRect();
      if (body.position.x < 10 || body.position.x > rect.width - 10) {
        Body.setVelocity(body, { x: -body.velocity.x * 1.05, y: body.velocity.y });
      }
      if (body.position.y < 10 || body.position.y > rect.height - 10) {
        Body.setVelocity(body, { x: body.velocity.x, y: -body.velocity.y * 1.05 });
      }
      Engine.update(engine);
      if (ballRef.current) {
        ballRef.current.style.transform = `translate(${body.position.x}px, ${body.position.y}px)`;
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
  }, []);

  return (
    <div className="yarn-ball-container" ref={containerRef} aria-hidden="true">
      <div className="yarn-ball" ref={ballRef} />
    </div>
  );
}
