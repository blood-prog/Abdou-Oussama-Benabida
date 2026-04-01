import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Fast tracking using quickTo
    const xTo = gsap.quickTo(cursor, "x", { duration: 0.1, ease: "power3" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.1, ease: "power3" });

    const moveCursor = (e: MouseEvent) => {
      xTo(e.clientX - 16); // center the 32px cursor
      yTo(e.clientY - 16);
    };

    window.addEventListener('mousemove', moveCursor);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a') || target.closest('button')) {
        gsap.to(cursor, { scale: 3, duration: 0.2, ease: "power2.out" });
      } else {
        gsap.to(cursor, { scale: 1, duration: 0.2, ease: "power2.out" });
      }
    };

    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div 
      ref={cursorRef}
      className="fixed top-0 left-0 w-8 h-8 rounded-full bg-white pointer-events-none z-[9999] mix-blend-difference hidden md:block"
      style={{ willChange: 'transform' }}
    />
  );
}
