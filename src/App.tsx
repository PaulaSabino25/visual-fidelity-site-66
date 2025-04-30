
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { Toaster } from './components/ui/toaster';

// Pages
import Index from './pages/Index';
import About from './pages/About';
import Team from './pages/Team';
import Investors from './pages/Investors';
import Products from './pages/Products';
import Technology from './pages/Technology';
import News from './pages/News';
import Contact from './pages/Contact';
import Partners from './pages/Partners';
import Publications from './pages/Publications';
import TrackRecord from './pages/TrackRecord';
import SignIn from './pages/SignIn';
import NotFound from './pages/NotFound';
import Gallery from './pages/Gallery';
import './App.css';

// Product pages
import ProductTofpetAsic from './pages/products/ProductTofpetAsic';
import ProductTofAsicEKit from './pages/products/ProductTofAsicEKit';
import ProductTofFrontEndModule from './pages/products/ProductTofFrontEndModule';
import ProductTofFebdBoard from './pages/products/ProductTofFebdBoard';
import ProductTofDaqBoard from './pages/products/ProductTofDaqBoard';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Index />} />
            
            <Route path="/about" element={<About />} />
            <Route path="/about/team" element={<Team />} />
            <Route path="/about/investors" element={<Investors />} />
            <Route path="/track-record" element={<TrackRecord />} />
            
            <Route path="/products" element={<Products />} />
            <Route path="/products/petsys-tofpet2-asic" element={<ProductTofpetAsic />} />
            <Route path="/products/tof-asic-e-kit" element={<ProductTofAsicEKit />} />
            <Route path="/products/tof-front-end-module" element={<ProductTofFrontEndModule />} />
            <Route path="/products/tof-febd-board" element={<ProductTofFebdBoard />} />
            <Route path="/products/tof-daq-board" element={<ProductTofDaqBoard />} />
            
            <Route path="/technology" element={<Technology />} />
            
            <Route path="/partners" element={<Partners />} />
            <Route path="/publications" element={<Publications />} />
            
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            
            <Route path="/signin" element={<SignIn />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
