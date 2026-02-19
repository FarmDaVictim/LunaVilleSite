import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import './HeroYarnText.css';

export default function HeroYarnText() {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) return;

    gsap.to(textRef.current, {
      y: 4,
      duration: 2.5,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
    });

    gsap.to(textRef.current, {
      rotationX: 2,
      rotationY: 1,
      duration: 3,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
      delay: 0.5,
    });
  }, []);

  return (
    <div className="hero-yarn" ref={containerRef}>
      <h1 className="hero-yarn__text" ref={textRef}>
        LUNAVILLE
      </h1>
    </div>
  );
}
