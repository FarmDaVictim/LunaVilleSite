import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PAGE_META = {
  '/': { title: 'Lunaville | Where Threads Meet the Stars', description: 'Craft your cosmic rug in Lunaville—tufted rugs, classes, and community.' },
  '/about': { title: 'About | Lunaville', description: 'Our story. Where threads meet the stars.' },
  '/catalog': { title: 'Catalog | Lunaville', description: 'Browse our collection of tufted cosmic rugs.' },
  '/shop': { title: 'Shop | Lunaville', description: 'Current collection of tufted rugs for sale.' },
  '/auctions': { title: 'Auctions | Lunaville', description: 'Bid on exclusive tufted rugs.' },
  '/book-a-class': { title: 'Book a Class | Lunaville', description: 'Reserve your tufting workshop.' },
  '/archive': { title: 'Archive | Lunaville', description: 'Past pieces from the Lunaville collection.' },
  '/press': { title: 'Press | Lunaville', description: 'Lunaville in the news.' },
  '/private-list': { title: 'Private List | Lunaville', description: 'Exclusive access.' },
  '/contact': { title: 'Contact | Lunaville', description: 'Get in touch with Lunaville.' },
};

export default function PageSEO() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = PAGE_META[pathname] || PAGE_META['/'];
    document.title = meta.title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', meta.description);
  }, [pathname]);

  return null;
}
