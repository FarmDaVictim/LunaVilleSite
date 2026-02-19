import { useState } from 'react';
import FloatingRugPreview from './FloatingRugPreview';
import './RugGrid.css';

export default function RugGrid({ items, mode = 'hover', showBuyButton = false }) {
  const [previewSrc, setPreviewSrc] = useState(null);

  const openPreview = (e, src) => {
    if (e.target.closest('button')) return;
    setPreviewSrc(src);
  };

  return (
    <>
      <div className={`rug-grid rug-grid--${mode}`}>
        {items.map((item, i) => (
          <div
            key={i}
            className="rug-grid__item"
            onMouseEnter={mode === 'hover' ? () => setPreviewSrc(item.src) : undefined}
            onMouseLeave={mode === 'hover' ? () => setPreviewSrc(null) : undefined}
            onClick={mode === 'click' ? (e) => openPreview(e, item.src) : undefined}
          >
            <img
              src={item.src}
              alt={item.alt || `Rug ${i + 1}`}
              className="rug-grid__thumb"
              loading="lazy"
            />
            {showBuyButton && (
              <button
                type="button"
                className="rug-grid__action rug-grid__action--buy"
                onClick={(e) => { e.stopPropagation(); /* Buy logic */ }}
              >
                Buy
              </button>
            )}
          </div>
        ))}
      </div>
      {previewSrc && (
        <FloatingRugPreview src={previewSrc} onClose={() => setPreviewSrc(null)} />
      )}
    </>
  );
}
