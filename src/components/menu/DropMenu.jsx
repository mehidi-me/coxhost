import {
  Button,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Menu,
  MenuItem,
  withStyles,
} from "@material-ui/core";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import React, { useContext, useState } from "react";
import { Link } from "react-scroll";
import AppContext from "../../AppContext";
import { Link as RoutLink } from "react-router-dom";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
    marginTop: "14px",
  },
})((props) => (
  // <Menu
  //   elevation={0}
  //   getContentAnchorEl={null}
  //   anchorOrigin={{
  //     vertical: "bottom",
  //     horizontal: "center",
  //   }}
  //   transformOrigin={{
  //     vertical: "top",
  //     horizontal: "center",
  //   }}
  //   {...props}
  // />
  <div {...props}></div>
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus, &:hover": {
      backgroundImage: "linear-gradient(120deg,#f5592a,#f80155)",
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);
const useStyle = makeStyles((theme) => ({
  button: {
    color: "#333",
    marginRight: "0px",
    textTransform: "capitalize",
    fontSize: "16px",
    [theme.breakpoints.down("sm")]: {
      margin: "10px auto",
      color: "#fff",
    },
    "&:hover": {
      "& $dropmenu": {
        height: "232px",
      },
    },
  },
  buttonActive: {},
  dropmenu: {
    height: 0,
    zIndex: 999,
    background: "#f1f1f1",
    color: "#000",
    overflow: "hidden",
    borderRadius: "5px",
    transition: "0.5s",
    width: "250px",
    margin: "0 auto",
    [theme.breakpoints.up("md")]: {
      position: "absolute",
    },
  },
  container: {
    "&:hover": {
      "& $dropmenu": {
        [theme.breakpoints.up("md")]: {
          height: "auto",
          padding: "20px 0",
        },
      },
      "& $button": {
        background: "#f80155",
        boxShadow:
          "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
        color: "#fff",
        fontWeight: 700,
        marginRight: "0px",
        textTransform: "capitalize",
        fontSize: "16px",
        [theme.breakpoints.down("sm")]: {
          margin: "10px auto",
        },
      },
    },
  },
}));

const DropMenu = ({ title, itemList, setOpenMobileMenu, width, onClicks }) => {
  const classes = useStyle();
  const [anchorEl, setAnchorEl] = useState(false);
  const {
    setshowContent1,
    setshowContent2,
    setshowContent3,
    onclick,
    hostingContext,
  } = useContext(AppContext);
  const { sethostingStatus, setdomainStatus, setthemeStatus, getHostingPac } =
    hostingContext;

  const handleClick = (event) => {
    setAnchorEl((v) => !v);
  };

  const handleClose = () => {
    setAnchorEl(0);
  };
  return (
    <div style={{ position: "relative" }} className={classes.container}>
      <Button
        color="inherit"
        aria-controls={title}
        aria-haspopup="true"
        onClick={handleClick}
        // onMouseOut={handleClose}
        // onMouseEnter={handleClick}
        className={classes.button}
      >
        {title} <ArrowDropDownIcon />
      </Button>

      {/* <StyledMenu
        id={title}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
      >
        
      </StyledMenu> */}
      <div
        className={classes.dropmenu}
        style={
          !isWidthUp("md", width)
            ? {
                height: anchorEl ? "auto" : 0,
                padding: anchorEl ? "20px 0" : 0,
              }
            : {}
        }
      >
        {itemList.map((v) => (
      
            <Link to="setpStepper" spy={true} smooth={true}>
              <StyledMenuItem
                key={v.title}
                onClick={() => {
                  handleClose();
                  if (onclick) {
                    onclick();
                  } else {
                    console.log(onclick);
                  }
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
                  setshowContent1("auto");

                  setshowContent2("30px");

                  setshowContent3("30px");
                  if (v.title === "Transfer Domain") {
                    setshowContent1("30px");

                    setshowContent2("auto");

                    setshowContent3("30px");
                  }
                  if (!isWidthUp("md", width)) {
                    setOpenMobileMenu({
                      width: 0,
                      show: 0,
                    });
                  }
                }}
              >
                <ListItemIcon>
                  <img
                    src={v.icon}
                    alt="hosting"
                    style={{
                      width: "40px",
                    }}
                  />
                </ListItemIcon>
                <ListItemText primary={v.title} />
              </StyledMenuItem>
            </Link>
        
        ))}
      </div>
    </div>
  );
};

export default withWidth()(DropMenu);
