import React, { useEffect, useRef, useState } from 'react';
import { useScrollContext } from '../../contexts/ScrollContext';
import styles from './ScrollContainer.module.css';

const ScrollContainer = ({ children }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);
  const sectionsRef = useRef([]);
  const { currentSection, setCurrentSection, isScrolling } = useScrollContext();

  // Проверяем размер экрана
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 1200);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || isMobile) return;

    const handleWheel = (e) => {
      e.preventDefault();
      
      if (isScrolling) return;
      
      const direction = e.deltaY > 0 ? 1 : -1;
      const nextSection = Math.max(0, Math.min(sectionsRef.current.length - 1, currentSection + direction));
      
      if (nextSection !== currentSection) {
        setCurrentSection(nextSection);
        sectionsRef.current[nextSection]?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    };

    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        const nextSection = Math.min(sectionsRef.current.length - 1, currentSection + 1);
        if (nextSection !== currentSection) {
          setCurrentSection(nextSection);
          sectionsRef.current[nextSection]?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        const prevSection = Math.max(0, currentSection - 1);
        if (prevSection !== currentSection) {
          setCurrentSection(prevSection);
          sectionsRef.current[prevSection]?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sectionsRef.current.indexOf(entry.target);
          if (index !== -1) {
            setCurrentSection(index);
          }
        }
      });
    };

    // Intersection Observer для отслеживания активной секции
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
      rootMargin: '-10% 0px -10% 0px'
    });

    sectionsRef.current.forEach(section => {
      if (section) observer.observe(section);
    });

    container.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      container.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
      observer.disconnect();
    };
  }, [currentSection, isScrolling, setCurrentSection, isMobile]);

  const scrollToSection = (index) => {
    if (index >= 0 && index < sectionsRef.current.length && !isMobile) {
      setCurrentSection(index);
      sectionsRef.current[index]?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Клонируем children и добавляем refs
  const childrenWithRefs = React.Children.map(children, (child, index) => {
    return React.cloneElement(child, {
      ref: (el) => {
        sectionsRef.current[index] = el;
      }
    });
  });

  return (
    <div className={styles.scrollContainer} ref={containerRef}>
      {/* Прогресс-бар скролла */}
      {!isMobile && (
        <div className={styles.scrollProgress}>
          <div 
            className={styles.scrollProgressBar} 
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      )}
      
      {/* Индикатор секций */}
      {!isMobile && (
        <div className={styles.scrollIndicator}>
          {sectionsRef.current.map((_, index) => (
            <button
              key={index}
              className={`${styles.scrollDot} ${currentSection === index ? styles.active : ''}`}
              onClick={() => scrollToSection(index)}
              aria-label={`Перейти к секции ${index + 1}`}
            />
          ))}
        </div>
      )}
      
      <div className={styles.scrollContent}>
        {childrenWithRefs}
      </div>
    </div>
  );
};

export default ScrollContainer; 