import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import About from './About';
import Services from './Services';
import Features from './Features';
import Contact from './Contact';
import Header from './Header';
import Footer from './Footer';
function App() {
   useEffect(() => {
    // Load external scripts dynamically
    const scripts = [
      '/lib/wow/wow.min.js',
      '/lib/easing/easing.min.js',
      '/lib/waypoints/waypoints.min.js',
      '/lib/counterup/counterup.min.js',
      '/lib/owlcarousel/owl.carousel.min.js',
      '/js/main.js'
    ];

    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
        document.body.appendChild(script);
      });
    };

    // Load all scripts sequentially
    scripts.reduce((promise, src) => {
      return promise.then(() => loadScript(src));
    }, Promise.resolve());
  }, []);
  return (

    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>


  );
}
export default App;
