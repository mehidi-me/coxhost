import { makeStyles } from "@material-ui/core";
import React from "react";
import avater from "../../assets/avatar.png";
import clsx from "clsx";

const useStyle = makeStyles((theme) => ({
  card: {
    margin: "50px 10px",
    background: "#fff",
    padding: "18px",
    borderRadius: "10px",
    boxShadow: "-1px 4px 15px -2px rgb(0 0 0 / 40%)",
    position: "relative",
    opacity: 0.5,
    overflow: "hidden",
    "&::before": {
      left: "0",

      content: '""',

      height: "52px",

      position: "absolute",
      borderRadius: "10px",
      background: "hsla(0,0%,100%,.32)",
      width: "90%",
      top: "-20px",
      WebkitTransform: "translateX(5%)",
      transform: "translateX(5%)",
      backgroundColor: "hsla(0,0%,100%,.69)",
      boxShadow: "0 0 25px 0 rgb(20 27 201 / 5%)",
      zIndex: "-1",
    },
    "&::after": {
      left: "0",

      content: '""',

      height: "52px",

      position: "absolute",
      borderRadius: "10px",
      background: "hsla(0,0%,100%,.32)",
      width: "80%",
      top: "-35px",
      WebkitTransform: "translateX(12%)",
      transform: "translateX(5%)",
      backgroundColor: "hsla(0,0%,100%,.69)",
      boxShadow: "0 0 25px 0 rgb(20 27 201 / 5%)",
      zIndex: "-2",
    },
  },
}));
function Card() {
  const classes = useStyle();
  return (
    <div className={clsx(classes.card, "cardreview")}>
      <p
        style={{
          fontSize: "12px",
          lineHeight: "24px",
          marginTop: 0,
          color: "#61648e",
        }}
      >
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old.
      </p>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          style={{ width: "30px", height: "30px", borderRadius: "50%" }}
          src={avater}
          alt="avater"
        />
        <div style={{ marginLeft: "18px" }}>
          <h4 style={{ margin: 0, marginBottom: "5px", fontSize: "14px" }}>
            Mehidi Hasan
          </h4>
          <span style={{ color: "#61648e" }}>seo of webdev</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
