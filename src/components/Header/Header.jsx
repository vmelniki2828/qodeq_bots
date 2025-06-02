import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <span className={styles.logoIcon}>🤖</span>
          <span>QodeQ</span>
          <span className={styles.logoTagline}>AI</span>
        </div>
        <nav className={styles.navigation}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink
                }
              >
                Главная
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink 
                to="/reviews" 
                className={({ isActive }) => 
                  isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink
                }
              >
                Отзывы
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink 
                to="/technologies" 
                className={({ isActive }) => 
                  isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink
                }
              >
                Технологии
              </NavLink>
            </li>
          </ul>
          <div className={styles.headerActions}>
            <button className={styles.loginButton}>Демо</button>
            <button className={styles.registerButton}>Связаться</button>
          </div>
        </nav>
      </div>
    </header>
  );
}; 