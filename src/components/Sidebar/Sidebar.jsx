import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useScrollContext } from '../../contexts/ScrollContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome, 
  faStar, 
  faCode, 
  faBriefcase, 
  faFileInvoiceDollar, 
  faPhoneAlt, 
  faBars,
  faTimes
} from '@fortawesome/free-solid-svg-icons';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { scrollToHome } = useScrollContext();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleHomeClick = (e) => {
    console.log('Клик по кнопке Главная в сайдбаре');
    console.log('Текущий путь:', location.pathname);
    console.log('scrollToHome функция:', scrollToHome);
    
    if (location.pathname === '/') {
      console.log('Мы на главной, выполняем scrollToHome');
      e.preventDefault();
      scrollToHome();
    } else {
      console.log('Мы не на главной, Link должен работать');
    }
    setIsOpen(false);
  };

  return (
    <>
      <button 
        className={styles.toggleButton} 
        onClick={toggleSidebar}
        aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
      >
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
      </button>

      <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <div className={styles.logoContainer}>
          <div className={styles.logo}>
            <span className={styles.logoText}>Q</span>
          </div>
          <div className={styles.companyName}>QodeQ</div>
        </div>

        <nav className={styles.navigation}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link 
                to="/" 
                className={`${styles.navLink} ${location.pathname === '/' ? styles.active : ''}`}
                // onClick={handleHomeClick}
              >
                <div className={styles.iconContainer}>
                  <FontAwesomeIcon icon={faHome} className={styles.icon} />
                </div>
                <span className={styles.linkText}>Главная</span>
                {location.pathname === '/' && <span className={styles.activeIndicator}></span>}
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link 
                to="/technologies" 
                className={`${styles.navLink} ${location.pathname === '/technologies' ? styles.active : ''}`}
                onClick={() => setIsOpen(false)}
              >
                <div className={styles.iconContainer}>
                  <FontAwesomeIcon icon={faCode} className={styles.icon} />
                </div>
                <span className={styles.linkText}>Технологии</span>
                {location.pathname === '/technologies' && <span className={styles.activeIndicator}></span>}
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link 
                to="/reviews" 
                className={`${styles.navLink} ${location.pathname === '/reviews' ? styles.active : ''}`}
                onClick={() => setIsOpen(false)}
              >
                <div className={styles.iconContainer}>
                  <FontAwesomeIcon icon={faStar} className={styles.icon} />
                </div>
                <span className={styles.linkText}>Отзывы</span>
                {location.pathname === '/reviews' && <span className={styles.activeIndicator}></span>}
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link 
                to="/cases" 
                className={`${styles.navLink} ${location.pathname === '/cases' ? styles.active : ''}`}
                onClick={() => setIsOpen(false)}
              >
                <div className={styles.iconContainer}>
                  <FontAwesomeIcon icon={faBriefcase} className={styles.icon} />
                </div>
                <span className={styles.linkText}>Кейсы</span>
                {location.pathname === '/cases' && <span className={styles.activeIndicator}></span>}
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link 
                to="/prices" 
                className={`${styles.navLink} ${location.pathname === '/prices' ? styles.active : ''}`}
                onClick={() => setIsOpen(false)}
              >
                <div className={styles.iconContainer}>
                  <FontAwesomeIcon icon={faFileInvoiceDollar} className={styles.icon} />
                </div>
                <span className={styles.linkText}>Цены</span>
                {location.pathname === '/prices' && <span className={styles.activeIndicator}></span>}
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link 
                to="/contacts" 
                className={`${styles.navLink} ${location.pathname === '/contacts' ? styles.active : ''}`}
                onClick={() => setIsOpen(false)}
              >
                <div className={styles.iconContainer}>
                  <FontAwesomeIcon icon={faPhoneAlt} className={styles.icon} />
                </div>
                <span className={styles.linkText}>Контакты</span>
                {location.pathname === '/contacts' && <span className={styles.activeIndicator}></span>}
              </Link>
            </li>
          </ul>
        </nav>

        <div className={styles.sidebarFooter}>
          <div className={styles.statusIndicator}>
            <span className={styles.statusDot}></span>
            <span className={styles.statusText}>Online</span>
          </div>
        </div>
      </div>
      
      {isOpen && <div className={styles.overlay} onClick={toggleSidebar}></div>}
    </>
  );
};

export default Sidebar; 