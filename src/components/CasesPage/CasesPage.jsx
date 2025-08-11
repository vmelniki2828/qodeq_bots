import React, { useState } from 'react';
import styles from './CasesPage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFilter, 
  faArrowRight,
  faRobot,
  faPhone,
  faHeadset,
  faEnvelope,
  faShieldAlt,
} from '@fortawesome/free-solid-svg-icons';

const CasesPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const cases = [
    {
      id: 1,
      title: 'E-commerce компания',
      product: 'chat-bot',
      industry: 'retail',
      result: 'Сократили обработку платежей с 8 часов до 20 минут',
      savings: '80%',
      timeReduction: 'x10',
      description: 'Внедрили чат-бота для обработки заказов и платежей, что позволило значительно ускорить процесс обслуживания клиентов.',
      icon: faRobot
    },
    {
      id: 2,
      title: 'Банковский сектор',
      product: 'call-bot',
      industry: 'finance',
      result: 'Снизили нагрузку на колл-центр на 70%',
      savings: '70%',
      timeReduction: '24/7',
      description: 'Автоматизировали обработку входящих звонков, что позволило операторам фокусироваться на сложных запросах.',
      icon: faPhone
    },
    {
      id: 3,
      title: 'Страховая компания',
      product: 'call-checker',
      industry: 'insurance',
      result: 'Повысили качество обслуживания на 45%',
      savings: '45%',
      timeReduction: 'x5',
      description: 'Внедрили автоматическую проверку качества звонков, что привело к значительному улучшению сервиса.',
      icon: faHeadset
    },
    {
      id: 4,
      title: 'IT-компания',
      product: 'chat-checker',
      industry: 'technology',
      result: 'Сократили время ответа в чатах на 60%',
      savings: '60%',
      timeReduction: 'x3',
      description: 'Автоматизировали анализ чатов и улучшили качество ответов операторов.',
      icon: faRobot
    },
    {
      id: 5,
      title: 'Логистическая компания',
      product: 'email-bot',
      industry: 'logistics',
      result: 'Автоматизировали 70% email-обращений',
      savings: '70%',
      timeReduction: '5 мин',
      description: 'Внедрили автоответчик на почту, что позволило мгновенно отвечать на типовые запросы клиентов.',
      icon: faEnvelope
    },
    {
      id: 6,
      title: 'Финансовая компания',
      product: 'antifraud',
      industry: 'finance',
      result: 'Предотвратили потери на $2.5 млн',
      savings: '$2.5M',
      timeReduction: '99.8%',
      description: 'Внедрили систему защиты от мошенничества, что позволило предотвратить значительные финансовые потери.',
      icon: faShieldAlt
    }
  ];

  const filters = [
    { id: 'all', label: 'Все кейсы' },
    { id: 'chat-bot', label: 'Чат-боты' },
    { id: 'call-bot', label: 'Голосовые боты' },
    { id: 'call-checker', label: 'Проверка звонков' },
    { id: 'chat-checker', label: 'Проверка чатов' },
    { id: 'email-bot', label: 'Email автоответчик' },
    { id: 'antifraud', label: 'AntiFraud' }
  ];

  const filteredCases = activeFilter === 'all' 
    ? cases 
    : cases.filter(caseItem => caseItem.product === activeFilter);

  return (
    <div className={styles.casesPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Кейсы успеха
            </h1>
            <p className={styles.heroSubtitle}>
              Реальные результаты наших клиентов. Узнайте, как AI-решения помогли компаниям увеличить прибыль и оптимизировать процессы.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className={styles.filtersSection}>
        <div className={styles.container}>
          <div className={styles.filtersContainer}>
            <div className={styles.filterLabel}>
              <FontAwesomeIcon icon={faFilter} />
              <span>Фильтр по продуктам:</span>
            </div>
            <div className={styles.filters}>
              {filters.map(filter => (
                <button
                  key={filter.id}
                  className={`${styles.filterButton} ${activeFilter === filter.id ? styles.active : ''}`}
                  onClick={() => setActiveFilter(filter.id)}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className={styles.casesSection}>
        <div className={styles.container}>
          <div className={styles.casesGrid}>
            {filteredCases.map(caseItem => (
              <div key={caseItem.id} className={styles.caseCard}>
                <div className={styles.caseHeader}>
                  <div className={styles.caseIcon}>
                    <FontAwesomeIcon icon={caseItem.icon} />
                  </div>
                  <div className={styles.caseTitle}>
                    <h3>{caseItem.title}</h3>
                    <span className={styles.caseProduct}>
                      {filters.find(f => f.id === caseItem.product)?.label}
                    </span>
                  </div>
                </div>
                
                <div className={styles.caseResult}>
                  <h4>Результат:</h4>
                  <p>{caseItem.result}</p>
                </div>

                <div className={styles.caseStats}>
                  <div className={styles.stat}>
                    <span className={styles.statLabel}>Экономия:</span>
                    <span className={styles.statValue}>{caseItem.savings}</span>
                  </div>
                  <div className={styles.stat}>
                    <span className={styles.statLabel}>Ускорение:</span>
                    <span className={styles.statValue}>{caseItem.timeReduction}</span>
                  </div>
                </div>

                <div className={styles.caseDescription}>
                  <p>{caseItem.description}</p>
                </div>

                <button className={styles.caseButton}>
                  Хочу так же
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2>Готовы получить такие же результаты?</h2>
            <p>Свяжитесь с нами для бесплатной консультации и узнайте, как AI-решения могут оптимизировать ваш бизнес</p>
            <div className={styles.ctaButtons}>
              <button className={styles.primaryButton}>
                Запросить консультацию
              </button>
              <button className={styles.secondaryButton}>
                Посмотреть демо
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CasesPage; 