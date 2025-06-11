import React from 'react';
import styles from './ReviewsPage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

const reviews = [
  {
    id: 1,
    name: 'Александр Петров',
    company: 'МедТехСервис',
    position: 'Директор по маркетингу',
    text: 'Внедрение AI-бота позволило нам автоматизировать обработку входящих запросов на 73%. Теперь наши менеджеры сконцентрированы на более сложных задачах, а конверсия выросла на 42%.',
    rating: 5,
    photo: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    id: 2,
    name: 'Елена Соколова',
    company: 'ЭкоСтройМаркет',
    position: 'Руководитель отдела продаж',
    text: 'Бот для проверки звонков выявил ряд системных ошибок наших менеджеров. После корректировки скриптов продажи выросли на 23% за первый месяц.',
    rating: 4.5,
    photo: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    id: 3,
    name: 'Игорь Васильев',
    company: 'АвтоДилер',
    position: 'Генеральный директор',
    text: 'Клиенты отмечают качество обслуживания нашим чат-ботом, который отвечает на вопросы 24/7. Количество пропущенных обращений сократилось до нуля.',
    rating: 5,
    photo: 'https://randomuser.me/api/portraits/men/22.jpg'
  },
  {
    id: 4,
    name: 'Мария Козлова',
    company: 'Финансовые решения',
    position: 'Директор по работе с клиентами',
    text: 'Автоматизация звонков помогла нам обрабатывать в 5 раз больше лидов при том же штате. ROI внедрения составил 340% за первые полгода.',
    rating: 5,
    photo: 'https://randomuser.me/api/portraits/women/28.jpg'
  },
  {
    id: 5,
    name: 'Дмитрий Орлов',
    company: 'IT Solutions',
    position: 'CEO',
    text: 'Интеграция прошла быстро и гладко. Техническая поддержка работает оперативно. Результатами довольны - бот окупился за 3 месяца.',
    rating: 4.5,
    photo: 'https://randomuser.me/api/portraits/men/52.jpg'
  },
  {
    id: 6,
    name: 'Анна Кузнецова',
    company: 'Образовательный центр',
    position: 'Маркетолог',
    text: 'Чат-бот помог нам собирать и квалифицировать лиды круглосуточно. Особенно ценно, что он интегрируется с нашей CRM-системой.',
    rating: 4.5,
    photo: 'https://randomuser.me/api/portraits/women/12.jpg'
  },
];

const ReviewsPage = () => {
  const renderRating = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FontAwesomeIcon key={`star-${i}`} icon={faStar} className={styles.starIcon} />);
    }
    
    if (hasHalfStar) {
      stars.push(<FontAwesomeIcon key="half-star" icon={faStarHalfAlt} className={styles.starIcon} />);
    }
    
    return stars;
  };

  return (
    <div className={styles.reviewsPage}>
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <h1 className={styles.title}>Отзывы клиентов</h1>
          <p className={styles.subtitle}>
            Узнайте, как наши решения помогают бизнесу повышать эффективность и увеличивать продажи
          </p>
        </div>
      </section>

      <section className={styles.statsSection}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>98%</span>
              <span className={styles.statLabel}>Уровень удовлетворенности</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>+42%</span>
              <span className={styles.statLabel}>Средний рост конверсии</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>24/7</span>
              <span className={styles.statLabel}>Поддержка клиентов</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.reviewsSection}>
        <div className={styles.container}>
          <div className={styles.reviewsGrid}>
            {reviews.map(review => (
              <div key={review.id} className={styles.reviewCard}>
                <div className={styles.reviewHeader}>
                  <img src={review.photo} alt={review.name} className={styles.reviewerPhoto} />
                  <div className={styles.reviewerInfo}>
                    <h3 className={styles.reviewerName}>{review.name}</h3>
                    <p className={styles.reviewerPosition}>{review.position}</p>
                    <p className={styles.reviewerCompany}>{review.company}</p>
                    <div className={styles.rating}>
                      {renderRating(review.rating)}
                    </div>
                  </div>
                </div>
                <p className={styles.reviewText}>{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Готовы увидеть результаты для своего бизнеса?</h2>
            <p className={styles.ctaSubtitle}>Более 500 компаний уже используют наши решения</p>
            <button className={styles.ctaButton}>Запросить демо</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReviewsPage; 