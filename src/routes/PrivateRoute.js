import { Routes, Route, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';

// import { Register } from './pages/Register';
import { User } from './../pages/User';

export function PrivateRoute() {
  return (
    <Routes>
      {/* <Route path="/" element={<Navigate to="/dashboard" />} /> */}
      <Route path="/app" element={<Home />} />
      <Route path="/app/dashboard" element={<Dashboard />} />
      <Route path="/app/users" element={<User />} />
    </Routes>
  );
}

// PrivateRoute.propTypes = {
//   component: PropTypes.elementType.isRequired,
//   // outras props necessárias
// };
