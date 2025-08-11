import React, { createContext, useContext, useState, useRef } from 'react';

const ScrollContext = createContext();

export const useScrollContext = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error('useScrollContext must be used within a ScrollProvider');
  }
  return context;
};

export const ScrollProvider = ({ children }) => {
  const [currentSection, setCurrentSection] = useState(0);
  const [sections, setSections] = useState([]);
  const [isScrolling, setIsScrolling] = useState(false);
  const sectionsRef = useRef([]);

  const registerSection = (id, element) => {
    sectionsRef.current[id] = element;
    setSections(prev => [...prev, { id, element }]);
  };

  const scrollToSection = (index) => {
    if (isScrolling) return;
    
    setIsScrolling(true);
    setCurrentSection(index);
    
    const targetSection = sectionsRef.current[index];
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    
    setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  };

  const scrollToNext = () => {
    const nextSection = Math.min(sectionsRef.current.length - 1, currentSection + 1);
    scrollToSection(nextSection);
  };

  const scrollToPrev = () => {
    const prevSection = Math.max(0, currentSection - 1);
    scrollToSection(prevSection);
  };

  const scrollToHome = () => {
    scrollToSection(0);
  };

  const scrollToProducts = () => {
    scrollToSection(2); // Секция с продуктами
  };

  const scrollToCases = () => {
    scrollToSection(3); // Секция с кейсами
  };

  const scrollToContact = () => {
    scrollToSection(4); // Секция с контактами
  };

  const value = {
    currentSection,
    sections,
    isScrolling,
    registerSection,
    scrollToSection,
    scrollToNext,
    scrollToPrev,
    scrollToHome,
    scrollToProducts,
    scrollToCases,
    scrollToContact,
    setCurrentSection
  };

  return (
    <ScrollContext.Provider value={value}>
      {children}
    </ScrollContext.Provider>
  );
}; 