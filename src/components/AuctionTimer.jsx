import { useState, useEffect } from 'react';
import './AuctionTimer.css';

export default function AuctionTimer({ endsAt }) {
  const [timeLeft, setTimeLeft] = useState(() => {
    const end = new Date(endsAt).getTime();
    const now = Date.now();
    return Math.max(0, end - now);
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const end = new Date(endsAt).getTime();
      const now = Date.now();
      setTimeLeft(Math.max(0, end - now));
    }, 1000);
    return () => clearInterval(interval);
  }, [endsAt]);

  const h = Math.floor(timeLeft / 3600000);
  const m = Math.floor((timeLeft % 3600000) / 60000);
  const s = Math.floor((timeLeft % 60000) / 1000);

  return (
    <div className="auction-timer">
      <span className="auction-timer__label">Ends in</span>
      <span className="auction-timer__value">
        {h}h {m}m {s}s
      </span>
    </div>
  );
}
