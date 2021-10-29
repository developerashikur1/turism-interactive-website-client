import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Contexts/useAuth';
import './Login.css';
import { useHistory, useLocation } from 'react-router';


const Login = () => {
    const { signInUsingGoogle, user } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_uri = location?.state?.from?.pathname || "/home";

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
            })
    }

    return (
        <div className="container mt-5">
            <div className="login-form">

                {/* login form */}
                <Card className="text-center">
                    <Card.Header className="text-warning fw-bold fs-2">Please Login</Card.Header>
                    <Card.Body>

                        {/* login image */}
                        <div style={{ overflow: 'hidden' }}>
                            <img className="login-image" src="https://i.ibb.co/YcvMytK/welcome-sign-letters-with-confetti-background-celebration-greeting-holiday-illustration-banner-confe.jpg" alt="" />
                        </div>


                        {/* login button */}
                        <Button onClick={handleGoogleLogin} id="button" variant="primary" className="d-flex align-items-center justify-content-around mx-auto bg-warning border-0">
                            <img className="btn-img" src="https://i.ibb.co/qF7Ts97/download.png" alt="" />
                            <h5>Sign In With Google</h5>
                        </Button>

                    </Card.Body>
                    <Card.Footer className="text-muted">By signing up, you agree to our <Link to="/home">terms of service</Link>, <Link to="/home">privacy policy</Link></Card.Footer>
                </Card>
            </div>
        </div>
    );
};

export default Login;