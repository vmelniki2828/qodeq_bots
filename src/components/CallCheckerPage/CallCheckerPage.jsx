import React from 'react';
import styles from './CallCheckerPage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCheckCircle, 
  faChartLine, 
  faPlay,
  faMicrophone,
  faSearch,
  faExclamationTriangle,
  faUsers,
  faClock,
  faDatabase,
  faCog,
  faShieldAlt
} from '@fortawesome/free-solid-svg-icons';

const CallCheckerPage = () => {
  return (
    <div className={styles.callCheckerPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Проверка звонков (Voice QA)
            </h1>
            <p className={styles.heroSubtitle}>
              Автоматический анализ качества разговоров операторов, 
              выявление нарушений скрипта и повышение эффективности продаж
            </p>
            <div className={styles.heroButtons}>
              <button className={styles.primaryButton}>
                <FontAwesomeIcon icon={faPlay} />
                Попробовать демо
              </button>
              <button className={styles.secondaryButton}>
                Запросить консультацию
              </button>
            </div>
          </div>
          <div className={styles.heroImage}>
            <div className={styles.imageWrapper}>
              <img src="/images/call-checker-interface.png" alt="Call Checker Interface" className={styles.mainImage} />
              <div className={styles.analysisBubble}>
                <div className={styles.analysisIcon}>
                  <FontAwesomeIcon icon={faSearch} />
                </div>
                <div className={styles.analysisText}>
                  Анализ качества...
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.heroOverlay}></div>
      </section>

      {/* What It Does Section */}
      <section className={styles.whatItDoesSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Что делает</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <FontAwesomeIcon icon={faMicrophone} />
              </div>
              <h3>Автоматически проверяет качество звонков</h3>
              <p>
                Анализирует каждый разговор в реальном времени, оценивая 
                соответствие стандартам обслуживания и скриптам продаж
              </p>
              <ul className={styles.featureList}>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Анализ тональности речи</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Проверка соблюдения скрипта</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Оценка качества ответов</li>
              </ul>
            </div>
            
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <FontAwesomeIcon icon={faExclamationTriangle} />
              </div>
              <h3>Отмечает нарушения скрипта</h3>
              <p>
                Выявляет отклонения от установленных процедур и 
                автоматически помечает проблемные моменты для анализа
              </p>
              <ul className={styles.featureList}>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Обнаружение пропущенных этапов</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Анализ ключевых фраз</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Контроль времени разговора</li>
              </ul>
            </div>
            
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <FontAwesomeIcon icon={faChartLine} />
              </div>
              <h3>Генерация подробных отчетов</h3>
              <p>
                Создает детальную аналитику по каждому оператору и 
                общую статистику по качеству обслуживания
              </p>
              <ul className={styles.featureList}>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Индивидуальные карточки операторов</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Сравнительная аналитика</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Тренды качества обслуживания</li>
              </ul>
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
              <div className={styles.benefitContent}>
                <h3>Сокращение ручной проверки</h3>
                <p>
                  Автоматизация процесса контроля качества позволяет 
                  сэкономить до 90% времени на ручной проверке звонков
                </p>
                <ul className={styles.benefitList}>
                  <li><FontAwesomeIcon icon={faCheckCircle} /> Проверка 100% звонков вместо выборочной</li>
                  <li><FontAwesomeIcon icon={faCheckCircle} /> Мгновенные результаты анализа</li>
                  <li><FontAwesomeIcon icon={faCheckCircle} /> Снижение нагрузки на QA-специалистов</li>
                </ul>
              </div>
            </div>
            
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <FontAwesomeIcon icon={faUsers} />
              </div>
              <div className={styles.benefitContent}>
                <h3>Повышение качества обслуживания</h3>
                <p>
                  Постоянный контроль и обратная связь помогают 
                  операторам улучшать свои навыки общения
                </p>
                <ul className={styles.benefitList}>
                  <li><FontAwesomeIcon icon={faCheckCircle} /> Персонализированные рекомендации</li>
                  <li><FontAwesomeIcon icon={faCheckCircle} /> Обучение на основе лучших практик</li>
                  <li><FontAwesomeIcon icon={faCheckCircle} /> Стандартизация качества обслуживания</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className={styles.integrationsSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Интеграции</h2>
          <div className={styles.integrationsGrid}>
            <div className={styles.integrationCard}>
              <div className={styles.integrationIcon}>
                <FontAwesomeIcon icon={faDatabase} />
              </div>
              <h3>CRM-системы</h3>
              <p>
                Интеграция с популярными CRM: Salesforce, HubSpot, 
                Битрикс24, AmoCRM и другими
              </p>
            </div>
            
            <div className={styles.integrationCard}>
              <div className={styles.integrationIcon}>
                <FontAwesomeIcon icon={faCog} />
              </div>
              <h3>Колл-трекинг</h3>
              <p>
                Поддержка систем колл-трекинга для отслеживания 
                источников звонков и эффективности рекламных кампаний
              </p>
            </div>
            
            <div className={styles.integrationCard}>
              <div className={styles.integrationIcon}>
                <FontAwesomeIcon icon={faShieldAlt} />
              </div>
              <h3>Безопасность данных</h3>
              <p>
                Полное соответствие требованиям GDPR и защита 
                конфиденциальной информации клиентов
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Готовы улучшить качество звонков?</h2>
            <p className={styles.ctaSubtitle}>
              Получите бесплатную демонстрацию системы проверки звонков и 
              узнайте, как она может повысить эффективность вашего колл-центра
            </p>
            <div className={styles.ctaButtons}>
              <button className={styles.ctaPrimaryButton}>
                <FontAwesomeIcon icon={faPlay} />
                Попробовать демо
              </button>
              <button className={styles.ctaSecondaryButton}>
                Запросить консультацию
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CallCheckerPage; 