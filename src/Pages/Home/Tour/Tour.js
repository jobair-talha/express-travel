import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import TourImg from "../../../images/tour/tour.jpg";
import Camera from "../../../images/tour/camera.png";
import "./Tour.css";
import { Link } from "react-router-dom";

const Tour = () => {
  return (
    <section className="tour">
      <Container>
        <Row>
          <Col lg={7} sm={12}>
            <div className="img">
              <img className="w-100" src={TourImg} alt="" />
              <div className="overlay">
                <FontAwesomeIcon className="ms-1" icon={faPlay} />
              </div>
            </div>
          </Col>
          <Col lg={5} sm={12}>
            <h6>among the all</h6>
            <h3 className="mb-4 mt-5">Choose Your Favorite Tour</h3>
            <Row className="align-items-center">
              <Col lg={2}>
                <img className="w-100" src={Camera} alt="" />
              </Col>
              <Col lg={10}>
                <h5 className="mb-2">We Suggest The Best Tour Collection</h5>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Laborum ipsam quod, nostrum autem ab illum.
                </p>
              </Col>
            </Row>
            <Button
              as={Link}
              to="/service"
              className="rounded mt-5"
              variant="success"
            >
              Book a Tour
              <FontAwesomeIcon className="ms-1" icon={faAngleRight} />
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Tour;
