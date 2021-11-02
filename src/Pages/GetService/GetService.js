import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import CreateService from "../Shared/CreateService/CreateService";
import "./GetService.css";

const GetService = () => {
  const [tours, setTours] = useState([]);
  useEffect(() => {
    fetch("https://peaceful-spire-47787.herokuapp.com/service")
      .then((res) => res.json())
      .then((data) => setTours(data));
  }, []);
  return (
    <section className="services">
      <Container>
        <Row xs={1} md={2} lg={3} className="g-4">
          {tours.map((tour) => (
            <CreateService service={tour} key={tour._id}></CreateService>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default GetService;
