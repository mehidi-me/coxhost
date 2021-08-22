import {
  AppBar,
  Button,
  Container,
  makeStyles,
  Toolbar,
} from "@material-ui/core";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import MenuIconClose from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useEffect, useState } from "react";
import DropMenu from "./DropMenu";
import DropMenuWithImage from "./DropMenuWithImage";

import cloud from "../../assets/cloud-hosting.png";
import logo from "../../assets/logo.png";
import reseller from "../../assets/reseller-host.png";
import shared from "../../assets/shared-hosting.png";
import vps from "../../assets/vps-hosting.png";
import wordpressHosting from "../../assets/wordpress-hosting.svg";

import domain from "../../assets/domain.svg";
import transfer from "../../assets/transfer.svg";
import resellerDomain from "../../assets/reseller.svg";
import domainbd from "../../assets/domainbd.svg";

import webDevelopmet from "../../assets/theme.svg";
import appsDevelopmet from "../../assets/mobile-app.svg";
import digitalMarketing from "../../assets/digital-marketing.svg";
import seo from "../../assets/seo.svg";
import sms from "../../assets/smartphone.svg";
import website from "../../assets/website.svg";
import ssl from "../../assets/ssl-certificate.svg";
import { Link as RoutLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  logo: {
    marginRight: theme.spacing(2),
  },
  sectionDesktop: {
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      position: "absolute",
      top: "64px",
      left: "0",
      width: "0",
      height: "80vh",
      background: "#333333f0",
      padding: "50px 0",
      zIndex: "1",
      overflow: "auto",
      transition: ".5s",
      opacity: 0,
    },
    [theme.breakpoints.down("xs")]: {
      top: "58px",
    },
  },
  appbar: {
    background: "#fff",
    position: "relative",
    // [theme.breakpoints.down("xs")]: {
    //   top: "70px",
    // },
  },
  button: {
    color: "#333",
    marginRight: "15px",
    textTransform: "capitalize",
    fontSize: "16px",
    [theme.breakpoints.down("sm")]: {
      margin: "10px auto",
      color: "#fff",
    },
  },
  button2: {
    padding: "0 28px",
    color: "#000",
    background: "transparent",
    border: `2px solid ${theme.palette.secondary.main}`,
    borderRadius: "50px",
    "&:hover": {
      color: "#fff",
      background: theme.palette.secondary.main,
    },
    marginRight: "15px",
    textTransform: "capitalize",
    fontWeight: 700,
    fontSize: "16px",
    [theme.breakpoints.down("sm")]: {
      margin: "10px auto",
      color: "#fff",
    },
  },
  button22: {
    padding: "0 28px",
    color: "#fff",
    background: theme.palette.primary.main,
    border: `2px solid ${theme.palette.primary.main}`,
    borderRadius: "50px",
    "&:hover": {
      color: "#000",
      background: "transparent",
    },
    marginRight: "15px",
    textTransform: "capitalize",
    fontWeight: 700,
    fontSize: "16px",
    [theme.breakpoints.down("sm")]: {
      margin: "10px auto",
      color: "#fff",
    },
  },
}));
function MainAppBar({ hideOnScroll, width, onClicks, position }) {
  const classes = useStyles();
  const [openMobileMenu, setOpenMobileMenu] = useState({
    width: 0,
    show: 0,
  });
  const itemListHosting = [
    {
      title: "Shared Hosting",
      icon: shared,
      color: "green",
      id: 1,
    },
    {
      title: "Reseller Hosting",
      icon: reseller,
      color: "red",
      id: 2,
    },
    {
      title: "BDIX Hosting",
      icon: vps,
      color: "tomato",
      id: 9,
    },
    {
      title: "Cloud Hosting",
      icon: cloud,
      color: "blue",
      id: 4,
    },
    {
      title: "WordPress Hosting",
      icon: wordpressHosting,
      color: "tomato",
      id: 20,
    },
    {
      title: "E-commerce Hosting",
      icon: vps,
      color: "tomato",
      id: 21,
    },
    {
      title: "VPS Hosting",
      icon: vps,
      color: "tomato",
      id: 3,
    },
    {
      title: "Dedicated Hosting",
      icon: vps,
      color: "tomato",
      id: 5,
    },
  ];
  const itemListDomain = [
    { title: "Register New Domain", icon: domain, color: "red" },
    { title: "Transfer Domain", icon: transfer, color: "green" },
    { title: "Domain Reseller", icon: resellerDomain, color: "blue" },
    { title: ".BD Domain", icon: domainbd, color: "tomato" },
  ];
  const itemListOthers = [
    { title: "Web Development", icon: webDevelopmet, color: "red" },
    { title: "Apps Development", icon: appsDevelopmet, color: "green" },
    { title: "Digital Marketing", icon: digitalMarketing, color: "blue" },
    { title: "SEO", icon: seo, color: "tomato" },
    { title: "Bulk SMS", icon: sms, color: "tomato" },
    { title: "Web Application", icon: website, color: "tomato" },
    { title: "SSL Certificates", icon: ssl, color: "tomato" },
  ];
  useEffect(() => {
    if (isWidthUp("md", width)) {
      setOpenMobileMenu({
        width: "auto",
        show: 1,
      });
    }
  }, [width]);
  return (
    <AppBar
      position={position}
      className={classes.appbar}
      onScroll={() => console.log("scrolling")}
    >
      <Container maxWidth="lg" style={{ padding: 0 }}>
        <Toolbar>
          {/* <Typography
							className={classes.title}
							variant="p"
							noWrap
						>
							Material-UI
						</Typography> */}

          <img
            classsName={classes.logo}
            style={{ width: "200px" }}
            src={logo}
            alt="Logo"
          />

          <div className={classes.grow} />
          {!isWidthUp("md", width) && (
            <Button
              onClick={() => {
                if (!openMobileMenu.width) {
                  setOpenMobileMenu({
                    width: "100%",
                    show: 1,
                  });
                } else {
                  setOpenMobileMenu({
                    width: 0,
                    show: 0,
                  });
                }
              }}
            >
              {openMobileMenu.width ? (
                <MenuIconClose
                  style={{
                    color: "#333",
                    fontSize: "38px",
                  }}
                />
              ) : (
                <MenuIcon
                  style={{
                    color: "#333",
                    fontSize: "38px",
                  }}
                />
              )}
            </Button>
          )}
          <div
            className={classes.sectionDesktop}
            style={{
              width: openMobileMenu.width,
              opacity: openMobileMenu.show,
            }}
          >
            <Button color="inherit" className={classes.button}>
              Home
            </Button>

            <DropMenu
              title="Domain"
              itemList={itemListDomain}
              setOpenMobileMenu={setOpenMobileMenu}
              onClicks={onClicks}
            />
            <DropMenuWithImage
              title="Hosting"
              itemList={itemListHosting}
              setOpenMobileMenu={setOpenMobileMenu}
              onClicks={onClicks}
            />
            <DropMenu
              title="More"
              itemList={itemListOthers}
              setOpenMobileMenu={setOpenMobileMenu}
              onClicks={onClicks}
            />

            <Button
              color="inherit"
              onClick={() =>
                window.open(
                  "https://coxhost.com/portal/submitticket.php",
                  "_blank"
                )
              }
              className={classes.button}
            >
              About
            </Button>

            <Button
              color="inherit"
              onClick={() =>
                window.open(
                  "https://coxhost.com/portal/submitticket.php",
                  "_blank"
                )
              }
              className={classes.button}
            >
              Contact Us
            </Button>
            <Button
              variant="contained"
              onClick={() =>
                window.open(
                  "https://coxhost.com/portal/submitticket.php",
                  "_blank"
                )
              }
              className={classes.button2}
            >
              Sign In
            </Button>
            <Button
              variant="contained"
              onClick={() =>
                window.open(
                  "https://coxhost.com/portal/submitticket.php",
                  "_blank"
                )
              }
              className={classes.button22}
            >
              Sign Up
            </Button>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default withWidth()(MainAppBar);
