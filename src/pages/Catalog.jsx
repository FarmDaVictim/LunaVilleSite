import { RUG_IMAGES } from '../data/rugImages';
import TuftedHeading from '../components/TuftedHeading';
import RugGrid from '../components/RugGrid';
import '../styles/PageSection.css';
import './Catalog.css';

const catalogItems = RUG_IMAGES.map((src, i) => ({
  src,
  alt: `Rug ${i + 1} - Lunaville catalog`,
}));

export default function Catalog() {
  return (
    <div className="page-section catalog">
      <div className="page-section__inner">
        <TuftedHeading as="h1" className="tufted-heading--h1 page-section__heading">
          Catalog
        </TuftedHeading>
        <p className="catalog__intro">Browse our collection of tufted cosmic rugs.</p>
        <RugGrid items={catalogItems} mode="hover" />
      </div>
    </div>
  );
}
