import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import login_img from '../assets/6.png';

import { Container, Row, Col } from "react-bootstrap";

import Login from "../components/Login";

export default function LoginPage() {
    const auth = useSelector((state) => state.authStore.isAuthenticated);
    const navigate = useNavigate();
  
    useEffect(() => {
      if (auth === true) {
        navigate("/active");
      }
    }, [auth, navigate]);

  return (
  
    <Container>
    <Row>
    <Col lg={5} sm={12}>
      <Login />
    </Col>
      <Col lg={7} sm={12} className="login-right">
        <img src={login_img} alt="login-img" className="login-img"/>
      </Col>
    </Row>
    </Container>

  );
}
