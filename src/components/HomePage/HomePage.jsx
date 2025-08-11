import React from 'react';
import styles from './HomePage.module.css';
import ScrollContainer from '../ScrollContainer/ScrollContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  
  faComments, 
  faPhone, 
  faHeadset, 
  faChartLine, 
  faShieldAlt, 
  faCheckCircle,
  faClock,
  faDollarSign,
  faUsers,
  faRocket,
  faBrain,
  faChartBar,
  faPlay,
  faBuilding
} from '@fortawesome/free-solid-svg-icons';

const HomePage = () => {
  return (
    <ScrollContainer>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              <FontAwesomeIcon icon={faRocket} />
              <span>Инновационные AI-решения</span>
            </div>
            <h1 className={styles.heroTitle}>
              Трансформируйте ваш бизнес с помощью искусственного интеллекта
            </h1>
            <p className={styles.heroSubtitle}>
              Наши AI-решения автоматизируют рутинные задачи, анализируют данные в реальном времени и помогают принимать обоснованные решения. Получите конкурентное преимущество уже сегодня!
            </p>
            <div className={styles.heroStats}>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>+47%</div>
                <div className={styles.statLabel}>Рост прибыли</div>
                <div className={styles.statDescription}>в среднем по проектам</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>-83%</div>
                <div className={styles.statLabel}>Снижение затрат</div>
                <div className={styles.statDescription}>на операционные процессы</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>24/7</div>
                <div className={styles.statLabel}>Автоматизация</div>
                <div className={styles.statDescription}>без перерывов и выходных</div>
              </div>
            </div>
            <div className={styles.heroButtons}>
              <button className={styles.primaryButton}>
                <FontAwesomeIcon icon={faRocket} />
                Запустить проект
              </button>
              <button className={styles.secondaryButton}>
                <FontAwesomeIcon icon={faPlay} />
                Смотреть демо
              </button>
            </div>
          </div>
          <div className={styles.heroImage}>
            <div className={styles.imageWrapper}>
              <img src="/images/hero.png" alt="AI Solutions" className={styles.mainImage} />
              <div className={styles.floatingCard}>
                <FontAwesomeIcon icon={faBrain} />
                <span>AI-ассистент</span>
                <small>Умная обработка</small>
              </div>
              <div className={styles.floatingCard}>
                <FontAwesomeIcon icon={faChartBar} />
                <span>+47% прибыль</span>
                <small>Доказано на практике</small>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.heroBackground}>
          <div className={styles.gradientOrb}></div>
          <div className={styles.gradientOrb}></div>
          <div className={styles.gradientOrb}></div>
          <div className={styles.gradientOrb}></div>
          <div className={styles.gradientOrb}></div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={styles.benefitsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Почему ведущие компании выбирают наши AI-решения</h2>
            <p className={styles.sectionSubtitle}>
              Мы не просто внедряем технологии — мы создаем стратегические преимущества для вашего бизнеса
            </p>
          </div>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <FontAwesomeIcon icon={faBrain} />
              </div>
              <h3 className={styles.benefitTitle}>Интеллектуальная автоматизация</h3>
              <p className={styles.benefitDescription}>
                Наши AI-системы не просто выполняют задачи — они учатся на ваших данных, адаптируются к изменениям и постоянно улучшают качество работы. Получите автоматизацию, которая действительно понимает ваш бизнес.
              </p>
              <div className={styles.benefitFeatures}>
                <div className={styles.benefitFeature}>
                  <FontAwesomeIcon icon={faCheckCircle} />
                  <span>Машинное обучение в реальном времени</span>
                </div>
                <div className={styles.benefitFeature}>
                  <FontAwesomeIcon icon={faCheckCircle} />
                  <span>Адаптация к изменениям бизнеса</span>
                </div>
                <div className={styles.benefitFeature}>
                  <FontAwesomeIcon icon={faCheckCircle} />
                  <span>Постоянное улучшение алгоритмов</span>
                </div>
              </div>
            </div>
            
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <FontAwesomeIcon icon={faChartLine} />
              </div>
              <h3 className={styles.benefitTitle}>Измеримые результаты</h3>
              <p className={styles.benefitDescription}>
                Каждый проект сопровождается детальной аналитикой и отчетностью. Вы увидите реальные цифры: рост прибыли, снижение затрат, повышение эффективности. Наши решения дают конкретные, измеримые результаты.
              </p>
              <div className={styles.benefitFeatures}>
                <div className={styles.benefitFeature}>
                  <FontAwesomeIcon icon={faCheckCircle} />
                  <span>Детальная аналитика в реальном времени</span>
                </div>
                <div className={styles.benefitFeature}>
                  <FontAwesomeIcon icon={faCheckCircle} />
                  <span>KPI-метрики и ROI-отчеты</span>
                </div>
                <div className={styles.benefitFeature}>
                  <FontAwesomeIcon icon={faCheckCircle} />
                  <span>Прогнозирование трендов</span>
                </div>
              </div>
            </div>
            
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <FontAwesomeIcon icon={faShieldAlt} />
              </div>
              <h3 className={styles.benefitTitle}>Безопасность и надежность</h3>
              <p className={styles.benefitDescription}>
                Мы понимаем важность безопасности ваших данных. Наши системы построены на современных стандартах защиты, обеспечивают конфиденциальность и соответствуют международным требованиям безопасности.
              </p>
              <div className={styles.benefitFeatures}>
                <div className={styles.benefitFeature}>
                  <FontAwesomeIcon icon={faCheckCircle} />
                  <span>Шифрование данных end-to-end</span>
                </div>
                <div className={styles.benefitFeature}>
                  <FontAwesomeIcon icon={faCheckCircle} />
                  <span>Соответствие GDPR и ISO 27001</span>
                </div>
                <div className={styles.benefitFeature}>
                  <FontAwesomeIcon icon={faCheckCircle} />
                  <span>Регулярные аудиты безопасности</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className={styles.productsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Комплексные AI-решения для вашего бизнеса</h2>
            <p className={styles.sectionSubtitle}>
              От интеллектуальных чат-ботов до продвинутых аналитических инструментов — мы создаем технологии, которые работают на результат
            </p>
          </div>
          <div className={styles.productsGrid}>
            <div className={styles.productCard}>
              <div className={styles.productIcon}>
                <FontAwesomeIcon icon={faComments} />
              </div>
              <h3 className={styles.productTitle}>AI Чат-бот</h3>
              <p className={styles.productDescription}>
                Интеллектуальный помощник, который понимает контекст, решает сложные задачи и обеспечивает поддержку клиентов 24/7. Интегрируется с вашими системами и постоянно учится на взаимодействиях.
              </p>
              <div className={styles.productMetrics}>
                <span className={styles.metric}>
                  <FontAwesomeIcon icon={faClock} />
                  90% ответов за 3 секунды
                </span>
                <span className={styles.metric}>
                  <FontAwesomeIcon icon={faUsers} />
                  Обрабатывает 1000+ запросов в час
                </span>
                <span className={styles.metric}>
                  <FontAwesomeIcon icon={faChartLine} />
                  +65% удовлетворенность клиентов
                </span>
              </div>
              <div className={styles.productFeatures}>
                <div className={styles.productFeature}>
                  <FontAwesomeIcon icon={faCheckCircle} />
                  <span>Многоязычная поддержка</span>
                </div>
                <div className={styles.productFeature}>
                  <FontAwesomeIcon icon={faCheckCircle} />
                  <span>Интеграция с CRM и мессенджерами</span>
                </div>
                <div className={styles.productFeature}>
                  <FontAwesomeIcon icon={faCheckCircle} />
                  <span>Анализ настроения клиентов</span>
                </div>
              </div>
            </div>
            
            <div className={styles.productCard}>
              <div className={styles.productIcon}>
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <h3 className={styles.productTitle}>Голосовой AI-бот</h3>
              <p className={styles.productDescription}>
                Продвинутая система автоматических звонков с естественным голосом и пониманием речи. Обрабатывает входящие и исходящие звонки, записывает диалоги и анализирует качество обслуживания.
              </p>
              <div className={styles.productMetrics}>
                <span className={styles.metric}>
                  <FontAwesomeIcon icon={faClock} />
                  Время ответа &lt; 1 секунды
                </span>
                <span className={styles.metric}>
                  <FontAwesomeIcon icon={faDollarSign} />
                  Экономия до 70% на колл-центре
                </span>
                <span className={styles.metric}>
                  <FontAwesomeIcon icon={faChartLine} />
                  +80% конверсия звонков
                </span>
              </div>
              <div className={styles.productFeatures}>
                <div className={styles.productFeature}>
                  <FontAwesomeIcon icon={faCheckCircle} />
                  <span>Естественный голос и интонации</span>
                </div>
                <div className={styles.productFeature}>
                  <FontAwesomeIcon icon={faCheckCircle} />
                  <span>Распознавание эмоций и настроения</span>
                </div>
                <div className={styles.productFeature}>
                  <FontAwesomeIcon icon={faCheckCircle} />
                  <span>Автоматическая маршрутизация</span>
                </div>
              </div>
            </div>
            
            <div className={styles.productCard}>
              <div className={styles.productIcon}>
                <FontAwesomeIcon icon={faHeadset} />
              </div>
              <h3 className={styles.productTitle}>Voice QA Система</h3>
              <p className={styles.productDescription}>
                Автоматическая проверка качества звонков с помощью AI. Анализирует диалоги, выявляет нарушения скриптов, оценивает эмоциональное состояние операторов и предоставляет детальные отчеты.
              </p>
              <div className={styles.productMetrics}>
                <span className={styles.metric}>
                  <FontAwesomeIcon icon={faClock} />
                  100% проверка всех звонков
                </span>
                <span className={styles.metric}>
                  <FontAwesomeIcon icon={faShieldAlt} />
                  Выявление 95% нарушений
                </span>
                <span className={styles.metric}>
                  <FontAwesomeIcon icon={faChartLine} />
                  +40% качество обслуживания
                </span>
              </div>
              <div className={styles.productFeatures}>
                <div className={styles.productFeature}>
                  <FontAwesomeIcon icon={faCheckCircle} />
                  <span>Анализ тона и эмоций</span>
                </div>
                <div className={styles.productFeature}>
                  <FontAwesomeIcon icon={faCheckCircle} />
                  <span>Проверка соответствия скриптам</span>
                </div>
                <div className={styles.productFeature}>
                  <FontAwesomeIcon icon={faCheckCircle} />
                  <span>Персонализированные рекомендации</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section className={styles.casesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Реальные результаты наших клиентов</h2>
            <p className={styles.sectionSubtitle}>
              Доказанные кейсы успешного внедрения AI-решений в различных отраслях бизнеса
            </p>
          </div>
          <div className={styles.casesGrid}>
            <div className={styles.caseCard}>
              <div className={styles.caseHeader}>
                <div className={styles.caseIcon}>
                  <FontAwesomeIcon icon={faChartLine} />
                </div>
                <div className={styles.caseCategory}>E-commerce</div>
              </div>
              <h3 className={styles.caseTitle}>Онлайн-магазин "TechStore"</h3>
              <p className={styles.caseDescription}>
                Внедрили AI чат-бота для автоматизации поддержки клиентов. Бот обрабатывает 80% запросов самостоятельно, а сложные случаи передает операторам с полным контекстом.
              </p>
              <div className={styles.caseMetrics}>
                <div className={styles.caseMetric}>
                  <span>
                    <FontAwesomeIcon icon={faClock} />
                    Время ответа сократилось с 2 часов до 30 секунд
                  </span>
                </div>
                <div className={styles.caseMetric}>
                  <span>
                    <FontAwesomeIcon icon={faDollarSign} />
                    Экономия на поддержке: $45,000 в месяц
                  </span>
                </div>
                <div className={styles.caseMetric}>
                  <span>
                    <FontAwesomeIcon icon={faUsers} />
                    Удовлетворенность клиентов выросла на 78%
                  </span>
                </div>
              </div>
              <div className={styles.caseResults}>
                <div className={styles.caseResult}>
                  <span>
                    <FontAwesomeIcon icon={faRocket} />
                    Запуск за 3 недели
                  </span>
                </div>
                <div className={styles.caseResult}>
                  <span>
                    <FontAwesomeIcon icon={faChartBar} />
                    ROI: 340% за 6 месяцев
                  </span>
                </div>
              </div>
            </div>
            
            <div className={styles.caseCard}>
              <div className={styles.caseHeader}>
                <div className={styles.caseIcon}>
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <div className={styles.caseCategory}>Телеком</div>
              </div>
              <h3 className={styles.caseTitle}>Телеком-оператор "ConnectPlus"</h3>
              <p className={styles.caseDescription}>
                Разработали комплексную систему Voice QA для контроля качества обслуживания в колл-центре. AI анализирует каждый звонок и выявляет нарушения стандартов обслуживания.
              </p>
              <div className={styles.caseMetrics}>
                <div className={styles.caseMetric}>
                  <span>
                    <FontAwesomeIcon icon={faShieldAlt} />
                    100% проверка качества всех звонков
                  </span>
                </div>
                <div className={styles.caseMetric}>
                  <span>
                    <FontAwesomeIcon icon={faChartLine} />
                    Качество обслуживания выросло на 65%
                  </span>
                </div>
                <div className={styles.caseMetric}>
                  <span>
                    <FontAwesomeIcon icon={faDollarSign} />
                    Снижение затрат на контроль: $120,000 в год
                  </span>
                </div>
              </div>
              <div className={styles.caseResults}>
                <div className={styles.caseResult}>
                  <span>
                    <FontAwesomeIcon icon={faRocket} />
                    Внедрение за 4 недели
                  </span>
                </div>
                <div className={styles.caseResult}>
                  <span>
                    <FontAwesomeIcon icon={faChartBar} />
                    ROI: 280% за 8 месяцев
                  </span>
                </div>
              </div>
            </div>
            
            <div className={styles.caseCard}>
              <div className={styles.caseHeader}>
                <div className={styles.caseIcon}>
                  <FontAwesomeIcon icon={faBuilding} />
                </div>
                <div className={styles.caseCategory}>Финансы</div>
              </div>
              <h3 className={styles.caseTitle}>Банк "SmartFinance"</h3>
              <p className={styles.caseDescription}>
                Внедрили AI-систему для автоматической обработки кредитных заявок и проверки документов. Система анализирует риски, проверяет подлинность документов и принимает решения за секунды.
              </p>
              <div className={styles.caseMetrics}>
                <div className={styles.caseMetric}>
                  <span>
                    <FontAwesomeIcon icon={faClock} />
                    Время обработки заявки: с 3 дней до 15 минут
                  </span>
                </div>
                <div className={styles.caseMetric}>
                  <span>
                    <FontAwesomeIcon icon={faShieldAlt} />
                    Точность оценки рисков: 94%
                  </span>
                </div>
                <div className={styles.caseMetric}>
                  <span>
                    <FontAwesomeIcon icon={faDollarSign} />
                    Снижение операционных расходов на 45%
                  </span>
                </div>
              </div>
              <div className={styles.caseResults}>
                <div className={styles.caseResult}>
                  <span>
                    <FontAwesomeIcon icon={faRocket} />
                    Запуск за 6 недель
                  </span>
                </div>
                <div className={styles.caseResult}>
                  <span>
                    <FontAwesomeIcon icon={faChartBar} />
                    ROI: 420% за 12 месяцев
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <div className={styles.ctaHeader}>
              <h2 className={styles.ctaTitle}>Готовы трансформировать свой бизнес?</h2>
              <p className={styles.ctaSubtitle}>
                Присоединяйтесь к сотням компаний, которые уже используют наши AI-решения для достижения выдающихся результатов. Начните свой путь к цифровой трансформации уже сегодня!
              </p>
            </div>
            <div className={styles.ctaFeatures}>
              <div className={styles.ctaFeature}>
                <FontAwesomeIcon icon={faRocket} />
                <span>Быстрый запуск за 2-4 недели</span>
              </div>
              <div className={styles.ctaFeature}>
                <FontAwesomeIcon icon={faShieldAlt} />
                <span>Гарантия результата и поддержка 24/7</span>
              </div>
              <div className={styles.ctaFeature}>
                <FontAwesomeIcon icon={faChartLine} />
                <span>Измеримые результаты с первого месяца</span>
              </div>
            </div>
            <div className={styles.ctaButtons}>
              <button className={styles.primaryButton}>
                <FontAwesomeIcon icon={faRocket} />
                Начать проект
              </button>
              <button className={styles.secondaryButton}>
                <FontAwesomeIcon icon={faPlay} />
                Смотреть демо
              </button>
              <button className={styles.tertiaryButton}>
                <FontAwesomeIcon icon={faPhone} />
                Консультация
              </button>
            </div>
            <div className={styles.ctaStats}>
              <div className={styles.ctaStat}>
                <div className={styles.ctaStatNumber}>500+</div>
                <div className={styles.ctaStatLabel}>Успешных проектов</div>
              </div>
              <div className={styles.ctaStat}>
                <div className={styles.ctaStatNumber}>98%</div>
                <div className={styles.ctaStatLabel}>Довольных клиентов</div>
              </div>
              <div className={styles.ctaStat}>
                <div className={styles.ctaStatNumber}>24/7</div>
                <div className={styles.ctaStatLabel}>Поддержка</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.ctaBackground}>
          <div className={styles.gradientOrb}></div>
        </div>
      </section>
    </ScrollContainer>
  );
};

export default HomePage; 