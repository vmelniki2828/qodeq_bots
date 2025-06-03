import React, { useState, useRef } from 'react';
import './Header.css';

const Header = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleMouseEnter = () => {
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    setIsServicesOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="placeholder">
          <svg
            className="logo-svg"
            width="42"
            height="42"
            viewBox="0 0 42 42"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 0C9.402 0 0 9.402 0 21C0 32.598 9.402 42 21 42C32.598 42 42 32.598 42 21C42 9.402 32.598 0 21 0ZM21 6C29.279 6 36 12.721 36 21C36 29.279 29.279 36 21 36C12.721 36 6 29.279 6 21C6 12.721 12.721 6 21 6Z"
              fill="#adb5bd"
            />
            <path d="M23 15L33 21L23 27V15Z" fill="#adb5bd" />
            <path d="M9 15L19 21L9 27V15Z" fill="#e9ecef" />
          </svg>
        </div>

        <nav className="nav-menu">
          <ul>
            <li
              className="services-item"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              ref={dropdownRef}
            >
              <a href="/products">Продукты</a>
              {isServicesOpen && (
                <div className="services-dropdown">
                  <div className="services-bridge"></div>
                  <a href="/products/chat-bot" className="services-link">
                    <span className="icon">
                      <svg viewBox="0 0 24 24">
                        <path d="M2 21l1.65-4.95A8 8 0 1 1 12 20a7.93 7.93 0 0 1-3.95-1.05L2 21z" />
                      </svg>
                    </span>
                    Чат бот
                  </a>
                  <a href="/products/caller" className="services-link">
                    <span className="icon">
                      <svg viewBox="0 0 24 24">
                        <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1-.24 11.36 11.36 0 0 0 3.58.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.58 1 1 0 0 1-.24 1z" />
                      </svg>
                    </span>
                    Звонилка
                  </a>
                  <a href="/products/call-checker" className="services-link">
                    <span className="icon">
                      <svg viewBox="0 0 24 24">
                        <path d="M19 7v4a1 1 0 0 1-1 1h-4M17 17l2 2 4-4M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2" />
                      </svg>
                    </span>
                    Проверялка звонков
                  </a>
                  <a href="/products/chat-checker" className="services-link">
                    <span className="icon">
                      <svg viewBox="0 0 24 24">
                        <path d="M2 21l1.65-4.95A8 8 0 1 1 12 20M17 17l2 2 4-4" />
                      </svg>
                    </span>
                    Проверялка чатов
                  </a>
                  <a
                    href="/products/mail-autoresponder"
                    className="services-link"
                  >
                    <span className="icon">
                      <svg viewBox="0 0 24 24">
                        <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
                      </svg>
                    </span>
                    Автоответчик на почту
                  </a>
                </div>
              )}
            </li>
            <li>
              <a href="/cases">Кейсы</a>
            </li>
            <li>
              <a href="/pricing">Цены</a>
            </li>
            <li>
              <a href="/contacts">Контакты</a>
            </li>
          </ul>
        </nav>

        <div className="contact-button">
          <a href="/contact">Связаться</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
