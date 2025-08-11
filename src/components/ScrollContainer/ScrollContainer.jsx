import React, { useEffect, useRef, useState } from 'react';
import { useScrollContext } from '../../contexts/ScrollContext';
import styles from './ScrollContainer.module.css';

const ScrollContainer = ({ children }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);
  const sectionsRef = useRef([]);
  const { currentSection, setCurrentSection, isScrolling } = useScrollContext();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

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
  }, [currentSection, isScrolling, setCurrentSection]);

  const scrollToSection = (index) => {
    if (index >= 0 && index < sectionsRef.current.length) {
      setCurrentSection(index);
      sectionsRef.current[index]?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Добавляем ref к каждому дочернему элементу
  const childrenWithRefs = React.Children.map(children, (child, index) => {
    return React.cloneElement(child, {
      ref: (el) => {
        sectionsRef.current[index] = el;
      },
      className: `${child.props.className || ''} scroll-snap-section`
    });
  });

  return (
    <div ref={containerRef} className={styles.scrollContainer}>
      {/* Progress bar */}
      <div className={styles.scrollProgress}>
        <div 
          className={styles.scrollProgressBar}
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator}>
        {React.Children.map(children, (_, index) => (
          <div
            key={index}
            className={`${styles.scrollDot} ${currentSection === index ? styles.active : ''}`}
            onClick={() => scrollToSection(index)}
            title={`Перейти к секции ${index + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className={styles.content}>
        {childrenWithRefs}
      </div>
    </div>
  );
};

export default ScrollContainer; 