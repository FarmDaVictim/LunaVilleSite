import { RUG_IMAGES } from '../data/rugImages';
import TuftedHeading from '../components/TuftedHeading';
import RugGrid from '../components/RugGrid';
import '../styles/PageSection.css';
import './Archive.css';

const archiveItems = [...RUG_IMAGES, ...RUG_IMAGES].map((src, i) => ({
  src,
  alt: `Archived rug ${i + 1}`,
}));

export default function Archive() {
  return (
    <div className="page-section archive">
      <div className="page-section__inner">
        <TuftedHeading as="h1" className="tufted-heading--h1 page-section__heading">
          Archive
        </TuftedHeading>
        <p className="archive__intro">Past pieces from the Lunaville collection.</p>
        <RugGrid items={archiveItems} mode="hover" />
      </div>
    </div>
  );
}
