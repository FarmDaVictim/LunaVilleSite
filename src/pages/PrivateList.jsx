import { useState } from 'react';
import TuftedHeading from '../components/TuftedHeading';
import '../styles/PageSection.css';
import './PrivateList.css';

const PASSWORD = 'lunaville';

export default function PrivateList() {
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.toLowerCase() === PASSWORD.toLowerCase()) {
      setAuthenticated(true);
    } else {
      alert('Incorrect password.');
    }
  };

  if (!authenticated) {
    return (
      <div className="page-section private-list">
        <div className="page-section__inner">
          <TuftedHeading as="h1" className="tufted-heading--h1 page-section__heading">
            Private List
          </TuftedHeading>
          <p className="private-list__intro">Enter password to access.</p>
          <form className="private-list__form" onSubmit={handleSubmit}>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="private-list__input"
              autoComplete="current-password"
            />
            <button type="submit" className="private-list__submit">
              Access
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="page-section private-list">
      <div className="page-section__inner">
        <TuftedHeading as="h1" className="tufted-heading--h1 page-section__heading">
          Private List
        </TuftedHeading>
        <p className="private-list__content">Placeholder: Private collection content will appear here. 🔒</p>
      </div>
    </div>
  );
}
