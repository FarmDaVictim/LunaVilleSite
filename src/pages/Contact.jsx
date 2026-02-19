import TuftedHeading from '../components/TuftedHeading';
import '../styles/PageSection.css';
import './Contact.css';

export default function Contact() {
  return (
    <div className="page-section contact">
      <div className="page-section__inner">
        <TuftedHeading as="h1" className="tufted-heading--h1 page-section__heading">
          Contact
        </TuftedHeading>
        <p className="contact__intro">Get in touch with the Lunaville team.</p>
        <form className="contact__form" onSubmit={(e) => e.preventDefault()}>
          <div className="contact__field">
            <label htmlFor="contact-name">Name</label>
            <input id="contact-name" type="text" placeholder="Your name" required />
          </div>
          <div className="contact__field">
            <label htmlFor="contact-email">Email</label>
            <input id="contact-email" type="email" placeholder="you@example.com" required />
          </div>
          <div className="contact__field">
            <label htmlFor="contact-message">Message</label>
            <textarea id="contact-message" placeholder="How can we help?" rows={4} required />
          </div>
          <button type="submit" className="contact__submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
