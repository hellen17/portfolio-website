import { useEffect } from 'react';
import ReactGA from 'react-ga';
import Navbar from './components/Navbar';
import Heroshot from './components/Heroshot';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Articles from './components/Articles';
import Footer from './components/Footer';

const trackingId = "G-7MB83S19P4"; // Replace with your Google Analytics tracking ID

function App() {

  useEffect(() => {
    ReactGA.initialize(trackingId);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [])

  return (
    <div className="px-5">
      <Navbar />
      <Heroshot />
      <About />
      <Project />
      <Articles />
      <Contact />
      <Footer />
    
    </div>
  );
}

export default App;
