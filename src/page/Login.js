import {React, useState} from 'react'
import { useNavigate } from "react-router-dom";
import { Form, Button, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {AuthenticateAction} from '../redux/actions/AuthenticateAction';

const Login = ({setAuthenticate}) => {
  const [id, setId] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginUser = (event) => {
    event.preventDefault();
    // setAuthenticate(true);
    // 미들웨어
    dispatch(AuthenticateAction.login(id, password));
    navigate('/');
  }

  return (
    <div>
        <Container className='login-container'>
          <Form onSubmit={(event) => loginUser(event)}>
            <Form.Group className="mb-3" controlId="formGroupEmail" onChange={(event) => setId(event.target.value)}>
              <Form.Label>ID</Form.Label>
              <Form.Control type="email" placeholder="Enter ID" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword" onChange={(event) => setPassword(event.target.value)}>
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