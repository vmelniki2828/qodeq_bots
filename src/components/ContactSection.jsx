import React, { useState } from 'react';
import './ContactSection.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Здесь будет логика отправки формы
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-content">
          
          <div className="contact-left">
            <div className="contact-header">
              <h2 className="contact-title">
                Готовы увеличить
                <br />
                <span className="accent">доходы на 40%?</span>
              </h2>
              <p className="contact-subtitle">
                Получите персональную консультацию и демо нашего ИИ-бота уже сегодня
              </p>
            </div>

            <div className="contact-benefits">
              <div className="benefit-item">
                <div className="benefit-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div className="benefit-text">
                  <h4>Бесплатная консультация</h4>
                  <p>30-минутная персональная сессия с экспертом</p>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <div className="benefit-text">
                  <h4>Быстрый запуск</h4>
                  <p>Интеграция за 24 часа без технических сложностей</p>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div className="benefit-text">
                  <h4>Гарантия результата</h4>
                  <p>Возврат средств если не увеличим продажи на 20%</p>
                </div>
              </div>
            </div>

            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <div>
                  <span>+7 (495) 123-45-67</span>
                  <p>Звонок бесплатный</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <span>hello@qodeq.ru</span>
                  <p>Ответим в течение часа</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-right">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Ваше имя *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Введите ваше имя"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Телефон *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="company">Компания</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Название вашей компании"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Расскажите о ваших задачах</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Опишите ваши цели и задачи для ИИ-бота..."
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                <span>Получить консультацию</span>
                <svg viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </button>

              <p className="form-disclaimer">
                Нажимая кнопку, вы соглашаетесь с 
                <a href="/privacy"> политикой конфиденциальности</a>
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection; 