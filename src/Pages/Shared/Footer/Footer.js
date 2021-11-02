import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import FooterImg from "../../../images/logo/travelLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWifi } from "@fortawesome/free-solid-svg-icons";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";

import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col lg={6}>
            <img src={FooterImg} alt="" />
            <h3>Express Travel</h3>
            <p>
              express travel is a agency company . Your can get any type of
              services from expresstravel.com . so don't be late.
            </p>
          </Col>
          <Col lg={3}>
            <h3>Services</h3>
            <ul>
              <li>Travel Tour</li>
              <li>Beach</li>
              <li>Restaurant</li>
              <li>Car service</li>
              <li>Shopping Complex</li>
            </ul>
          </Col>
          <Col lg={3}>
            <h3>Contact</h3>
            <p>Gazipur Chowrasta, Gazipur, Dhaka, Bangladesh</p>
            <p>Email: express.travel@gmail.com</p>
            <p>Mobile: 017-77777777</p>
          </Col>
        </Row>
        <div className="icons">
          <div className="icon">
            <FontAwesomeIcon icon={faWifi} />
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faMapMarker} />
          </div>
        </div>
        <p className="developer">Design by Express Developer Team at 2021</p>
      </Container>
    </footer>
  );
};

export default Footer;
