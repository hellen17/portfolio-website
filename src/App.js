import logo from './logo.svg';
import { Navbar } from './components/Navbar';
import Heroshot from './components/Heroshot';
import About from './components/About';


function App() {
  return (
    <div className="px-5">
      {/* <Navbar /> */}
      <Heroshot />
      <About />
    
    </div>
  );
}

export default App;
