import React from "react";
import { Button, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="overlay">
        <Container>
          <h1>
            Enjoy Your Travel with <br />
            Express Travel.com
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus enim
            quaerat facere molestiae iure ut dolores explicabo delectus esse
            ducimus?
          </p>
          <Button className="rounded-pill" variant="success">
            Learn More <FontAwesomeIcon className="ms-1" icon={faAngleRight} />
          </Button>
        </Container>
      </div>
    </div>
  );
};

export default Banner;
