import { RUG_IMAGES } from '../data/rugImages';
import TuftedHeading from '../components/TuftedHeading';
import RugGrid from '../components/RugGrid';
import '../styles/PageSection.css';
import './Shop.css';

const shopItems = RUG_IMAGES.map((src, i) => ({
  src,
  alt: `Rug ${i + 1} - Lunaville shop`,
}));

export default function Shop() {
  return (
    <div className="page-section shop">
      <div className="page-section__inner">
        <TuftedHeading as="h1" className="tufted-heading--h1 page-section__heading">
          Current Collection
        </TuftedHeading>
        <p className="shop__intro">Shop tufted rugs. Click to preview, Buy to purchase.</p>
        <RugGrid items={shopItems} mode="click" showBuyButton />
      </div>
    </div>
  );
}
