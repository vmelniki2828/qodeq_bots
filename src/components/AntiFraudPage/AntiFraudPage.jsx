import React from 'react';
import styles from './AntiFraudPage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faShieldAlt, 
  faRobot, 
  faCheckCircle, 
  faExclamationTriangle,
  faChartLine,
  faEye,
  faLock,
  faDatabase,
  faBell,
  faClock
} from '@fortawesome/free-solid-svg-icons';

const AntiFraudPage = () => {
  return (
    <div className={styles.antiFraudPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              AntiFraud Tools
            </h1>
            <p className={styles.heroSubtitle}>
              Защитите свой бизнес от мошенничества с помощью AI-технологий. Автоматическое выявление подозрительной активности и предотвращение финансовых потерь.
            </p>
            <div className={styles.heroFeatures}>
              <div className={styles.feature}>
                <FontAwesomeIcon icon={faEye} />
                <span>Мониторинг в реальном времени</span>
              </div>
              <div className={styles.feature}>
                <FontAwesomeIcon icon={faLock} />
                <span>Защита от мошенничества</span>
              </div>
              <div className={styles.feature}>
                <FontAwesomeIcon icon={faBell} />
                <span>Мгновенные уведомления</span>
              </div>
            </div>
            <button className={styles.ctaButton}>
              Попробовать демо
            </button>
          </div>
          <div className={styles.heroImage}>
            <div className={styles.securityDashboard}>
              <div className={styles.dashboardHeader}>
                <div className={styles.dashboardTitle}>
                  <FontAwesomeIcon icon={faShieldAlt} />
                  <span>Система безопасности</span>
                </div>
                <div className={styles.statusIndicator}>
                  <span className={styles.statusText}>Активна</span>
                  <div className={styles.statusDot}></div>
                </div>
              </div>
              <div className={styles.threatPanel}>
                <div className={styles.threatItem}>
                  <FontAwesomeIcon icon={faExclamationTriangle} className={styles.threatIcon} />
                  <div className={styles.threatInfo}>
                    <span className={styles.threatType}>Подозрительная транзакция</span>
                    <span className={styles.threatTime}>2 мин назад</span>
                  </div>
                  <div className={styles.threatStatus}>Блокировано</div>
                </div>
                <div className={styles.threatItem}>
                  <FontAwesomeIcon icon={faCheckCircle} className={styles.safeIcon} />
                  <div className={styles.threatInfo}>
                    <span className={styles.threatType}>Нормальная активность</span>
                    <span className={styles.threatTime}>5 мин назад</span>
                  </div>
                  <div className={styles.threatStatus}>Безопасно</div>
                </div>
              </div>
              <div className={styles.statsPanel}>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>99.8%</span>
                  <span className={styles.statLabel}>Точность</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>0</span>
                  <span className={styles.statLabel}>Ложных срабатываний</span>
                </div>
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
                <FontAwesomeIcon icon={faEye} />
              </div>
              <h3>Мониторинг в реальном времени</h3>
              <p>Непрерывный анализ всех транзакций и действий пользователей для мгновенного выявления угроз</p>
            </div>
            <div className={styles.capabilityCard}>
              <div className={styles.capabilityIcon}>
                <FontAwesomeIcon icon={faRobot} />
              </div>
              <h3>AI-анализ поведения</h3>
              <p>Машинное обучение анализирует паттерны поведения и выявляет аномалии</p>
            </div>
            <div className={styles.capabilityCard}>
              <div className={styles.capabilityIcon}>
                <FontAwesomeIcon icon={faBell} />
              </div>
              <h3>Мгновенные уведомления</h3>
              <p>Автоматические оповещения о подозрительной активности в режиме реального времени</p>
            </div>
            <div className={styles.capabilityCard}>
              <div className={styles.capabilityIcon}>
                <FontAwesomeIcon icon={faDatabase} />
              </div>
              <h3>Интеграция с системами</h3>
              <p>Подключение к CRM, платежным системам и другим бизнес-инструментам</p>
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
                <FontAwesomeIcon icon={faShieldAlt} />
              </div>
              <h3>Защита от потерь</h3>
              <p>Предотвращение финансовых потерь от мошеннических действий и подозрительных транзакций</p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <FontAwesomeIcon icon={faCheckCircle} />
              </div>
              <h3>Высокая точность</h3>
              <p>99.8% точность выявления угроз с минимальным количеством ложных срабатываний</p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <FontAwesomeIcon icon={faClock} />
              </div>
              <h3>Экономия времени</h3>
              <p>Автоматизация процессов безопасности освобождает время для других задач</p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <FontAwesomeIcon icon={faChartLine} />
              </div>
              <h3>Снижение рисков</h3>
              <p>Комплексная защита снижает риски для репутации и финансов компании</p>
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
              <div className={styles.caseNumber}>$2.5M</div>
              <h3>Сэкономлено средств</h3>
              <p>Финансовая компания предотвратила потери на сумму $2.5 млн за год</p>
            </div>
            <div className={styles.caseCard}>
              <div className={styles.caseNumber}>99.8%</div>
              <h3>Точность обнаружения</h3>
              <p>Высокая точность выявления мошеннических транзакций</p>
            </div>
            <div className={styles.caseCard}>
              <div className={styles.caseNumber}>24/7</div>
              <h3>Защита круглосуточно</h3>
              <p>Непрерывный мониторинг и защита от угроз в любое время</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2>Готовы защитить свой бизнес?</h2>
            <p>Получите бесплатную демонстрацию AntiFraud Tools и узнайте, как защитить свой бизнес от мошенничества</p>
            <button className={styles.ctaButton}>
              Попробовать демо
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AntiFraudPage; 