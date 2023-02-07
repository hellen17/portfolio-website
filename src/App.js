import ReactGA from 'react-ga';

import logo from './logo.svg';
import Navbar from './components/Navbar';
import Heroshot from './components/Heroshot';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Articles from './components/Articles';
import Footer from './components/Footer';

const trackingId = "G-2ZQZQZQZQZ"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);

function App() {
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
