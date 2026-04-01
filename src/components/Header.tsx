import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-[#FFF2D0] border-b-2 border-ink p-6 flex justify-between items-center text-ink">
        <h1 className="font-syne font-bold uppercase tracking-tight text-xl md:text-2xl">
          <a href="#about" className="flex items-center gap-3 hover:text-[#FFB2B2] transition-colors cursor-pointer">
            ABDOU OUSSAMA BENABIDA
          </a>
        </h1>

        <button 
          onClick={toggleMenu} 
          className="relative z-[60] text-ink flex items-center md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 font-syne uppercase tracking-wider text-sm font-semibold">
          <a href="#research" className="hover:line-through transition-all hover:italic">Research</a>
          <a href="#teaching" className="hover:line-through transition-all hover:italic">Teaching</a>
          <a href="#mathwin" className="hover:line-through transition-all hover:italic">Mathwin</a>
          <a href="#contact" className="hover:line-through transition-all hover:italic">Contact</a>
        </nav>
      </header>

      {/* Mobile Menu - Outside of mix-blend-difference header */}
      <div className={`fixed inset-0 bg-[#FFF2D0] z-[100] transition-transform duration-500 origin-top flex flex-col justify-center items-center gap-12 ${isOpen ? 'translate-y-0' : '-translate-y-full'} md:hidden text-ink`}>
        <button 
          onClick={toggleMenu} 
          className="absolute top-6 right-6 text-ink"
          aria-label="Close menu"
        >
          <X size={32} />
        </button>
        <nav className="flex flex-col gap-8 font-syne uppercase text-4xl font-bold text-center">
          <a href="#research" onClick={toggleMenu}>Research</a>
          <a href="#teaching" onClick={toggleMenu}>Teaching</a>
          <a href="#mathwin" onClick={toggleMenu}>Mathwin</a>
          <a href="#contact" onClick={toggleMenu}>Contact</a>
        </nav>
      </div>
    </>
  );
}
