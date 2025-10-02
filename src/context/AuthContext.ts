import { createContext } from 'react';
import type { User } from '../types/auth';

export interface AuthState {
  user: User | null;
  token: string | null;
  loading: boolean;
  login(email: string, password: string): Promise<void>;
  logout(): void;
}

export const AuthContext = createContext<AuthState | undefined>(undefined);


