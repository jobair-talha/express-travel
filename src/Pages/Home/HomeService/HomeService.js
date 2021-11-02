import React, { useEffect, useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import CreateService from "../../Shared/CreateService/CreateService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "./HomeService.css";
import { Link } from "react-router-dom";

const HomeService = () => {
  const [tours, setTours] = useState([]);
  useEffect(() => {
    fetch("https://peaceful-spire-47787.herokuapp.com/service")
      .then((res) => res.json())
      .then((data) => setTours(data.slice(0, 3)));
  }, []);
  return (
    <section className="services home-service">
      <Container>
        <Row xs={1} md={2} lg={3} className="g-4">
          {tours.map((tour) => (
            <CreateService service={tour} key={tour._id}></CreateService>
          ))}
        </Row>
      </Container>
      <Button
        as={Link}
        to="/service"
        className="my-4"
        variant="outline-success"
      >
        More <FontAwesomeIcon className="ms-1" icon={faAngleRight} />
      </Button>
    </section>
  );
};

export default HomeService;
