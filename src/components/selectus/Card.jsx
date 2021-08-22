import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyle = makeStyles((theme) => ({
  card: {
    background: "#fff",
    padding: "30px",
    height: "420px",
    borderRadius: "10px",
    boxShadow: "-1px 4px 15px -2px rgb(0 0 0 / 40%)",
    transition: ".5s",
    border: "2px solid transparent",
    "&:hover": {
      borderColor: theme.palette.primary.main,
    },
  },
  card2: {
    background: "#fff",
    padding: "30px",
    height: "420px",
    borderRadius: "10px",
    boxShadow: "-1px 4px 15px -2px rgb(0 0 0 / 40%)",
    transition: ".5s",
    border: "2px solid transparent",
    position: "relative",
    zIndex: "1",
    "&::before": {
      borderRadius: "10px",
      background: theme.palette.secondary.main,
      position: "absolute",
      width: "100%",
      height: "100%",
      clipPath: "circle(0% at 14% 14%)",
      left: "0",
      top: "0",
      webkitTransition: "all .4s ease-in-out",
      transition: "all .7s ease-in-out",
      opacity: "1",
      visibility: "hidden",
      zIndex: "-1",
      content: '""',
    },
    "&:hover": {
      borderColor: theme.palette.secondary.main,
      "&::before": {
        clipPath: "circle(130% at 14% 14%)",
        opacity: "1",
        visibility: "visible",
      },
      "& $p": {
        transition: "all .8s ease-in-out",
        color: "#fff",
        textShadow: "-3px 3px 8px #000000",
      },
      "& $h4": {
        transition: "all .8s ease-in-out",
        color: "#fff",
      },
    },
  },
  p: {
    fontSize: "18px",
    fontWeight: 400,
    lineHeight: "1.4",
    color: "#61648e",
    textAlign: "justify",
  },
  h4: {
    fontSize: "22px",
    fontWeight: 500,
    color: theme.palette.primary.main,
  },
  img: {
    width: "100px",
  },
}));
function Card({ img, title, description, align }) {
  const classes = useStyle();
  return (
    <div
      className={align === "center" ? classes.card : classes.card2}
      style={{ textAlign: align }}
    >
      <img className={classes.img} src={img} alt="support" />
      <h4 className={classes.h4}>{title}</h4>
      <p className={classes.p}>{description}</p>
    </div>
  );
}

export default Card;
