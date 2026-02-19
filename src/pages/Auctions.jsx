import { useState } from 'react';
import { RUG_IMAGES } from '../data/rugImages';
import TuftedHeading from '../components/TuftedHeading';
import FloatingRugPreview from '../components/FloatingRugPreview';
import AuctionTimer from '../components/AuctionTimer';
import '../styles/PageSection.css';
import './Auctions.css';

const auctionItems = RUG_IMAGES.slice(0, 5).map((src, i) => ({
  src,
  alt: `Auction lot ${i + 1}`,
  endsAt: new Date(Date.now() + (i + 1) * 24 * 60 * 60 * 1000).toISOString(),
}));

export default function Auctions() {
  const [previewSrc, setPreviewSrc] = useState(null);

  return (
    <div className="page-section auctions">
      <div className="page-section__inner">
        <TuftedHeading as="h1" className="tufted-heading--h1 page-section__heading">
          Auctions
        </TuftedHeading>
        <p className="auctions__intro">Place your bid. Click rug to preview.</p>
        <div className="auctions__grid">
          {auctionItems.map((item, i) => (
            <div key={i} className="auctions__lot">
              <div
                className="auctions__lot-image"
                onClick={() => setPreviewSrc(item.src)}
              >
                <img src={item.src} alt={item.alt} loading="lazy" />
              </div>
              <AuctionTimer endsAt={item.endsAt} />
              <form className="auctions__bid-form" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="number"
                  placeholder="Your bid"
                  className="auctions__bid-input"
                />
                <button type="submit" className="auctions__bid-btn">
                  Place Bid
                </button>
              </form>
            </div>
          ))}
        </div>
      </div>
      {previewSrc && (
        <FloatingRugPreview src={previewSrc} onClose={() => setPreviewSrc(null)} />
      )}
    </div>
  );
}
