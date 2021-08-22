import { Button, makeStyles } from "@material-ui/core";
import React from "react";
import { Link } from "react-scroll";
import cloud from "../../../../assets/cloud-hosting.png";
import wordpress from "../../../../assets/wordpress-hosting.svg";
import reseller from "../../../../assets/reseller-host.png";
import shared from "../../../../assets/shared-hosting.png";
import vps from "../../../../assets/bdixicon.png";

const useStyle = makeStyles((theme) => ({
  btnCard: {
    width: "270px",
    height: "180px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",

    margin: "10px auto",
    //border: "2px solid #333",
    background: "#fff",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
    borderRadius: "8px",
    padding: "10px",
    [theme.breakpoints.down("sm")]: {
      width: "100px",
      height: "140px",
      //padding: "18px",
    },
  },
  btnImage: {
    width: "150px",
    [theme.breakpoints.down("sm")]: {
      width: "100px",
    },
  },
}));
function GroupList({ onClick, gid }) {
  const classes = useStyle();
  const activeStyle = {
    backgroundImage: "linear-gradient(120deg,#f5592a,#f80155)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
    color: "#fff",
  };
  return (
    <div>
      <Link to="card" spy={true} smooth={true}>
        <Button onClick={() => onClick(1)}>
          <div className={classes.btnCard} style={gid === 1 ? activeStyle : {}}>
            <img className={classes.btnImage} src={shared} alt="hosting" />
            <h4 style={{ margin: "8px 0" }}>Shared Hosting</h4>
          </div>
        </Button>
      </Link>
      <Link to="card" spy={true} smooth={true}>
        <Button onClick={() => onClick(9)}>
          <div className={classes.btnCard} style={gid === 9 ? activeStyle : {}}>
            <img className={classes.btnImage} src={vps} alt="hosting" />
            <h4 style={{ margin: "8px 0" }}>BDIX Hosting</h4>
          </div>
        </Button>
      </Link>
      <Link to="card" spy={true} smooth={true}>
        <Button onClick={() => onClick(2)}>
          <div className={classes.btnCard} style={gid === 2 ? activeStyle : {}}>
            <img className={classes.btnImage} src={reseller} alt="hosting" />
            <h4 style={{ margin: "8px 0" }}>Reseller Hosting</h4>
          </div>
        </Button>
      </Link>
      <Link to="card" spy={true} smooth={true}>
        <Button onClick={() => onClick(3)}>
          <div className={classes.btnCard} style={gid === 3 ? activeStyle : {}}>
            <img className={classes.btnImage} src={reseller} alt="hosting" />
            <h4 style={{ margin: "8px 0" }}>VPS Hosting</h4>
          </div>
        </Button>
      </Link>
      <Link to="card" spy={true} smooth={true}>
        <Button onClick={() => onClick(4)}>
          <div className={classes.btnCard} style={gid === 4 ? activeStyle : {}}>
            <img className={classes.btnImage} src={cloud} alt="hosting" />
            <h4 style={{ margin: "8px 0" }}>Cloud Hosting</h4>
          </div>
        </Button>
      </Link>
      <Link to="card" spy={true} smooth={true}>
        <Button onClick={() => onClick(5)}>
          <div className={classes.btnCard} style={gid === 5 ? activeStyle : {}}>
            <img className={classes.btnImage} src={cloud} alt="hosting" />
            <h4 style={{ margin: "8px 0" }}>Dedicated Servers</h4>
          </div>
        </Button>
      </Link>
      <Link to="card" spy={true} smooth={true}>
        <Button onClick={() => onClick(20)}>
          <div
            className={classes.btnCard}
            style={gid === 20 ? activeStyle : {}}
          >
            <img className={classes.btnImage} src={wordpress} alt="hosting" />
            <h4 style={{ margin: "8px 0" }}>WordPress Hosting</h4>
          </div>
        </Button>
      </Link>
      <Link to="card" spy={true} smooth={true}>
        <Button onClick={() => onClick(21)}>
          <div
            className={classes.btnCard}
            style={gid === 21 ? activeStyle : {}}
          >
            <img className={classes.btnImage} src={reseller} alt="hosting" />
            <h4 style={{ margin: "8px 0" }}>E-commerce Hosting</h4>
          </div>
        </Button>
      </Link>

      {/* <Button onClick={() => onClick(3)}>
				<div
					style={{
						width: "400px",
						textAlign: "center",
						margin: "10px auto",
						border: "2px solid #333",
						borderRadius: "5px",
					}}
				>
					<h4 style={{ margin: "8px 0" }}>VPS Hosting</h4>
				</div>
			</Button> */}
    </div>
  );
}

export default GroupList;
