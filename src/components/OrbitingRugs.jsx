import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { RUG_IMAGES } from '../data/rugImages';
import './OrbitingRugs.css';

gsap.registerPlugin(ScrollTrigger);

export default function OrbitingRugs({ sectionRef }) {
  const containerRef = useRef(null);
  const rugsRef = useRef([]);

  useEffect(() => {
    if (!sectionRef?.current || !containerRef.current) return;

    const section = sectionRef.current;
    const rugEls = rugsRef.current;
    const sources = RUG_IMAGES.slice(0, 4);

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top 80%',
        onEnter: () => {
          rugEls.forEach((el, i) => {
            if (!el) return;
            gsap.fromTo(el,
              { opacity: 0, scale: 0.5 },
              {
                opacity: 0.7,
                scale: 1,
                duration: 0.8,
                ease: 'power2.out',
                delay: i * 0.1,
              }
            );
          });
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [sectionRef]);

  return (
    <div className="orbiting-rugs" ref={containerRef} aria-hidden="true">
      {RUG_IMAGES.slice(0, 4).map((src, i) => (
        <div
          key={i}
          ref={(el) => { rugsRef.current[i] = el; }}
          className="orbiting-rugs__item"
        >
          <img src={src} alt="" loading="lazy" className="orbiting-rugs__img" />
        </div>
      ))}
    </div>
  );
}
