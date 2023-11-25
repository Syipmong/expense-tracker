import './App.css';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Dashboard/>
      <Footer/>
    </div>
  );
}

export default App;
