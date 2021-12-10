import React, { useRef } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./Services.css";

const Services = () => {
  const serviceRef = useRef();
  const priceRef = useRef();
  const detailsRef = useRef();
  const imgRef = useRef();
  const dayRef = useRef();

  const handleService = (e) => {
    e.preventDefault();
    const service = serviceRef.current.value;
    const price = priceRef.current.value;
    const details = detailsRef.current.value;
    const img = imgRef.current.files;
    const day = dayRef.current.value;
    const addServices = { service, price, details, img, day };
    fetch("https://peaceful-spire-47787.herokuapp.com/service", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(addServices),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Service added Successfully");
          e.target.reset();
        }
      });
  };
  return (
    <Container>
      <div className="services-container">
        <h3 className="mb-4 text-center">Create Your Favorite Service</h3>
        <Form onSubmit={handleService}>
          <Row>
            <Col>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Service Title</Form.Label>
                <Form.Control
                  ref={serviceRef}
                  type="text"
                  placeholder="service title"
                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  ref={priceRef}
                  placeholder="Price"
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              ref={detailsRef}
              as="textarea"
              placeholder="service description"
              required
              rows={3}
            />
          </Form.Group>
          <Row>
            <Col lg={9}>
              <Form.Group className="position-relative mb-3">
                <Form.Label>Image URL:</Form.Label>
                <Form.Control
                  type="file"
                  ref={imgRef}
                  required
                  name="file"
                  placeholder="example.com/example.jpg"
                />
              </Form.Group>
            </Col>
            <Col lg={3}>
              <Form.Label>Days</Form.Label>
              <Form.Select ref={dayRef} aria-label="Default select example">
                <option>Stock Days</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="2">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </Form.Select>
            </Col>
          </Row>
          <Button variant="success" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default Services;
