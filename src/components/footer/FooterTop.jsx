import React from "react";
import { Container, Grid, makeStyles } from "@material-ui/core";
import ForumOutlinedIcon from "@material-ui/icons/ForumOutlined";
import ConfirmationNumberOutlinedIcon from "@material-ui/icons/ConfirmationNumberOutlined";
import CallOutlinedIcon from "@material-ui/icons/CallOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";

import bgimg from "../../assets/commen-support-img.webp";
//import bgimg from "../../assets/bgimg.png";

const useStyle = makeStyles((theme) => ({
  box: {
    background: "#ccc",
    width: "23%",
    textAlign: "center",
    padding: "20px 0",
    borderRadius: "15px",
    margin: "1%",
    [theme.breakpoints.down("sm")]: {
      width: "200px",
      margin: "10px",
    },
    "&:hover": {
      boxShadow: "0px 0px 18px #333, 0px 0px 18px #fff",
      transition: ".5s",
      transform: "translateY(10px)",
    },
    cursor: "pointer",
  },
}));
function FooterTop({ onClicks, Tawk_API }) {
  const classes = useStyle();

  return (
    <div
      style={{
        background: `#02345c`,
        //height: "600px",
      }}
    >
      <Container style={{ padding: "30px 0 0 0" }}>
        <Grid container>
          <Grid item md={8}>
            <h3 style={{ fontSize: "34px", color: "#fff", margin: "10px 0" }}>
              Not sure where to Start?
            </h3>
            <p
              style={{
                fontSize: "16px",
                color: "#b3c2ce",
                margin: "10px 0 30px 0",
              }}
            >
              Talk to one of our hosting specialist who will review your needs
              and propose a tailored hosting solution that will match your
              specific business reality and needs.
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <div
                className={classes.box}
                style={{ background: "#22a4ca" }}
                onClick={() => {
                  if (window.Tawk_API) {
                    window.Tawk_API.maximize();
                  }
                }}
              >
                <ForumOutlinedIcon
                  style={{ fontSize: "80px", color: "#fff" }}
                />
                <p
                  style={{
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: "16px",
                    marginBottom: "10px",
                  }}
                >
                  Sales Live Chat
                </p>
              </div>
              <div
                className={classes.box}
                style={{ background: "#c49e37" }}
                onClick={() =>
                  window.open(
                    "https://coxhost.com/portal/submitticket.php",
                    "_blank"
                  )
                }
              >
                <ConfirmationNumberOutlinedIcon
                  style={{ fontSize: "80px", color: "#fff" }}
                />
                <p
                  style={{
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: "16px",
                    marginBottom: "10px",
                  }}
                >
                  Support Tickets
                </p>
              </div>
              <div
                className={classes.box}
                style={{ background: "#34a143" }}
                onClick={() => (window.location.href = "tel:+880157577796")}
              >
                <CallOutlinedIcon style={{ fontSize: "80px", color: "#fff" }} />
                <p
                  style={{
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: "16px",
                    marginBottom: "10px",
                  }}
                >
                  Call Us Now
                </p>
              </div>
              <div
                className={classes.box}
                style={{ background: "#cb255c" }}
                onClick={() =>
                  (window.location.href = "mailto:info@coxhost.com")
                }
              >
                <EmailOutlinedIcon
                  style={{ fontSize: "80px", color: "#fff" }}
                />
                <p
                  style={{
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: "16px",
                    marginBottom: "10px",
                  }}
                >
                  Send Email
                </p>
              </div>
            </div>
          </Grid>
          <Grid item md={4}>
            <div style={{ marginTop: "-70px", marginLeft: "-110px" }}>
              <img
                src={bgimg}
                style={{
                  width: "100%",
                  height: "auto",
                  verticalAlign: "middle",
                }}
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default FooterTop;
