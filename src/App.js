import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar.js'
import Home from './components/home';
import Project from './components/project'
import Contact from './components/contact';
function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Home />
      <Project />
      
    </div>
  );
}
//<Contact />
export default App;
