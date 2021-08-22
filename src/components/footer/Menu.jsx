import { Button, makeStyles } from "@material-ui/core";
import React, { useContext } from "react";
import { Link } from "react-scroll";
import AppContext from "../../AppContext";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const useStyle = makeStyles((theme) => ({
  h4: {
    fontSize: "22px",
    margin: "10px 0",
    paddingBottom: "10px",
    color: "#fff",
    position: "relative",
    display: "inline-block",
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

    //margin: "10px 0",
    textShadow: "-3px 3px 8px #000000",
  },
  btn: {
    color: "#fff",
    fontSize: "14px",
    fontWeight: "500",
    textTransform: "capitalize",
    padding: "2px 5px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
    },
  },
}));
function Menu({ title, lists, onClicks }) {
  const classes = useStyle();
  const {
    setshowContent1,
    setshowContent2,
    setshowContent3,
    onclick,
    hostingContext,
  } = useContext(AppContext);
  return (
    <div style={{ marginBottom: "12px" }}>
      <h4 className={classes.h4}>{title}</h4>
      <ul style={{ padding: 0, margin: "5px 0 0" }}>
        {lists.map((v) => (
          <li className={classes.li} key={v.title}>
            {onClicks || v.id ? (
              <Link to="setpStepper" spy={true} smooth={true}>
                <Button
                  startIcon={
                    <ArrowForwardIosIcon
                      style={{ fontSize: "12px", color: "#fff" }}
                    />
                  }
                  className={classes.btn}
                  onClick={() => {
                    if (onclick) {
                      onclick();
                    } else {
                      console.log(onclick);
                    }
                    if (v.id) {
                      if (hostingContext) {
                        const {
                          sethostingStatus,
                          setdomainStatus,
                          setthemeStatus,
                          getHostingPac,
                        } = hostingContext;
                        sethostingStatus({
                          active: true,
                          completed: false,
                        });
                        setthemeStatus({
                          active: false,
                          completed: false,
                        });
                        setdomainStatus({
                          active: false,
                          completed: false,
                        });

                        if (getHostingPac) {
                          getHostingPac(v.id);
                        } else {
                          console.log(getHostingPac);
                        }
                      } else {
                        console.log(hostingContext);
                      }
                    } else {
                      if (hostingContext) {
                        const {
                          sethostingStatus,
                          setdomainStatus,
                          setthemeStatus,
                        } = hostingContext;
                        sethostingStatus({
                          active: false,
                          completed: false,
                        });
                        setthemeStatus({
                          active: false,
                          completed: false,
                        });
                        setdomainStatus({
                          active: true,
                          completed: false,
                        });
                      } else {
                        console.log(hostingContext);
                      }
                      setshowContent1("auto");

                      setshowContent2("30px");

                      setshowContent3("30px");
                      if (v.title === "Transfer Domain") {
                        setshowContent1("30px");

                        setshowContent2("auto");

                        setshowContent3("30px");
                      }
                    }
                  }}
                >
                  {v.title}
                </Button>
              </Link>
            ) : (
              <Button
                startIcon={
                  <ArrowForwardIosIcon
                    style={{ fontSize: "12px", color: "#fff" }}
                  />
                }
                className={classes.btn}
              >
                {v.title}
              </Button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
