import { type AuthResponse, type User } from '../types/auth';

const users: Record<string, { password: string; user: User }> = {
  'admin@test.com': {
    password: 'admin123',
    user: {
      id: 1,
      name: 'Иван Админ',
      email: 'admin@test.com',
      role: 'company_admin',
      organization: 'CRM_Org',
    },
  },
  'manager@test.com': {
    password: 'manager123',
    user: {
      id: 2,
      name: 'Пётр Менеджер',
      email: 'manager@test.com',
      role: 'manager',
      organization: 'CRM_Org',
    },
  },
  'client@test.com': {
    password: 'client123',
    user: {
      id: 3,
      name: 'Ольга Клиент',
      email: 'client@test.com',
      role: 'client',
      organization: 'ClientOrg',
    },
  },
  'support@test.com': {
    password: 'support123',
    user: {
      id: 4,
      name: 'Алекс Саппорт',
      email: 'support@test.com',
      role: 'support',
      organization: 'CRM_Org',
    },
  },
};

function toBase64Utf8(str: string): string {
  const bytes = new TextEncoder().encode(str);
  let binary = '';

  for (let i = 0; i < bytes.length; i++)
    binary += String.fromCharCode(bytes[i]);

  return btoa(binary);
}

function fromBase64Utf8(b64: string): string {
  const binary = atob(b64);
  const bytes = new Uint8Array(binary.length);

  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);

  return new TextDecoder().decode(bytes);
}

function generateToken(user: User): string {
  const payload = {
    sub: user.id,
    email: user.email,
    role: user.role,
    name: user.name,
  };

  return toBase64Utf8(JSON.stringify(payload));
}

export async function login(
  email: string,
  password: string
): Promise<AuthResponse> {
  await new Promise((r) => setTimeout(r, 400));

  const found = users[email.toLowerCase()];

  if (!found || found.password !== password) {
    throw new Error('Invalid credentials');
  }

  const token = generateToken(found.user);

  return { token, user: found.user };
}

export async function validateToken(token: string): Promise<User> {
  await new Promise((r) => setTimeout(r, 200));

  try {
    const payload = JSON.parse(fromBase64Utf8(token));
    const u = users[payload.email];

    if (!u) throw new Error('User not found');

    return u.user;
  } catch (e) {
    throw new Error('Invalid token', { cause: e });
  }
}
