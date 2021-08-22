import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import headingimg from "../assets/headline.png";

const useStyle = makeStyles((theme) => ({
  headingbg: {
    height: "36px",
    width: "130px",
    margin: "0 auto 14px",
    display: "block",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${headingimg})`,
  },
  h3: {
    color: "#333",
    [theme.breakpoints.down("md")]: {
      fontSize: "2.75rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
      // paddingBottom: "38px",
    },
  },
  p: {
    paddingBottom: "70px",
    fontSize: "16px",
    color: "#333",
    textAlign: "center",
  },
}));
function Heading({ title, subtitle, markTitle, isBg }) {
  const classes = useStyle();
  return (
    <div>
      <span className={classes.headingbg}></span>
      <Typography
        className={classes.h3}
        variant="h3"
        component="h3"
        color="secondary"
        style={isBg ? { color: "#fff" } : {}}
      >
        {title}
        {markTitle && (
          <span
            style={{
              background: "#2866d7",
              color: "#fff",
              padding: "5px 10px",
              borderRadius: "10px",
              display: "inline-block",
            }}
          >
            {markTitle}
          </span>
        )}
      </Typography>
      <p className={classes.p} style={isBg ? { color: "#fff" } : {}}>
        {subtitle}
      </p>
    </div>
  );
}

export default Heading;
