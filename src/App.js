import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar.js'
import Home from './components/home';
import Project from './components/project'
function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Home />
      <Project />
    </div>
  );
}

export default App;
