import React from 'react';
import './AdvantagesSection.css';

const AdvantagesSection = () => {
  return (
    <section className="advantages-section">
      <div className="advantages-container">
        <div className="advantages-content">
          <div className="advantages-header">
            <h2 className="advantages-title">
              Почему выбирают
              <br />
              <span className="accent">наших ИИ-ботов</span>
            </h2>
            <p className="advantages-subtitle">
              Передовые технологии искусственного интеллекта 
              для максимальной эффективности вашего бизнеса
            </p>
          </div>

          <div className="advantages-grid">
            <div className="advantage-card">
              <div className="advantage-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3>Высокая точность</h3>
              <p>98% точность распознавания намерений клиентов благодаря машинному обучению</p>
              <div className="advantage-stat">98%</div>
            </div>

            <div className="advantage-card">
              <div className="advantage-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3>Мгновенные ответы</h3>
              <p>Время отклика менее 2 секунд для большинства запросов клиентов</p>
              <div className="advantage-stat">&lt;2с</div>
            </div>

            <div className="advantage-card">
              <div className="advantage-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                </svg>
              </div>
              <h3>Рост конверсии</h3>
              <p>Увеличение продаж на 40% за счет персонализированного подхода к каждому клиенту</p>
              <div className="advantage-stat">+40%</div>
            </div>

            <div className="advantage-card">
              <div className="advantage-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
              </div>
              <h3>Обучение на данных</h3>
              <p>Постоянное улучшение качества ответов на основе анализа диалогов</p>
              <div className="advantage-stat">∞</div>
            </div>

            <div className="advantage-card">
              <div className="advantage-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <h3>Локализация</h3>
              <p>Поддержка множества языков и адаптация под местные особенности бизнеса</p>
              <div className="advantage-stat">15+</div>
            </div>

            <div className="advantage-card">
              <div className="advantage-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
                </svg>
              </div>
              <h3>Безопасность данных</h3>
              <p>Шифрование всех данных и соответствие стандартам GDPR и 152-ФЗ</p>
              <div className="advantage-stat">SSL</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection; 