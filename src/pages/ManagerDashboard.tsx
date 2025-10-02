export default function ManagerDashboard() {
  return (
    <div className="dash-container">
      <div className="dash-header">
        <h2 className="dash-title">Manager Dashboard</h2>
        <span className="dash-subtitle">Процессы и задачи</span>
      </div>
      <div className="dash-grid">
        <section className="dash-card lg">
          <h3>Воронка продаж</h3>
          <p>Конверсия по этапам.</p>
        </section>
        <section className="dash-card">
          <h3>Команда</h3>
          <p>Нагрузка и KPI.</p>
        </section>
        <section className="dash-card">
          <h3>Сделки</h3>
          <p>Последние активности.</p>
        </section>
      </div>
    </div>
  );
}


