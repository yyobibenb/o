import { useState, useEffect, useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import NavigationEnhanced from "@/components/NavigationEnhanced";
import HeroEnhanced from "@/components/HeroEnhanced";
import WhatIsSection from "@/components/WhatIsSection";
import Features from "@/components/Features";
import Tokenomics from "@/components/Tokenomics";
import RoadmapOrbits from "@/components/RoadmapOrbits";
import Footer from "@/components/Footer";

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  const sections = [
    { id: 'hero', component: <HeroEnhanced /> },
    { id: 'what-is', component: <WhatIsSection /> },
    { id: 'features', component: <Features /> },
    { id: 'tokenomics', component: <Tokenomics /> },
    { id: 'roadmap', component: <RoadmapOrbits /> },
    { id: 'footer', component: <Footer /> }
  ];

  useEffect(() => {
    if (isMobile) return;

    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) return;
      
      e.preventDefault();
      
      if (e.deltaY > 0 && currentSection < sections.length - 1) {
        setIsScrolling(true);
        setCurrentSection(prev => prev + 1);
        setTimeout(() => setIsScrolling(false), 1000);
      } else if (e.deltaY < 0 && currentSection > 0) {
        setIsScrolling(true);
        setCurrentSection(prev => prev - 1);
        setTimeout(() => setIsScrolling(false), 1000);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrolling) return;
      
      if ((e.key === 'ArrowDown' || e.key === 'PageDown') && currentSection < sections.length - 1) {
        setIsScrolling(true);
        setCurrentSection(prev => prev + 1);
        setTimeout(() => setIsScrolling(false), 1000);
      } else if ((e.key === 'ArrowUp' || e.key === 'PageUp') && currentSection > 0) {
        setIsScrolling(true);
        setCurrentSection(prev => prev - 1);
        setTimeout(() => setIsScrolling(false), 1000);
      }
    };

    const handleNavigateToSection = (e: Event) => {
      const customEvent = e as CustomEvent<{ sectionIndex: number }>;
      const targetSection = customEvent.detail.sectionIndex;
      
      if (targetSection >= 0 && targetSection < sections.length) {
        setIsScrolling(true);
        setCurrentSection(targetSection);
        setTimeout(() => setIsScrolling(false), 1000);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('navigateToSection', handleNavigateToSection);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('navigateToSection', handleNavigateToSection);
    };
  }, [currentSection, isScrolling, sections.length, isMobile]);

  return (
    <div 
      className={`relative overflow-x-hidden ${isMobile ? 'overflow-y-auto scroll-smooth' : 'h-screen overflow-y-hidden'}`} 
      ref={containerRef}
    >
      <NavigationEnhanced />
      
      {/* Section indicators - hide on mobile */}
      {!isMobile && (
        <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 space-y-3">
          {sections.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isScrolling) {
                  setIsScrolling(true);
                  setCurrentSection(index);
                  setTimeout(() => setIsScrolling(false), 1000);
                }
              }}
              className={`block w-3 h-3 rounded-full border-2 transition-all ${
                currentSection === index 
                  ? 'bg-orange-500 border-orange-500 w-4 h-4' 
                  : 'bg-transparent border-gray-400 hover:border-orange-400'
              }`}
              data-testid={`nav-dot-${index}`}
              aria-label={`Go to section ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Sections container */}
      <div 
        className={isMobile ? '' : 'h-full transition-transform duration-1000 ease-in-out'}
        style={isMobile ? {} : { 
          transform: `translateY(-${currentSection * 100}vh)`,
          willChange: 'transform'
        }}
      >
        {sections.map((section) => (
          <div 
            key={section.id}
            className={isMobile ? 'min-h-screen w-full' : 'h-screen w-full'}
            data-testid={`section-${section.id}`}
          >
            {section.component}
          </div>
        ))}
      </div>

    </div>
  );
}