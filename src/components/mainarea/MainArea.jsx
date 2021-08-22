import { Grid, makeStyles } from "@material-ui/core";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import bgshap from "../../assets/bgshap3.png";
import domain from "../../assets/domain.svg";
import headingimg from "../../assets/headline.png";
import hosting from "../../assets/hosting.svg";
import theme from "../../assets/theme.svg";
import Heading from "../Heading";
import Section from "../Section";
import Card from "./Card";
import StepStepper from "./StepStepper";

// slick slider nextArrow event
const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        right: "7%",
        top: "50%",
        zIndex: 999,
      }}
      onClick={onClick}
    />
  );
};

// slick slider prevArrow event
const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        left: "2%",
        top: "50%",
        zIndex: 999,
      }}
      onClick={onClick}
    />
  );
};

const useStyle = makeStyles((theme) => ({
  content: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  h3: {
    paddingBottom: "125px",
    color: "#333",
    [theme.breakpoints.down("md")]: {
      fontSize: "2.75rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
      paddingBottom: "38px",
    },
  },
  headingbg: {
    height: "36px",
    width: "130px",
    margin: "0 auto 14px",
    display: "block",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${headingimg})`,
  },
  [theme.breakpoints.down("sm")]: {
    card: {
      display: "block",
    },
  },
}));
function MainArea({
  width,
  sethidemenu,
  sethidemenu2,
  cardONClickHeader,
  setinputValue,
  inputValue,
}) {
  const classes = useStyle();
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const [domainStatus, setdomainStatus] = useState({
    active: false,
    completed: false,
  });
  const [hostingStatus, sethostingStatus] = useState({
    active: false,
    completed: false,
  });
  const [themeStatus, setthemeStatus] = useState({
    active: false,
    completed: false,
  });
  //const [btnDisabled, setbtnDisabled] = useState(false);
  const [showStepper, setshowStepper] = useState({
    min: 0,
    normal: 0,
    padding: 0,
  });
  const stepperOnhandlar = (set) => {
    set({
      active: true,
      completed: false,
    });
    setshowStepper({ min: "100vh", normal: " auto ", padding: "30px" });
    //setbtnDisabled(true);
  };
  const contentChange = () => {
    if (!domainStatus.active) {
      if (!domainStatus.completed) {
        sethostingStatus({ completed: false, active: false });
        return setdomainStatus({
          active: true,
          completed: false,
        });
      }
    } else {
      setdomainStatus({
        active: false,
        completed: true,
      });
    }
    if (!hostingStatus.active) {
      return sethostingStatus({
        active: true,
        completed: false,
      });
    } else {
      sethostingStatus({
        active: false,
        completed: true,
      });
    }

    if (!themeStatus.active) {
      return setthemeStatus({
        active: true,
        completed: false,
      });
    } else {
      setthemeStatus({
        active: false,
        completed: true,
      });
    }
  };

  const cardOnClick = (step) => {
    stepperOnhandlar(setdomainStatus);
    sethidemenu(true);
    sethidemenu2(true);

    if (step === "domain") {
      setdomainStatus({
        completed: false,
        active: true,
      });
      sethostingStatus({
        ...hostingStatus,
        active: false,
      });
      setthemeStatus({
        ...themeStatus,
        active: false,
      });
    }
    if (step === "hosting") {
      setdomainStatus({
        ...domainStatus,
        active: false,
      });
      sethostingStatus({
        completed: false,
        active: true,
      });
      setthemeStatus({
        ...themeStatus,
        active: false,
      });
    }
    if (step === "theme") {
      setdomainStatus({
        ...domainStatus,
        active: false,
      });
      sethostingStatus({
        ...hostingStatus,
        active: false,
      });
      setthemeStatus({
        completed: false,
        active: true,
      });
    }
  };
  useEffect(() => {
    cardONClickHeader(() => cardOnClick);
  }, []);

  return (
    <div
      id="stepSection"
      style={{
        backgroundImage: `linear-gradient(rgb(248 248 248 / 91%) 100%, rgba(248, 248, 248, 0.32) 100%),url(${bgshap})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: "100vh",
      }}
    >
      <Section>
        <Heading
          title=" Fulfil Your Dream With Just Follow "
          markTitle="3 Steps"
        />
        <div>
          <Grid container spacing={2} className={classes.card}>
            {isWidthUp("md", width) ? (
              <Fragment>
                <Grid item md={4} className={classes.content}>
                  <Card
                    step="1"
                    buttonText="Choice Domain"
                    img={domain}
                    title="Domain"
                    onClick={() => cardOnClick("domain")}
                    // btnDisabled={btnDisabled}
                  />
                </Grid>

                <Grid item md={4} className={classes.content}>
                  <Card
                    step="2"
                    buttonText="Choice Hosting"
                    img={hosting}
                    title="Hosting"
                    onClick={() => cardOnClick("hosting")}
                    // btnDisabled={btnDisabled}
                  />
                </Grid>

                <Grid item md={4} className={classes.content}>
                  <Card
                    step="3"
                    buttonText="Choice Theme"
                    img={theme}
                    title="Theme"
                    onClick={() => cardOnClick("theme")}
                    // btnDisabled={btnDisabled}
                  />
                </Grid>
              </Fragment>
            ) : (
              <Slider {...settings}>
                <Grid item md={4} className={classes.content}>
                  <Card
                    step="1"
                    buttonText="Choice Domain"
                    img={domain}
                    title="Domain"
                    onClick={() => cardOnClick("domain")}
                    //btnDisabled={btnDisabled}
                  />
                </Grid>

                <Grid item md={4} className={classes.content}>
                  <Card
                    step="2"
                    buttonText="Choice Hosting"
                    img={hosting}
                    title="Hosting"
                    onClick={() => cardOnClick("hosting")}
                    // btnDisabled={btnDisabled}
                  />
                </Grid>

                <Grid item md={4} className={classes.content}>
                  <Card
                    step="3"
                    buttonText="Choice Theme"
                    img={theme}
                    title="Theme"
                    onClick={() => cardOnClick("theme")}
                    // btnDisabled={btnDisabled}
                  />
                </Grid>
              </Slider>
            )}
          </Grid>
          <div
            style={{
              height: showStepper.normal,
              minHeight: showStepper.min,
              //maxHeight: "auto",
              overflow: "hidden",
              transition: "1.5s",
              background: "#f1f1f1",
              borderRadius: "10px",
              padding: `${showStepper.padding} 0`,
            }}
            id="setpStepper"
          >
            <StepStepper
              domainStatus={domainStatus}
              hostingStatus={hostingStatus}
              themeStatus={themeStatus}
              setdomainStatus={setdomainStatus}
              sethostingStatus={sethostingStatus}
              setthemeStatus={setthemeStatus}
              onClick={contentChange}
              setinputValue={setinputValue}
              inputValue={inputValue}
              cardOnClick={cardOnClick}
              showStepper={showStepper}
            />
          </div>
        </div>
      </Section>
    </div>
  );
}
export default withWidth()(MainArea);
