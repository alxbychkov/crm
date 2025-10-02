import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { AuthContext, type AuthState } from '../context/AuthContext';
import { RequireRole } from './RequireRole';
import { type User } from '../types/auth'

function renderWithAuth(ui: React.ReactElement, auth: Partial<AuthState>) {
  const value: AuthState = {
    user: { id: 1, name: 'Test', email: 't@t', role: 'client' },
    token: 't',
    loading: false,
    login: async () => {},
    logout: () => {},
    ...auth,
  } as AuthState;

  return render(
    <AuthContext.Provider value={value}>
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={ui} />
          <Route path="/not-authorized" element={<div>403</div>} />
        </Routes>
      </MemoryRouter>
    </AuthContext.Provider>
  );
}

describe('RequireRole', () => {
  it('denies when user role mismatches', () => {
    renderWithAuth(
      <RequireRole roles={['manager']}>
        <div>Manager Area</div>
      </RequireRole>,
      { user: { id: 2, name: 'User', email: 'e', role: 'client' } as User }
    );
    expect(screen.getByText('Недостаточно прав')).toBeInTheDocument();
  });

  it('allows when role matches or admin', () => {
    renderWithAuth(
      <RequireRole roles={['manager']}>
        <div>Manager Area</div>
      </RequireRole>,
      { user: { id: 3, name: 'Admin', email: 'a', role: 'company_admin' } as User }
    );
    expect(screen.getByText('Manager Area')).toBeInTheDocument();
  });
});


