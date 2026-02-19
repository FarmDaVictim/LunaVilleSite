import { RUG_IMAGES } from '../data/rugImages';
import './RugCarousel.css';

export default function RugCarousel() {
  const rugs = [...RUG_IMAGES, ...RUG_IMAGES]; // Duplicate for seamless loop

  return (
    <div className="rug-carousel-wrapper">
      <div className="rug-carousel">
        <div className="rug-carousel__track">
          {rugs.map((src, i) => (
            <div key={i} className="rug-carousel__item">
              <img
                src={src}
                alt={`Rug ${(i % RUG_IMAGES.length) + 1}`}
                className="rug-carousel__img"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
