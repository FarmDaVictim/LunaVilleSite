import TuftedHeading from '../components/TuftedHeading';
import '../styles/PageSection.css';
import './Press.css';

const pressItems = [
  { title: 'Cosmic Rugs Take Over', source: 'Design Weekly', date: '2024' },
  { title: 'Lunaville Opens Studio', source: 'Local News', date: '2024' },
  { title: 'Tufting Goes Interstellar', source: 'Craft Magazine', date: '2023' },
];

export default function Press() {
  return (
    <div className="page-section press">
      <div className="page-section__inner">
        <TuftedHeading as="h1" className="tufted-heading--h1 page-section__heading">
          Press
        </TuftedHeading>
        <div className="press__grid">
          {pressItems.map((item, i) => (
            <article key={i} className="press__card">
              <h3 className="press__card-title">{item.title}</h3>
              <p className="press__card-source">{item.source}</p>
              <p className="press__card-date">{item.date}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
