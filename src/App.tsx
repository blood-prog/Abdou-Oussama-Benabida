import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import CustomCursor from './components/CustomCursor';
import Header from './components/Header';

import About from './components/About';
import Research from './components/Research';
import Teaching from './components/Teaching';
import Seminars from './components/Seminars';
import Mathwin from './components/Mathwin';
import Contact from './components/Contact';
import './App.css';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <CustomCursor />
      <Header />
      <main className="bg-[#FFFBF1] text-[#1a1a1a] min-h-screen selection:bg-[#FFB2B2] selection:text-[#1a1a1a]">

        <About />
        <Research />
        <Teaching />
        <Seminars />
        <Mathwin />
      </main>
      <Contact />
    </>
  );
}

export default App;

