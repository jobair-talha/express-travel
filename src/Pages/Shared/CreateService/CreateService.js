import React from "react";
import { Card, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import "./CreateService.css";
import { Link } from "react-router-dom";

const CreateService = (props) => {
  const { _id, service, price, details, img, day } = props.service;
  return (
    <Col>
      <Card>
        <div className="main">
          <img className="w-100" src={img} alt="" />
          <div className="caption">
            <h3>{service}</h3>
            <div title="Add To List" className="icon">
              <FontAwesomeIcon icon={faPlus} />
            </div>
          </div>
          <Link className="edit" to={`/service/${_id}`}>
            <FontAwesomeIcon
              title="Edit"
              className="edit-item"
              icon={faInfoCircle}
            />
          </Link>
        </div>
        <Card.Body>
          <h2 className="price-details">
            {price}${" "}
            <span>
              {day}day {day - 1} night
            </span>
          </h2>
          <p className="details">{details.slice(0, 160)}</p>
          <div className="text-center">
            <button className="book">Book Now</button>
            <button className="list">Add to list</button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CreateService;
