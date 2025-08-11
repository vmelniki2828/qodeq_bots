import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPhone, 
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
  faVolumeUp,
  faPhoneVolume,
  faPhoneAlt,
  faBuilding,
  faUserGraduate,
  faCartShopping
} from '@fortawesome/free-solid-svg-icons';
import styles from './CallBotPage.module.css';

const CallBotPage = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: faBrain,
      title: "AI Голосовой помощник",
      description: "Продвинутые алгоритмы распознавания речи и естественного общения на русском языке"
    },
    {
      icon: faPhoneVolume,
      title: "Входящие/исходящие звонки",
      description: "Автоматические звонки клиентам и обработка входящих вызовов 24/7"
    },
    {
      icon: faMicrophone,
      title: "Высокое качество звука",
      description: "HD-аудио и шумоподавление для кристально чистого звучания"
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
      title: "Круглосуточная работа",
      description: "Обработка звонков в любое время дня и ночи без перерывов",
      metric: "24/7"
    },
    {
      icon: faClock,
      title: "Мгновенный ответ",
      description: "Время ответа менее 2 секунд для любого входящего звонка",
      metric: "<2с"
    },
    {
      icon: faChartLine,
      title: "Рост продаж",
      description: "Увеличение конверсии за счет быстрого ответа на звонки",
      metric: "+45%"
    },
    {
      icon: faShieldAlt,
      title: "Безопасность",
      description: "Защита данных и соответствие требованиям по обработке персональных данных",
      metric: "100%"
    }
  ];

  const useCases = [
    {
      icon: faCartShopping,
      title: "E-commerce",
      description: "Автоматические звонки для подтверждения заказов и уведомления о доставке"
    },
    {
      icon: faBuilding,
      title: "Корпоративные услуги",
      description: "Обработка входящих звонков и квалификация потенциальных клиентов"
    },
    {
      icon: faUserGraduate,
      title: "Образование",
      description: "Напоминания о занятиях и информационные звонки студентам"
    },
    {
      icon: faBuilding,
      title: "Здравоохранение",
      description: "Напоминания о приемах и подтверждение записи к врачу"
    }
  ];

  return (
    <div className={styles.callBotPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              <FontAwesomeIcon icon={faPhone} />
              <span>AI Голосовой бот</span>
            </div>
            <h1 className={styles.heroTitle}>
              Голосовой помощник для вашего бизнеса
            </h1>
            <p className={styles.heroSubtitle}>
              Автоматизируйте телефонные звонки с помощью AI-ассистента, который понимает речь, 
              ведет естественные диалоги и увеличивает продажи через голосовое общение
            </p>
            <div className={styles.heroStats}>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>+45%</div>
                <div className={styles.statLabel}>Продажи</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>-70%</div>
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
                Слушать демо
              </button>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.phoneInterface}>
              <div className={styles.phoneHeader}>
                <div className={styles.botAvatar}>
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <div className={styles.botInfo}>
                  <h3>AI Звонилка</h3>
                  <span>В сети</span>
                </div>
              </div>
              <div className={styles.callStatus}>
                <div className={styles.callIndicator}>
                  <FontAwesomeIcon icon={faVolumeUp} />
                  <span>Идет звонок...</span>
                </div>
                <div className={styles.callTimer}>00:15</div>
              </div>
              <div className={styles.callActions}>
                <button className={styles.callButton}>
                  <FontAwesomeIcon icon={faPhoneAlt} />
                </button>
                <button className={styles.muteButton}>
                  <FontAwesomeIcon icon={faMicrophone} />
                </button>
                <button className={styles.endCallButton}>
                  <FontAwesomeIcon icon={faPhoneAlt} />
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
            <h2 className={styles.sectionTitle}>Почему выбирают наш голосовой бот</h2>
            <p className={styles.sectionSubtitle}>
              Инновационные технологии распознавания речи и естественного общения
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
              Наш голосовой бот успешно работает в самых разных сферах бизнеса
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
              <h2 className={styles.ctaTitle}>Готовы автоматизировать телефонные звонки?</h2>
              <p className={styles.ctaSubtitle}>
                Присоединяйтесь к сотням компаний, которые уже используют наш голосовой бот 
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
                Слушать демо
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

export default CallBotPage; 