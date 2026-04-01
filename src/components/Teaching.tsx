import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const instructorExperience = [
  { id: 1, course: "Calcul différentiel et intégral", term: "Fall 2025" },
  { id: 2, course: "Algèbre linéaire et géométrie vectorielle", term: "Winter 2023, Winter 2025" },
  { id: 3, course: "Calcul différentiel", term: "Winter 2024" }
];

const taExperience = [
  { id: 4, course: "Analyse 2", term: " Fall 2024, Fall 2025" },
  { id: 5, course: "Analyse complexe 1", term: "Winter 2025, Winter 2026" },
  { id: 6, course: "Géométries", term: "Fall 2022, Fall 2024" },
  { id: 7, course: "Introduction aux méthodes quantitatives appliquées à la gestion", term: "Fall 2024" },
  { id: 8, course: "Algèbre linéaire et géométrie vectorielle", term: "Fall 2023" },
  { id: 9, course: "Calcul différentiel", term: "Summer 2022, Fall 2022" }

];

export default function Teaching() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const listItemsRef = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    // Animations disabled for instant visibility as requested
    /*
    if (sectionRef.current) {
      listItemsRef.current.forEach((item) => {
        if (item) {
          gsap.fromTo(item,
            { x: -50, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.6,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: item,
                start: "top 95%",
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
    <section id="teaching" ref={sectionRef} className="py-24 px-6 md:px-12 w-full flex flex-col items-center bg-[#FFB2B2] text-[#1a1a1a]">
      <div className="max-w-6xl w-full">
        <h2 className="font-syne text-4xl md:text-7xl font-extrabold uppercase mb-16 text-stroke-ink text-transparent">
          Teaching
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <div>
            <h3 className="font-syne text-3xl font-bold uppercase mb-8 border-b-2 border-ink pb-2">Course Instructor</h3>
            <ul className="flex flex-col gap-8 border-l-4 border-ink pl-6 relative">
              {instructorExperience.map((exp, index) => (
                <li 
                  key={exp.id}
                  ref={(el) => { listItemsRef.current[index] = el; }}
                  className="relative"
                >
                  <div className="absolute w-4 h-4 bg-white border-4 border-ink rounded-full -left-[34px] top-2 z-10"></div>
                  
                  <div className="flex flex-col gap-1 mb-2">
                    <h4 className="font-playfair text-xl md:text-2xl font-bold leading-tight">
                      {exp.course}
                    </h4>
                    <span className="font-syne font-bold uppercase text-sm inline-block px-3 py-1 bg-white border-2 border-ink w-max opacity-90 mt-2">
                      UQAM, {exp.term}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-syne text-3xl font-bold uppercase mb-8 border-b-2 border-ink pb-2">Teaching Assistant</h3>
            <ul className="flex flex-col gap-8 border-l-4 border-ink pl-6 relative">
              {taExperience.map((exp, index) => (
                <li 
                  key={exp.id}
                  ref={(el) => { listItemsRef.current[instructorExperience.length + index] = el; }}
                  className="relative"
                >
                  <div className="absolute w-4 h-4 bg-white border-4 border-ink rounded-full -left-[34px] top-2 z-10"></div>
                  
                  <div className="flex flex-col gap-1 mb-2">
                    <h4 className="font-playfair text-xl md:text-2xl font-bold leading-tight">
                      {exp.course}
                    </h4>
                    <span className="font-syne font-bold uppercase text-sm inline-block px-3 py-1 bg-white border-2 border-ink w-max opacity-90 mt-2">
                      UQAM, {exp.term}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
