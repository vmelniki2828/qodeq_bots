import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
  faStar,
  faCode,
  faBriefcase,
  faFileInvoiceDollar,
  faPhoneAlt,
  faBars
} from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleProductMenu = () => {
    setIsProductMenuOpen(!isProductMenuOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <div className={styles.logoCircle}>
            <FontAwesomeIcon icon={faRobot} />
          </div>
          <span className={styles.logoText}>QodeQ</span>
        </Link>
        
        <nav className={styles.navigation}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <button 
                className={`${styles.navLink} ${styles.productsBtn} ${isProductMenuOpen ? styles.active : ''}`}
                onClick={toggleProductMenu}
              >
                ПРОДУКТЫ <FontAwesomeIcon icon={faAngleDown} className={`${styles.angleIcon} ${isProductMenuOpen ? styles.rotate : ''}`} />
              </button>
              
              <div className={`${styles.productsDropdown} ${isProductMenuOpen ? styles.show : ''}`}>
                <div className={styles.dropdownContent}>
                  <div className={styles.dropdownHeader}>
                    <h3>Наши продукты</h3>
                    <p>Полный комплекс AI-решений для вашего бизнеса</p>
                  </div>
                  <div className={styles.dropdownGrid}>
                    <Link to="/chat-bot" className={styles.dropdownItem}>
                      <span className={styles.itemIcon}>
                        <FontAwesomeIcon icon={faComments} />
                      </span>
                      <div className={styles.itemTextContent}>
                        <span className={styles.itemTitle}>ЧАТ БОТ</span>
                        <span className={styles.itemDescription}>Интеллектуальный чат-бот для сайта</span>
                      </div>
                    </Link>
                    <Link to="/call-bot" className={styles.dropdownItem}>
                      <span className={styles.itemIcon}>
                        <FontAwesomeIcon icon={faPhone} />
                      </span>
                      <div className={styles.itemTextContent}>
                        <span className={styles.itemTitle}>ЗВОНИЛКА</span>
                        <span className={styles.itemDescription}>Автоматические звонки клиентам</span>
                      </div>
                    </Link>
                    <Link to="/call-checker" className={styles.dropdownItem}>
                      <span className={styles.itemIcon}>
                        <FontAwesomeIcon icon={faHeadset} />
                      </span>
                      <div className={styles.itemTextContent}>
                        <span className={styles.itemTitle}>ПРОВЕРЯЛКА ЗВОНКОВ</span>
                        <span className={styles.itemDescription}>Анализ качества обслуживания</span>
                      </div>
                    </Link>
                    <Link to="/chat-checker" className={styles.dropdownItem}>
                      <span className={styles.itemIcon}>
                        <FontAwesomeIcon icon={faMagic} />
                      </span>
                      <div className={styles.itemTextContent}>
                        <span className={styles.itemTitle}>ПРОВЕРЯЛКА ЧАТОВ</span>
                        <span className={styles.itemDescription}>Контроль качества переписки</span>
                      </div>
                    </Link>
                    <Link to="/email-bot" className={styles.dropdownItem}>
                      <span className={styles.itemIcon}>
                        <FontAwesomeIcon icon={faEnvelope} />
                      </span>
                      <div className={styles.itemTextContent}>
                        <span className={styles.itemTitle}>АВТООТВЕТЧИК НА ПОЧТУ</span>
                        <span className={styles.itemDescription}>Автоматические ответы на письма</span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </li>
            <li className={styles.navItem}>
              <Link to="/cases" className={styles.navLink}>
                КЕЙСЫ
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/prices" className={styles.navLink}>
                ЦЕНЫ
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/contacts" className={styles.navLink}>
                КОНТАКТЫ
              </Link>
            </li>
          </ul>
          
          <button className={styles.connectButton}>
            СВЯЗАТЬСЯ
          </button>
          
          <button className={styles.mobileMenuButton} onClick={toggleMobileMenu}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </nav>
      </div>
      
      {/* Мобильное меню */}
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}>
        <ul className={styles.mobileMenuList}>
          <li className={styles.mobileMenuItem}>
            <Link to="/" className={styles.mobileMenuLink}>
              <FontAwesomeIcon icon={faHome} className={styles.mobileMenuIcon} />
              <span>Главная</span>
            </Link>
          </li>
          <li className={styles.mobileMenuItem}>
            <div 
              className={styles.mobileMenuLink}
              onClick={toggleProductMenu}
            >
              <FontAwesomeIcon icon={faRobot} className={styles.mobileMenuIcon} />
              <span>Продукты</span>
              <FontAwesomeIcon icon={faAngleDown} className={`${styles.mobileMenuArrow} ${isProductMenuOpen ? styles.rotate : ''}`} />
            </div>
            <div className={`${styles.mobileSubmenu} ${isProductMenuOpen ? styles.open : ''}`}>
              <Link to="/chat-bot" className={styles.mobileSubmenuLink}>ЧАТ БОТ</Link>
              <Link to="/call-bot" className={styles.mobileSubmenuLink}>ЗВОНИЛКА</Link>
              <Link to="/call-checker" className={styles.mobileSubmenuLink}>ПРОВЕРЯЛКА ЗВОНКОВ</Link>
              <Link to="/chat-checker" className={styles.mobileSubmenuLink}>ПРОВЕРЯЛКА ЧАТОВ</Link>
              <Link to="/email-bot" className={styles.mobileSubmenuLink}>АВТООТВЕТЧИК НА ПОЧТУ</Link>
            </div>
          </li>
          <li className={styles.mobileMenuItem}>
            <Link to="/technologies" className={styles.mobileMenuLink}>
              <FontAwesomeIcon icon={faCode} className={styles.mobileMenuIcon} />
              <span>Технологии</span>
            </Link>
          </li>
          <li className={styles.mobileMenuItem}>
            <Link to="/reviews" className={styles.mobileMenuLink}>
              <FontAwesomeIcon icon={faStar} className={styles.mobileMenuIcon} />
              <span>Отзывы</span>
            </Link>
          </li>
          <li className={styles.mobileMenuItem}>
            <Link to="/cases" className={styles.mobileMenuLink}>
              <FontAwesomeIcon icon={faBriefcase} className={styles.mobileMenuIcon} />
              <span>Кейсы</span>
            </Link>
          </li>
          <li className={styles.mobileMenuItem}>
            <Link to="/prices" className={styles.mobileMenuLink}>
              <FontAwesomeIcon icon={faFileInvoiceDollar} className={styles.mobileMenuIcon} />
              <span>Цены</span>
            </Link>
          </li>
          <li className={styles.mobileMenuItem}>
            <Link to="/contacts" className={styles.mobileMenuLink}>
              <FontAwesomeIcon icon={faPhoneAlt} className={styles.mobileMenuIcon} />
              <span>Контакты</span>
            </Link>
          </li>
        </ul>
        <button className={styles.mobileConnectButton}>СВЯЗАТЬСЯ</button>
      </div>
      
      {/* Оверлей для мобильного меню */}
      {isMobileMenuOpen && <div className={styles.mobileMenuOverlay} onClick={toggleMobileMenu}></div>}
      
      {/* Оверлей для десктопного выпадающего меню */}
      {isProductMenuOpen && <div className={styles.dropdownOverlay} onClick={toggleProductMenu}></div>}
    </header>
  );
};

export default Header; 