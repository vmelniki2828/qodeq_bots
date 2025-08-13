import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMagic, 
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
import styles from './ChatCheckerPage.module.css';

const ChatCheckerPage = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: faBrain,
      title: "AI Анализ чатов",
      description: "Продвинутые алгоритмы оценки переписки и выявления ключевых моментов"
    },
    {
      icon: faMagic,
      title: "Мониторинг сообщений",
      description: "Автоматическая проверка всех чатов и переписок в реальном времени"
    },
    {
      icon: faMicrophone,
      title: "Анализ текста",
      description: "Высокоточное понимание контекста и эмоциональной окраски сообщений"
    },
    {
      icon: faCog,
      title: "Простая интеграция",
      description: "Быстрое подключение к вашим мессенджерам и CRM-системам"
    }
  ];

  const benefits = [
    {
      icon: faUsers,
      title: "Повышение качества",
      description: "Улучшение стандартов обслуживания клиентов на основе анализа чатов",
      metric: "+65%"
    },
    {
      icon: faClock,
      title: "Быстрая проверка",
      description: "Автоматический анализ чата за 1-2 минуты вместо часов ручной работы",
      metric: "1-2 мин"
    },
    {
      icon: faChartLine,
      title: "Рост эффективности",
      description: "Увеличение конверсии за счет улучшения качества общения в чатах",
      metric: "+40%"
    },
    {
      icon: faShieldAlt,
      title: "Контроль качества",
      description: "100% покрытие проверки всех чатов без пропусков",
      metric: "100%"
    }
  ];

  const useCases = [
    {
      icon: faCartShopping,
      title: "E-commerce",
      description: "Проверка качества обслуживания клиентов в онлайн-чатах и выявление проблем"
    },
    {
      icon: faBuilding,
      title: "Корпоративные услуги",
      description: "Контроль качества консультаций и соблюдение стандартов общения в чатах"
    },
    {
      icon: faUserGraduate,
      title: "Образование",
      description: "Мониторинг качества консультаций и информационных чатов со студентами"
    },
    {
      icon: faBuilding,
      title: "Здравоохранение",
      description: "Проверка качества консультаций и записи к врачу через чат-боты"
    }
  ];

  return (
    <div className={styles.chatCheckerPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              <FontAwesomeIcon icon={faMagic} />
              <span>AI Проверка чатов</span>
            </div>
            <h1 className={styles.heroTitle}>
              Автоматическая проверка качества чатов
            </h1>
            <p className={styles.heroSubtitle}>
              Используйте AI для анализа всех текстовых переписок, оценки качества обслуживания 
              и повышения эффективности вашей команды поддержки
            </p>
            <div className={styles.heroStats}>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>+65%</div>
                <div className={styles.statLabel}>Качество</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>-85%</div>
                <div className={styles.statLabel}>Время проверки</div>
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
            <div className={styles.chatInterface}>
              <div className={styles.chatHeader}>
                <div className={styles.botAvatar}>
                  <FontAwesomeIcon icon={faMagic} />
                </div>
                <div className={styles.botInfo}>
                  <h3>AI Проверка чатов</h3>
                  <span>Анализ...</span>
                </div>
              </div>
              <div className={styles.chatStatus}>
                <div className={styles.chatIndicator}>
                  <FontAwesomeIcon icon={faEye} />
                  <span>Проверка чата...</span>
                </div>
                <div className={styles.chatTimer}>00:32</div>
              </div>
              <div className={styles.chatActions}>
                <button className={styles.chatButton}>
                  <FontAwesomeIcon icon={faCheckCircle} />
                </button>
                <button className={styles.muteButton}>
                  <FontAwesomeIcon icon={faExclamationTriangle} />
                </button>
                <button className={styles.endChatButton}>
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
            <h2 className={styles.sectionTitle}>Почему выбирают наш AI проверщик чатов</h2>
            <p className={styles.sectionSubtitle}>
              Инновационные технологии анализа текста и автоматической оценки качества
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
              Наш AI проверщик чатов успешно работает в самых разных сферах бизнеса
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
              <h2 className={styles.ctaTitle}>Готовы автоматизировать проверку чатов?</h2>
              <p className={styles.ctaSubtitle}>
                Присоединяйтесь к сотням компаний, которые уже используют наш AI проверщик 
                для повышения качества обслуживания и роста продаж через чаты
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

export default ChatCheckerPage; 