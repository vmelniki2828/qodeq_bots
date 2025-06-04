import React from 'react';
import styles from './TechnologiesPage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMicrophone, 
  faCode, 
  faBrain, 
  faProjectDiagram, 
  faChartLine, 
  faPlug, 
  faLaptopCode, 
  faCog, 
  faRobot, 
  faDesktop 
} from '@fortawesome/free-solid-svg-icons';

const TechnologiesPage = () => {
  return (
    <div className={styles.technologiesPage}>
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <h1 className={styles.title}>Наши технологии</h1>
          <p className={styles.subtitle}>
            Инновационные AI-решения для автоматизации коммуникации с клиентами
          </p>
        </div>
      </section>

      <section className={styles.mainTechSection}>
        <div className={styles.container}>
          <div className={styles.techContent}>
            <h2 className={styles.sectionTitle}>Технологии искусственного интеллекта</h2>
            <p className={styles.techDescription}>
              Наша платформа использует передовые технологии искусственного интеллекта и машинного обучения 
              для создания естественного взаимодействия с пользователями. Наши решения постоянно обучаются 
              и совершенствуются, адаптируясь к специфике вашего бизнеса.
            </p>
            <div className={styles.techStats}>
              <div className={styles.techStat}>
                <span className={styles.statNumber}>98.7%</span>
                <span className={styles.statLabel}>Точность распознавания речи</span>
              </div>
              <div className={styles.techStat}>
                <span className={styles.statNumber}>31</span>
                <span className={styles.statLabel}>Поддерживаемых языков</span>
              </div>
              <div className={styles.techStat}>
                <span className={styles.statNumber}>0.3с</span>
                <span className={styles.statLabel}>Среднее время ответа</span>
              </div>
            </div>
          </div>
          <div className={styles.techImage}>
            <div className={styles.imageWrapper}>
              <FontAwesomeIcon icon={faBrain} className={styles.brainIcon} />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.technologiesGridSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Ключевые технологии</h2>
          <div className={styles.techGrid}>
            <div className={styles.techCard}>
              <FontAwesomeIcon icon={faMicrophone} className={styles.techIcon} />
              <h3 className={styles.techCardTitle}>Распознавание речи</h3>
              <p className={styles.techCardDescription}>
                Точное распознавание речи с учетом контекста разговора и шумоподавлением
              </p>
            </div>
            <div className={styles.techCard}>
              <FontAwesomeIcon icon={faCode} className={styles.techIcon} />
              <h3 className={styles.techCardTitle}>Обработка естественного языка</h3>
              <p className={styles.techCardDescription}>
                Понимание смысла сказанного и генерация релевантных ответов
              </p>
            </div>
            <div className={styles.techCard}>
              <FontAwesomeIcon icon={faBrain} className={styles.techIcon} />
              <h3 className={styles.techCardTitle}>Машинное обучение</h3>
              <p className={styles.techCardDescription}>
                Постоянное улучшение качества взаимодействия на основе новых данных
              </p>
            </div>
            <div className={styles.techCard}>
              <FontAwesomeIcon icon={faProjectDiagram} className={styles.techIcon} />
              <h3 className={styles.techCardTitle}>Адаптивные сценарии</h3>
              <p className={styles.techCardDescription}>
                Динамические сценарии общения, меняющиеся в зависимости от реакции клиента
              </p>
            </div>
            <div className={styles.techCard}>
              <FontAwesomeIcon icon={faChartLine} className={styles.techIcon} />
              <h3 className={styles.techCardTitle}>Аналитика в реальном времени</h3>
              <p className={styles.techCardDescription}>
                Анализ и визуализация метрик эффективности коммуникаций
              </p>
            </div>
            <div className={styles.techCard}>
              <FontAwesomeIcon icon={faPlug} className={styles.techIcon} />
              <h3 className={styles.techCardTitle}>Легкая интеграция</h3>
              <p className={styles.techCardDescription}>
                Готовые API и коннекторы для популярных CRM и каналов связи
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.processSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Процесс внедрения</h2>
          <div className={styles.processList}>
            <div className={styles.processItem}>
              <div className={styles.processIcon}>
                <FontAwesomeIcon icon={faLaptopCode} />
              </div>
              <div className={styles.processContent}>
                <h3 className={styles.processTitle}>1. Разработка решения</h3>
                <p className={styles.processDescription}>
                  Мы создаем кастомизированное решение под ваши бизнес-процессы и задачи
                </p>
              </div>
            </div>
            <div className={styles.processItem}>
              <div className={styles.processIcon}>
                <FontAwesomeIcon icon={faCog} />
              </div>
              <div className={styles.processContent}>
                <h3 className={styles.processTitle}>2. Интеграция и настройка</h3>
                <p className={styles.processDescription}>
                  Подключаем систему к вашей инфраструктуре и настраиваем все параметры
                </p>
              </div>
            </div>
            <div className={styles.processItem}>
              <div className={styles.processIcon}>
                <FontAwesomeIcon icon={faRobot} />
              </div>
              <div className={styles.processContent}>
                <h3 className={styles.processTitle}>3. Обучение системы</h3>
                <p className={styles.processDescription}>
                  Тренируем AI на ваших данных для достижения максимальной эффективности
                </p>
              </div>
            </div>
            <div className={styles.processItem}>
              <div className={styles.processIcon}>
                <FontAwesomeIcon icon={faDesktop} />
              </div>
              <div className={styles.processContent}>
                <h3 className={styles.processTitle}>4. Мониторинг и поддержка</h3>
                <p className={styles.processDescription}>
                  Постоянно следим за работой системы и оперативно вносим улучшения
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Готовы начать работу с нашими технологиями?</h2>
            <p className={styles.ctaDescription}>
              Свяжитесь с нами, чтобы узнать, как наши решения могут помочь вашему бизнесу
            </p>
            <div className={styles.ctaButtons}>
              <button className={styles.demoButton}>Запросить демо</button>
              <button className={styles.infoButton}>Узнать о внедрении</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechnologiesPage; 