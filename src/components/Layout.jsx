import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import StarField from './StarField';
import PageSEO from './PageSEO';
import Footer from './Footer';
import './Layout.css';

export default function Layout() {
  return (
    <div className="layout">
      <PageSEO />
      <StarField />
      <Navbar />
      <main className="layout__main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
