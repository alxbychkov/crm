import { Link } from 'react-router-dom';

export default function Forbidden() {
  return (
    <div className="error-page">
      <div className="error-box">
        <div className="error-code">403</div>
        <div className="error-title">Страница не найдена</div>
        <Link to="/" className="error-link">На главную</Link>
      </div>
    </div>
  );
}


