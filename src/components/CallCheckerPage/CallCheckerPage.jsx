import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHeadset, 
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
import styles from './CallCheckerPage.module.css';

const CallCheckerPage = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: faBrain,
      title: "AI Анализ качества",
      description: "Продвинутые алгоритмы оценки разговоров и выявления ключевых моментов"
    },
    {
      icon: faHeadset,
      title: "Мониторинг звонков",
      description: "Автоматическая проверка всех входящих и исходящих звонков в реальном времени"
    },
    {
      icon: faMicrophone,
      title: "Транскрипция речи",
      description: "Высокоточное преобразование голоса в текст с распознаванием эмоций"
    },
    {
      icon: faCog,
      title: "Простая интеграция",
      description: "Быстрое подключение к вашей телефонной системе и CRM"
    }
  ];

  const benefits = [
    {
      icon: faUsers,
      title: "Повышение качества",
      description: "Улучшение стандартов обслуживания клиентов на основе анализа звонков",
      metric: "+60%"
    },
    {
      icon: faClock,
      title: "Быстрая проверка",
      description: "Автоматический анализ звонка за 2-3 минуты вместо часов ручной работы",
      metric: "2-3 мин"
    },
    {
      icon: faChartLine,
      title: "Рост эффективности",
      description: "Увеличение конверсии за счет улучшения качества звонков",
      metric: "+35%"
    },
    {
      icon: faShieldAlt,
      title: "Контроль качества",
      description: "100% покрытие проверки всех звонков без пропусков",
      metric: "100%"
    }
  ];

  const useCases = [
    {
      icon: faCartShopping,
      title: "E-commerce",
      description: "Проверка качества обслуживания клиентов и выявление проблем в продажах"
    },
    {
      icon: faBuilding,
      title: "Корпоративные услуги",
      description: "Контроль качества консультаций и соблюдение стандартов общения"
    },
    {
      icon: faUserGraduate,
      title: "Образование",
      description: "Мониторинг качества консультаций и информационных звонков"
    },
    {
      icon: faBuilding,
      title: "Здравоохранение",
      description: "Проверка качества записи к врачу и информационных звонков"
    }
  ];

  return (
    <div className={styles.callCheckerPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              <FontAwesomeIcon icon={faHeadset} />
              <span>AI Проверка звонков</span>
            </div>
            <h1 className={styles.heroTitle}>
              Автоматическая проверка качества звонков
            </h1>
            <p className={styles.heroSubtitle}>
              Используйте AI для анализа всех телефонных разговоров, оценки качества обслуживания 
              и повышения эффективности вашей команды продаж
            </p>
            <div className={styles.heroStats}>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>+60%</div>
                <div className={styles.statLabel}>Качество</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>-80%</div>
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
            <div className={styles.phoneInterface}>
              <div className={styles.phoneHeader}>
                <div className={styles.botAvatar}>
                  <FontAwesomeIcon icon={faHeadset} />
                </div>
                <div className={styles.botInfo}>
                  <h3>AI Проверка</h3>
                  <span>Анализ...</span>
                </div>
              </div>
              <div className={styles.callStatus}>
                <div className={styles.callIndicator}>
                  <FontAwesomeIcon icon={faEye} />
                  <span>Проверка звонка...</span>
                </div>
                <div className={styles.callTimer}>00:45</div>
              </div>
              <div className={styles.callActions}>
                <button className={styles.callButton}>
                  <FontAwesomeIcon icon={faCheckCircle} />
                </button>
                <button className={styles.muteButton}>
                  <FontAwesomeIcon icon={faExclamationTriangle} />
                </button>
                <button className={styles.endCallButton}>
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
            <h2 className={styles.sectionTitle}>Почему выбирают наш AI проверщик звонков</h2>
            <p className={styles.sectionSubtitle}>
              Инновационные технологии анализа речи и автоматической оценки качества
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
              Наш AI проверщик звонков успешно работает в самых разных сферах бизнеса
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
              <h2 className={styles.ctaTitle}>Готовы автоматизировать проверку звонков?</h2>
              <p className={styles.ctaSubtitle}>
                Присоединяйтесь к сотням компаний, которые уже используют наш AI проверщик 
                для повышения качества обслуживания и роста продаж
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

export default CallCheckerPage; 