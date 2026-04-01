import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animations disabled for instant visibility as requested
    /*
    if (textRef.current) {
      gsap.fromTo(textRef.current.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
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
    <section id="about" ref={containerRef} className="pt-32 pb-24 px-6 md:px-12 w-full flex flex-col items-center bg-[#FFFBF1] text-ink overflow-hidden border-b-2 border-ink">
      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-16 items-center md:items-start" ref={textRef}>

        <div className="flex-1 w-full">
          <h2 className="font-syne text-4xl md:text-7xl font-extrabold uppercase mb-12 border-b-4 border-ink pb-4">
            About Me
          </h2>

          <p className="font-inter text-xl md:text-2xl leading-relaxed mb-8">
            Hello! I am a PhD student in Mathematics at <span className="font-bold">Université du Québec à Montréal (UQAM)</span> under the supervision of professor <a href="http://profmath.uqam.ca/~rochon/" target="_blank" rel="noopener noreferrer" className="italic font-bold hover:text-[#FFB2B2] transition-colors underline decoration-2">Frédéric Rochon</a>. I obtained my Bachelor degree from Université Claude Bernard Lyon 1 (UCBL) and my Masters degree from Sorbonne Université.
          </p>

          <p className="font-inter text-xl md:text-2xl leading-relaxed mb-12">
            The goals of my PhD are twofold: first, to study various analytic aspects of conical degenerations of Calabi–Yau manifolds; and second, to develop a uniform construction of the resolvent of the Hodge Laplacian for conical degenerations of Riemannian manifolds.
          </p>

          <a
            href="https://drive.google.com/file/d/1s4wqN3L2oOZHYdf2f8dZL73ueFaId7M_/view"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-[#FFF2D0] border-4 border-ink font-syne font-bold uppercase text-xl shadow-[8px_8px_0px_0px_rgba(26,26,26,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[0px_0px_0px_0px_rgba(26,26,26,1)] transition-all"
          >
            View Curriculum Vitae
          </a>
        </div>

        {/* Profile picture */}
        <div className="w-full md:w-[400px] shrink-0 aspect-[3/4] border-4 border-ink shadow-[12px_12px_0px_0px_rgba(26,26,26,1)] mt-4 md:mt-24 overflow-hidden">
          <img
            src="/profile-photo.jpg"
            alt="Abdou Oussama Benabida"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
}
