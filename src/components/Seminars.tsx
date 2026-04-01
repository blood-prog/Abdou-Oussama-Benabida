import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const seminars = [
  {
    id: 1,
    date: "Mar 2026",
    title: "On the Fourier transform and the Pontryagin duality",
    context: "MathCamp6, El Oued, Algeria.",
    links: [
      { text: "MathCamp6", url: "https://mathwin.org/mathcamp-6/" }
    ]
  },
  {
    id: 2,
    date: "Feb 2026",
    title: "Asymptotics for resolutions and smoothings of Calabi-Yau conifolds",
    context: "The Geometric Analysis Seminar, McGill, Montreal",
    links: []
  },
  {
    id: 3,
    date: "Aug 2025",
    title: "Asymptotics for resolutions and smoothings of Calabi-Yau conifolds",
    context: "lightening talk, Summer school II: Summer school on singular Kählerian metrics and Hermitian geometry, Budapest, Hungary.",
    links: []
  },
  {
    id: 4,
    date: "Jun 2025",
    title: "Asymptotics for resolutions and smoothings of Calabi-Yau conifolds",
    context: "TSMS, MathWin (online).",
    links: [
      { text: "TSMS", url: "https://tassiliseminar.github.io/" },
      { text: "MathWin", url: "https://mathwin.org/" },
      { text: "YouTube Link 1", url: "https://youtu.be/uSsYPeNuvwc?si=TwtZnEpCY2H3QfAe" },
      { text: "YouTube Link 2", url: "https://youtu.be/nETP4xP_JAM?si=hZEnV_S3XofR4HD6" }
    ]
  },
  {
    id: 5,
    date: "May 2025",
    title: "Asymptotics for resolutions and smoothings of Calabi-Yau conifolds",
    context: "XXVIIth ISM Graduate Student Colloquium, UQAM, Montreal.",
    links: [
      { text: "Slides", url: "https://drive.google.com/file/d/10vMFoNoTcClRV0y-Ya7YOOgqMi49i09K/view" }
    ]
  },
  {
    id: 6,
    date: "Apr 2025",
    title: "Asymptotics for resolutions and smoothings of Calabi-Yau conifolds",
    context: "Online ACG seminar (Any Complex Geometry), UC Berkeley.",
    links: [
      { text: "Notes", url: "https://drive.google.com/file/d/125InZ8-zt5O413ZgKoyZM6uFZ7w59jvk/view" }
    ]
  },
  {
    id: 7,
    date: "Mar 2025",
    title: "Asymptotics for resolutions and smoothings of Calabi-Yau conifolds",
    context: "CIRGET Junior, UQAM, Montreal.",
    links: []
  },
  {
    id: 8,
    date: "Fall 2022",
    title: "Organization of the CIRGET Junior seminar",
    context: "UQAM, Montreal.",
    links: []
  },
  {
    id: 9,
    date: "Apr 2022",
    title: "Convergence of the Krylov Bogolyubov procedure in Bowen's example",
    context: "CIRGET Junior, UQAM, Montreal.",
    links: []
  },
  {
    id: 10,
    date: "Feb 2020",
    title: "ERP paradox, Bell's theorem and local realism in quantum mechanics",
    context: "Université Claude Bernard Lyon 1, Lyon, France.",
    links: []
  },
  {
    id: 11,
    date: "Mar 2018",
    title: "On Peano curves",
    context: "MathCamp4, El Oued, Algeria.",
    links: []
  }
];

export default function Seminars() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Animations disabled for instant visibility as requested
    /*
    if (sectionRef.current) {
      itemsRef.current.forEach((item) => {
        if (item) {
          gsap.fromTo(item,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: item,
                start: "top 90%",
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
    <section id="seminars" ref={sectionRef} className="py-24 px-6 md:px-12 w-full flex flex-col items-center bg-white text-ink border-b-4 border-ink">
      <div className="max-w-6xl w-full">
        <h2 className="font-syne text-3xl md:text-6xl lg:text-[7rem] font-black uppercase mb-12 tracking-tighter mix-blend-multiply">
          Seminars & Talks
        </h2>

        <div className="flex flex-col gap-12 border-l-4 border-ink pl-8 md:pl-16 relative">
          {seminars.map((seminar, index) => (
            <div
              key={seminar.id}
              ref={(el) => { itemsRef.current[index] = el; }}
              className="relative flex flex-col md:flex-row gap-4 md:gap-8 items-start"
            >
              {/* Timeline dot */}
              <div className="absolute w-6 h-6 bg-[#FFB2B2] border-4 border-ink rounded-full -left-[45px] md:-left-[77px] top-1 z-10"></div>

              <div className="font-syne font-bold uppercase text-lg border-2 border-ink px-4 py-1 bg-[#FFF2D0] whitespace-nowrap min-w-[150px] text-center">
                {seminar.date}
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="font-playfair text-2xl md:text-3xl font-bold leading-tight">
                  {seminar.title}
                </h3>
                <p className="font-inter text-lg text-ink/80 italic">
                  {seminar.context}
                </p>
                {seminar.links.length > 0 && (
                  <div className="flex flex-wrap gap-4 mt-2">
                    {seminar.links.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-syne text-sm font-bold uppercase underline decoration-2 underline-offset-4 hover:text-[#FFB2B2] transition-colors"
                      >
                        {link.text} ↗
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
