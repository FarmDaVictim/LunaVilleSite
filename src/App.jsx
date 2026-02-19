import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Catalog from './pages/Catalog';
import Shop from './pages/Shop';
import Auctions from './pages/Auctions';
import BookAClass from './pages/BookAClass';
import Archive from './pages/Archive';
import Press from './pages/Press';
import PrivateList from './pages/PrivateList';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="shop" element={<Shop />} />
          <Route path="auctions" element={<Auctions />} />
          <Route path="book-a-class" element={<BookAClass />} />
          <Route path="archive" element={<Archive />} />
          <Route path="press" element={<Press />} />
          <Route path="private-list" element={<PrivateList />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
