import React, { useState, useEffect } from 'react';
import './ScrollContainer.css';
import HeroSection from './HeroSection';
import MultichannelSection from './MultichannelSection';
import AdvantagesSection from './AdvantagesSection';
import ContactSection from './ContactSection';

const ScrollContainer = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const sections = [
    { id: 'hero', component: HeroSection, title: 'Главная' },
    { id: 'multichannel', component: MultichannelSection, title: 'Каналы' },
    { id: 'advantages', component: AdvantagesSection, title: 'Преимущества' },
    { id: 'contact', component: ContactSection, title: 'Контакты' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling) return;

      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const newSection = Math.round(scrollPosition / windowHeight);
      
      if (newSection !== currentSection && newSection >= 0 && newSection < sections.length) {
        setCurrentSection(newSection);
      }
    };

    const handleWheel = (e) => {
      e.preventDefault();
      if (isScrolling) return;

      setIsScrolling(true);
      const direction = e.deltaY > 0 ? 1 : -1;
      const nextSection = currentSection + direction;

      if (nextSection >= 0 && nextSection < sections.length) {
        setCurrentSection(nextSection);
        const targetPosition = nextSection * window.innerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }

      setTimeout(() => setIsScrolling(false), 1000);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleWheel);
    };
  }, [currentSection, isScrolling, sections.length]);

  const navigateToSection = (index) => {
    if (isScrolling) return;
    
    setCurrentSection(index);
    const targetPosition = index * window.innerHeight;
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Индикаторы прогресса */}
      <div className="scroll-indicators">
        {sections.map((section, index) => (
          <div
            key={section.id}
            className={`indicator ${index === currentSection ? 'active' : ''}`}
            onClick={() => navigateToSection(index)}
            title={section.title}
          >
            <span className="indicator-dot"></span>
            <span className="indicator-label">{section.title}</span>
          </div>
        ))}
      </div>

      {/* Прогресс бар */}
      <div className="progress-bar">
        <div 
          className="progress-fill"
          style={{ height: `${((currentSection + 1) / sections.length) * 100}%` }}
        ></div>
      </div>

      {/* Секции */}
      <div className="scroll-container">
        {sections.map((section, index) => {
          const SectionComponent = section.component;
          return (
            <div
              key={section.id}
              className={`scroll-section ${index === currentSection ? 'active' : ''}`}
              id={section.id}
            >
              <div className="section-content">
                <SectionComponent />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ScrollContainer; 