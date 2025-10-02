export interface User {
  id: number;
  name: string;
  email: string;
  role: 'company_admin' | 'manager' | 'client' | 'support';
  organization?: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}
