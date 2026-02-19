import { useRef } from 'react';
import TuftedHeading from '../components/TuftedHeading';
import YarnBall from '../components/YarnBall';
import '../styles/PageSection.css';
import './BookAClass.css';

export default function BookAClass() {
  const formRef = useRef(null);

  return (
    <div className="page-section book-class">
      <YarnBall />
      <div className="page-section__inner">
        <TuftedHeading as="h1" className="tufted-heading--h1 page-section__heading">
          Book a Class
        </TuftedHeading>
        <p className="book-class__intro">Reserve your spot for a tufting workshop.</p>
        <form ref={formRef} className="book-class__form" onSubmit={(e) => e.preventDefault()}>
          <div className="book-class__field">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" placeholder="Your name" required />
          </div>
          <div className="book-class__field">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="you@example.com" required />
          </div>
          <div className="book-class__field">
            <label htmlFor="date">Preferred date</label>
            <input id="date" type="date" />
          </div>
          <div className="book-class__field">
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Any special requests?" rows={3} />
          </div>
          <button type="submit" className="book-class__submit">
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
}
