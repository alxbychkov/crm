export default function SupportDashboard() {
  return (
    <div className="dash-container">
      <div className="dash-header">
        <h2 className="dash-title">Support Dashboard</h2>
        <span className="dash-subtitle">Очередь обращений</span>
      </div>
      <div className="dash-grid">
        <section className="dash-card lg">
          <h3>Текущая очередь</h3>
          <p>Среднее время ответа и SLA.</p>
        </section>
        <section className="dash-card">
          <h3>Новые тикеты</h3>
          <p>Последние запросы клиентов.</p>
        </section>
        <section className="dash-card">
          <h3>Статистика</h3>
          <p>Закрытые/Открытые за сутки.</p>
        </section>
      </div>
    </div>
  );
}


