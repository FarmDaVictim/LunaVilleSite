import { useEffect } from 'react';
import './StarField.css';

export default function StarField() {
  useEffect(() => {
    const container = document.querySelector('.star-field');
    if (!container) return;

    const starCount = 120;
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = Math.random() > 0.7 ? 'star star--bright' : 'star';
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animationDelay = `${Math.random() * 3}s`;
      star.style.animationDuration = `${2 + Math.random() * 2}s`;
      container.appendChild(star);
    }

    return () => {
      container.querySelectorAll('.star').forEach((s) => s.remove());
    };
  }, []);

  return <div className="star-field" aria-hidden="true" />;
}
