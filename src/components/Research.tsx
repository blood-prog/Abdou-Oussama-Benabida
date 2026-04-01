import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const publications = [
  {
    id: 1,
    title: "Asymptotics for resolutions and smoothings of Calabi-Yau conifolds",
    journal: "in Comm. Math. Phys.",
    year: "2026",
    status: "Publication",
    arxivLink: "https://arxiv.org/abs/2503.16702",
    pubLink: "https://link.springer.com/article/10.1007/s00220-026-05578-5"
  }
];

export default function Research() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animation disabled to ensure instant visibility as requested
    /*
    if (sectionRef.current) {
      cardsRef.current.forEach((card) => {
        if (card) {
          gsap.fromTo(card,
            { y: 20, opacity: 0 },
            { 
              y: 0, 
              opacity: 1, 
              duration: 0.15, 
              ease: 'none',
              scrollTrigger: {
                trigger: card,
                start: "top bottom",
                toggleActions: "play none none reverse"
              }
            }
          );
        }
      });
    }
    */
  }, []);

  return (
    <section id="research" ref={sectionRef} className="py-24 px-6 md:px-12 w-full flex flex-col items-center">
      <div className="max-w-6xl w-full">
        <h2 className="font-syne text-4xl md:text-7xl font-extrabold uppercase mb-12 border-b-4 border-ink pb-4">
          Research
        </h2>

        <div className="mb-16">
          <h3 className="font-syne text-3xl font-bold uppercase mb-4 text-[#FFB2B2] text-stroke-ink">My Research Interests</h3>
          <p className="font-inter text-xl leading-relaxed text-ink/90">
            I am interested in doing analysis on manifolds with corners with additional structures. In general, manifolds with corners together with some adequate structures (e.g. Lie structures at infinity) can be used to compactify open manifolds or to resolve singular ones in a way that allows for a systematic approach to do analysis on such spaces. This approach can be used for various problems in geometric analysis, in particular, in spectral geometry, analytic torsion, index theorems, special Riemannian and Kähler metrics, the geometry of moduli spaces..etc.
          </p>
        </div>

        <h3 className="font-syne text-3xl font-bold uppercase mb-8">Preprints & Publications</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {publications.map((pub) => (
            <div
              key={pub.id}
              className="bg-[#FFF2D0] border-4 border-ink p-8 transition-all duration-300 ease-in-out hover:-translate-y-1 flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="font-syne font-bold uppercase text-sm border-2 border-ink px-3 py-1 bg-white">
                  {pub.year}
                </span>
                <span className={`font-syne font-bold uppercase text-sm border-2 border-ink px-3 py-1 ${pub.status === 'Publication' ? 'bg-[#FFB2B2]' : 'bg-white'}`}>
                  {pub.status}
                </span>
              </div>

              <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-4 leading-tight">
                {pub.title}
              </h3>
              <p className="font-inter text-base font-semibold italic opacity-80 mb-6 flex-grow">
                {pub.journal}
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href={pub.arxivLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-syne font-bold uppercase border-b-2 border-ink pb-1 w-max hover:text-[#FFB2B2] hover:border-[#FFB2B2] transition-colors"
                >
                  Read on arXiv ↗
                </a>
                <a
                  href={pub.pubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-syne font-bold uppercase border-b-2 border-ink pb-1 w-max hover:text-[#FFB2B2] hover:border-[#FFB2B2] transition-colors"
                >
                  Publication Link ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
