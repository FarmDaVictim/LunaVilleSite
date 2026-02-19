import { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeroBanner from '../components/HeroBanner';
import RugCarousel from '../components/RugCarousel';
import FloatingYarnPlanets from '../components/FloatingYarnPlanets';
import RocketShip from '../components/RocketShip';
import StudioGallery from '../components/StudioGallery';
import { RUG_IMAGES } from '../data/rugImages';
import './HomePage.css';

export default function HomePage() {
  const carouselRef = useRef(null);
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [hash]);

  return (
    <div className="homepage">
      <section className="homepage__section homepage__hero" id="hero">
        <div className="homepage__hero-bg">
          <FloatingYarnPlanets />
          <HeroBanner />
          <RocketShip />
        </div>
        <div ref={carouselRef} className="homepage__carousel-trigger">
          <p className="homepage__carousel-label">Our Collection</p>
          <RugCarousel />
        </div>
      </section>

      <section className="homepage__section" id="about-preview">
        <h2>About</h2>
        <p className="homepage__section-intro">
          Lunaville opened in Nairobi in 2023 with a mission to bring the art of tufting to East Africa.
        </p>
        <div className="homepage__about-grid">
          <div className="homepage__about-card">
            <h3>Our Studio</h3>
            <p>A 2,000 sq ft space in Westlands with 12 tufting frames, premium yarns, and expert instructors.</p>
          </div>
          <div className="homepage__about-card">
            <h3>Workshops</h3>
            <p>From 2-hour intro sessions to 3-day intensive masterclasses. All skill levels welcome.</p>
          </div>
          <div className="homepage__about-card">
            <h3>Custom Orders</h3>
            <p>Commission bespoke rugs and wall hangings. We work with designers, hotels, and private clients.</p>
          </div>
        </div>
        <a href="/about" className="homepage__cta">Learn More</a>
      </section>

      <section className="homepage__section" id="shop">
        <h2>Current Collection</h2>
        <p className="homepage__section-intro">Hand-tufted rugs available for immediate delivery.</p>
        <div className="homepage__shop-preview">
          {RUG_IMAGES.slice(0, 4).map((src, i) => (
            <div key={i} className="homepage__shop-item">
              <img src={src} alt={`Rug ${i + 1}`} loading="lazy" />
              <span className="homepage__shop-label">Lunar Crater #{i + 1}</span>
              <span className="homepage__shop-price">KES 45,000</span>
            </div>
          ))}
        </div>
        <a href="/shop" className="homepage__cta">View All</a>
      </section>

      <section className="homepage__section homepage__section--split" id="classes">
        <div className="homepage__section-left">
          <p className="homepage__section-intro">Learn tufting from scratch or level up your skills.</p>
        </div>
        <h2>Book a Class</h2>
        <div className="homepage__classes-list homepage__section-full">
          <div className="homepage__class-item">
            <span className="homepage__class-name">Intro to Tufting</span>
            <span className="homepage__class-detail">2 hours · KES 8,500</span>
          </div>
          <div className="homepage__class-item">
            <span className="homepage__class-name">Full Rug Workshop</span>
            <span className="homepage__class-detail">1 day · KES 25,000</span>
          </div>
          <div className="homepage__class-item">
            <span className="homepage__class-name">Masterclass</span>
            <span className="homepage__class-detail">3 days · KES 65,000</span>
          </div>
        </div>
        <a href="/book-a-class" className="homepage__cta">Book Now</a>
      </section>

      <section className="homepage__section homepage__section--split" id="auctions">
        <div className="homepage__section-left">
          <p className="homepage__section-intro">Exclusive pieces. Bidding opens monthly.</p>
        </div>
        <h2>Auctions</h2>
        <div className="homepage__auction-preview homepage__section-full">
          <div className="homepage__auction-item">
            <img src={RUG_IMAGES[0]} alt="Auction rug" loading="lazy" />
            <div className="homepage__auction-info">
              <span>Cosmic Wave</span>
              <span>Current bid: KES 32,000</span>
              <span>Ends in 3d 12h</span>
            </div>
          </div>
          <div className="homepage__auction-item">
            <img src={RUG_IMAGES[2]} alt="Auction rug" loading="lazy" />
            <div className="homepage__auction-info">
              <span>Nebula #7</span>
              <span>Current bid: KES 28,500</span>
              <span>Ends in 5d 8h</span>
            </div>
          </div>
        </div>
        <a href="/auctions" className="homepage__cta">View Auctions</a>
      </section>

      <section className="homepage__section homepage__section--gallery" id="custom-pieces">
        <StudioGallery />
      </section>

      <section className="homepage__section homepage__section--split" id="contact-preview">
        <div className="homepage__section-left">
          <p className="homepage__section-intro">
            Westlands, Nairobi. Open Tue–Sun, 10am–6pm.
          </p>
          <p className="homepage__contact-detail">hello@lunaville.co.ke · +254 700 123 456</p>
        </div>
        <h2>Get in Touch</h2>
        <a href="/contact" className="homepage__cta">Contact Us</a>
      </section>
    </div>
  );
}
