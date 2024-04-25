import logo from './logo.svg';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Components/Home';
import Setup from './Components/Setup';
import AboutUs from './Components/AboutUs';
import HowItWorks from './Components/HowItWorks';

function App() {
  return (
    <Routes>
        <Route index element={<Home />} />
        <Route path="setup" element={<Setup />} />
        <Route path="about_us" element={<AboutUs />} />
        <Route path="how_it_works" element={<HowItWorks />} />
    </Routes>
  );
}

export default App;
