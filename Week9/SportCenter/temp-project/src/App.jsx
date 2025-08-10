import './App.css'
import React, { useEffect } from "react";
import { useNavbarScroll, useHamburgerMenu, calculateBMI } from "./Hooks/useAppFunction";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './Header';
import HomeBoxes from './HomeBoxes';
import Classes from './Classes';
import Trainer from './Trainer';
import Purchase from './Purchase';
import Review from './Review';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  useNavbarScroll();
  useHamburgerMenu();

  useEffect(() => {
    calculateBMI();
  }, []);
  return (
    <>
      <div className='App'>
        <Header />
        <HomeBoxes />
        <Classes />
        <Trainer />
        <Purchase />
        <Review />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;