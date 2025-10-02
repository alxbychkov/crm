import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginForm } from './components/LoginForm/LoginForm';
import { ProtectedRoute } from './components/ProtectedRoute';
import { RequireRole } from './components/RequireRole';
import Home from './pages/Home';
import AdminDashboard from './pages/AdminDashboard';
import ManagerDashboard from './pages/ManagerDashboard';
import ClientDashboard from './pages/ClientDashboard';
import SupportDashboard from './pages/SupportDashboard';
import { NavBar } from './components/NavBar/NavBar';
import Forbidden from './pages/Forbidden';

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <RequireRole roles={['company_admin']}>
                <AdminDashboard />
              </RequireRole>
            </ProtectedRoute>
          }
        />

        <Route
          path="/manager"
          element={
            <ProtectedRoute>
              <RequireRole roles={['manager']}>
                <ManagerDashboard />
              </RequireRole>
            </ProtectedRoute>
          }
        />

        <Route
          path="/client"
          element={
            <ProtectedRoute>
              <RequireRole roles={['client']}>
                <ClientDashboard />
              </RequireRole>
            </ProtectedRoute>
          }
        />

        <Route
          path="/support"
          element={
            <ProtectedRoute>
              <RequireRole roles={['support']}>
                <SupportDashboard />
              </RequireRole>
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<Forbidden />} />
      </Routes>
    </BrowserRouter>
  );
}
