import React from "react";
import Section from "../Section";
import bg from "../../assets/footer-bg.png";
import Menu from "./Menu";
import { Container, Grid, makeStyles, Button } from "@material-ui/core";
import logo from "../../assets/logo2.png";
import { SocialIcon } from "react-social-icons";
import FooterTop from "./FooterTop";

//payment icon
import bkash from "../../assets/payment_icon/bkash.png";
import ebl from "../../assets/payment_icon/ebl.png";
import express from "../../assets/payment_icon/express.png";
import logomastercardmobile from "../../assets/payment_icon/logo-mastercard-mobile.svg";
import nogod from "../../assets/payment_icon/nogod.png";
import payoneer from "../../assets/payment_icon/payoneer.png";
import rocket from "../../assets/payment_icon/rocket.png";
import ucb from "../../assets/payment_icon/ucb.png";
import visa from "../../assets/payment_icon/visa.png";

//footer png
import bdix from "../../assets/footer_img/bdix.png";
import cp1 from "../../assets/footer_img/cp1.png";
import lite from "../../assets/footer_img/lite.png";

import bg5 from "../../assets/bg5.png";
import bg6 from "../../assets/bg6.png";

import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";

const useStyle = makeStyles((theme) => ({
  h4: {
    fontSize: "22px",
    margin: "20px auto 20px auto",
    paddingBottom: "10px",
    color: "#fff",
    display: "inline-block",
    position: "relative",
    "&::before": {
      content: "''",
      position: "absolute",
      bottom: 0,
      left: "0",
      height: "4px",
      borderRadius: "20px",
      backgroundColor: "#fff",
      width: "15px",
    },
    "&::after": {
      content: "''",
      position: "absolute",
      bottom: 0,

      height: "4px",
      borderRadius: "20px",
      backgroundColor: "#fff",
      width: "55px",
      left: "20px",
    },
  },
  li: {
    listStyle: "none",
    color: "#fff",
    fontSize: "14px",
    fontWeight: "500",
    margin: "7px 0",
    textShadow: "-3px 3px 8px #000000",
    cursor: "pointer",
    position: "relative",
  },
  icon: {
    width: "230px",
    height: "68px",
    margin: "5px",
    background: "#fff",
    borderRadius: "50%",
    border: "1px solid #fff",
  },
  copyright: {
    background: "#111942",
    padding: "15px 0",
    //textAlign: "center",
  },
  btn: {
    color: "#fff",
    fontSize: "14px",
    fontWeight: "500",
    textTransform: "capitalize",
    padding: "5px 8px",
    marginRight: "10px",
    lineHeight: 1.2,
    width: "136px",
    justifyContent: "flex-start",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      boxShadow:
        "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
    },
    // [theme.breakpoints.down("xs")]: {
    //   marginRight: "5px",
    //   padding: "2px 3px",
    //   fontSize: "10px",
    // },
    // [theme.breakpoints.down("sm")]: {
    //   marginBottom: "20px",
    // },
  },
  paymentIcon: {
    width: "50px",
    margin: "5px",
    background: "#fff",
    borderRadius: "3px",
  },
}));
function Footer({ onClicks, Tawk_API }) {
  const classes = useStyle();
  const listsHosting = [
    {
      title: "Shared Hosting",
      id: 1,
    },
    {
      title: "Reseller Hosting",
      id: 2,
    },
    {
      title: "BDIX Hosting",
      id: 9,
    },
    {
      title: "Cloud Hosting",
      id: 4,
    },
    {
      title: "WordPress Hosting",
    },
    {
      title: "E-commerce Hosting",
    },
    {
      title: "VPS Hosting",
    },
    {
      title: "Dedicated Hosting",
    },
  ];
  const listsAbout = [
    {
      title: "Company Profile",
    },
    {
      title: "Latest Blog",
    },
    {
      title: "Press & Media",
    },
    {
      title: "Careers",
    },
    {
      title: "Affiliate Program",
    },
  ];
  const listsDomain = [
    {
      title: "Register Domain",
    },
    {
      title: "Transfer Domain",
    },
    {
      title: "Domain Reseller",
    },
    {
      title: ".BD Domain",
    },
  ];
  const listsPortal = [
    {
      title: "Client Area",
    },
    {
      title: "Ticket Open",
    },
    {
      title: "Video Tutorials",
    },
    {
      title: "Network Status",
    },
  ];
  const date = new Date();
  return (
    <div>
      <FooterTop Tawk_API={Tawk_API} />
      <div
        style={{
          background: `#510089`,
          position: "relative",
          overflow: "hidden",
          backgroundImage: `url(${bg5}), url(${bg6}), linear-gradient(90deg,#111c58 0,#5c2782 51%,#111c58)`,
        }}
      >
        <Container style={{ paddingTop: "50px" }}>
          {/* <img
            src={bg}
            alt="bg"
            style={{ position: "absolute", width: "70%" }}
          /> */}
          <Grid container spacing={2} style={{ margin: "0 auto" }}>
            <Grid item md={3}>
              <img src={logo} alt="" />
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "24px",
                  marginRight: "15px",
                  color: "#fff",
                }}
              >
                We make registering, hosting, and managing domains for yourself
                or others easy and affordable, because the internet needs
                people.
              </p>
              {/* <div
                style={{
                  margin: "10px 0",
                  background: "#fff",
                  textAlign: "center",
                  borderRadius: "5px",
                }}
              > */}
              <SocialIcon
                url="https://www.facebook.com/"
                className={classes.icon}
                style={{ width: "38px", height: "38px" }}
              />
              <SocialIcon
                url="https://google.com/"
                className={classes.icon}
                style={{ width: "38px", height: "38px" }}
              />
              <SocialIcon
                url="https://twitter.com/"
                className={classes.icon}
                style={{ width: "38px", height: "38px" }}
              />
              <SocialIcon
                url="https://youtube.com/"
                className={classes.icon}
                style={{ width: "38px", height: "38px" }}
              />
              <div style={{ marginTop: "20px" }}>
                <Button className={classes.btn}>Terms of Service</Button>
                <Button className={classes.btn}>Privacy Policy</Button>
                <Button className={classes.btn}>Refund Policy</Button>
                <Button className={classes.btn}>Documentation</Button>
              </div>
              {/* <div>
                  <img src={bdix} alt="bdix image" className={classes.icon} />
                  <img src={cp1} alt="cp1 image" className={classes.icon} />
                </div>
                <img src={cp1} alt="cp1 image" className={classes.icon} />
                <img src={lite} alt="lite image" className={classes.icon} />
              </div> */}
            </Grid>
            <Grid item md={2} style={{ width: "100%" }}>
              <Menu
                title="Hosting"
                lists={listsHosting}
                style={{ width: "100%" }}
              />
            </Grid>

            <Grid item md={2} style={{ width: "100%" }}>
              <Menu title="Domain" lists={listsDomain} onClicks={onClicks} />
              <Menu title="Portal Support" lists={listsPortal} />
            </Grid>
            <Grid item md={2} style={{ width: "100%" }}>
              <Menu
                title="About"
                lists={listsAbout}
                style={{ width: "100%" }}
              />
            </Grid>
            <Grid item md={3} style={{ width: "100%" }}>
              <h4 className={classes.h4}>Contact</h4>
              {/* <p
              style={{
                color: "#fff",
                fontSize: "18px",
                lineHeight: "28px",
                position: "relative",
              }}
            >
              Central Shima Bihar Rd,
              <br /> Chawmahani,Ramu <br /> Cox's Bazar,BD-4730
            </p> */}
              <div
                style={{
                  display: "flex",
                  //justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundImage: "linear-gradient(120deg,#f5592a,#f80155)",
                    border: "1px solid #fff",
                    marginRight: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {" "}
                  <PhoneIcon
                    style={{
                      color: "#fff",
                      fontSize: "24px",
                    }}
                  />
                </div>
                <div>
                  <p
                    style={{
                      margin: "5px",
                      fontWeight: "bold",
                      color: "#fff",
                      fontSize: "14px",
                      cursor: "pointer",
                    }}
                  >
                    +8801812432381
                  </p>
                  <p
                    style={{
                      margin: "5px",
                      fontWeight: "bold",
                      color: "#fff",
                      fontSize: "14px",
                      cursor: "pointer",
                    }}
                  >
                    +8801787530439
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  //justifyContent: "center",
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundImage: "linear-gradient(120deg,#f5592a,#f80155)",
                    border: "1px solid #fff",
                    marginRight: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {" "}
                  <EmailIcon
                    style={{
                      color: "#fff",
                      fontSize: "24px",
                    }}
                  />
                </div>
                <div style={{ textAlign: "left" }}>
                  <p
                    style={{
                      margin: "5px",
                      fontWeight: "bold",
                      color: "#fff",
                      fontSize: "14px",
                      cursor: "pointer",
                    }}
                  >
                    info@coxhost.com
                  </p>
                  <p
                    style={{
                      margin: "5px",
                      fontWeight: "bold",
                      color: "#fff",
                      fontSize: "14px",
                      cursor: "pointer",
                    }}
                  >
                    support@coxhost.com
                  </p>
                  <p
                    style={{
                      margin: "5px",
                      fontWeight: "bold",
                      color: "#fff",
                      fontSize: "14px",
                      cursor: "pointer",
                    }}
                  >
                    billing@coxhost.com
                  </p>
                </div>
              </div>
              {/* <ul style={{ padding: 0 }}>
                <li className={classes.li}>
                  Sales Team: <b>+8801812432381</b>
                </li>
                <li className={classes.li}>
                  Support Team: <b>+8801787530439</b>
                </li>
                <li className={classes.li}>Email :</li>
                <li className={classes.li}>
                  <b>info@coxhost.com</b>
                </li>
                <li className={classes.li}>
                  <b>support@coxhost.com</b>
                </li>
                <li className={classes.li}>
                  <b>billing@coxhost.com</b>
                </li>
              </ul> */}
            </Grid>
          </Grid>
        </Container>
        <div className={classes.copyright}>
          <Container>
            <Grid container>
              <Grid
                item
                md={6}
                style={{ display: "flex", alignItems: "center" }}
              >
                {/* <Button className={classes.btn}>Terms of Service</Button>
                <Button className={classes.btn}>Privacy Policy</Button>
                <Button className={classes.btn}>Refund Policy</Button>
                <Button className={classes.btn}>Documentation</Button> */}
                <p style={{ color: "#fff", margin: "0 auto", fontWeight: 500 }}>
                  Copyright ©{" "}
                  <span style={{ fontWeight: "bold" }}>
                    2017 - {date.getFullYear()}
                  </span>{" "}
                  CoxHost - All rights reserved.
                </p>
              </Grid>
              <Grid item md={6}>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  <img
                    src={visa}
                    alt="payment-icon"
                    className={classes.paymentIcon}
                  />

                  <img
                    src={logomastercardmobile}
                    alt="payment-icon"
                    className={classes.paymentIcon}
                  />
                  <img
                    src={express}
                    alt="payment-icon"
                    className={classes.paymentIcon}
                  />
                  <img
                    src={bkash}
                    alt="payment-icon"
                    className={classes.paymentIcon}
                  />
                  <img
                    src={rocket}
                    alt="payment-icon"
                    className={classes.paymentIcon}
                  />
                  <img
                    src={nogod}
                    alt="payment-icon"
                    className={classes.paymentIcon}
                  />
                  <img
                    src={payoneer}
                    alt="payment-icon"
                    className={classes.paymentIcon}
                  />
                  <img
                    src={ebl}
                    alt="payment-icon"
                    className={classes.paymentIcon}
                  />

                  <img
                    src={ucb}
                    alt="payment-icon"
                    className={classes.paymentIcon}
                  />
                </div>
              </Grid>
            </Grid>
            {/* <div style={{ textAlign: "center", marginTop: "15px" }}>
              {" "}
              <p style={{ color: "#fff", margin: 0, fontWeight: 500 }}>
                Copyright © 2017 - {date.getFullYear()} CoxHost - All rights
                reserved.
              </p>
            </div> */}
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Footer;
