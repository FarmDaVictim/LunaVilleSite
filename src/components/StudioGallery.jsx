import { STUDIO_PHOTOS } from '../data/studioPhotos';
import './StudioGallery.css';

export default function StudioGallery() {
  if (STUDIO_PHOTOS.length === 0) return null;

  return (
    <div className="studio-gallery">
      <p className="studio-gallery__intro">Custom pieces we've made with our community.</p>
      <div className="studio-gallery__grid">
        {STUDIO_PHOTOS.map((src, i) => (
          <div key={i} className="studio-gallery__item">
            <img src={src} alt={`Custom piece ${i + 1}`} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
}
