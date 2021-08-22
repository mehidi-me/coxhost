import React from "react";
import Section from "../Section";
import Heading from "../Heading";
import Card from "./Card";
import { Container } from "@material-ui/core";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./style.css";

function Testimonial() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    //centerMode: true,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };
  return (
    <div>
      <Container style={{ paddingTop: "100px" }}>
        <Heading
          title="Clients Testimonial"
          subtitle="What do real people say"
        />
      </Container>
      <div
        style={{
          background: "#f5f5fa",

          width: "100%",
          zIndex: "-3",
        }}
      >
        <Section>
          <div style={{ width: "96%", margin: "0 auto" }} className="review">
            <Slider {...settings}>
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </Slider>
          </div>
        </Section>
      </div>
    </div>
  );
}

export default Testimonial;
