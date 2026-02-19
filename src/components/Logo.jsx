import { Link } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import './Logo.css';

export default function Logo() {
  const linkRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (!linkRef.current || !textRef.current) return;
    const ctx = gsap.context(() => {
      linkRef.current.addEventListener('mouseenter', () => {
        gsap.to(textRef.current, { scale: 1.08, duration: 0.25, ease: 'power2.out' });
      });
      linkRef.current.addEventListener('mouseleave', () => {
        gsap.to(textRef.current, { scale: 1, duration: 0.3, ease: 'power2.out' });
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <Link to="/" className="logo" ref={linkRef}>
      <span className="logo__circle">
        <span className="logo__text logo__text--tufted" ref={textRef}>
          <span className="logo__line">LUNA</span>
          <span className="logo__line">VILLE</span>
        </span>
      </span>
    </Link>
  );
}
