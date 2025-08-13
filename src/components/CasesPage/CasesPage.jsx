import React from 'react';
import styles from './CasesPage.module.css';
import ScrollContainer from '../ScrollContainer/ScrollContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faRobot,
  faPhone,
  faHeadset,
  faEnvelope,
  faShieldAlt,
  faChartLine,
  faClock,
  faDollarSign,
  faRocket,
  faArrowRight,
  faCheckCircle,
  faLightbulb,
  faBullseye,
  faArrowTrendUp,
  faShoppingCart
} from '@fortawesome/free-solid-svg-icons';

const CasesPage = () => {
  return (
    <ScrollContainer>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroBackground}>
          <div className={styles.gradientOrb}></div>
          <div className={styles.gradientOrb}></div>
          <div className={styles.gradientOrb}></div>
          <div className={styles.gradientOrb}></div>
          <div className={styles.gradientOrb}></div>
        </div>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              <FontAwesomeIcon icon={faChartLine} />
              <span>Результаты</span>
            </div>
            <h1 className={styles.heroTitle}>
              Результаты внедрения AI-решений
            </h1>
            <p className={styles.heroSubtitle}>
              Ключевые метрики и сравнения эффективности до и после внедрения искусственного интеллекта
            </p>
            <div className={styles.heroStats}>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>250x</div>
                <div className={styles.statLabel}>Быстрее</div>
                <div className={styles.statDescription}>Обработка запросов</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>80%</div>
                <div className={styles.statLabel}>Автоматизация</div>
                <div className={styles.statDescription}>Процессов</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>$500K+</div>
                <div className={styles.statLabel}>Экономия</div>
                <div className={styles.statDescription}>В год на компанию</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics Section */}
      <section className={styles.metricsSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Ключевые показатели эффективности</h2>
          <div className={styles.metricsGrid}>
            {keyMetrics.map((category, index) => (
              <div key={index} className={styles.metricCategory}>
                <div className={styles.categoryHeader}>
                  <FontAwesomeIcon icon={category.icon} />
                  <h3>{category.category}</h3>
                </div>
                <div className={styles.metricsList}>
                  {category.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className={styles.metricItem}>
                      <div className={styles.metricLabel}>{metric.label}</div>
                      <div className={styles.metricComparison}>
                        <span className={styles.before}>{metric.before}</span>
                        <FontAwesomeIcon icon={faArrowRight} />
                        <span className={styles.after}>{metric.after}</span>
                      </div>
                      <div className={styles.improvement}>{metric.improvement}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Results Section */}
      <section className={styles.industrySection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Результаты по отраслям</h2>
          <div className={styles.industryGrid}>
            {industryResults.map((industry, index) => (
              <div key={index} className={styles.industryCard}>
                <div className={styles.industryHeader}>
                  <FontAwesomeIcon icon={industry.icon} />
                  <h3>{industry.industry}</h3>
                </div>
                <ul className={styles.resultsList}>
                  {industry.keyResults.map((result, resultIndex) => (
                    <li key={resultIndex} className={styles.resultItem}>
                      <FontAwesomeIcon icon={faCheckCircle} />
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className={styles.summarySection}>
        <div className={styles.container}>
          <div className={styles.summaryContent}>
            <h2>Общие результаты внедрения AI-решений</h2>
            <div className={styles.summaryGrid}>
              <div className={styles.summaryItem}>
                <FontAwesomeIcon icon={faArrowTrendUp} />
                <h3>Скорость</h3>
                <p>В среднем в <strong>250 раз быстрее</strong> обработка запросов</p>
              </div>
              <div className={styles.summaryItem}>
                <FontAwesomeIcon icon={faBullseye} />
                <h3>Автоматизация</h3>
                <p>До <strong>80% процессов</strong> полностью автоматизировано</p>
              </div>
              <div className={styles.summaryItem}>
                <FontAwesomeIcon icon={faDollarSign} />
                <h3>Экономия</h3>
                <p>Средняя экономия <strong>$500K+ в год</strong> на компанию</p>
              </div>
              <div className={styles.summaryItem}>
                <FontAwesomeIcon icon={faLightbulb} />
                <h3>ROI</h3>
                <p>Окупаемость проекта за <strong>2-3 месяца</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaBackground}>
          <div className={styles.gradientOrb}></div>
          <div className={styles.gradientOrb}></div>
        </div>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <div className={styles.ctaHeader}>
              <h2 className={styles.ctaTitle}>Готовы получить такие же результаты?</h2>
              <p className={styles.ctaSubtitle}>
                Внедрите AI-решения в ваш бизнес и начните экономить время и деньги уже сегодня
              </p>
            </div>
            <div className={styles.ctaFeatures}>
              <div className={styles.ctaFeature}>
                <FontAwesomeIcon icon={faCheckCircle} />
                <span>Быстрое внедрение за 2-6 недель</span>
              </div>
              <div className={styles.ctaFeature}>
                <FontAwesomeIcon icon={faCheckCircle} />
                <span>Гарантированный ROI 280-420%</span>
              </div>
              <div className={styles.ctaFeature}>
                <FontAwesomeIcon icon={faCheckCircle} />
                <span>Техническая поддержка 24/7</span>
              </div>
            </div>
            <div className={styles.ctaButtons}>
              <button className={styles.primaryButton}>
                <FontAwesomeIcon icon={faRocket} />
                <span>Запросить демо</span>
              </button>
              <button className={styles.secondaryButton}>
                <FontAwesomeIcon icon={faPhone} />
                <span>Консультация</span>
              </button>
            </div>
            <div className={styles.ctaStats}>
              <div className={styles.ctaStat}>
                <div className={styles.ctaStatNumber}>500+</div>
                <div className={styles.ctaStatLabel}>Внедрений</div>
              </div>
              <div className={styles.ctaStat}>
                <div className={styles.ctaStatNumber}>98%</div>
                <div className={styles.ctaStatLabel}>Успешность</div>
              </div>
              <div className={styles.ctaStat}>
                <div className={styles.ctaStatNumber}>24/7</div>
                <div className={styles.ctaStatLabel}>Поддержка</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollContainer>
  );
};

// Данные для ключевых метрик
const keyMetrics = [
  {
    category: 'Скорость обработки',
    icon: faClock,
    metrics: [
      { label: 'Время ответа', before: '2+ часа', after: '30 секунд', improvement: 'в 240 раз быстрее' },
      { label: 'Обработка заявок', before: '3+ дня', after: '15 минут', improvement: 'в 288 раз быстрее' },
      { label: 'Email ответы', before: '24 часа', after: '5 минут', improvement: 'в 288 раз быстрее' },
      { label: 'Время внедрения', before: '6-12 месяцев', after: '2-6 недель', improvement: 'в 8-12 раз быстрее' }
    ]
  },
  {
    category: 'Автоматизация',
    icon: faRobot,
    metrics: [
      { label: 'Чат-запросы', before: '0%', after: '80%', improvement: '+80% автоматизация' },
      { label: 'Звонки', before: '0%', after: '75%', improvement: '+75% автоматизация' },
      { label: 'Email', before: '0%', after: '70%', improvement: '+70% автоматизация' },
      { label: 'Проверка качества', before: '10-20%', after: '100%', improvement: 'полный контроль' }
    ]
  },
  {
    category: 'Экономия и ROI',
    icon: faDollarSign,
    metrics: [
      { label: 'Экономия на поддержке', before: '$0', after: '$45,000/мес', improvement: '+$540,000/год' },
      { label: 'Экономия на контроле', before: '$0', after: '$120,000/год', improvement: '-75% затрат' },
      { label: 'Операционные расходы', before: '$0', after: '$2.1M/год', improvement: '-45% расходов' },
      { label: 'ROI', before: '0%', after: '280-420%', improvement: 'окупаемость за 2-3 месяца' }
    ]
  },
  {
    category: 'Качество и эффективность',
    icon: faChartLine,
    metrics: [
      { label: 'Удовлетворенность клиентов', before: '45%', after: '80%', improvement: '+78%' },
      { label: 'Качество обслуживания', before: '60%', after: '99%', improvement: '+65%' },
      { label: 'Точность оценки рисков', before: '78%', after: '94%', improvement: '+16%' },
      { label: 'Качество ответов', before: '70%', after: '95%', improvement: '+60%' }
    ]
  }
];

// Данные для результатов по отраслям
const industryResults = [
  {
    industry: 'E-commerce',
    icon: faShoppingCart,
    keyResults: [
      '1000+ запросов в день → 80% автоматизация',
      'Время ответа: 2+ часа → 30 секунд',
      'Экономия: $45,000/мес',
      'ROI: 340% за 6 месяцев'
    ]
  },
  {
    industry: 'Телеком',
    icon: faPhone,
    keyResults: [
      '5000+ звонков в день → 100% проверка качества',
      'Качество: 60% → 99%',
      'Экономия: $120,000/год',
      'ROI: 280% за 8 месяцев'
    ]
  },
  {
    industry: 'Финансы',
    icon: faShieldAlt,
    keyResults: [
      '200+ заявок в день → 15 минут обработка',
      'Точность: 78% → 94%',
      'Экономия: $2.1M/год',
      'ROI: 420% за 12 месяцев'
    ]
  },
  {
    industry: 'Страхование',
    icon: faHeadset,
    keyResults: [
      '800+ звонков в день → 75% автоматизация',
      'Время обработки: 2 дня → 4 часа',
      'Экономия: $85,000/мес',
      'ROI: 310% за 9 месяцев'
    ]
  },
  {
    industry: 'Логистика',
    icon: faEnvelope,
    keyResults: [
      '500+ email в день → 70% автоматизация',
      'Время ответа: 24 часа → 5 минут',
      'Экономия: $32,000/мес',
      'ROI: 280% за 6 месяцев'
    ]
  },
  {
    industry: 'IT-технологии',
    icon: faRobot,
    keyResults: [
      '300+ чатов в день → 100% проверка качества',
      'Качество ответов: 70% → 95%',
      'Время обучения: 3 месяца → 2 недели',
      'ROI: 250% за 7 месяцев'
    ]
  }
];

export default CasesPage; 
