import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './login.css';
import { useNavigate, Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';

export const Login = () => {
  const { handleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await handleLogin({ email, password });
    console.log('login', data);
    if (data != null && !!data.token) {
      toast.success('Usuário logado com sucesso!');
      navigate('/app');
      //   return <Navigate to="/app" />;
    } else toast.error('Login ou senha incorretos!');
  };

  return (
    <div className="login-container">
      {/* {error && <Alert variant="danger">{error}</Alert>} */}
      <Form onSubmit={handleSubmit}>
        <h2>StarterPack</h2>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Usuário</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mt-2" controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="center mt-3">
          <Button variant="primary" type="submit">
            Entrar
          </Button>
          {/* <Button variant="primary" onClick={() => handleTheme()} type="button">
            Mudar tema
          </Button> */}
        </Form.Group>
      </Form>
    </div>
  );
};
