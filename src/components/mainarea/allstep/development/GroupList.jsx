import { Button, makeStyles } from "@material-ui/core";
import React from "react";
import { Link } from "react-scroll";
import hosting from "../../../../assets/theme.svg";

const useStyle = makeStyles((theme) => ({
  btnCard: {
    width: "290px",
    height: "180px",
    textAlign: "center",
    margin: "10px auto",
    //border: "2px solid #333",
    background: "#fff",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
    borderRadius: "8px",
    padding: "20px",
    [theme.breakpoints.down("sm")]: {
      width: "100px",
      //padding: "18px",
    },
  },
  img: {
    width: "100px",
    [theme.breakpoints.down("sm")]: {
      width: "70px",
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
        <Button onClick={() => onClick(8)}>
          {gid === 8 ? (
            <div className={classes.btnCard} style={activeStyle}>
              <img className={classes.img} src={hosting} alt="hosting" />
              <h4 style={{ margin: "8px 0" }}>Personal Blog Development </h4>
            </div>
          ) : (
            <div className={classes.btnCard}>
              <img className={classes.img} src={hosting} alt="hosting" />
              <h4 style={{ margin: "8px 0" }}>Personal Blog Development </h4>
            </div>
          )}
        </Button>
      </Link>
      <Link to="card" spy={true} smooth={true}>
        <Button onClick={() => onClick(11)}>
          {gid === 11 ? (
            <div className={classes.btnCard} style={activeStyle}>
              <img className={classes.img} src={hosting} alt="hosting" />
              <h4 style={{ margin: "8px 0" }}>Newspaper Development</h4>
            </div>
          ) : (
            <div className={classes.btnCard}>
              <img className={classes.img} src={hosting} alt="hosting" />
              <h4 style={{ margin: "8px 0" }}>Newspaper Development</h4>
            </div>
          )}
        </Button>
      </Link>
      <Link to="card" spy={true} smooth={true}>
        <Button onClick={() => onClick(12)}>
          {gid === 12 ? (
            <div className={classes.btnCard} style={activeStyle}>
              <img className={classes.img} src={hosting} alt="hosting" />
              <h4 style={{ margin: "8px 0" }}>E-commerce Development </h4>
            </div>
          ) : (
            <div className={classes.btnCard}>
              <img className={classes.img} src={hosting} alt="hosting" />
              <h4 style={{ margin: "8px 0" }}>E-commerce Development </h4>
            </div>
          )}
        </Button>
      </Link>
      <Link to="card" spy={true} smooth={true}>
        <Button onClick={() => onClick(13)}>
          {gid === 13 ? (
            <div className={classes.btnCard} style={activeStyle}>
              <img className={classes.img} src={hosting} alt="hosting" />
              <h4 style={{ margin: "8px 0" }}>
                Education Institutions Development{" "}
              </h4>
            </div>
          ) : (
            <div className={classes.btnCard}>
              <img className={classes.img} src={hosting} alt="hosting" />
              <h4 style={{ margin: "8px 0" }}>
                Education Institutions Development{" "}
              </h4>
            </div>
          )}
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
