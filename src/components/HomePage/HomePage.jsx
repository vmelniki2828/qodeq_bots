import React from 'react';
import styles from './HomePage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faRobot, 
  faComments, 
  faPhone, 
  faHeadset, 
  faChartLine, 
  faShieldAlt, 
  faUserTie
} from '@fortawesome/free-solid-svg-icons';

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Увеличьте выручку <span className={styles.highlight}>на 40%</span> <br />
              с помощью AI-ботов
            </h1>
            <p className={styles.heroSubtitle}>
              Автоматизируйте общение с клиентами, повышайте конверсию и снижайте нагрузку на операторов
            </p>
            <div className={styles.heroButtons}>
              <button className={styles.primaryButton}>
                Получить демо
              </button>
              <button className={styles.secondaryButton}>
                Узнать больше
              </button>
            </div>
          </div>
          <div className={styles.heroImage}>
            <div className={styles.imageWrapper}>
              <img src="/images/bot-hero.png" alt="AI Bot" className={styles.mainImage} />
              <div className={styles.statsCard}>
                <div className={styles.statIcon}>
                  <FontAwesomeIcon icon={faChartLine} />
                </div>
                <div className={styles.statContent}>
                  <span className={styles.statTitle}>+42%</span>
                  <span className={styles.statText}>Рост конверсии</span>
                </div>
              </div>
              <div className={styles.messageCard}>
                <div className={styles.messageIcon}>
                  <FontAwesomeIcon icon={faComments} />
                </div>
                <div className={styles.messageContent}>
                  <span className={styles.messageText}>Здравствуйте! Чем я могу помочь?</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.heroOverlay}></div>
      </section>

      {/* Products Section */}
      <section className={styles.productsSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Наши продукты</h2>
          <p className={styles.sectionSubtitle}>Полный комплекс AI-решений для вашего бизнеса</p>
          
          <div className={styles.productsGrid}>
            <div className={styles.productCard}>
              <div className={styles.productIcon}>
                <FontAwesomeIcon icon={faComments} />
              </div>
              <h3 className={styles.productTitle}>ЧАТ БОТ</h3>
              <p className={styles.productDescription}>
                Интеллектуальный чат-бот для вашего сайта и мессенджеров. Отвечает на вопросы клиентов 24/7, квалифицирует лиды и переводит на операторов только "теплых" клиентов.
              </p>
              <a href="/chat-bot" className={styles.productLink}>Подробнее</a>
            </div>
            
            <div className={styles.productCard}>
              <div className={styles.productIcon}>
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <h3 className={styles.productTitle}>ЗВОНИЛКА</h3>
              <p className={styles.productDescription}>
                Автоматизированная система исходящих звонков. Обзванивает клиентов с естественной речью, собирает обратную связь и назначает встречи.
              </p>
              <a href="/call-bot" className={styles.productLink}>Подробнее</a>
            </div>
            
            <div className={styles.productCard}>
              <div className={styles.productIcon}>
                <FontAwesomeIcon icon={faHeadset} />
              </div>
              <h3 className={styles.productTitle}>ПРОВЕРЯЛКА ЗВОНКОВ</h3>
              <p className={styles.productDescription}>
                Анализирует качество разговоров операторов, выявляет ошибки и помогает улучшить скрипты продаж на основе успешных кейсов.
              </p>
              <a href="/call-checker" className={styles.productLink}>Подробнее</a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={styles.benefitsSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Преимущества наших решений</h2>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <FontAwesomeIcon icon={faRobot} />
              </div>
              <h3 className={styles.benefitTitle}>Передовые AI-технологии</h3>
              <p className={styles.benefitDescription}>
                Используем последние достижения в области искусственного интеллекта и машинного обучения
              </p>
            </div>
            
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <FontAwesomeIcon icon={faChartLine} />
              </div>
              <h3 className={styles.benefitTitle}>Рост конверсии</h3>
              <p className={styles.benefitDescription}>
                В среднем наши клиенты отмечают рост конверсии на 30-50% в первые месяцы работы
              </p>
            </div>
            
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <FontAwesomeIcon icon={faShieldAlt} />
              </div>
              <h3 className={styles.benefitTitle}>Безопасность данных</h3>
              <p className={styles.benefitDescription}>
                Гарантируем конфиденциальность информации и соответствие всем стандартам безопасности
              </p>
            </div>
            
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <FontAwesomeIcon icon={faUserTie} />
              </div>
              <h3 className={styles.benefitTitle}>Индивидуальный подход</h3>
              <p className={styles.benefitDescription}>
                Адаптируем решения под ваш бизнес и особенности ваших клиентов
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Готовы увеличить продажи с помощью AI?</h2>
            <p className={styles.ctaSubtitle}>
              Закажите бесплатную демонстрацию и узнайте, как наши решения могут работать именно в вашем бизнесе
            </p>
            <button className={styles.ctaButton}>
              Получить демо
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 