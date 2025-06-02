import React from 'react';
import styles from './HomePage.module.css';

export const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            <span className={styles.highlight}>Повышаем доход</span> с клиентов минимум на <span className={styles.highlightPercent}>40%</span>
            <br />благодаря AI-ботам
          </h1>
          <p className={styles.subtitle}>
            Техническая платформа для удержания и возврата пользователей
            <br />в <span className={styles.highlight}>31 стране мира</span> на <span className={styles.highlight}>любых языках</span>
          </p>
          <div className={styles.ctaButtonGroup}>
            <button className={styles.ctaButton}>
              Получить демо-доступ
            </button>
            <button className={styles.secondaryButton}>
              Консультация
            </button>
          </div>
        </div>
        <div className={styles.heroImage}>
          <div className={styles.aiAnimation}></div>
        </div>
        <div className={styles.floatingElement1}></div>
        <div className={styles.floatingElement2}></div>
        <div className={styles.floatingElement3}></div>
      </div>

      <section className={styles.audioExamplesSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Прослушайте примеры разговоров с ботами</h2>
          <div className={styles.audioExamples}>
            <div className={styles.audioCard}>
              <div className={styles.audioCardHeader}>
                <div className={styles.audioCardIcon}>🤖</div>
                <h3>Голосовой бот</h3>
              </div>
              <p>Пример разговора с клиентом о новой услуге</p>
              <div className={styles.audioPlayer}>
                <div className={styles.audioControls}>
                  <button className={styles.playButton}>
                    <span className={styles.playIcon}>▶</span>
                  </button>
                  <div className={styles.audioProgress}>
                    <div className={styles.audioProgressBar}></div>
                  </div>
                  <span className={styles.audioDuration}>01:45</span>
                </div>
              </div>
            </div>
            <div className={styles.audioCard}>
              <div className={styles.audioCardHeader}>
                <div className={styles.audioCardIcon}>💬</div>
                <h3>Текстовый бот</h3>
              </div>
              <p>Пример диалога с решением проблемы клиента</p>
              <div className={styles.audioPlayer}>
                <div className={styles.audioControls}>
                  <button className={styles.playButton}>
                    <span className={styles.playIcon}>▶</span>
                  </button>
                  <div className={styles.audioProgress}>
                    <div className={styles.audioProgressBar}></div>
                  </div>
                  <span className={styles.audioDuration}>02:18</span>
                </div>
              </div>
            </div>
            <div className={styles.audioCard}>
              <div className={styles.audioCardHeader}>
                <div className={styles.audioCardIcon}>🔄</div>
                <h3>Возвращение клиента</h3>
              </div>
              <p>Пример успешного возврата ушедшего клиента</p>
              <div className={styles.audioPlayer}>
                <div className={styles.audioControls}>
                  <button className={styles.playButton}>
                    <span className={styles.playIcon}>▶</span>
                  </button>
                  <div className={styles.audioProgress}>
                    <div className={styles.audioProgressBar}></div>
                  </div>
                  <span className={styles.audioDuration}>01:23</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.channelsSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Многоканальное взаимодействие</h2>
          <p className={styles.channelsDescription}>
            Наши AI-боты легко интегрируются со всеми популярными каналами коммуникации
          </p>
          <div className={styles.channels}>
            <div className={styles.channel}>
              <div className={styles.channelIcon}>📱</div>
              <h3>Телефонные звонки</h3>
              <p>Голосовые боты для входящих и исходящих звонков</p>
            </div>
            <div className={styles.channel}>
              <div className={styles.channelIcon}>💬</div>
              <h3>Мессенджеры</h3>
              <p>WhatsApp, Telegram, Viber и другие</p>
            </div>
            <div className={styles.channel}>
              <div className={styles.channelIcon}>📧</div>
              <h3>Email</h3>
              <p>Автоматические ответы и follow-up письма</p>
            </div>
            <div className={styles.channel}>
              <div className={styles.channelIcon}>👥</div>
              <h3>Социальные сети</h3>
              <p>Instagram, Facebook, VK и другие</p>
            </div>
            <div className={styles.channel}>
              <div className={styles.channelIcon}>💻</div>
              <h3>Веб-чат</h3>
              <p>Интеграция на ваш сайт</p>
            </div>
            <div className={styles.channel}>
              <div className={styles.channelIcon}>🔄</div>
              <h3>CRM системы</h3>
              <p>Интеграция с любыми CRM</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.featuresSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Почему клиенты выбирают нас</h2>
          <div className={styles.features}>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>🚀</div>
              <h3>Рост конверсии на 40%</h3>
              <p>Доказанное увеличение продаж благодаря интеллектуальным AI-ботам</p>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>🌐</div>
              <h3>Поддержка 31 страны</h3>
              <p>Работаем в разных странах с учетом местной специфики</p>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>🔊</div>
              <h3>Естественная речь</h3>
              <p>Клиенты не отличают наших ботов от живых операторов</p>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>⚙️</div>
              <h3>Простая интеграция</h3>
              <p>Подключение к вашим системам за 1-3 дня</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Готовы повысить доход своего бизнеса?</h2>
            <p className={styles.ctaDescription}>Закажите демо-версию наших AI-ботов и убедитесь в эффективности сами</p>
            <button className={styles.ctaButton}>Заказать демо</button>
          </div>
        </div>
      </section>
    </div>
  );
}; 