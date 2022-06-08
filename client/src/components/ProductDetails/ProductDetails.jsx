import React from "react";

import "./ProductDetails.css";
import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Button,
  Image,
} from "react-bootstrap";
import Products from "../Products/data";
import { useParams } from "react-router-dom";
import Rating from "../ProductRating/Rating";

const Productdetails = ({ match }) => {
  const params = useParams();
  const product = Products.find((product) => product._id === params.id);

  return (
    <>
      <Container className="product-details-container">
        <Row className="justify-content-center">
          <Col className="mt-5 product-details-left-container" md={4}>
            <Image
              className="imgfluid"
              style={{ width: "100%" }}
              src={product.image1}
              alt={product.name}
            />
          </Col>
          <Col className="mt-5 product-details-center-container" md={5}>
            <ListGroup variant="flush">
              <ListGroupItem className="product-name">
                {product.name}
              </ListGroupItem>
              <ListGroupItem className="product-title">
                {product.title}
              </ListGroupItem>
              <ListGroupItem>Product Code: {product.code}</ListGroupItem>
              <ListGroupItem>
                <span>Brand:</span> {product.brand}
              </ListGroupItem>
              <ListGroupItem>{product.description}</ListGroupItem>
              <ListGroupItem>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                />
              </ListGroupItem>
              <ListGroupItem className="product-price">
                Price : ${product.price}
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col
            className="mt-5 product-details-right-container text-center"
            md={3}
          >
            <ListGroupItem>
              <Row>
                <Col>Status :</Col>
                <Col>
                  {product.countInStock > 0 ? "In Stock " : "Out of Stock"}
                </Col>
              </Row>
            </ListGroupItem>
            <ListGroupItem>
              <Button className="btn btn-dark add-to-cart-btn">
                Add to cart&nbsp;&nbsp;
                <i className="fa-solid fa-cart-shopping"></i>
              </Button>
            </ListGroupItem>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Productdetails;
