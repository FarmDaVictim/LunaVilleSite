import { YARN_BALL_IMAGES } from '../data/yarnBallImages';
import { useMediaQuery } from '../hooks/useMediaQuery';
import './FloatingYarnPlanets.css';

/**
 * Spacey feel - yarn balls as distant planets, scattered organically.
 * Desktop: full layout. Mobile: fewer balls, repositioned for small screens.
 */
const PLANET_CONFIG = [
  { left: 4, top: 10, size: 85 },    { left: 84, top: 16, size: 220 },
  { left: 6, top: 72, size: 195 },   { left: 94, top: 74, size: 130 },
  { left: 12, top: 92, size: 240 }, { left: 88, top: 90, size: 100 },
  { left: 22, top: 82, size: 165 }, { left: 78, top: 82, size: 185 },
  { left: 16, top: 18, size: 118 },  { left: 76, top: 70, size: 155 },
  { left: 10, top: 60, size: 205 },
];

/** Mobile: 6 balls, spaced for narrow viewport */
const MOBILE_BALL_INDICES = [0, 2, 4, 6, 8, 10];
const MOBILE_PLANET_CONFIG = [
  { left: 8, top: 12, size: 50 },   { left: 92, top: 14, size: 65 },
  { left: 6, top: 48, size: 55 },   { left: 94, top: 52, size: 50 },
  { left: 12, top: 82, size: 70 },  { left: 88, top: 86, size: 55 },
];

/** Very small phones: 4 balls only */
const MOBILE_SMALL_BALL_INDICES = [0, 4, 6, 10];
const MOBILE_SMALL_PLANET_CONFIG = [
  { left: 10, top: 15, size: 45 },  { left: 90, top: 50, size: 50 },
  { left: 10, top: 78, size: 55 },  { left: 88, top: 85, size: 45 },
];

const ASTRONAUT = { left: 50, top: 62, width: 460 };
const ASTRONAUT_MOBILE = { left: 50, top: 58, width: 200 };
const ASTRONAUT_MOBILE_SMALL = { left: 50, top: 56, width: 170 };

export default function FloatingYarnPlanets() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isMobileSmall = useMediaQuery('(max-width: 480px)');
  const planetConfig = isMobileSmall ? MOBILE_SMALL_PLANET_CONFIG : isMobile ? MOBILE_PLANET_CONFIG : PLANET_CONFIG;
  const ballIndices = isMobileSmall ? MOBILE_SMALL_BALL_INDICES : isMobile ? MOBILE_BALL_INDICES : [...Array(YARN_BALL_IMAGES.length).keys()];
  const astronaut = isMobileSmall ? ASTRONAUT_MOBILE_SMALL : isMobile ? ASTRONAUT_MOBILE : ASTRONAUT;

  return (
    <div className={`floating-yarn-planets ${isMobile ? 'floating-yarn-planets--mobile' : ''}`} aria-hidden="true">
      <div
        className="floating-yarn-planets__astronaut"
        style={{
          left: `${astronaut.left}%`,
          top: `${astronaut.top}%`,
          width: astronaut.width,
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
      {ballIndices.map((imgIndex, displayIndex) => {
        const cfg = planetConfig[displayIndex];
        return (
          <div
            key={imgIndex}
            className="floating-yarn-planets__planet"
            style={{
              left: `${cfg.left}%`,
              top: `${cfg.top}%`,
              width: cfg.size,
              height: cfg.size,
              animationDelay: `${displayIndex * 0.8}s`,
              animationDuration: `${10 + (displayIndex % 3) * 2}s`,
            }}
          >
            <img
              src={YARN_BALL_IMAGES[imgIndex]}
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
