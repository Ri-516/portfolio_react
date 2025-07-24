import './App.css';
import Header from './components/component/Header/Header';
import Footer from './components/component/Footer/Footer';
import About from './components/component/About/About';
import Hobbies from './components/component/Hobbies/Hobbies';
import Skills from './components/component/Skills/Skills';
import HomePage from './pages/HomePage';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration in ms
    });
  }, []);
  return (
    <div>
      <HomePage />
    </div>
  );
}

export default App;
