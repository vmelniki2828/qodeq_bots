import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useScrollContext } from '../../contexts/ScrollContext';
import styles from './Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faAngleDown, 
  faRobot, 
  faComments, 
  faPhone, 
  faHeadset, 
  faMagic, 
  faEnvelope,
  faHome,

  faBriefcase,
  faFileInvoiceDollar,
  faPhoneAlt,
  faBars,
  faTimes,
  faRocket,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { 
    scrollToHome, 
    scrollToCases, 
    scrollToContact,
    currentSection 
  } = useScrollContext();

  const toggleProductMenu = () => {
    setIsProductMenuOpen(!isProductMenuOpen);
  };

  const openProductMenu = () => {
    setIsProductMenuOpen(true);
  };

  const closeProductMenu = () => {
    setIsProductMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavigation = (action) => {
    if (location.pathname === '/') {
      action();
    }
  };

  const handleLogoClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      scrollToHome();
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Link to="/" className={styles.logo} onClick={handleLogoClick}>
          <div className={styles.logoCircle}>
            <FontAwesomeIcon icon={faRobot} />
          </div>
          <span>QodeQ</span>
        </Link>
        
        <nav className={styles.nav}>
          <div 
            className={styles.dropdown}
            onMouseEnter={openProductMenu}
            onMouseLeave={closeProductMenu}
          >
            <button 
              className={`${styles.dropdownButton} ${isProductMenuOpen ? styles.active : ''}`}
              onClick={toggleProductMenu}
            >
              <span>Продукты</span>
              <FontAwesomeIcon icon={faAngleDown} className={styles.dropdownArrow} />
            </button>
            
            <div 
              className={`${styles.dropdownContent} ${isProductMenuOpen ? styles.show : ''}`}
            >
              <div className={styles.dropdownGrid}>
                <Link to="/chat-bot" className={styles.dropdownItem}>
                  <div className={styles.dropdownItemIcon}>
                    <FontAwesomeIcon icon={faComments} />
                  </div>
                  <div className={styles.dropdownItemContent}>
                    <span className={styles.dropdownItemTitle}>Чат-бот</span>
                    <span className={styles.dropdownItemDescription}>Автоматические ответы 24/7</span>
                  </div>
                  <div className={styles.dropdownItemArrow}>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </div>
                </Link>
                
                <Link to="/call-bot" className={styles.dropdownItem}>
                  <div className={styles.dropdownItemIcon}>
                    <FontAwesomeIcon icon={faPhone} />
                  </div>
                  <div className={styles.dropdownItemContent}>
                    <span className={styles.dropdownItemTitle}>Звонилка</span>
                    <span className={styles.dropdownItemDescription}>Автоматические звонки</span>
                  </div>
                  <div className={styles.dropdownItemArrow}>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </div>
                </Link>
                
                <Link to="/call-checker" className={styles.dropdownItem}>
                  <div className={styles.dropdownItemIcon}>
                    <FontAwesomeIcon icon={faHeadset} />
                  </div>
                  <div className={styles.dropdownItemContent}>
                    <span className={styles.dropdownItemTitle}>Проверка звонков</span>
                    <span className={styles.dropdownItemDescription}>Контроль качества</span>
                  </div>
                  <div className={styles.dropdownItemArrow}>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </div>
                </Link>
                
                <Link to="/chat-checker" className={styles.dropdownItem}>
                  <div className={styles.dropdownItemIcon}>
                    <FontAwesomeIcon icon={faMagic} />
                  </div>
                  <div className={styles.dropdownItemContent}>
                    <span className={styles.dropdownItemTitle}>Проверка чатов</span>
                    <span className={styles.dropdownItemDescription}>Анализ переписки</span>
                  </div>
                  <div className={styles.dropdownItemArrow}>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </div>
                </Link>
                
                <Link to="/email-bot" className={styles.dropdownItem}>
                  <div className={styles.dropdownItemIcon}>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <div className={styles.dropdownItemContent}>
                    <span className={styles.dropdownItemTitle}>Автоответчик</span>
                    <span className={styles.dropdownItemDescription}>Обработка писем</span>
                  </div>
                  <div className={styles.dropdownItemArrow}>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          
          <button 
            className={`${styles.navLink} ${currentSection === 3 ? styles.active : ''}`}
            onClick={() => handleNavigation(scrollToCases)}
          >
            Кейсы
          </button>
          
          <Link to="/prices" className={styles.navLink}>
            Цены
          </Link>
          
          <button 
            className={`${styles.navLink} ${currentSection === 4 ? styles.active : ''}`}
            onClick={() => handleNavigation(scrollToContact)}
          >
            Контакты
          </button>
        </nav>
        
        <button className={styles.connectButton}>
          <FontAwesomeIcon icon={faRocket} />
          Связаться
        </button>
        
        <button className={styles.mobileMenuButton} onClick={toggleMobileMenu}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      
      {/* Мобильное меню */}
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.active : ''}`}>
        <div className={styles.mobileMenuContent}>
          <div className={styles.mobileMenuHeader}>
            <Link to="/" className={styles.logo} onClick={closeMobileMenu}>
              <div className={styles.logoCircle}>
                <FontAwesomeIcon icon={faRobot} />
              </div>
              <span>QodeQ</span>
            </Link>
            <button className={styles.mobileMenuClose} onClick={closeMobileMenu}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          
          <nav className={styles.mobileNav}>
            <button 
              className={`${styles.mobileNavLink} ${currentSection === 0 ? styles.active : ''}`}
              onClick={() => {
                handleNavigation(scrollToHome);
                closeMobileMenu();
              }}
            >
              <FontAwesomeIcon icon={faHome} />
              Главная
            </button>
            
            <div className={styles.dropdown}>
              <button 
                className={`${styles.dropdownButton} ${isProductMenuOpen ? styles.active : ''}`}
                onClick={toggleProductMenu}
              >
                <FontAwesomeIcon icon={faRobot} />
                Продукты
                <FontAwesomeIcon icon={faAngleDown} />
              </button>
              
              <div className={`${styles.dropdownContent} ${isProductMenuOpen ? styles.show : ''}`}>
                <Link to="/chat-bot" className={styles.dropdownItem} onClick={closeMobileMenu}>
                  <div className={styles.dropdownItemIcon}>
                    <FontAwesomeIcon icon={faComments} />
                  </div>
                  <span>Чат-бот</span>
                </Link>
                <Link to="/call-bot" className={styles.dropdownItem} onClick={closeMobileMenu}>
                  <div className={styles.dropdownItemIcon}>
                    <FontAwesomeIcon icon={faPhone} />
                  </div>
                  <span>Звонилка</span>
                </Link>
                <Link to="/call-checker" className={styles.dropdownItem} onClick={closeMobileMenu}>
                  <div className={styles.dropdownItemIcon}>
                    <FontAwesomeIcon icon={faHeadset} />
                  </div>
                  <span>Проверка звонков</span>
                </Link>
                <Link to="/chat-checker" className={styles.dropdownItem} onClick={closeMobileMenu}>
                  <div className={styles.dropdownItemIcon}>
                    <FontAwesomeIcon icon={faMagic} />
                  </div>
                  <span>Проверка чатов</span>
                </Link>
                <Link to="/email-bot" className={styles.dropdownItem} onClick={closeMobileMenu}>
                  <div className={styles.dropdownItemIcon}>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <span>Автоответчик</span>
                </Link>
              </div>
            </div>
            
            <button 
              className={`${styles.mobileNavLink} ${currentSection === 3 ? styles.active : ''}`}
              onClick={() => {
                handleNavigation(scrollToCases);
                closeMobileMenu();
              }}
            >
              <FontAwesomeIcon icon={faBriefcase} />
              Кейсы
            </button>
            
            <Link to="/prices" className={styles.mobileNavLink} onClick={closeMobileMenu}>
              <FontAwesomeIcon icon={faFileInvoiceDollar} />
              Цены
            </Link>
            
            <button 
              className={`${styles.mobileNavLink} ${currentSection === 4 ? styles.active : ''}`}
              onClick={() => {
                handleNavigation(scrollToContact);
                closeMobileMenu();
              }}
            >
              <FontAwesomeIcon icon={faPhoneAlt} />
              Контакты
            </button>
          </nav>
          
          <button className={styles.mobileConnectButton}>
            <FontAwesomeIcon icon={faRocket} />
            Связаться
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 