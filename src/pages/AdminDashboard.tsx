export default function AdminDashboard() {
  return (
    <div className="dash-container">
      <div className="dash-header">
        <h2 className="dash-title">Admin Dashboard</h2>
        <span className="dash-subtitle">Сводка метрик</span>
      </div>
      <div className="dash-grid">
        <section className="dash-card lg">
          <h3>Общая статистика</h3>
          <p>Графики и ключевые показатели.</p>
        </section>
        <section className="dash-card">
          <h3>Пользователи</h3>
          <p>Активные/Новые/Заблокированные</p>
        </section>
        <section className="dash-card">
          <h3>Системные события</h3>
          <p>Логи и уведомления.</p>
        </section>
      </div>
    </div>
  );
}


