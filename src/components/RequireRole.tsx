import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

interface Props {
  roles: string[];
  children: React.ReactElement;
}

export const RequireRole: React.FC<Props> = ({ roles, children }) => {
  const { user, loading } = useAuth();

  if (loading)
    return (
      <div className="center-screen">
        <div className="spinner" />
      </div>
    );

  if (!user) return <Navigate to="/login" replace />;

  // Admin has access to all dashboards
  if (user.role === 'company_admin') return children;

  if (!roles.includes(user.role))
    return (
      <div className="center-screen error-message">
        Недостаточно прав
      </div>
    );

  return children;
};
