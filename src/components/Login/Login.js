import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {

    const {signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';
    const handleGoogleLogin = () => {
      signInUsingGoogle()
      .then(result => {
          history.push(redirect_url);
      })
    }
    return (
        <div>
            <h1>Login</h1>
            <Form className="container w-25">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <p className="mt-4">or</p>
                <hr/>
                <Button onClick={handleGoogleLogin} variant="success">
                    Sign In Using Google
                </Button>
                <br/>
                <p>Don't have an account? 
                    <Link to='/register'>Register</Link>
                </p>
</Form>
        </div>
    );
};

export default Login;