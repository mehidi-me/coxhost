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

const StyledMenu = withStyles((theme) => ({
  paper: {
    border: "1px solid #d3d4d5",
    marginTop: "14px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginTop: "30px",
    },
    "& .MuiList-root": {
      display: "flex",
      paddingBottom: 0,
      paddingTop: 0,
      [theme.breakpoints.down("sm")]: {
        display: "block",
      },
    },
  },
}))((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
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
  },
  buttonActive: {
    fontWeight: 700,
    marginRight: "0px",
    textTransform: "capitalize",
    fontSize: "16px",
    [theme.breakpoints.down("sm")]: {
      margin: "10px auto",
    },
  },
  menuItem: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "row",
    },
  },
  img: {
    width: "100px",
    height: "110px",
    marginBottom: "10px",
    [theme.breakpoints.down("sm")]: {
      width: "70px",
      height: "80px",
      marginRight: "30px",
    },
  },
  dropmenu: {
    height: 0,
    zIndex: 999,
    background: "#f1f1f1",
    color: "#000",
    overflow: "hidden",
    borderRadius: "5px",
    transition: "0.5s",
    width: "300px",
    margin: "0 auto",
    [theme.breakpoints.up("md")]: {
      position: "absolute",
      width: "103%",
      display: "flex",
      left: 0,
      right: 0,
      overflowX: "auto",
    },
  },
  container: {
    "&:hover": {
      "& $dropmenu": {
        [theme.breakpoints.up("md")]: {
          height: "auto",
          padding: "20px 0 0",
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

const DropMenuWithImage = ({
  title,
  itemList,
  setOpenMobileMenu,
  width,
  onClicks,
}) => {
  const classes = useStyle();
  const [anchorEl, setAnchorEl] = useState(false);

  const handleClick = (event) => {
    setAnchorEl((v) => !v);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { hostingContext, onclick } = useContext(AppContext);
  const { sethostingStatus, setdomainStatus, setthemeStatus, getHostingPac } =
    hostingContext;

  return (
    <div className={classes.container}>
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
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
      > */}
      <div
        style={
          !isWidthUp("md", width)
            ? {
                height: anchorEl ? "auto" : 0,
                padding: anchorEl ? "20px 0" : 0,
              }
            : {}
        }
        className={classes.dropmenu}
      >
        {itemList.map((v) => (
          <Link to="setpStepper" spy={true} smooth={true}>
            <StyledMenuItem
              key={v.title}
              className={classes.menuItem}
              onClick={() => {
                handleClose();
                if (onclick) {
                  onclick();
                } else {
                  console.log(onclick);
                }

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

                if (!isWidthUp("md", width)) {
                  setOpenMobileMenu({
                    width: 0,
                    show: 0,
                  });
                }

                if (v.id && getHostingPac) {
                  getHostingPac(v.id);
                } else {
                  console.log(getHostingPac);
                }
              }}
              style={{ borderBottom: `3px solid ${v.color}` }}
            >
              <ListItemIcon>
                <img src={v.icon} alt="hosting" className={classes.img} />
              </ListItemIcon>
              <ListItemText primary={v.title} />
            </StyledMenuItem>
          </Link>
        ))}
        {/* </StyledMenu> */}
      </div>
    </div>
  );
};

export default withWidth()(DropMenuWithImage);
