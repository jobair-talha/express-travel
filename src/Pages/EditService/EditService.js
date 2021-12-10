import React, { useState, useEffect } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useParams } from "react-router";

const EditService = () => {
  const [service, setService] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://peaceful-spire-47787.herokuapp.com/service/${id}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [id]);

  const handleTitleChange = (e) => {
    const updateTitle = e.target.value;
    const updateService = {
      service: updateTitle,
      price: service.price,
      img: service.img,
      details: service.details,
      day: service.day,
    };
    setService(updateService);
  };

  const handlePriceChange = (e) => {
    const updatePrice = e.target.value;
    const updateService = {
      service: service.service,
      price: updatePrice,
      img: service.img,
      details: service.details,
      day: service.day,
    };
    setService(updateService);
  };

  const handleDetailsChange = (e) => {
    const updateDetails = e.target.value;
    const updateService = {
      service: service.service,
      price: service.price,
      img: service.img,
      details: updateDetails,
      day: service.day,
    };
    setService(updateService);
  };

  const handleImgChange = (e) => {
    const updateImg = e.target.value;
    const updateService = {
      service: service.service,
      price: service.price,
      img: updateImg,
      details: service.details,
      day: service.day,
    };
    setService(updateService);
  };

  const handleDayChange = (e) => {
    const updateDay = e.target.value;
    const updateService = {
      service: service.service,
      price: service.price,
      img: service.img,
      details: service.details,
      day: updateDay,
    };
    setService(updateService);
  };

  const handleUpdateService = (e) => {
    fetch(`https://peaceful-spire-47787.herokuapp.com/service/${id}`, {
      method: "PUT", // Method itself
      headers: {
        "Content-type": "application/json; charset=UTF-8", // Indicates the content
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("SuccessFully Update Your Services");
          setService({});
          e.target.reset();
        }
      });
    e.preventDefault();
  };

  return (
    <Container>
      <div className="services-container">
        <h3 className="mb-4 text-center">Update Service</h3>
        <Form onSubmit={handleUpdateService}>
          <Row>
            <Col>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Service Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="service title"
                  value={service.service || ""}
                  onChange={handleTitleChange}
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
                  placeholder="Price"
                  value={service.price || ""}
                  onChange={handlePriceChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="service description"
              value={service.details || ""}
              onChange={handleDetailsChange}
              required
              rows={3}
            />
          </Form.Group>
          <Row>
            <Col lg={9}>
              <Form.Group className="position-relative mb-3">
                <Form.Label>Image URL:</Form.Label>
                <Form.Control
                  type="url"
                  value={service.img || ""}
                  onChange={handleImgChange}
                  required
                  name="url"
                  placeholder="example.com/example.jpg"
                />
              </Form.Group>
            </Col>
            <Col lg={3}>
              <Form.Label>Days</Form.Label>
              <Form.Select value={service.day || ""} onChange={handleDayChange}>
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
            Update
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default EditService;
