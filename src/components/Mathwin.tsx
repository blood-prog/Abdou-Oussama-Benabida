import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Mathwin() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animations disabled for instant visibility as requested
    /*
    if (containerRef.current) {
      gsap.fromTo(containerRef.current,
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
    */
  }, []);

  return (
    <section id="mathwin" ref={sectionRef} className="py-24 px-6 md:px-12 w-full flex justify-center bg-white text-ink">
      <div
        ref={containerRef}
        className="max-w-6xl w-full bg-[#FFF2D0] border-4 border-ink p-8 md:p-16 shadow-[16px_16px_0px_0px_rgba(26,26,26,1)] flex flex-col md:flex-row gap-12 items-center"
      >
        <div className="flex-1">
          <h2 className="font-syne text-4xl md:text-8xl font-black uppercase mb-6 tracking-tighter mix-blend-multiply">
            Mathwin.
          </h2>
          <p className="font-inter text-xl md:text-2xl font-medium mb-8 leading-relaxed">
            I am also part of the Mathwin project, a platform dedicated to create and keep contact between young talented mathematics students and senior tutors from around the world. The project encompasses several activities: problem-solving training and tutoring, online courses, reading groups, online events and schools and a research seminar (
            <a href="https://tassiliseminar.github.io/" target="_blank" rel="noopener noreferrer" className="underline decoration-2 hover:text-[#FFB2B2] mix-blend-multiply transition-colors">
              TSMS
            </a>
            ).
          </p>
          <a
            href="https://mathwin.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-[#FFB2B2] border-2 border-ink font-syne font-bold uppercase text-lg shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[0px_0px_0px_0px_rgba(26,26,26,1)] transition-all"
          >
            Visit Mathwin
          </a>
        </div>

        <div className="flex-1 w-full flex justify-center items-center">
          <img 
            src="/mathwin-logo.png" 
            alt="Mathwin Project Logo - A 3D Torus Knot representing mathematical connection and research" 
            className="w-full max-w-[550px] mix-blend-multiply"
          />
        </div>
      </div>
    </section>
  );
}
