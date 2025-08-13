import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope, 
  faMicrophone, 
  faBrain, 
  faChartLine, 
  faUsers, 
  faClock, 
  faShieldAlt,
  faRocket,
  faPlay,
  faArrowRight,
  faLightbulb,
  faCog,
  faStar,
  faBuilding,
  faUserGraduate,
  faCartShopping,
  faCheckCircle,
  faExclamationTriangle,
  faEye,
  faChartBar
} from '@fortawesome/free-solid-svg-icons';
import styles from './EmailBotPage.module.css';

const EmailBotPage = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: faBrain,
      title: "AI Обработка писем",
      description: "Продвинутые алгоритмы понимания контекста и автоматического ответа на email"
    },
    {
      icon: faEnvelope,
      title: "Мониторинг почты",
      description: "Автоматическая обработка всех входящих писем в реальном времени"
    },
    {
      icon: faMicrophone,
      title: "Умные ответы",
      description: "Высокоточное понимание запросов и генерация релевантных ответов"
    },
    {
      icon: faCog,
      title: "Простая интеграция",
      description: "Быстрое подключение к вашим почтовым сервисам и CRM-системам"
    }
  ];

  const benefits = [
    {
      icon: faUsers,
      title: "Повышение качества",
      description: "Улучшение стандартов обслуживания клиентов на основе автоматических ответов",
      metric: "+70%"
    },
    {
      icon: faClock,
      title: "Быстрая обработка",
      description: "Автоматический ответ на письмо за 30 секунд вместо часов ожидания",
      metric: "30 сек"
    },
    {
      icon: faChartLine,
      title: "Рост эффективности",
      description: "Увеличение конверсии за счет мгновенных ответов на email",
      metric: "+50%"
    },
    {
      icon: faShieldAlt,
      title: "Контроль качества",
      description: "100% покрытие обработки всех писем без пропусков",
      metric: "100%"
    }
  ];

  const useCases = [
    {
      icon: faCartShopping,
      title: "E-commerce",
      description: "Автоматические ответы на вопросы о товарах, заказах и доставке"
    },
    {
      icon: faBuilding,
      title: "Корпоративные услуги",
      description: "Обработка запросов клиентов и информационных писем"
    },
    {
      icon: faUserGraduate,
      title: "Образование",
      description: "Автоматические ответы на вопросы студентов и абитуриентов"
    },
    {
      icon: faBuilding,
      title: "Здравоохранение",
      description: "Обработка запросов на запись к врачу и информационные письма"
    }
  ];

  return (
    <div className={styles.emailBotPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              <FontAwesomeIcon icon={faEnvelope} />
              <span>AI Автоответчик</span>
            </div>
            <h1 className={styles.heroTitle}>
              Автоматическая обработка email писем
            </h1>
            <p className={styles.heroSubtitle}>
              Используйте AI для мгновенной обработки всех входящих писем, автоматических ответов 
              и повышения эффективности вашей команды поддержки
            </p>
            <div className={styles.heroStats}>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>+70%</div>
                <div className={styles.statLabel}>Качество</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>-90%</div>
                <div className={styles.statLabel}>Время ответа</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>100%</div>
                <div className={styles.statLabel}>Покрытие</div>
              </div>
            </div>
            <div className={styles.heroButtons}>
              <button className={styles.primaryButton}>
                <FontAwesomeIcon icon={faRocket} />
                Запустить проект
              </button>
              <button className={styles.secondaryButton}>
                <FontAwesomeIcon icon={faPlay} />
                Смотреть демо
              </button>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.emailInterface}>
              <div className={styles.emailHeader}>
                <div className={styles.botAvatar}>
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div className={styles.botInfo}>
                  <h3>AI Автоответчик</h3>
                  <span>Обработка...</span>
                </div>
              </div>
              <div className={styles.emailStatus}>
                <div className={styles.emailIndicator}>
                  <FontAwesomeIcon icon={faEye} />
                  <span>Обработка письма...</span>
                </div>
                <div className={styles.emailTimer}>00:15</div>
              </div>
              <div className={styles.emailActions}>
                <button className={styles.emailButton}>
                  <FontAwesomeIcon icon={faCheckCircle} />
                </button>
                <button className={styles.muteButton}>
                  <FontAwesomeIcon icon={faExclamationTriangle} />
                </button>
                <button className={styles.endEmailButton}>
                  <FontAwesomeIcon icon={faChartBar} />
                </button>
              </div>
            </div>
            <div className={styles.floatingElements}>
              <div className={styles.floatingIcon}>
                <FontAwesomeIcon icon={faBrain} />
              </div>
              <div className={styles.floatingIcon}>
                <FontAwesomeIcon icon={faLightbulb} />
              </div>
              <div className={styles.floatingIcon}>
                <FontAwesomeIcon icon={faStar} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.heroBackground}>
          <div className={styles.gradientOrb}></div>
          <div className={styles.gradientOrb}></div>
          <div className={styles.gradientOrb}></div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Почему выбирают наш AI автоответчик</h2>
            <p className={styles.sectionSubtitle}>
              Инновационные технологии обработки email и автоматической генерации ответов
            </p>
          </div>
          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`${styles.featureCard} ${activeFeature === index ? styles.active : ''}`}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className={styles.featureIcon}>
                  <FontAwesomeIcon icon={feature.icon} />
                </div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
                <div className={styles.featureArrow}>
                  <FontAwesomeIcon icon={faArrowRight} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={styles.benefitsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Конкретные результаты для вашего бизнеса</h2>
            <p className={styles.sectionSubtitle}>
              Измеримые улучшения, которые вы увидите уже в первый месяц
            </p>
          </div>
          <div className={styles.benefitsGrid}>
            {benefits.map((benefit, index) => (
              <div key={index} className={styles.benefitCard}>
                <div className={styles.benefitIcon}>
                  <FontAwesomeIcon icon={benefit.icon} />
                </div>
                <div className={styles.benefitMetric}>{benefit.metric}</div>
                <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                <p className={styles.benefitDescription}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className={styles.useCasesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Применение в различных отраслях</h2>
            <p className={styles.sectionSubtitle}>
              Наш AI автоответчик успешно работает в самых разных сферах бизнеса
            </p>
          </div>
          <div className={styles.useCasesGrid}>
            {useCases.map((useCase, index) => (
              <div key={index} className={styles.useCaseCard}>
                <div className={styles.useCaseIcon}>
                  <FontAwesomeIcon icon={useCase.icon} />
                </div>
                <h3 className={styles.useCaseTitle}>{useCase.title}</h3>
                <p className={styles.useCaseDescription}>{useCase.description}</p>
                <div className={styles.useCaseArrow}>
                  <FontAwesomeIcon icon={faArrowRight} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <div className={styles.ctaHeader}>
              <h2 className={styles.ctaTitle}>Готовы автоматизировать обработку email?</h2>
              <p className={styles.ctaSubtitle}>
                Присоединяйтесь к сотням компаний, которые уже используют наш AI автоответчик 
                для повышения качества обслуживания и роста продаж через email
              </p>
            </div>
            <div className={styles.ctaFeatures}>
              <div className={styles.ctaFeature}>
                <FontAwesomeIcon icon={faRocket} />
                <span>Запуск за 2 недели</span>
              </div>
              <div className={styles.ctaFeature}>
                <FontAwesomeIcon icon={faShieldAlt} />
                <span>Гарантия результата</span>
              </div>
              <div className={styles.ctaFeature}>
                <FontAwesomeIcon icon={faChartLine} />
                <span>Измеримые результаты</span>
              </div>
            </div>
            <div className={styles.ctaButtons}>
              <button className={styles.primaryButton}>
                <FontAwesomeIcon icon={faRocket} />
                Начать проект
              </button>
              <button className={styles.secondaryButton}>
                <FontAwesomeIcon icon={faPlay} />
                Смотреть демо
              </button>
            </div>
          </div>
        </div>
        <div className={styles.ctaBackground}>
          <div className={styles.gradientOrb}></div>
        </div>
      </section>
    </div>
  );
};

export default EmailBotPage; 