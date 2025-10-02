import React, { useEffect, useState } from 'react';
import { type User } from '../types/auth';
import * as mockAuth from '../api/mockAuth';
import { storage } from '../utils/storage';
import { AuthContext } from './AuthContext';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(storage.getToken());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function init() {
      const t = storage.getToken();

      if (t) {
        try {
          const u = await mockAuth.validateToken(t);

          setUser(u);
          setToken(t);
        } catch {
          storage.setToken(null);
          setUser(null);
          setToken(null);
        }
      }

      setLoading(false);
    }

    init();
  }, []);

  async function login(email: string, password: string) {
    setLoading(true);

    try {
      const res = await mockAuth.login(email, password);

      storage.setToken(res.token);
      setToken(res.token);
      setUser(res.user);
    } finally {
      setLoading(false);
    }
  }

  function logout() {
    storage.setToken(null);
    setUser(null);
    setToken(null);
  }

  return (
    <AuthContext.Provider value={{ user, token, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
