import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Animations disabled for instant visibility as requested
    /*
    if (textRef.current) {
      gsap.fromTo(textRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
    */
  }, []);

  return (
    <footer id="contact" ref={sectionRef} className="bg-ink text-[#FFFBF1] pt-32 pb-12 px-6 md:px-12 w-full flex flex-col items-center overflow-hidden">
      <div className="max-w-6xl w-full flex flex-col items-center">

        <p className="font-syne font-bold uppercase tracking-widest text-[#FFB2B2] mb-6 text-center">
          Let's discuss mathematics
        </p>

        <h2 
          ref={textRef}
          className="font-syne text-4xl md:text-[6rem] lg:text-[8rem] font-extrabold uppercase leading-[0.85] text-center mb-24 transition-colors hover:text-[#FFF2D0] cursor-none"
        >
          <a href="mailto:benabida.abdou_oussama@uqam.ca">Contact</a>
        </h2>

        <div className="w-full h-[2px] bg-[#FFFBF1]/20 mb-12"></div>

        <div className="w-full flex flex-col lg:flex-row justify-start items-start lg:items-start gap-16 md:gap-24 font-inter text-sm font-semibold tracking-wider">
          <div className="flex flex-col gap-4">
            <h4 className="font-syne uppercase text-[#FFB2B2]">Emails</h4>
            <a href="mailto:benabida.abdou_oussama@uqam.ca" className="hover:text-[#FFF2D0] transition-colors">benabida.abdou_oussama@uqam.ca</a>
            <a href="mailto:benabida.oussama@gmail.com" className="hover:text-[#FFF2D0] transition-colors">benabida.oussama@gmail.com</a>
          </div>

          <div className="flex flex-col gap-4 max-w-sm">
            <h4 className="font-syne uppercase text-[#FFB2B2]">Address</h4>
            <p className="opacity-80 leading-relaxed">
              Pavillon Président Kennedy, 201 avenue du Président Kennedy<br />
              Montréal, Québec, H2X 3Y7<br />
              Office: PK-5418
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-syne uppercase text-[#FFB2B2]">Links</h4>
            <div className="flex flex-col gap-2">
              <a href="https://drive.google.com/file/d/1s4wqN3L2oOZHYdf2f8dZL73ueFaId7M_/view" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFF2D0] transition-colors">Curriculum Vitae</a>
              <a href="https://mathwin.org/" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFF2D0] transition-colors">Mathwin Project</a>
              <a href="https://tassiliseminar.github.io/" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFF2D0] transition-colors">TSMS Seminar</a>
            </div>
            <p className="opacity-50 mt-4 normal-case">© {new Date().getFullYear()} Abdou Oussama Benabida.</p>
          </div>
        </div>

      </div>
    </footer>
  );
}
