import {
  Button,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import React, { useState } from "react";
import { Link } from "react-scroll";
import HeaderFrame from "../../assets/rocket.png";
import MainAppBar from "../menu/MainAppBar";
import Menu from "../menu/Menu";
import TopMenu from "./TopMenu";
import Typewriter from "typewriter-effect";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SearchIcon from "@material-ui/icons/Search";
import ModalVideo from "react-modal-video";
import { SocialIcon } from "react-social-icons";
import "./videoModal.css";
import bg5 from "../../assets/bg5.png";
import bg6 from "../../assets/bg6.png";
import bg7 from "../../assets/pic2.8176d07771082b3af7efa7c9fd57e095.png";
import bg8 from "../../assets/bnr4.5b33c149ded4e9c37ad0a9b03cb975b3.png";

const useStyles = (isAbout) => {
  let bg = bg7;
  let height = "900px";
  let backgroundSize = "";
  if (isAbout) {
    bg = bg8;
    height = "500px";
    backgroundSize = "cover,200%";
  }
  const callStyle = makeStyles((theme) => {
    return {
      custombtn: {
        padding: "13px 0px",
        marginRight: "20px",
        [theme.breakpoints.down("xs")]: {
          marginBottom: "15px",
        },

        textTransform: "capitalize",
        borderRadius: "8px",
        width: "250px",
        fontWeight: "700",
      },
      custombtn2: {
        background: "transparent",
        border: `2px solid ${theme.palette.secondary.main}`,
        borderRadius: "24px",
        color: "#fff",
        fontWeight: "700",
        fontSize: "16px",
        textTransform: "capitalize",
        "&:hover": {
          background: "#333",
        },
      },
      h2: {
        width: "100%",
        color: "#fff",

        [theme.breakpoints.down("md")]: {
          width: "100%",
          fontSize: "2.75rem",
        },
      },
      subtitle1: {
        margin: "24px 0",
        width: "90%",
        color: "#fff",
        [theme.breakpoints.down("md")]: {
          width: "100%",
        },
      },
      headerFrame: {
        width: "120%",
        // width: "800px",
        // marginTop: "-110px",
        position: "relative",
        animationName: `$myEffect`,
        animationDuration: "5s",
        animationTimingFunction: "ease-out",
        animationIterationCount: "infinite",
        [theme.breakpoints.down("sm")]: {
          width: "0%",
          marginTop: "0px",
        },
      },
      "@keyframes myEffect": {
        "0%": {
          transform: "translateY(-50px)",
        },
        "25%": {
          transform: "translateY(-30px)",
        },
        "75%": {
          transform: "translateY(-0px)",
        },
        "100%": {
          transform: "translateY(-50px)",
        },
      },
      headerMain: {
        height,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        overflow: "visible",
        backgroundPosition: "bottom top",
        position: "relative",
        [theme.breakpoints.down("md")]: {
          height: "900px",
          textAlign: "center",
        },
        "&::before": {
          backgroundImage: `url(${bg})`,
          content: '""',
          position: "absolute",
          bottom: "0",
          width: "100%",
          height: "100%",
          left: "0",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
          zIndex: "0",
          boxSizing: "border-box",
          backgroundSize,
        },
      },
      container: {
        [theme.breakpoints.down("sm")]: {
          paddingTop: "110px",
        },
      },
      searchForm: {
        width: "77%",
        [theme.breakpoints.down("xs")]: {
          width: "90%",
          margin: "0 auto",
        },
        background: "#fff",
        position: "relative",
        textAlign: "left",
        borderRadius: "24px",
        border: `1px solid ${theme.palette.secondary.main}`,
      },
      searchInput: {
        background: "transparent",
        border: "0",
        outline: "0",
        padding: "14px 13px",
        width: "67%",
        fontSize: "22px",
        [theme.breakpoints.down("xs")]: {
          width: "68%",
          fontSize: "18px",
        },
      },
      submitbtn: {
        borderRadius: "24px",
        marginBottom: "5px",
        textTransform: "capitalize",
        fontWeight: 700,
        fontSize: "16px",
        position: "absolute",
        top: "15%",
        right: "2%",
      },
    };
  });

  return callStyle;
};

const Header = ({
  hidemenu,
  hidemenu2,
  width,
  onClicks,
  inputValue,
  setinputValue,
  isAbout = false,
}) => {
  let callStyle = useStyles(isAbout);
  // if (isAbout) {
  //   callStyle = useStyles(bg8, "560px");
  // }
  const classes = callStyle();
  const [hideOnScroll, setHideOnScroll] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [inputText, setinputText] = useState("");
  const [isOpen, setOpen] = useState(false);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y;
      if (currPos.y < -200) {
        setShowMenu(true);
      } else {
        setShowMenu(false);
      }

      if (isShow !== hideOnScroll) setHideOnScroll(isShow);
    },
    [hideOnScroll]
  );
  //background-image: url(images/background/bg5.png), url(images/background/bg6.png), var(--gradient-sec);
  return (
    <div>
      <div
        className={classes.headerMain}
        style={{
          backgroundImage: `url(${bg5}), url(${bg6}), linear-gradient(90deg,#111c58 0,#5c2782 51%,#111c58)`,
        }}
      >
        <TopMenu
          onClicks={onClicks}
          width={width}
          hidemenu2={hidemenu2}
          isWidthUp={isWidthUp}
          showMenu={showMenu}
          hideOnScroll={hideOnScroll}
        />
        {/* <MainAppBar
        onClicks={onClicks}
        position={isWidthUp("md", width) || hidemenu2 ? "static" : "fixed"}
      />
      {!hidemenu
        ? showMenu &&
          isWidthUp("md", width) && <Menu hideOnScroll={!hideOnScroll} />
        : null} */}

        {isAbout ? (
          <div>
            <Typography
              style={{ textAlign: "center", marginTop: "110px", color: "#fff" }}
              variant="h2"
              component="h2"
              color="secondary"
            >
              About Us
            </Typography>
          </div>
        ) : (
          <div style={{ overflow: "visible" }} className={classes.container}>
            <Container>
              <Grid container spacing={2}>
                <Grid
                  item
                  md={6}
                  xs={12}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    className={classes.h2}
                    variant="h2"
                    component="h2"
                    color="secondary"
                  >
                    Launch Your <br /> Dream{" "}
                    <Typewriter
                      options={{
                        strings: ["Domain", "Hosting", "Website"],
                        autoStart: true,
                        loop: true,
                        cursor: "",
                      }}
                    />{" "}
                    <br />
                    With Us
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    component="p"
                    className={classes.subtitle1}
                  >
                    Launch today your dream products with CoxHost. We will try
                    provide our best solution for you. Don't Waste your time
                    take Get Start.
                  </Typography>
                  <div
                    style={
                      isWidthUp("sm", width)
                        ? { display: "flex" }
                        : { display: "block" }
                    }
                  >
                    <Link to="stepSection" spy={true} smooth={true}>
                      <Button
                        color="secondary"
                        variant="contained"
                        className={classes.custombtn}
                      >
                        CHOICE YOUR DREAM
                      </Button>
                    </Link>
                    <Button
                      onClick={() => setOpen(true)}
                      variant="contained"
                      className={classes.custombtn2}
                      startIcon={<PlayArrowIcon fontSize="large" />}
                    >
                      How it's work
                    </Button>
                  </div>
                  <div style={{ marginTop: "10vh" }}>
                    <form className={classes.searchForm}>
                      <input
                        required
                        className={classes.searchInput}
                        type="text"
                        placeholder="Search your dream domain"
                        onChange={(v) => setinputText(v.target.value)}
                      />
                      <Link to="setpStepper" spy={true} smooth={true}>
                        <Button
                          className={classes.submitbtn}
                          startIcon={isWidthUp("sm", width) && <SearchIcon />}
                          color="secondary"
                          variant="contained"
                          type="submit"
                          onClick={() => {
                            onClicks();
                            inputValue({
                              ...setinputValue,
                              value: { text: inputText, ltd: ".com" },
                            });
                            setinputValue.func(
                              null,
                              setinputValue.hiddenInput.props.value,
                              inputText + ".com"
                            );
                          }}
                        >
                          {isWidthUp("sm", width) ? "Search" : <SearchIcon />}
                        </Button>
                      </Link>
                    </form>
                  </div>
                </Grid>
                <Grid item md={6} xs={12}>
                  <div className={classes.headerFrame}>
                    <img width="100%" src={HeaderFrame} alt="header frame" />
                  </div>
                </Grid>
              </Grid>
            </Container>
          </div>
        )}

        <ModalVideo
          channel="youtube"
          mute={1}
          autoplay
          isOpen={isOpen}
          videoId="L61p2uyiMSo"
          onClose={() => setOpen(false)}
        />
      </div>
    </div>
  );
};

export default withWidth()(Header);
