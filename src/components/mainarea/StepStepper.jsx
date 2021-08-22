import {
  Button,
  Container,
  Grid,
  makeStyles,
  Step,
  StepLabel,
  Stepper,
  withStyles,
} from "@material-ui/core";
import StepConnector from "@material-ui/core/StepConnector";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CodeIcon from "@material-ui/icons/Code";
import DnsIcon from "@material-ui/icons/Dns";
import DomainIcon from "@material-ui/icons/Domain";
import Cart from "@material-ui/icons/ShoppingCart";
import clsx from "clsx";
import PropTypes from "prop-types";
import React, { useContext, useEffect, useState } from "react";
import AppContext from "../../AppContext";
import Development from "./allstep/development/Development";
import DomainMain from "./allstep/domain/DomainMain";
import Hosting from "./allstep/hosting/Hosting";
import "./style.css";
import { Link } from "react-scroll";
import domainImage from "../../assets/domain.svg";
import hostingImage from "../../assets/hosting.svg";
import themeImage from "../../assets/theme.svg";
import { Fragment } from "react";

const ColorlibConnector = withStyles({
  // alternativeLabel: {
  // 	top: 22,
  // },
  active: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 136deg, #eaeaf0 0%, #eaeaf0 50%, #eaeaf0 100%)",
    },
  },
  completed: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  line: {
    height: 0,
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 60,
    height: 60,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      width: 40,
      height: 40,
    },
  },
  container: {
    color: "#333",
    fontWeight: "700",
    width: "100%",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
    padding: 0,
    borderRadius: "0 20px 0 20px",
    marginRight: "10px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  active: {
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
    backgroundImage: "linear-gradient(120deg,#f5592a,#f80155)",
  },
  completed: {
    backgroundImage: "linear-gradient( 136deg, #fff 0%, #fff 50%, #fff 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  },
  icon: {
    cursor: "pointer",
    width: "38px",
    [theme.breakpoints.down("sm")]: {
      width: "28px",
    },
  },
  button: {
    fontWeight: 700,
    padding: "10px 48px",
    fontSize: "18px",
    marginLeft: "8px",
    [theme.breakpoints.down("sm")]: {
      padding: "8px 18px",
      fontSize: "14px",
    },
  },
}));

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;
  const icons = {
    1: <img src={domainImage} className={classes.icon} />,
    2: <img src={hostingImage} className={classes.icon} />,
    3: <img src={themeImage} className={classes.icon} />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {completed ? (
        <CheckCircleIcon style={{ fontSize: "38px", color: "#00f576" }} />
      ) : (
        icons[String(props.icon)]
      )}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
  icon: PropTypes.node,
};

