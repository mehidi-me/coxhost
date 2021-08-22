import React from "react";
import Heading from "../Heading";
import Section from "../Section";
import Card from "./Card";
import { Container, Grid } from "@material-ui/core";
import bg5 from "../../assets/bg5.png";
import bg6 from "../../assets/bg6.png";

function SelectUs({ title, subtitle, data, align, cardbg }) {
  return (
    <div
      style={
        align === "center"
          ? {
              backgroundImage: `url(${bg5}), url(${bg6}), linear-gradient(90deg,#111c58 0,#5c2782 51%,#111c58)`,
            }
          : { background: "#fff" }
      }
    >
      <Container style={{ paddingTop: "100px" }}>
        <Heading
          title={title}
          subtitle={subtitle}
          isBg={align === "center" ? true : false}
        />
      </Container>
      <div
        style={
          align === "left"
            ? {
                minHeight: "100vh",
                background: cardbg,
                backgroundImage: `url(${bg5}), url(${bg6}), linear-gradient(90deg,#111c58 0,#5c2782 51%,#111c58)`,
              }
            : {
                minHeight: "100vh",
                background: cardbg,
              }
        }
      >
        <Section>
          <div style={{ width: "96%", margin: "0 auto" }}>
            <Grid container spacing={5}>
              {data &&
                data.map((v) => (
                  <Grid item md={4} sm={6} xs={12} key={v.id}>
                    <Card
                      img={v.img}
                      title={v.title}
                      description={v.description}
                      align={align}
                    />
                  </Grid>
                ))}
            </Grid>
          </div>
        </Section>
      </div>
    </div>
  );
}

export default SelectUs;
