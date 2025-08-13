import React, { useState } from 'react';
import styles from './ContactsPage.module.css';
import ScrollContainer from '../ScrollContainer/ScrollContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope, 
  faPhone, 
  faMapMarkerAlt, 
  faClock,
  faRocket,
  faPlay,
  faUser,
  faBuilding,
  faMessage,
  faCheckCircle,
  faHeadset
} from '@fortawesome/free-solid-svg-icons';
import { 
  faTelegram, 
  faWhatsapp, 
  faVk 
} from '@fortawesome/free-brands-svg-icons';

const ContactsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Имитация отправки формы
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: ''
      });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: faPhone,
      title: 'Телефон',
      description: 'Свяжитесь с нами по телефону',
      details: [
        '+7 (999) 123-45-67',
        '+7 (800) 555-35-35'
      ]
    },
    {
      icon: faEnvelope,
      title: 'Email',
      description: 'Напишите нам на почту',
      details: [
        'info@qodeq.ai',
        'support@qodeq.ai'
      ]
    },
    {
      icon: faMapMarkerAlt,
      title: 'Адрес',
      description: 'Наш офис в Москве',
      details: [
        'Москва, ул. Тверская, 1',
        'Бизнес-центр "Тверской"'
      ]
    },
    {
      icon: faClock,
      title: 'Время работы',
      description: 'Мы работаем для вас',
      details: [
        'Пн-Пт: 9:00 - 18:00',
        'Сб-Вс: 10:00 - 16:00'
      ]
    }
  ];

  const socialLinks = [
    { icon: faTelegram, href: '#', label: 'Telegram' },
    { icon: faWhatsapp, href: '#', label: 'WhatsApp' },
    { icon: faVk, href: '#', label: 'VKontakte' }
  ];

  const features = [
    {
      icon: faRocket,
      title: 'Быстрый старт',
      description: 'Внедрение за 2-4 недели'
    },
    {
      icon: faCheckCircle,
      title: 'Гарантия результата',
      description: '14 дней бесплатно'
    },
    {
      icon: faHeadset,
      title: 'Поддержка 24/7',
      description: 'Всегда на связи'
    }
  ];

  return (
    <ScrollContainer>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroBackground}>
          <div className={styles.gradientOrb}></div>
          <div className={styles.gradientOrb}></div>
          <div className={styles.gradientOrb}></div>
        </div>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              <FontAwesomeIcon icon={faRocket} />
              <span>Свяжитесь с нами</span>
            </div>
            <h1 className={styles.heroTitle}>
              Готовы увеличить прибыль?
            </h1>
            <p className={styles.heroSubtitle}>
              Получите бесплатную консультацию и демо наших AI-решений. Наша команда экспертов готова помочь вам выбрать оптимальное решение для вашего бизнеса.
            </p>
            <div className={styles.heroStats}>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>24ч</div>
                <div className={styles.statLabel}>Ответ</div>
                <div className={styles.statDescription}>Время реакции</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>95%</div>
                <div className={styles.statLabel}>Успех</div>
                <div className={styles.statDescription}>Проектов</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>14дн</div>
                <div className={styles.statLabel}>Пробный период</div>
                <div className={styles.statDescription}>Бесплатно</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className={styles.contactFormSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Оставьте заявку</h2>
            <p className={styles.sectionSubtitle}>
              Мы свяжемся с вами в течение 24 часов и ответим на все вопросы
            </p>
          </div>
          
          <div className={styles.contactGrid}>
            <div className={styles.contactForm}>
              {!isSubmitted ? (
                <form onSubmit={handleSubmit}>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="name">Имя *</label>
                      <div className={styles.inputWrapper}>
                        <FontAwesomeIcon icon={faUser} />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Ваше имя"
                        />
                      </div>
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="email">Email *</label>
                      <div className={styles.inputWrapper}>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="company">Компания</label>
                      <div className={styles.inputWrapper}>
                        <FontAwesomeIcon icon={faBuilding} />
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Название компании"
                        />
                      </div>
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="phone">Телефон</label>
                      <div className={styles.inputWrapper}>
                        <FontAwesomeIcon icon={faPhone} />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+7 (999) 123-45-67"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="message">Сообщение *</label>
                    <div className={styles.inputWrapper}>
                      <FontAwesomeIcon icon={faMessage} />
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows="4"
                        placeholder="Опишите ваши задачи или вопросы..."
                      />
                    </div>
                  </div>
                  
                  <button 
                    type="submit" 
                    className={styles.submitButton}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <FontAwesomeIcon icon={faPlay} />
                        <span>Отправляем...</span>
                      </>
                    ) : (
                      <>
                        <FontAwesomeIcon icon={faRocket} />
                        <span>Отправить заявку</span>
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className={styles.successMessage}>
                  <FontAwesomeIcon icon={faCheckCircle} />
                  <h3>Заявка отправлена!</h3>
                  <p>Мы свяжемся с вами в течение 24 часов. Спасибо за обращение!</p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className={styles.newRequestButton}
                  >
                    Отправить еще одну заявку
                  </button>
                </div>
              )}
            </div>
            
            <div className={styles.contactInfo}>
              <h3>Контактная информация</h3>
              <div className={styles.contactList}>
                {contactInfo.map((contact, index) => (
                  <div key={index} className={styles.contactItem}>
                    <div className={styles.contactIcon}>
                      <FontAwesomeIcon icon={contact.icon} />
                    </div>
                    <div className={styles.contactDetails}>
                      <h4>{contact.title}</h4>
                      <p>{contact.description}</p>
                      {contact.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className={styles.contactDetail}>
                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className={styles.socialSection}>
                <h4>Мы в соцсетях</h4>
                <div className={styles.socialLinks}>
                  {socialLinks.map((social, index) => (
                    <a 
                      key={index} 
                      href={social.href} 
                      className={styles.socialLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={social.icon} />
                      <span>{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Почему выбирают нас</h2>
            <p className={styles.sectionSubtitle}>
              Мы гарантируем качество и результат каждого проекта
            </p>
          </div>
          
          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div key={index} className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <FontAwesomeIcon icon={feature.icon} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaBackground}>
          <div className={styles.gradientOrb}></div>
          <div className={styles.gradientOrb}></div>
        </div>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <div className={styles.ctaHeader}>
              <h2 className={styles.ctaTitle}>Готовы начать?</h2>
              <p className={styles.ctaSubtitle}>
                Свяжитесь с нами прямо сейчас и получите персональное предложение для вашего бизнеса
              </p>
            </div>
            <div className={styles.ctaFeatures}>
              <div className={styles.ctaFeature}>
                <FontAwesomeIcon icon={faCheckCircle} />
                <span>Бесплатная консультация</span>
              </div>
              <div className={styles.ctaFeature}>
                <FontAwesomeIcon icon={faCheckCircle} />
                <span>Демо-версия</span>
              </div>
              <div className={styles.ctaFeature}>
                <FontAwesomeIcon icon={faCheckCircle} />
                <span>Техническая поддержка</span>
              </div>
            </div>
            <div className={styles.ctaButtons}>
              <button className={styles.primaryButton}>
                <FontAwesomeIcon icon={faRocket} />
                <span>Получить консультацию</span>
              </button>
              <button className={styles.secondaryButton}>
                <FontAwesomeIcon icon={faPlay} />
                <span>Смотреть демо</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </ScrollContainer>
  );
};

export default ContactsPage; 