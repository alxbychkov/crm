import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

interface Props {
  children: React.ReactElement;
}

export const ProtectedRoute: React.FC<Props> = ({ children }) => {
  const { token, loading } = useAuth();

  if (loading)
    return (
      <div className="center-screen">
        <div className="spinner" />
      </div>
    );

  if (!token) return <Navigate to="/login" replace />;

  return children;
};
