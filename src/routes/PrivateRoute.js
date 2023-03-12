import { Routes, Route, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../pages/Home';

// import { Register } from './pages/Register';

export function PrivateRoute() {
  return (
    <Routes>
      {/* <Route path="/" element={<Navigate to="/dashboard" />} /> */}
      <Route path="/app" element={<Home />} />
      {/* <Route path="/cadastro" element={<Register />} /> */}
    </Routes>
  );
}

// PrivateRoute.propTypes = {
//   component: PropTypes.elementType.isRequired,
//   // outras props necessárias
// };
