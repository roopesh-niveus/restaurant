import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-light py-3">
      <Container>
        <Row>
          <Col>
            <h5>About Us</h5>
            <p>
              We are a food ordering app that allows you to order from your
              favorite restaurants and get your food delivered to your doorstep.
            </p>
          </Col>
          <Col>
            <h5>Contact Us</h5>
            <p>
              1Bayar Padav
              <br /> Opposite to Bank of Baroda
              <br /> Phone: (+91) 9988776655
              <br /> Email: infomyfoodapp@gmail.com
            </p>
          </Col>
          <Col>
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li>
                <a href="https://www.facebook.com/">Facebook</a>
              </li>
              <li>
                <a href="https://twitter.com/">Twitter</a>
              </li>
              <li>
                <a href="https://www.instagram.com/">Instagram</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="bg-dark py-2">
        <Container>
          <p className="text-center text-white mb-0">&copy; {currentYear} My Food App</p>
        </Container>
      </div>
    </footer>
  );
}
