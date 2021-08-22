import {
  Button,
  Card,
  CardHeader,
  CircularProgress,
  makeStyles,
} from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import React from "react";

const useStyle = makeStyles((theme) => ({
  card: {
    margin: "16px auto",
    width: "90%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  button: {
    textTransform: "none",
    fontWeight: 700,
  },
  cardHeader: {
    [theme.breakpoints.down("xs")]: {
      display: "block",
      padding: "0 8px",
      "& $div": {
        margin: "14px 0",
      },
    },
  },
}));

const DomainAdons = ({
  title,
  description,
  icon,
  price,
  addDomainAdons,
  loading,
  result,
}) => {
  const classes = useStyle();

  return (
    <div className={classes.card}>
      <Card>
        <CardHeader
          className={classes.cardHeader}
          avatar={icon}
          action={
            <div>
              <span
                style={{
                  marginRight: "12px",
                }}
              >
                {price}
              </span>
              <Button
                color="secondary"
                variant="contained"
                className={classes.button}
                startIcon={!result && <AddShoppingCartIcon />}
                onClick={addDomainAdons}
              >
                {result ? (
                  <CheckCircleIcon />
                ) : loading ? (
                  <CircularProgress size={20} style={{ color: "#fff" }} />
                ) : (
                  "Add To Cart"
                )}
              </Button>
            </div>
          }
          title={title}
          subheader={description}
        />
      </Card>
    </div>
  );
};

export default DomainAdons;
