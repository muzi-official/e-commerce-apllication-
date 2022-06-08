import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import Products from "../Products/Products";
import Carousel from "../Carousel/Carousel";
import "./Home.css";
import { getPosts } from "../../actions/posts";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <>
      <Carousel />
      <Container fluid className="home-page-section">
        <Products />
      </Container>
      <div className="theme-divider"></div>
    </>
  );
};

export default Home;