function StepStepper({
  domainStatus,
  hostingStatus,
  themeStatus,
  setdomainStatus,
  sethostingStatus,
  setthemeStatus,
  onClick,
  setinputValue,
  inputValue,
  cardOnClick,
  showStepper,
}) {
  const classes = useColorlibStepIconStyles();
  const { setHostingContext, totalCart } = useContext(AppContext);

  const [gid, setgid] = useState(null);
  const [Product, setProduct] = useState([]);
  const [loading, setloading] = useState(false);

  const [buttonState, setbuttonState] = useState(false);
  const [buttonState2, setbuttonState2] = useState(false);
  const [domainConfig, setdomainConfig] = useState(null);

  const [ProductValue, setProductValue] = useState(null);
  const [hostingAddToCart, sethostingAddToCart] = useState(() => {});

  const [loadingAddCart, setloadingAddCart] = useState(false);
  const [showHostngConfig, setshowHostngConfig] = useState(false);

  const [themeConfig, setthemeConfig] = useState(false);
  const [themeAddToCart, setthemeAddToCart] = useState(() => {});
  const [themeloadingAddCart, setthemeloadingAddCart] = useState(false);
  const [barVisible, setBarVisible] = useState(true);

  const getDomainConfig = (v) => {
    setdomainConfig(v);
  };

  const getHostingPac = async (v) => {
    setgid(v);
    setloading(true);
    const res = await fetch(`https://coxhost.com/portal/textcart.php?gid=${v}`);
    const data = await res.json();
    setProduct(data);
    setloading(false);
  };

  // useEffect(() => {
  //   if (hostingStatus.active) {
  //     addToast("Step 1 Successfully Complete", {
  //       appearance: "success",
  //       autoDismiss: true,
  //     });
  //   }
  //   if (themeStatus.active) {
  //     addToast("Step 2 Successfully Complete", {
  //       appearance: "success",
  //       autoDismiss: true,
  //     });
  //   }
  // }, [hostingStatus, themeStatus, addToast]);

  useEffect(() => {
    setHostingContext({
      sethostingStatus,
      setdomainStatus,
      setthemeStatus,
      getHostingPac,
    });
  }, []);
  useEffect(() => {
    if (domainStatus.active) {
      setbuttonState2(true);
    } else {
      setbuttonState2(false);
    }
    if (totalCart.count) {
      if (window.Tawk_API) {
        window.Tawk_API.hideWidget();
      }
    }
  });

  return (
    <div>
      <Stepper connector={<ColorlibConnector />}>
        <Step
          active={domainStatus.active}
          completed={domainStatus.completed}
          className={clsx(classes.container, {
            [classes.active]: domainStatus.active,
            [classes.completed]: domainStatus.completed,
          })}
          onClick={() => cardOnClick("domain")}
        >
          <StepLabel StepIconComponent={ColorlibStepIcon}>
            <span className="step">Step 1</span> Domain
          </StepLabel>
        </Step>
        <Step
          active={hostingStatus.active}
          completed={hostingStatus.completed}
          className={clsx(classes.container, {
            [classes.active]: hostingStatus.active,
            [classes.completed]: hostingStatus.completed,
          })}
          onClick={() => cardOnClick("hosting")}
        >
          <StepLabel StepIconComponent={ColorlibStepIcon}>
            <span className="step">Step 2</span> Hosting
          </StepLabel>
        </Step>

        <Step
          active={themeStatus.active}
          completed={themeStatus.completed}
          className={clsx(classes.container, {
            [classes.active]: themeStatus.active,
            [classes.completed]: themeStatus.completed,
          })}
          onClick={() => cardOnClick("theme")}
        >
          <StepLabel StepIconComponent={ColorlibStepIcon}>
            <span className="step">Step 3</span> Theme
          </StepLabel>
        </Step>
      </Stepper>
      {totalCart.count && (
        <div
          style={{
            padding: "10px 0px",
            // fontWeight: "700",
            position: "fixed",
            bottom: "0",
            width: barVisible ? "100%" : "0%",
            backgroundImage: "linear-gradient(120deg,#f5592a,#f80155)",
            right: "0",
            textAlign: "center",
            zIndex: "2",
            boxShadow: "-1px 4px 15px -2px blue",
            display: "flex",
            justifyContent: "center",
            transition: ".5s",
          }}
        >
          <Button
            style={{
              position: "absolute",
              right: "0",
              top: "-32%",
              background: "#333",
              color: "#fff",
              fontWeight: "bold",
              textTransform: "capitalize",
            }}
            onClick={() => setBarVisible(!barVisible)}
          >
            {barVisible ? "Hide Bar" : "Show Bar"}
          </Button>
          {(ProductValue || themeConfig) &&
          domainStatus.active &&
          !hostingStatus.active ? (
            <Grid container>
              <Grid item style={{ margin: "auto" }}>
                <Link to="setpStepper" spy={true} smooth={true}>
                  <Button
                    className={classes.button}
                    color="primary"
                    variant="contained"
                    onClick={async () => {
                      if (ProductValue) {
                        const type =
                          ProductValue.price.monthly > 0
                            ? "Monthly"
                            : "Annually";
                        setloadingAddCart(true);
                        setdomainStatus({
                          active: false,
                          completed: true,
                        });
                        sethostingStatus({
                          ...hostingStatus,
                          active: true,
                        });
                        if (domainConfig) {
                          await hostingAddToCart(
                            ProductValue.data.id,
                            type,
                            null,
                            domainConfig.domain,
                            domainConfig.token,
                            domainConfig.type,
                            true,
                            gid
                          );
                        }
                        setloadingAddCart(false);
                        setshowHostngConfig(true);
                      } else if (themeConfig) {
                        setthemeloadingAddCart(true);
                        setdomainStatus({
                          active: false,
                          completed: true,
                        });
                        sethostingStatus({
                          completed: false,
                          active: false,
                        });
                        setthemeStatus({
                          completed: false,
                          active: true,
                        });

                        if (domainConfig) {
                          themeAddToCart(
                            themeConfig.id,
                            true,
                            domainConfig.domain,
                            domainConfig.token,
                            domainConfig.type
                          );
                        }
                      } else {
                        onClick();
                      }
                    }}
                    disabled={buttonState}
                  >
                    Continue
                  </Button>
                </Link>
              </Grid>
            </Grid>
          ) : (
            <Fragment>
              <Container>
                <Grid container>
                  <Grid
                    item
                    md={6}
                    xs={12}
                    style={{
                      marginBottom: "7px",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Link to="setpStepper" spy={true} smooth={true}>
                      <Button
                        className={classes.button}
                        color="primary"
                        variant="contained"
                        onClick={() => {
                          if (hostingStatus.active) {
                            setdomainStatus({ completed: false, active: true });
                            sethostingStatus({
                              ...hostingStatus,
                              active: false,
                            });
                          }
                          if (themeStatus.active) {
                            sethostingStatus({
                              completed: false,
                              active: true,
                            });
                            setthemeStatus({ ...themeStatus, active: false });
                          }
                        }}
                        disabled={buttonState2}
                      >
                        Previous Step
                      </Button>
                    </Link>
                    <div
                      style={{
                        margin: "0 20px",
                        color: "#fff",
                        display: "inline-block",
                      }}
                    >
                      <span>{totalCart.count} items</span>
                      <h4 style={{ margin: "5px 10px 0 0" }}>
                        ${totalCart.price}
                      </h4>
                    </div>
                  </Grid>
                  <Grid
                    item
                    md={6}
                    xs={12}
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Button
                      className={classes.button}
                      style={
                        totalCart.count > 0
                          ? { color: "#333", background: "#fff" }
                          : {}
                      }
                      variant="contained"
                      onClick={() =>
                        window.open(
                          "https://coxhost.com/portal/cart.php?a=checkout",
                          "_self"
                        )
                      }
                      startIcon={<Cart />}
                      disabled={totalCart.count > 0 ? false : true}
                    >
                      View Cart
                    </Button>

                    <Link to="setpStepper" spy={true} smooth={true}>
                      {themeStatus.active ? (
                        <Button
                          className={classes.button}
                          color="primary"
                          variant="contained"
                          onClick={() =>
                            window.open(
                              "https://coxhost.com/portal/cart.php?a=checkout",
                              "_self"
                            )
                          }
                        >
                          Skip This Step
                        </Button>
                      ) : (
                        <Button
                          className={classes.button}
                          color="primary"
                          variant="contained"
                          onClick={onClick}
                          //disabled={buttonState}
                        >
                          Next Step
                        </Button>
                      )}
                    </Link>
                  </Grid>
                </Grid>
              </Container>
            </Fragment>
          )}
        </div>
      )}
      <div
        style={{
          width: "100%",
          height: "auto",
          padding: "20px 0",
          textAlign: "center",

          background: "#f1f1f1",
          borderRadius: "10px",
        }}
      >
        {hostingStatus.active ? (
          <Hosting
            setbuttonState={setbuttonState}
            domainConfig={domainConfig}
            domainStatus={domainStatus}
            hostingStatus={hostingStatus}
            setdomainStatus={setdomainStatus}
            sethostingStatus={sethostingStatus}
            ProductValue={ProductValue}
            setProductValue={setProductValue}
            sethostingAddToCart={sethostingAddToCart}
            loadingAddCart={loadingAddCart}
            setloadingAddCart={setloadingAddCart}
            showHostngConfig={showHostngConfig}
            setshowHostngConfig={setshowHostngConfig}
            gid={gid}
            Product={Product}
            loading={loading}
            getHostingPac={getHostingPac}
          />
        ) : themeStatus.active ? (
          <Development
            domainConfig={domainConfig}
            domainStatus={domainStatus}
            hostingStatus={hostingStatus}
            setdomainStatus={setdomainStatus}
            setthemeStatus={setthemeStatus}
            setthemeConfig={setthemeConfig}
            sethostingAddToCart={setthemeAddToCart}
            themeConfig={themeConfig}
            setloadingAddCart={setthemeloadingAddCart}
            loadingAddCart={themeloadingAddCart}
          />
        ) : (
          <DomainMain
            setbuttonState={setbuttonState}
            getDomainConfig={getDomainConfig}
            stepup={onClick}
            setinputValue={setinputValue}
            inputValue={inputValue}
            ProductValue={ProductValue}
            hostingAddToCart={hostingAddToCart}
            setdomainStatus={setdomainStatus}
            sethostingStatus={sethostingStatus}
            setloadingAddCartH={setloadingAddCart}
            setshowHostngConfig={setshowHostngConfig}
            themeConfig={themeConfig}
            themeAddToCart={themeAddToCart}
            setthemeStatus={setthemeStatus}
            setthemeloadingAddCart={setthemeloadingAddCart}
          />
        )}
      </div>
    </div>
  );
}

export default StepStepper;
