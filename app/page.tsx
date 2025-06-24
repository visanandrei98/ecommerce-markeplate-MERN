import React from "react";
import "./globals.css";
import Container from "../components/Container";
import HomeBanner from "@/components/HomeBanner";

const Home = () => {
  return (
    <Container className="p-10 bg-shop-light-pink">
      <HomeBanner />
    </Container>
  );
};

export default Home;
