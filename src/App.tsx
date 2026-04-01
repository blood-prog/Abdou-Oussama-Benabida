import { useEffect, lazy, Suspense } from 'react';
import Lenis from '@studio-freight/lenis';
import CustomCursor from './components/CustomCursor';
import Header from './components/Header';
import About from './components/About';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import './App.css';

// Lazy load below-the-fold components
const Research = lazy(() => import('./components/Research'));
const Teaching = lazy(() => import('./components/Teaching'));
const Seminars = lazy(() => import('./components/Seminars'));
const Mathwin = lazy(() => import('./components/Mathwin'));
const Contact = lazy(() => import('./components/Contact'));

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
        <Suspense fallback={null}>
          <Research />
          <Teaching />
          <Seminars />
          <Mathwin />
          <Contact />
        </Suspense>
      </main>
      <Analytics />
      <SpeedInsights />
    </>
  );
}

export default App;

