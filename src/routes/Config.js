import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home/index';
import { User } from './../pages/User';
import { Login } from './../pages/Login/index';

export default function Config() {
  const privateRoutes = [
    {
      path: '/app',
      element: <Home />,
      rules: ['admin'],
      name: 'home',
      title: 'Home',
      icon: 'fas fa-fw fa-home',
    },
    {
      path: '/app/cadastro',
      element: <User />,
      rules: ['admin'],
      name: 'registrations',
      title: 'Cadastros',
      icon: 'fas fa-fw fa-user',
      children: [
        {
          path: '/app/cadastro/listagem',
          title: 'Perfil',
          icon: 'fas fa-fw fa-user',
          element: <span>Listagem</span>,
        },
        {
          path: '/app/cadastro/usuarios',
          title: 'Usuários',
          icon: 'fas fa-fw fa-user',
          element: <User />,
        },
      ],
    },
    {
      path: '/app/dashboard',
      element: <Dashboard />,
      rules: ['admin'],
      name: 'dashboard',
      title: 'Dashboard',
      icon: 'fas fa-fw fa-tachometer-alt',
    },
  ];

  const publicRoutes = [
    {
      path: '/login',
      element: <Login />,
      rules: [],
      name: 'login',
      title: 'Login',
      icon: 'fas fa-fw fa-home',
    },
  ];

  return { privateRoutes, publicRoutes };
}
