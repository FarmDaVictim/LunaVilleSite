import { YARN_BALL_IMAGES } from '../data/yarnBallImages';
import './FloatingYarnPlanets.css';

/**
 * Spacey feel - yarn balls as distant planets, scattered organically.
 * Balls spread with room between each. Text zone avoided: ~28-72% x, 26-58% y.
 */
const PLANET_CONFIG = [
  { left: 4, top: 10, size: 85 },    // Top-left corner
  { left: 84, top: 16, size: 220 },  // Top-right area (left of rocket at 92%)
  { left: 6, top: 72, size: 195 },   // Far left
  { left: 94, top: 74, size: 130 },  // Far right (moved up for breathing room)
  { left: 12, top: 92, size: 240 }, // Bottom-left corner
  { left: 88, top: 90, size: 100 },  // Bottom-right (moved up)
  { left: 22, top: 82, size: 165 },  // Lower-left
  { left: 78, top: 82, size: 185 },  // Lower-right (moved up, right)
  { left: 16, top: 18, size: 118 },  // Upper-left
  { left: 76, top: 70, size: 155 },  // Yellow ball - up & right
  { left: 10, top: 60, size: 205 },  // Left, below text zone
];

const ASTRONAUT = { left: 50, top: 62, width: 460 }; /* Below Book a Class / Explore Collection buttons */

export default function FloatingYarnPlanets() {
  return (
    <div className="floating-yarn-planets" aria-hidden="true">
      <div
        className="floating-yarn-planets__astronaut"
        style={{
          left: `${ASTRONAUT.left}%`,
          top: `${ASTRONAUT.top}%`,
          width: ASTRONAUT.width,
          animationDelay: '0.5s',
          animationDuration: '12s',
        }}
      >
        <img
          src="/astronaut.png"
          alt=""
          loading="eager"
          decoding="async"
          className="floating-yarn-planets__astronaut-img"
        />
      </div>
      {YARN_BALL_IMAGES.map((src, i) => {
        const cfg = PLANET_CONFIG[i];
        return (
          <div
            key={i}
            className="floating-yarn-planets__planet"
            style={{
              left: `${cfg.left}%`,
              top: `${cfg.top}%`,
              width: cfg.size,
              height: cfg.size,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${8 + (i % 5) * 2}s`,
            }}
          >
            <img
              src={src}
              alt=""
              loading="eager"
              decoding="async"
              className="floating-yarn-planets__img"
            />
          </div>
        );
      })}
    </div>
  );
}
