import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import BeachImg from "../../../images/beach/beach.jpg";
import "./Beach.css";

const Beach = () => {
  return (
    <section className="beach p-sm-0">
      <Container>
        <Row>
          <Col lg={5} sm={12} className="pb-sm-5">
            <h6>North America</h6>
            <h3>The Best Beaches</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
              ipsam quod, nostrum autem ab illum.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
              ipsam quod, nostrum autem ab illum.
            </p>
            <h4>
              <strike className="disprice">000</strike> 500${" "}
              <span className="person">/ For Person</span>
            </h4>
            <Button className="rounded-pill" variant="success">
              Book Now
            </Button>
          </Col>
          <Col lg={7} sm={12}>
            <img className="w-100" src={BeachImg} alt="" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Beach;
