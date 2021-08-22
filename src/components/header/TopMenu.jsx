import { AppBar, Container, makeStyles, Toolbar } from "@material-ui/core";
import TurnedInIcon from "@material-ui/icons/TurnedIn";
import BookIcon from "@material-ui/icons/Book";
import Mail from "@material-ui/icons/Mail";
import Phone from "@material-ui/icons/Phone";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import Cart from "@material-ui/icons/ShoppingCart";
import React from "react";
import TopMenuButton from "./TopMenuButton";
import MainAppBar from "../menu/MainAppBar";
import Menu from "../menu/Menu";

const useStyle = makeStyles((theme) => ({
  grow: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      flexGrow: 1,
    },
  },
  toolbar: {
    minHeight: "35px",
  },
  topAds: {
    backgroundColor: theme.palette.secondary.main,
  },
  adsLink: {
    textDecoration: "none",
    fontSize: "22px",
    color: "#fff",
    fontWeight: "bold",
    margin: "0 auto",
    padding: "14px 0",
    textAlign: "center",
    position: "relative",
    display: "block",
    textAlign: "center",
    letterSpacing: "3px",
    width: "90%",

    [theme.breakpoints.down("xs")]: {
      fontSize: "16px",
    },
  },
}));
function TopMenu({
  onClicks,
  width,
  hidemenu,
  hidemenu2,
  hideOnScroll,
  showMenu,
  isWidthUp,
}) {
  const classes = useStyle();
  return (
    <div>
      <div className={classes.topAds}>
        <a
          href="http://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.adsLink}
        >
          {" "}
          Up to 70% off Shared Hosting. LAST DAY!
        </a>
      </div>
      <div style={{ position: "relative" }}>
        <div className={classes.grow}>
          <AppBar
            position="static"
            style={{ background: "transparent" }}
            elevation={0}
          >
            <Container maxWidth="lg">
              <Toolbar variant="dense" className={classes.toolbar}>
                <TopMenuButton
                  onClick={() => (window.location.href = "tel:+880157577796")}
                  Icon={Phone}
                  title="+880157577796"
                />
                <TopMenuButton
                  onClick={() =>
                    (window.location.href = "mailto:info@coxhost.com")
                  }
                  Icon={Mail}
                  title="info@coxhost.com"
                />

                <div className={classes.grow} />

                <TopMenuButton
                  onClick={() =>
                    window.open(
                      "https://coxhost.com/portal/submitticket.php",
                      "_blank"
                    )
                  }
                  Icon={Mail}
                  title="Open Tickets"
                />
                <TopMenuButton
                  onClick={() =>
                    window.open(
                      "https://coxhost.com/portal/submitticket.php",
                      "_blank"
                    )
                  }
                  Icon={TurnedInIcon}
                  title="Tutorial"
                />
                <TopMenuButton
                  onClick={() =>
                    window.open(
                      "https://coxhost.com/portal/submitticket.php",
                      "_blank"
                    )
                  }
                  Icon={BookIcon}
                  title="Blog"
                />
                <TopMenuButton
                  onClick={() =>
                    window.open(
                      "https://coxhost.com/portal/submitticket.php",
                      "_blank"
                    )
                  }
                  Icon={LocalOfferIcon}
                  title="Offers"
                />
                {/* <TopMenuButton
              Icon={Cart}
              onClick={() =>
                window.open(
                  "https://coxhost.com/clients/cart.php?a=view",
                  "_blank"
                )
              }
              title="0 Items"
            /> */}
              </Toolbar>
            </Container>
          </AppBar>
        </div>
        <MainAppBar
          onClicks={onClicks}
          position={hidemenu2 ? "static" : "fixed"}
        />
        {!hidemenu
          ? showMenu &&
            isWidthUp("md", width) && <Menu hideOnScroll={!hideOnScroll} />
          : null}
      </div>
    </div>
  );
}

export default TopMenu;
