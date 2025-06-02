import React from 'react';
import styles from './ReviewsPage.module.css';

export const ReviewsPage = () => {
  const reviews = [
    {
      id: 1,
      name: 'Алексей Смирнов',
      company: 'ООО "Онлайн Ритейл"',
      position: 'Директор по маркетингу',
      text: 'Благодаря внедрению AI-ботов от QodeQ мы смогли повысить конверсию на 38% и сократить расходы на службу поддержки на 42%. Клиенты отмечают, что качество обслуживания стало даже лучше, чем с живыми операторами.',
      rating: 5,
      photo: '👨‍💼'
    },
    {
      id: 2,
      name: 'Екатерина Иванова',
      company: 'E-commerce платформа "ShopNow"',
      position: 'CEO',
      text: 'Мы интегрировали голосовых ботов QodeQ в нашу систему обзвона клиентов. Результат превзошел все ожидания — рост возврата клиентов на 45%, увеличение среднего чека на 23%. Рекомендую!',
      rating: 5,
      photo: '👩‍💼'
    },
    {
      id: 3,
      name: 'Дмитрий Козлов',
      company: 'Финтех стартап "FinanceAI"',
      position: 'CTO',
      text: 'Внедрили ботов QodeQ для автоматизации первичных консультаций клиентов. Технология распознавания речи и естественного языка на высоте. Клиенты даже не замечают, что общаются с ботом.',
      rating: 5,
      photo: '👨‍💻'
    },
    {
      id: 4,
      name: 'Олег Петров',
      company: 'Сеть магазинов "ТехноМир"',
      position: 'Руководитель отдела продаж',
      text: 'Сначала скептически относился к идее замены операторов ботами, но после внедрения системы QodeQ был приятно удивлен. Боты работают 24/7, не устают и всегда вежливы с клиентами. Продажи выросли на 32%.',
      rating: 4,
      photo: '👨‍🔧'
    },
    {
      id: 5,
      name: 'Мария Соколова',
      company: 'Туристическое агентство "TravelPlus"',
      position: 'Директор по работе с клиентами',
      text: 'Отличное решение для нашего бизнеса. Боты QodeQ обрабатывают базовые запросы клиентов, оставляя сложные случаи для живых операторов. Это позволило нам масштабировать бизнес без увеличения штата.',
      rating: 5,
      photo: '👩‍✈️'
    },
    {
      id: 6,
      name: 'Андрей Васильев',
      company: 'B2B маркетплейс "BusinessConnect"',
      position: 'Руководитель службы поддержки',
      text: 'Интеграция заняла всего 2 дня, а результаты превзошли ожидания. Особенно ценно то, что система постоянно обучается и становится лучше со временем.',
      rating: 5,
      photo: '👨‍🚀'
    }
  ];

  return (
    <div className={styles.reviewsPage}>
      <div className={styles.heroSection}>
        <h1>Отзывы наших клиентов</h1>
        <p className={styles.subtitle}>Узнайте, что говорят о нас компании, которые уже используют наши AI-решения</p>
      </div>

      <div className={styles.container}>
        <div className={styles.stats}>
          <div className={styles.statItem}>
            <div className={styles.statValue}>98%</div>
            <div className={styles.statLabel}>удовлетворенность клиентов</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statValue}>+42%</div>
            <div className={styles.statLabel}>средний рост конверсии</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statValue}>24/7</div>
            <div className={styles.statLabel}>круглосуточная поддержка</div>
          </div>
        </div>

        <div className={styles.reviewsGrid}>
          {reviews.map(review => (
            <div key={review.id} className={styles.reviewCard}>
              <div className={styles.reviewHeader}>
                <div className={styles.reviewerPhoto}>{review.photo}</div>
                <div className={styles.reviewerInfo}>
                  <h3>{review.name}</h3>
                  <p className={styles.position}>{review.position}</p>
                  <p className={styles.company}>{review.company}</p>
                </div>
              </div>
              <div className={styles.reviewRating}>
                {'★'.repeat(review.rating)}
                {'☆'.repeat(5 - review.rating)}
              </div>
              <p className={styles.reviewText}>{review.text}</p>
            </div>
          ))}
        </div>

        <div className={styles.callToAction}>
          <h2>Готовы увидеть результаты для своего бизнеса?</h2>
          <p>Более 500 компаний уже используют наши AI-решения и повышают свою прибыль</p>
          <button className={styles.ctaButton}>Получить демо-доступ</button>
        </div>
      </div>
    </div>
  );
}; 