import React from 'react';
import './HeroSection.css';
import heroImage from '../assets/images/hero.png';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Увеличьте доходы компании
              <br />
              минимум на <span className="accent">40%</span>
              <br />
              <span className="accent">с ИИ ботами</span>
            </h1>
            
            <p className="hero-description">
              Автоматизируйте работу с клиентами с помощью умных ИИ-ботов. 
              Обрабатывайте заявки 24/7, увеличивайте конверсию и экономьте 
              на зарплате операторов до 300 000 ₽ в месяц.
            </p>

            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="stat-text">
                  <span className="stat-number">24/7</span>
                  <span className="stat-label">работа</span>
                </div>
              </div>

              <div className="stat-item">
                <div className="stat-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                  </svg>
                </div>
                <div className="stat-text">
                  <span className="stat-number">+40%</span>
                  <span className="stat-label">доходов</span>
                </div>
              </div>

              <div className="stat-item">
                <div className="stat-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div className="stat-text">
                  <span className="stat-number">98%</span>
                  <span className="stat-label">точность</span>
                </div>
              </div>
            </div>

            <div className="hero-cta">
              <button className="cta-primary">
                <span>Получить консультацию</span>
                <svg viewBox="0 0 24 24" className="cta-icon">
                  <path d="M13 7l5 5-5 5m-6-5h11"/>
                </svg>
              </button>
              <button className="cta-secondary">
                <span>Посмотреть демо</span>
                <svg viewBox="0 0 24 24" className="cta-icon">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </button>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-container">
              <img 
                src={heroImage}
                alt="Игровые элементы - рулетка, автомат, карты"
                className="hero-image"
                onLoad={() => console.log('Изображение успешно загружено')}
                onError={(e) => {
                  console.log('Ошибка загрузки изображения:', e.target.src);
                  // Показываем заглушку
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = `
                    <div style="
                      width: 100%; 
                      height: 100%; 
                      min-height: 500px;
                      background: linear-gradient(135deg, #2a2a2a, #3a3a3a);
                      border: 2px dashed rgba(255,255,255,0.3);
                      border-radius: 12px;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      color: #888;
                      font-size: 1.4rem;
                      text-align: center;
                    ">
                      🖼️<br>Изображение<br>загружается...
                    </div>
                  `;
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 