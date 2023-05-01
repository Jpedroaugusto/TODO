import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from '../pages/Authentication/Login/Login';
import { Cadastro } from '../pages/Authentication/Cadastro/Cadastro';

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  );
}
