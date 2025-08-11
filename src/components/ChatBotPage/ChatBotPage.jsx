import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faRobot, 
  faBrain, 
  faChartLine, 
  faUsers, 
  faClock, 
  faShieldAlt,
  faRocket,
  faPlay,
  faArrowRight,
  faLightbulb,
  faGlobe,
  faMobile,
  faCog,
  faStar,
  faCartShopping,
  faBuilding,
  faUserGraduate,
  faUser
} from '@fortawesome/free-solid-svg-icons';
import styles from './ChatBotPage.module.css';

const ChatBotPage = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: faBrain,
      title: "Искусственный интеллект",
      description: "Продвинутые алгоритмы машинного обучения для понимания контекста и естественного общения"
    },
    {
      icon: faGlobe,
      title: "Многоязычная поддержка",
      description: "Поддержка более 50 языков с автоматическим определением языка пользователя"
    },
    {
      icon: faMobile,
      title: "Кросс-платформенность",
      description: "Работает на всех устройствах: веб, мобильные приложения, мессенджеры"
    },
    {
      icon: faCog,
      title: "Простая интеграция",
      description: "Быстрое подключение к вашему сайту, CRM и популярным платформам"
    }
  ];

  const benefits = [
    {
      icon: faUsers,
      title: "24/7 Поддержка",
      description: "Круглосуточная помощь клиентам без перерывов и выходных",
      metric: "100%"
    },
    {
      icon: faClock,
      title: "Мгновенный ответ",
      description: "Время ответа менее 1 секунды для любого вопроса",
      metric: "<1с"
    },
    {
      icon: faChartLine,
      title: "Рост конверсии",
      description: "Увеличение продаж за счет быстрой и качественной поддержки",
      metric: "+65%"
    },
    {
      icon: faShieldAlt,
      title: "Безопасность",
      description: "Защита данных клиентов и соответствие международным стандартам",
      metric: "100%"
    }
  ];

  const useCases = [
    {
      icon: faCartShopping,
      title: "E-commerce",
      description: "Помощь в выборе товаров, оформлении заказов и решении проблем с доставкой"
    },
    {
      icon: faBuilding,
      title: "Корпоративные сайты",
      description: "Ответы на вопросы о компании, услугах и контактной информации"
    },
    {
      icon: faUserGraduate,
      title: "Образование",
      description: "Поддержка студентов, ответы на вопросы о курсах и программах"
    },
    {
      icon: faBuilding,
      title: "Здравоохранение",
      description: "Запись на прием, информация о врачах и медицинских услугах"
    }
  ];

  return (
    <div className={styles.chatBotPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              <FontAwesomeIcon icon={faRobot} />
              <span>AI Чат-бот</span>
            </div>
            <h1 className={styles.heroTitle}>
              Интеллектуальный помощник для вашего бизнеса
            </h1>
            <p className={styles.heroSubtitle}>
              Автоматизируйте поддержку клиентов с помощью AI-чата, который понимает контекст, 
              решает сложные задачи и обеспечивает безупречный сервис 24/7
            </p>
            <div className={styles.heroStats}>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>+65%</div>
                <div className={styles.statLabel}>Конверсия</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>-80%</div>
                <div className={styles.statLabel}>Нагрузка</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>24/7</div>
                <div className={styles.statLabel}>Работа</div>
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
                  <FontAwesomeIcon icon={faRobot} />
                </div>
                <div className={styles.botInfo}>
                  <h3>AI Ассистент</h3>
                  <span>Онлайн</span>
                </div>
              </div>
              <div className={styles.chatMessages}>
                <div className={`${styles.message} ${styles.bot}`}>
                  <FontAwesomeIcon icon={faRobot} />
                  <span>Привет! Чем могу помочь?</span>
                </div>
                <div className={`${styles.message} ${styles.user}`}>
                  <span>Расскажите о ваших услугах</span>
                  <FontAwesomeIcon icon={faUser} />
                </div>
                <div className={`${styles.message} ${styles.bot}`}>
                  <FontAwesomeIcon icon={faRobot} />
                  <span>Конечно! У нас есть...</span>
                </div>
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
            <h2 className={styles.sectionTitle}>Почему выбирают наш AI чат-бот</h2>
            <p className={styles.sectionSubtitle}>
              Инновационные технологии и проверенные решения для вашего бизнеса
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
              Наш чат-бот успешно работает в самых разных сферах бизнеса
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
              <h2 className={styles.ctaTitle}>Готовы автоматизировать поддержку клиентов?</h2>
              <p className={styles.ctaSubtitle}>
                Присоединяйтесь к сотням компаний, которые уже используют наш AI чат-бот 
                для увеличения продаж и улучшения сервиса
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

export default ChatBotPage; 