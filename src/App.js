import logo from './logo.svg';
import { Navbar } from './components/Navbar';
import Heroshot from './components/Heroshot';
import About from './components/About';
import Project from './components/Project';


function App() {
  return (
    <div className="px-5">
      {/* <Navbar /> */}
      <Heroshot />
      <About />
      <Project />
    
    </div>
  );
}

export default App;
