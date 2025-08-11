import React from 'react';
import styles from './ContactsPage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope, 
  faPhone, 
  faMapMarkerAlt, 
  faClock,
  faRocket,
  faPlay,
  faComments,
} from '@fortawesome/free-solid-svg-icons';
import { 
  faTelegram, 
  faWhatsapp, 
  faVk 
} from '@fortawesome/free-brands-svg-icons';

const ContactsPage = () => {
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

  return (
    <div className={styles.contactsPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroBackground}>
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
              Получите бесплатную консультацию и демо наших AI-решений
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className={styles.contactFormSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Оставьте заявку</h2>
            <p className={styles.sectionSubtitle}>
              Мы свяжемся с вами в течение 24 часов
            </p>
          </div>
          
          <div className={styles.contactGrid}>
            <div className={styles.contactForm}>
              <form>
                <div className={styles.formRow}>
                  <input 
                    type="text" 
                    placeholder="Имя" 
                    className={styles.formInput}
                    required
                  />
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className={styles.formInput}
                    required
                  />
                </div>
                <div className={styles.formRow}>
                  <input 
                    type="tel" 
                    placeholder="Телефон" 
                    className={styles.formInput}
                  />
                  <input 
                    type="text" 
                    placeholder="Компания" 
                    className={styles.formInput}
                  />
                </div>
                <textarea 
                  placeholder="Опишите ваши задачи" 
                  className={styles.formTextarea}
                  rows="4"
                  required
                ></textarea>
                <button type="submit" className={styles.submitButton}>
                  <FontAwesomeIcon icon={faRocket} />
                  Отправить заявку
                </button>
              </form>
            </div>
            
            <div className={styles.contactInfo}>
              {contactInfo.map((contact, index) => (
                <div key={index} className={styles.contactCard}>
                  <div className={styles.contactHeader}>
                    <div className={styles.contactIcon}>
                      <FontAwesomeIcon icon={contact.icon} />
                    </div>
                    <div>
                      <h3 className={styles.contactTitle}>{contact.title}</h3>
                      <p className={styles.contactDescription}>{contact.description}</p>
                    </div>
                  </div>
                  <div className={styles.contactDetails}>
                    {contact.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className={styles.contactDetail}>
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              
              <div className={styles.contactCard}>
                <div className={styles.contactHeader}>
                  <div className={styles.contactIcon}>
                    <FontAwesomeIcon icon={faComments} />
                  </div>
                  <div>
                    <h3 className={styles.contactTitle}>Социальные сети</h3>
                    <p className={styles.contactDescription}>Следите за нашими новостями</p>
                  </div>
                </div>
                <div className={styles.socialLinks}>
                  {socialLinks.map((social, index) => (
                    <a 
                      key={index} 
                      href={social.href} 
                      className={styles.socialLink}
                      aria-label={social.label}
                    >
                      <FontAwesomeIcon icon={social.icon} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className={styles.mapSection}>
        <div className={styles.container}>
          <div className={styles.mapContainer}>
            <div className={styles.mapPlaceholder}>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <span>Карта будет загружена</span>
            </div>
            <div className={styles.mapOverlay}>
              <div className={styles.mapInfo}>
                <div className={styles.mapIcon}>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </div>
                <div className={styles.mapDetails}>
                  <h4>Наш офис</h4>
                  <p>Москва, ул. Тверская, 1<br />Бизнес-центр "Тверской"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2>Нужна помощь в выборе?</h2>
            <p>Наши эксперты помогут подобрать оптимальное решение для вашего бизнеса</p>
            <div className={styles.ctaButtons}>
              <button className={styles.primaryButton}>
                <FontAwesomeIcon icon={faRocket} />
                Получить консультацию
              </button>
              <button className={styles.secondaryButton}>
                <FontAwesomeIcon icon={faPlay} />
                Смотреть демо
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactsPage; 