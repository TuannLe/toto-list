import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/Home';
import NotFound from '@/pages/NotFound';
import LandingPage from '@/pages/Landing';
import AuthLayout from '@/components/layout/AuthLayout';
import LoginPage from '@/pages/Login';
import RegisterPage from '@/pages/Register';

export default function AppRouters() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>

        <Route path="/home" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
