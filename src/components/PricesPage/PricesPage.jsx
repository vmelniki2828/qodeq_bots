import React, { useState } from 'react';
import styles from './PricesPage.module.css';
import ScrollContainer from '../ScrollContainer/ScrollContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCheck, 
  faTimes, 
  faRocket, 
  faStar,
  faUsers,
  faChartLine,
  faDollarSign,
  faHeadset,
  faCheckCircle
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
      answer: 'Да, в любое время с автоматическим пересчетом'
    },
    {
      question: 'Какая поддержка включена?',
      answer: 'Email для Старт, чат для Бизнес, телефон для Enterprise'
    }
  ];

  return (
    <ScrollContainer>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroBackground}>
          <div className={styles.gradientOrb}></div>
          <div className={styles.gradientOrb}></div>
          <div className={styles.gradientOrb}></div>
        </div>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              <FontAwesomeIcon icon={faDollarSign} />
              <span>Тарифы</span>
            </div>
            <h1 className={styles.heroTitle}>
              Прозрачные цены для вашего бизнеса
            </h1>
            <p className={styles.heroSubtitle}>
              Выберите оптимальный план и начните экономить время и деньги уже сегодня. Все тарифы включают пробный период 14 дней.
            </p>
            <div className={styles.heroStats}>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>14 дней</div>
                <div className={styles.statLabel}>Пробный период</div>
                <div className={styles.statDescription}>Бесплатно для всех планов</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>40%</div>
                <div className={styles.statLabel}>Рост прибыли</div>
                <div className={styles.statDescription}>В среднем по проектам</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>80%</div>
                <div className={styles.statLabel}>Снижение затрат</div>
                <div className={styles.statDescription}>На операционные процессы</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className={styles.pricingSection}>
        <div className={styles.heroBackground}>
          <div className={styles.gradientOrb}></div>
          <div className={styles.gradientOrb}></div>
          <div className={styles.gradientOrb}></div>
        </div>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Выберите свой план</h2>
            <p className={styles.sectionSubtitle}>
              Все планы включают базовый функционал и масштабируются под ваши потребности
            </p>
          </div>
          
          <div className={styles.billingToggle}>
            <button 
              className={`${styles.toggleButton} ${billingPeriod === 'monthly' ? styles.active : ''}`}
              onClick={() => setBillingPeriod('monthly')}
            >
              Ежемесячно
            </button>
            <button 
              className={`${styles.toggleButton} ${billingPeriod === 'yearly' ? styles.active : ''}`}
              onClick={() => setBillingPeriod('yearly')}
            >
              Ежегодно
              <span className={styles.savings}>Экономия 20%</span>
            </button>
          </div>

          <div className={styles.pricingGrid}>
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`${styles.pricingCard} ${plan.featured ? styles.featured : ''}`}>
                {plan.featured && (
                  <div className={styles.featuredBadge}>
                    <FontAwesomeIcon icon={faStar} />
                    <span>Популярный</span>
                  </div>
                )}
                
                <div className={styles.planHeader}>
                  <h3 className={styles.planName}>{plan.name}</h3>
                  <p className={styles.planDescription}>{plan.description}</p>
                  <div className={styles.planPrice}>
                    <span className={styles.currency}>₽</span>
                    <span className={styles.amount}>
                      {billingPeriod === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                    </span>
                    <span className={styles.period}>
                      /{billingPeriod === 'monthly' ? 'мес' : 'год'}
                    </span>
                  </div>
                </div>

                <div className={styles.planFeatures}>
                  <h4>Что включено:</h4>
                  <ul>
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>
                        <FontAwesomeIcon icon={faCheck} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {plan.notIncluded && (
                    <>
                      <h4>Не включено:</h4>
                      <ul className={styles.notIncluded}>
                        {plan.notIncluded.map((feature, featureIndex) => (
                          <li key={featureIndex}>
                            <FontAwesomeIcon icon={faTimes} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>

                <button className={styles.planButton}>
                  <FontAwesomeIcon icon={faRocket} />
                  <span>Выбрать план</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KPI Section */}
      <section className={styles.kpiSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Результаты наших клиентов</h2>
            <p className={styles.sectionSubtitle}>
              Посмотрите, каких результатов достигают компании с нашими AI-решениями
            </p>
          </div>
          
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
        <div className={styles.heroBackground}>
          <div className={styles.gradientOrb}></div>
          <div className={styles.gradientOrb}></div>
          <div className={styles.gradientOrb}></div>
        </div>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Часто задаваемые вопросы</h2>
            <p className={styles.sectionSubtitle}>
              Ответы на самые популярные вопросы о наших тарифах и услугах
            </p>
          </div>
          
          <div className={styles.faqGrid}>
            {faqData.map((faq, index) => (
              <div key={index} className={styles.faqCard}>
                <h3 className={styles.faqQuestion}>{faq.question}</h3>
                <p className={styles.faqAnswer}>{faq.answer}</p>
              </div>
            ))}
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
              <h2 className={styles.ctaTitle}>Готовы начать?</h2>
              <p className={styles.ctaSubtitle}>
                Выберите план, который подходит вашему бизнесу, и начните экономить уже сегодня
              </p>
            </div>
            <div className={styles.ctaFeatures}>
              <div className={styles.ctaFeature}>
                <FontAwesomeIcon icon={faCheckCircle} />
                <span>14 дней бесплатно</span>
              </div>
              <div className={styles.ctaFeature}>
                <FontAwesomeIcon icon={faCheckCircle} />
                <span>Без скрытых платежей</span>
              </div>
              <div className={styles.ctaFeature}>
                <FontAwesomeIcon icon={faCheckCircle} />
                <span>Отмена в любое время</span>
              </div>
            </div>
            <div className={styles.ctaButtons}>
              <button className={styles.primaryButton}>
                <FontAwesomeIcon icon={faRocket} />
                <span>Начать бесплатно</span>
              </button>
              <button className={styles.secondaryButton}>
                <FontAwesomeIcon icon={faHeadset} />
                <span>Консультация</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </ScrollContainer>
  );
};

export default PricesPage; 