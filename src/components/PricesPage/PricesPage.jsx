import React, { useState } from 'react';
import styles from './PricesPage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCheck, 
  faTimes, 
  faRocket, 
  faCrown, 
  faStar,
  faUsers,
  faChartLine,
} from '@fortawesome/free-solid-svg-icons';

const PricesPage = () => {
  const [billingPeriod, setBillingPeriod] = useState('monthly');

  const pricingPlans = [
    {
      name: 'Старт',
      description: 'Для малого бизнеса',
      monthlyPrice: '29',
      yearlyPrice: '290',
      features: [
        'Чат-бот до 1000 сообщений',
        'Базовая аналитика',
        'Email поддержка',
        'Интеграция с сайтом'
      ],
      notIncluded: [
        'Голосовые звонки',
        'Продвинутая аналитика',
        'Приоритетная поддержка'
      ]
    },
    {
      name: 'Бизнес',
      description: 'Для среднего бизнеса',
      monthlyPrice: '99',
      yearlyPrice: '990',
      featured: true,
      features: [
        'Все из Старт',
        'Голосовые звонки',
        'Продвинутая аналитика',
        'CRM интеграция',
        'Приоритетная поддержка',
        'Проверка качества'
      ],
      notIncluded: [
        'Индивидуальные настройки',
        'Dedicated менеджер'
      ]
    },
    {
      name: 'Enterprise',
      description: 'Для крупных компаний',
      monthlyPrice: '299',
      yearlyPrice: '2990',
      features: [
        'Все из Бизнес',
        'Индивидуальные настройки',
        'Dedicated менеджер',
        'API доступ',
        'Белый лейбл',
        'Обучение команды'
      ]
    }
  ];

  const kpiData = [
    {
      icon: faRocket,
      value: '40%',
      label: 'Рост прибыли'
    },
    {
      icon: faChartLine,
      value: '80%',
      label: 'Снижение затрат'
    },
    {
      icon: faUsers,
      value: '24/7',
      label: 'Автоматизация'
    },
    {
      icon: faStar,
      value: '95%',
      label: 'Удовлетворенность'
    }
  ];

  const faqData = [
    {
      question: 'Сколько времени на внедрение?',
      answer: 'От 2 до 4 недель в зависимости от сложности'
    },
    {
      question: 'Есть ли пробный период?',
      answer: 'Да, 14 дней бесплатно для всех планов'
    },
    {
      question: 'Можно ли изменить план?',
      answer: 'Да, в любое время с пересчетом стоимости'
    },
    {
      question: 'Какая поддержка включена?',
      answer: 'Email для Старт, чат для Бизнес, телефон для Enterprise'
    }
  ];

  return (
    <div className={styles.pricesPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroBackground}>
          <div className={styles.gradientOrb}></div>
          <div className={styles.gradientOrb}></div>
        </div>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              <FontAwesomeIcon icon={faCrown} />
              <span>Прозрачные цены</span>
            </div>
            <h1 className={styles.heroTitle}>
              Выберите план для вашего бизнеса
            </h1>
            <p className={styles.heroSubtitle}>
              Гибкие тарифы с возможностью масштабирования
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className={styles.pricingSection}>
        <div className={styles.container}>
          <div className={styles.billingToggle}>
            <button 
              className={`${styles.billingOption} ${billingPeriod === 'monthly' ? styles.active : ''}`}
              onClick={() => setBillingPeriod('monthly')}
            >
              Ежемесячно
            </button>
            <button 
              className={`${styles.billingOption} ${billingPeriod === 'yearly' ? styles.active : ''}`}
              onClick={() => setBillingPeriod('yearly')}
            >
              Ежегодно
              <span className={styles.discount}>-17%</span>
            </button>
          </div>

          <div className={styles.pricingGrid}>
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`${styles.pricingCard} ${plan.featured ? styles.featured : ''}`}>
                {plan.featured && (
                  <div className={styles.featuredBadge}>Популярный</div>
                )}
                
                <div className={styles.pricingHeader}>
                  <h3 className={styles.pricingName}>{plan.name}</h3>
                  <p className={styles.pricingDescription}>{plan.description}</p>
                </div>

                <div className={styles.pricingPrice}>
                  <span className={styles.priceAmount}>
                    {billingPeriod === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                  </span>
                  <span className={styles.priceCurrency}>₽</span>
                  <span className={styles.pricePeriod}>
                    /{billingPeriod === 'monthly' ? 'мес' : 'год'}
                  </span>
                </div>

                <div className={styles.pricingFeatures}>
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className={`${styles.featureItem} ${styles.available}`}>
                      <div className={`${styles.featureIcon} ${styles.available}`}>
                        <FontAwesomeIcon icon={faCheck} />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                  {plan.notIncluded && plan.notIncluded.map((feature, featureIndex) => (
                    <div key={featureIndex} className={`${styles.featureItem} ${styles.unavailable}`}>
                      <div className={`${styles.featureIcon} ${styles.unavailable}`}>
                        <FontAwesomeIcon icon={faTimes} />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <button className={styles.pricingButton}>
                  {plan.featured ? 'Начать бесплатно' : 'Выбрать план'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KPI Section */}
      <section className={styles.kpiSection}>
        <div className={styles.container}>
          <div className={styles.kpiGrid}>
            {kpiData.map((kpi, index) => (
              <div key={index} className={styles.kpiCard}>
                <div className={styles.kpiIcon}>
                  <FontAwesomeIcon icon={kpi.icon} />
                </div>
                <div className={styles.kpiValue}>{kpi.value}</div>
                <div className={styles.kpiLabel}>{kpi.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Частые вопросы</h2>
            <p className={styles.sectionSubtitle}>
              Ответы на популярные вопросы о наших услугах
            </p>
          </div>
          <div className={styles.faqGrid}>
            {faqData.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>{faq.question}</h3>
                <p className={styles.faqAnswer}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section className={styles.enterpriseSection}>
        <div className={styles.container}>
          <div className={styles.enterpriseContent}>
            <h2 className={styles.enterpriseTitle}>
              Нужно индивидуальное решение?
            </h2>
            <p className={styles.enterpriseSubtitle}>
              Создадим уникальный продукт под ваши задачи
            </p>
            <div className={styles.enterpriseForm}>
              <div className={styles.formRow}>
                <input 
                  type="text" 
                  placeholder="Имя" 
                  className={styles.formInput}
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  className={styles.formInput}
                />
              </div>
              <div className={styles.formRow}>
                <input 
                  type="tel" 
                  placeholder="Телефон" 
                  className={styles.formInput}
                />
                <input 
                  type="text" 
                  placeholder="Компания" 
                  className={styles.formInput}
                />
              </div>
              <textarea 
                placeholder="Опишите ваши задачи" 
                className={styles.formTextarea}
                rows="3"
              ></textarea>
              <button className={styles.enterpriseButton}>
                <FontAwesomeIcon icon={faRocket} />
                Получить предложение
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricesPage; 