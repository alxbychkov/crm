export default function ClientDashboard() {
  return (
    <div className="dash-container">
      <div className="dash-header">
        <h2 className="dash-title">Client Dashboard</h2>
        <span className="dash-subtitle">Ваши данные и активности</span>
      </div>
      <div className="dash-grid">
        <section className="dash-card lg">
          <h3>Обзор аккаунта</h3>
          <p>Статус подписки, баланс и счёта.</p>
        </section>
        <section className="dash-card">
          <h3>Запросы</h3>
          <p>Открытые тикеты и обращения.</p>
        </section>
        <section className="dash-card">
          <h3>Документы</h3>
          <p>Счета и договоры.</p>
        </section>
      </div>
    </div>
  );
}


