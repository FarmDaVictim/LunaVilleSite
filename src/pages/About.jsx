import { useRef } from 'react';
import TuftedHeading from '../components/TuftedHeading';
import OrbitingRugs from '../components/OrbitingRugs';
import '../styles/PageSection.css';
import './About.css';

export default function About() {
  const sectionRef = useRef(null);

  return (
    <div className="page-section about" ref={sectionRef}>
      <OrbitingRugs sectionRef={sectionRef} />
      <div className="page-section__inner">
        <TuftedHeading as="h1" className="tufted-heading--h1 page-section__heading">
          Our Story
        </TuftedHeading>
        <div className="page-section__content">
          <p>
            <span className="highlight">Lunaville</span> opened in Nairobi in 2023 as East Africa's first luxury tufting studio. We are a space where threads meet the stars—for tufters, makers, and cosmic dreamers.
          </p>
          <p>
            Our 2,000 sq ft studio in Westlands houses 12 tufting frames, premium imported yarns, and a team of expert instructors. From bold lunar designs to abstract nebulas, we believe every rug tells a story. Our community crafts pieces that bring <span className="highlight">out-of-this-world</span> character to any space.
          </p>
          <p>
            We offer workshops from 2-hour intro sessions to 3-day intensive masterclasses. All skill levels are welcome. We also take custom orders—commission bespoke rugs and wall hangings for homes, hotels, and commercial spaces.
          </p>
          <p>
            Join us for a class, shop the collection, or simply explore. Craft your cosmic rug in Lunaville—where the void gets a little greener.
          </p>
        </div>
      </div>
    </div>
  );
}
