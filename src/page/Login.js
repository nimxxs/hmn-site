import React from 'react'
import { useNavigate } from "react-router-dom";
import { Form, Button, Container } from 'react-bootstrap';

const Login = ({setAuthenticate}) => {
  const navigate = useNavigate();

  const loginUser = (event) => {
    event.preventDefault();
    setAuthenticate(true);
    navigate('/');
  }

  return (
    <div>
        <Container className='login-container'>
          <Form onSubmit={(event) => loginUser(event)}>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>ID</Form.Label>
              <Form.Control type="email" placeholder="Enter ID" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          <Button variant="primary" type="submit">
            로그인
          </Button>
          </Form>
        </Container>
    </div>
  )
}

export default Login