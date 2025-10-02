import { useAuth } from '../hooks/useAuth';

export default function Home() {
  const { user } = useAuth();

  return (
    <div className="home-container">
      <header className="home-header">
        <h1 className="home-title">
          Добро пожаловать{user ? `, ${user.name}` : ''}
        </h1>
        {user && (
          <p className="home-subtitle">
            Роль: {user.role}
            {user.organization ? ` · ${user.organization}` : ''}
          </p>
        )}
      </header>

      <section className="home-card">
        <p>
          Это главная страница приложения. Здесь появятся быстрые ссылки и
          виджеты.
        </p>
      </section>
    </div>
  );
}
