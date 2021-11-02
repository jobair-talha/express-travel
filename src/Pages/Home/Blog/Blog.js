import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import shopImg from "../../../images/blog/blog & shop.png";
import "./Blog.css";

const Blog = () => {
  return (
    <section className="shop">
      <Container>
        <div className="title">
          <h2>Top Blog Shop</h2>
        </div>
        <Row lg={2} md={2} xs={1} className="align-items-center">
          <Col>
            <h6>Best for wish</h6>
            <h2>Shop & Blog</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe
              quas odit amet nisi quod tenetur!
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam,
              pariatur.
            </p>
          </Col>
          <Col>
            <img className="w-100" src={shopImg} alt="" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Blog;
