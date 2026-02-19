import './RocketShip.css';

export default function RocketShip() {
  return (
    <div className="rocket-ship-wrap" aria-hidden="true">
      <div className="rocket-ship">
        <img src="/rocket.png" alt="" loading="eager" decoding="async" />
      </div>
    </div>
  );
}
