import React from 'react';
import styles from './TechnologiesPage.module.css';

export const TechnologiesPage = () => {
  return (
    <div className={styles.technologiesPage}>
      <div className={styles.heroSection}>
        <h1>Наши технологии</h1>
        <p className={styles.subtitle}>Инновационные AI-решения для автоматизации коммуникаций с клиентами</p>
      </div>

      <div className={styles.container}>
        <section className={styles.mainTechnology}>
          <div className={styles.techContent}>
            <h2>Искусственный интеллект на страже вашего бизнеса</h2>
            <p>
              Наша платформа использует передовые технологии искусственного интеллекта и машинного обучения для создания ботов, неотличимых от живых операторов. Мы обеспечиваем высочайшее качество обслуживания клиентов 24/7 без перерывов и выходных.
            </p>
            <div className={styles.techStats}>
              <div className={styles.techStat}>
                <span className={styles.techStatValue}>98.7%</span>
                <span className={styles.techStatLabel}>точность распознавания речи</span>
              </div>
              <div className={styles.techStat}>
                <span className={styles.techStatValue}>31</span>
                <span className={styles.techStatLabel}>поддерживаемых языков</span>
              </div>
              <div className={styles.techStat}>
                <span className={styles.techStatValue}>0.3с</span>
                <span className={styles.techStatLabel}>среднее время ответа</span>
              </div>
            </div>
          </div>
          <div className={styles.techImage}>
            <div className={styles.aiVisualization}></div>
          </div>
        </section>

        <section className={styles.techGrid}>
          <h2 className={styles.sectionTitle}>Ключевые технологии</h2>

          <div className={styles.techCards}>
            <div className={styles.techCard}>
              <div className={styles.techCardIcon}>🔊</div>
              <h3>Распознавание речи</h3>
              <p>Наши алгоритмы распознают речь с точностью до 98.7%, учитывая акценты, диалекты и фоновые шумы.</p>
            </div>

            <div className={styles.techCard}>
              <div className={styles.techCardIcon}>💬</div>
              <h3>Обработка естественного языка</h3>
              <p>Система понимает контекст, эмоции и намерения клиента, обеспечивая релевантные ответы.</p>
            </div>

            <div className={styles.techCard}>
              <div className={styles.techCardIcon}>🧠</div>
              <h3>Машинное обучение</h3>
              <p>Боты постоянно обучаются на основе новых диалогов, становясь умнее с каждым разговором.</p>
            </div>

            <div className={styles.techCard}>
              <div className={styles.techCardIcon}>🔄</div>
              <h3>Адаптивные сценарии</h3>
              <p>Диалоговые сценарии адаптируются к ходу разговора, обеспечивая естественную коммуникацию.</p>
            </div>

            <div className={styles.techCard}>
              <div className={styles.techCardIcon}>📊</div>
              <h3>Аналитика в реальном времени</h3>
              <p>Подробная аналитика и метрики эффективности работы ботов доступны в режиме реального времени.</p>
            </div>

            <div className={styles.techCard}>
              <div className={styles.techCardIcon}>🔌</div>
              <h3>Простая интеграция</h3>
              <p>API и готовые модули для быстрой интеграции с CRM, колл-центрами и мессенджерами.</p>
            </div>
          </div>
        </section>

        <section className={styles.techProcess}>
          <h2 className={styles.sectionTitle}>Как это работает</h2>
          
          <div className={styles.processList}>
            <div className={styles.processItem}>
              <div className={styles.processNumber}>1</div>
              <div className={styles.processContent}>
                <h3>Разработка индивидуального решения</h3>
                <p>Мы анализируем потребности вашего бизнеса и создаем персонализированное решение с учетом специфики отрасли.</p>
              </div>
            </div>
            
            <div className={styles.processItem}>
              <div className={styles.processNumber}>2</div>
              <div className={styles.processContent}>
                <h3>Интеграция и настройка</h3>
                <p>Интегрируем систему с вашей инфраструктурой и настраиваем сценарии взаимодействия с клиентами.</p>
              </div>
            </div>
            
            <div className={styles.processItem}>
              <div className={styles.processNumber}>3</div>
              <div className={styles.processContent}>
                <h3>Обучение системы</h3>
                <p>Обучаем AI-ботов на основе ваших данных, скриптов и стандартных ситуаций обслуживания клиентов.</p>
              </div>
            </div>
            
            <div className={styles.processItem}>
              <div className={styles.processNumber}>4</div>
              <div className={styles.processContent}>
                <h3>Запуск и мониторинг</h3>
                <p>Запускаем систему в работу и обеспечиваем постоянный мониторинг для оптимизации результатов.</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className={styles.callToAction}>
          <h2>Готовы внедрить AI-технологии в свой бизнес?</h2>
          <p>Получите консультацию и демонстрацию работы наших технологий</p>
          <div className={styles.ctaButtons}>
            <button className={styles.ctaButtonPrimary}>Заказать демо</button>
            <button className={styles.ctaButtonSecondary}>Подробнее о внедрении</button>
          </div>
        </section>
      </div>
    </div>
  );
}; 