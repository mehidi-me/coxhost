import { Button, makeStyles } from "@material-ui/core";
import React from "react";
import { Link } from "react-scroll";
import shapimg from "../../assets/number-shap.png";

const useStyle = makeStyles((theme) => ({
  card: {
    backgroundColor: "#fff",
    height: "540px",
    width: "375px",
    transition: ".5s",
    position: "relative",
    borderRadius: "10px",
    boxShadow: "0 0 25px 0 rgb(20 27 201 / 17%)",
    [theme.breakpoints.down("sm")]: {
      margin: "0 auto",
      marginBottom: "20px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "90%",
    },
    //cursor: "pointer",
    "&::before": {
      borderRadius: "10px",
      backgroundImage: "linear-gradient(120deg,#f5592a,#f80155)",
      position: "absolute",
      width: "100%",
      height: "0%",
      left: "0",
      top: "0",
      webkitTransition: "all .4s ease-in-out",
      transition: "all .4s ease-in-out",
      opacity: "0",
      visibility: "hidden",
      zIndex: "-1",
      content: '""',
    },
    "&:hover": {
      "&::before": {
        height: "100%",
        opacity: "1",
        visibility: "visible",
      },

      //   "& $h5": {
      //     color: "#fff",
      //   },
    },
  },
  shapimg: {
    width: "200px",
    position: "absolute",
    top: "-100px",
    left: " 96px",
  },
  shapnumber: {
    color: "#fff",
    position: "absolute",
    top: "-34px",
    left: "182px",
    fontSize: "58px",
    fontWeight: "700",
  },
  shaptext: {
    top: "-16px",
    left: 0,
    color: "#fff",
    position: "absolute",
    fontSize: "16px",
    padding: " 5px 14px",
    borderRadius: "10px",
    backgroundColor: "#2866d7",
  },
  button: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    color: "#fff",
    textTransform: "none",
    fontSize: "18px",
    backgroundColor: "#2866d7",
    borderRadius: "10px",
    "&:hover": {
      backgroundColor: "#2866d7",
    },
  },
  h5: {
    fontSize: "38px",
    margin: "38px 0 0 0",
    //color: "#333",
    color: "#333",
  },
  content: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    marginTop: "125px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "75px",
      paddingTop: "125px",
    },
  },
}));
function Card({ step, buttonText, img, title, onClick, btnDisabled = false }) {
  const classes = useStyle();
  return (
    <div className={classes.card}>
      <img className={classes.shapimg} src={shapimg} alt="shap" />
      <p className={classes.shaptext}>Step</p>
      <span className={classes.shapnumber}>{step}</span>
      <div className={classes.content}>
        <img width="40%" src={img} alt="domain" />
        <h5 className={classes.h5}>{title}</h5>
      </div>
      <Link to="setpStepper" spy={true} smooth={true}>
        {/* <Button
          className={classes.button}
          color="inherit"
          onClick={onClick}
          disabled={btnDisabled}
        >
          {buttonText}
        </Button> */}
        <div style={{ textAlign: "center", marginTop: "90px" }}>
          <span
            onClick={onClick}
            style={{
              color: "rgb(255, 255, 255)",
              borderWidth: "10px",
              borderColor: "rgba(0, 0, 0, 0)",
              borderRadius: "10px",
              letterSpacing: "1px",
              fontSize: "16px",
              textTransform: "uppercase",
              backgroundColor: "#2866d7",
              boxShadow: "rgb(41 112 250 / 20%) 0px 20px 30px 0px",
              padding: "15px 20px",
              border: "2px solid",
              display: "inline-block",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            {" "}
            {buttonText}
          </span>
        </div>
      </Link>
    </div>
  );
}

export default Card;
