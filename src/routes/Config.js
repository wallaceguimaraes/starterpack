import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home/index';
import { User } from './../pages/User';

export default function Config() {
  const routes = [
    {
      path: '/app',
      element: <Home />,
      rules: [],
      name: 'home',
      title: 'Home',
      icon: 'fas fa-fw fa-cog',
      children: [{ path: '' }],
    },
    {
      path: '/app/users',
      element: <User />,
      rules: ['admin'],
      name: 'users',
      title: 'Usuários',
      icon: 'fas fa-fw fa-user',
      children: [
        {
          path: '/app/users',
          title: 'Cadastro',
          icon: 'fas fa-fw fa-user',
        },
        {
          path: '/app/users',
          title: 'Listagem',
          icon: 'fas fa-fw fa-user',
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

  return routes;
}
