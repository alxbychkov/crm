import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { AuthContext, type AuthState } from '../context/AuthContext';
import { ProtectedRoute } from './ProtectedRoute';

function renderWithAuth(ui: React.ReactElement, auth: Partial<AuthState>) {
  const value: AuthState = {
    user: null,
    token: null,
    loading: false,
    login: async () => {},
    logout: () => {},
    ...auth,
  };

  return render(
    <AuthContext.Provider value={value}>
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={ui} />
          <Route path="/login" element={<div>Login Page</div>} />
        </Routes>
      </MemoryRouter>
    </AuthContext.Provider>
  );
}

describe('ProtectedRoute', () => {
  it('redirects to /login when no token', () => {
    renderWithAuth(
      <ProtectedRoute>
        <div>Private</div>
      </ProtectedRoute>,
      { token: null }
    );
    expect(screen.getByText('Login Page')).toBeInTheDocument();
  });

  it('renders children when authenticated', () => {
    renderWithAuth(
      <ProtectedRoute>
        <div>Private</div>
      </ProtectedRoute>,
      { token: 'token123' }
    );
    expect(screen.getByText('Private')).toBeInTheDocument();
  });
});


