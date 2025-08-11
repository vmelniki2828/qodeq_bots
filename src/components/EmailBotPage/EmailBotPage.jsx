import React from 'react';
import styles from './EmailBotPage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faRobot, 
  faCheckCircle, 
  faClock,
  faChartLine,
  faUsers,
  faCog,
  faReply,
  faFilter,
  faDatabase
} from '@fortawesome/free-solid-svg-icons';

const EmailBotPage = () => {
  return (
    <div className={styles.emailBotPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Автоответчик на почту
            </h1>
            <p className={styles.heroSubtitle}>
              Автоматизируйте обработку email-сообщений и повысьте эффективность коммуникации с клиентами
            </p>
            <div className={styles.heroFeatures}>
              <div className={styles.feature}>
                <FontAwesomeIcon icon={faReply} />
                <span>Автоматические ответы</span>
              </div>
              <div className={styles.feature}>
                <FontAwesomeIcon icon={faFilter} />
                <span>Умная классификация</span>
              </div>
              <div className={styles.feature}>
                <FontAwesomeIcon icon={faDatabase} />
                <span>Интеграция с CRM</span>
              </div>
            </div>
            <button className={styles.ctaButton}>
              Попробовать демо
            </button>
          </div>
          <div className={styles.heroImage}>
            <div className={styles.emailInterface}>
              <div className={styles.emailHeader}>
                <div className={styles.emailInfo}>
                  <span className={styles.emailFrom}>От: client@example.com</span>
                  <span className={styles.emailSubject}>Вопрос о доставке заказа #12345</span>
                </div>
                <div className={styles.emailStatus}>
                  <FontAwesomeIcon icon={faCheckCircle} />
                  <span>Обработано</span>
                </div>
              </div>
              <div className={styles.emailContent}>
                <p>Здравствуйте! У меня есть вопрос по поводу доставки заказа #12345...</p>
              </div>
              <div className={styles.autoReply}>
                <div className={styles.replyHeader}>
                  <FontAwesomeIcon icon={faRobot} />
                  <span>Автоматический ответ</span>
                </div>
                <p>Спасибо за ваш запрос! Мы проверим статус вашего заказа и свяжемся с вами в течение 2 часов.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className={styles.capabilitiesSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Возможности</h2>
          <div className={styles.capabilitiesGrid}>
            <div className={styles.capabilityCard}>
              <div className={styles.capabilityIcon}>
                <FontAwesomeIcon icon={faReply} />
              </div>
              <h3>Автоматические ответы</h3>
              <p>Мгновенные ответы на типовые вопросы клиентов с персонализированным подходом</p>
            </div>
            <div className={styles.capabilityCard}>
              <div className={styles.capabilityIcon}>
                <FontAwesomeIcon icon={faFilter} />
              </div>
              <h3>Классификация писем</h3>
              <p>Автоматическое определение типа запроса и направление к нужному специалисту</p>
            </div>
            <div className={styles.capabilityCard}>
              <div className={styles.capabilityIcon}>
                <FontAwesomeIcon icon={faDatabase} />
              </div>
              <h3>Интеграция с CRM</h3>
              <p>Синхронизация данных о клиентах и истории взаимодействий</p>
            </div>
            <div className={styles.capabilityCard}>
              <div className={styles.capabilityIcon}>
                <FontAwesomeIcon icon={faCog} />
              </div>
              <h3>Настройка сценариев</h3>
              <p>Гибкая настройка правил обработки под специфику вашего бизнеса</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={styles.benefitsSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Выгоды</h2>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <FontAwesomeIcon icon={faClock} />
              </div>
              <h3>Сокращение времени обработки</h3>
              <p>Автоматическая обработка до 70% входящих писем без участия человека</p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <FontAwesomeIcon icon={faCheckCircle} />
              </div>
              <h3>Минимизация пропущенных писем</h3>
              <p>Гарантированный ответ на каждое обращение клиента в течение 5 минут</p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <FontAwesomeIcon icon={faUsers} />
              </div>
              <h3>Разгрузка сотрудников</h3>
              <p>Сотрудники фокусируются на сложных задачах, а не на рутинных ответах</p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <FontAwesomeIcon icon={faChartLine} />
              </div>
              <h3>Повышение качества сервиса</h3>
              <p>Быстрые и точные ответы повышают удовлетворенность клиентов</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section className={styles.casesSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Кейсы</h2>
          <div className={styles.casesGrid}>
            <div className={styles.caseCard}>
              <div className={styles.caseNumber}>70%</div>
              <h3>Автоматическая обработка</h3>
              <p>E-commerce компания автоматизировала обработку 70% входящих писем</p>
            </div>
            <div className={styles.caseCard}>
              <div className={styles.caseNumber}>5 мин</div>
              <h3>Время ответа</h3>
              <p>Среднее время ответа на запросы клиентов сократилось с 4 часов до 5 минут</p>
            </div>
            <div className={styles.caseCard}>
              <div className={styles.caseNumber}>+35%</div>
              <h3>Удовлетворенность</h3>
              <p>Повышение удовлетворенности клиентов благодаря быстрым ответам</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2>Готовы автоматизировать обработку email?</h2>
            <p>Получите бесплатную демонстрацию и узнайте, как Email Bot может оптимизировать вашу коммуникацию с клиентами</p>
            <button className={styles.ctaButton}>
              Попробовать демо
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmailBotPage; 