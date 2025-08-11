import React from 'react';
import styles from './ChatCheckerPage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faComments, 
  faCheckCircle, 
  faChartLine, 
  faPlay,
  faSearch,
  faUsers,
  faClock,
  faEye,
  faChartBar
} from '@fortawesome/free-solid-svg-icons';

const ChatCheckerPage = () => {
  return (
    <div className={styles.chatCheckerPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Проверка чатов (Chat QA)
            </h1>
            <p className={styles.heroSubtitle}>
              Автоматический анализ качества переписки с клиентами, 
              выявление проблемных ответов и контроль работы операторов
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
              <img src="/images/chat-checker-interface.png" alt="Chat Checker Interface" className={styles.mainImage} />
              <div className={styles.analysisBubble}>
                <div className={styles.analysisIcon}>
                  <FontAwesomeIcon icon={faSearch} />
                </div>
                <div className={styles.analysisText}>
                  Анализ чатов...
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.heroOverlay}></div>
      </section>

      {/* Functionality Section */}
      <section className={styles.functionalitySection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Функционал</h2>
          <div className={styles.functionalityGrid}>
            <div className={styles.functionalityCard}>
              <div className={styles.functionalityIcon}>
                <FontAwesomeIcon icon={faComments} />
              </div>
              <h3>Анализ чатов</h3>
              <p>
                Автоматический анализ всех диалогов с клиентами в реальном времени, 
                оценка качества ответов и соблюдения стандартов обслуживания
              </p>
              <ul className={styles.functionalityList}>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Анализ тональности сообщений</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Проверка грамотности ответов</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Оценка скорости реакции</li>
              </ul>
            </div>
            
            <div className={styles.functionalityCard}>
              <div className={styles.functionalityIcon}>
                <FontAwesomeIcon icon={faSearch} />
              </div>
              <h3>Поиск проблемных ответов</h3>
              <p>
                Выявление некорректных, неполных или невежливых ответов, 
                автоматическое помечание для дальнейшего анализа
              </p>
              <ul className={styles.functionalityList}>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Обнаружение грубости</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Проверка полноты информации</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Анализ эмоциональной окраски</li>
              </ul>
            </div>
            
            <div className={styles.functionalityCard}>
              <div className={styles.functionalityIcon}>
                <FontAwesomeIcon icon={faEye} />
              </div>
              <h3>Контроль сотрудников</h3>
              <p>
                Мониторинг работы операторов, отслеживание производительности 
                и выявление областей для улучшения
              </p>
              <ul className={styles.functionalityList}>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Индивидуальная статистика</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Сравнение с коллегами</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Рекомендации по улучшению</li>
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
                <FontAwesomeIcon icon={faUsers} />
              </div>
              <div className={styles.benefitContent}>
                <h3>Улучшение сервиса</h3>
                <p>
                  Постоянный контроль качества общения с клиентами помогает 
                  поддерживать высокие стандарты обслуживания
                </p>
                <ul className={styles.benefitList}>
                  <li><FontAwesomeIcon icon={faCheckCircle} /> Стандартизация ответов</li>
                  <li><FontAwesomeIcon icon={faCheckCircle} /> Повышение удовлетворенности клиентов</li>
                  <li><FontAwesomeIcon icon={faCheckCircle} /> Снижение количества жалоб</li>
                </ul>
              </div>
            </div>
            
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <FontAwesomeIcon icon={faChartBar} />
              </div>
              <div className={styles.benefitContent}>
                <h3>Контроль сотрудников</h3>
                <p>
                  Детальная аналитика по каждому оператору позволяет 
                  выявлять сильные и слабые стороны команды
                </p>
                <ul className={styles.benefitList}>
                  <li><FontAwesomeIcon icon={faCheckCircle} /> Персонализированное обучение</li>
                  <li><FontAwesomeIcon icon={faCheckCircle} /> Объективная оценка работы</li>
                  <li><FontAwesomeIcon icon={faCheckCircle} /> Мотивация к улучшению</li>
                </ul>
              </div>
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
              <div className={styles.caseHeader}>
                <div className={styles.caseIcon}>
                  <FontAwesomeIcon icon={faUsers} />
                </div>
                <div className={styles.caseStats}>
                  <div className={styles.caseNumber}>+40%</div>
                  <div className={styles.caseLabel}>Удовлетворенность клиентов</div>
                </div>
              </div>
              <h3>E-commerce платформа</h3>
              <p>
                Внедрение системы проверки чатов повысило удовлетворенность 
                клиентов на 40% за счет улучшения качества ответов
              </p>
            </div>
            
            <div className={styles.caseCard}>
              <div className={styles.caseHeader}>
                <div className={styles.caseIcon}>
                  <FontAwesomeIcon icon={faClock} />
                </div>
                <div className={styles.caseStats}>
                  <div className={styles.caseNumber}>-60%</div>
                  <div className={styles.caseLabel}>Время обработки жалоб</div>
                </div>
              </div>
              <h3>Банковские услуги</h3>
              <p>
                Автоматический контроль качества чатов сократил время 
                обработки жалоб клиентов на 60%
              </p>
            </div>
            
            <div className={styles.caseCard}>
              <div className={styles.caseHeader}>
                <div className={styles.caseIcon}>
                  <FontAwesomeIcon icon={faChartLine} />
                </div>
                <div className={styles.caseStats}>
                  <div className={styles.caseNumber}>+25%</div>
                  <div className={styles.caseLabel}>Эффективность операторов</div>
                </div>
              </div>
              <h3>Страховая компания</h3>
              <p>
                Система контроля чатов помогла повысить эффективность 
                операторов на 25% за счет персонализированного обучения
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Готовы улучшить качество чатов?</h2>
            <p className={styles.ctaSubtitle}>
              Получите бесплатную демонстрацию системы проверки чатов и 
              узнайте, как она может повысить качество обслуживания клиентов
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

export default ChatCheckerPage; 