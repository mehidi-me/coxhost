import { Avatar, Button, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import DomainAdons from "./DomainAdons";
import DnsIcon from "@material-ui/icons/Dns";
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";
import Loader from "react-loader-spinner";
import { useEffect } from "react";

const useStyle = makeStyles((theme) => ({
  container: {
    width: "90%",
    height: "auto",
    background: "#fff",
    margin: "5px auto",
    borderRadius: "10px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    position: "relative",
  },
  heading: {
    padding: "20px",
    borderBottom: "1px solid #333",
    borderRadius: "10px",
    fontSize: "18px",
    color: "#333",
  },
  card: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  cardContainer: {
    padding: "15px 28px",
    borderBottom: "1px solid #333",
    borderRadius: "10px",
    height: "auto",
  },
  h4: {
    margin: "0",
    fontSize: "22px",
    letterSpacing: "1px",
    color: "#333",
    fontWeight: "500",
  },
  price: {
    marginRight: "20px",
    fontSize: "16px",
    color: "#333",
    fontWeight: "400",
    display: "inline",
    [theme.breakpoints.down("xs")]: {
      marginRight: 0,
      marginBottom: "10px",
      display: "block",
    },
  },
  priceContainer: {
    marginTop: 0,
    display: "flex",
    [theme.breakpoints.down("xs")]: {
      marginTop: "15px",
      display: "block",
    },
  },
}));
function SuggestionCard({
  result,
  onClick,
  resultAddCart,
  loadingAddCart,
  showAdons,
  loadingAddDomainAdon,
  resultAddDomainAdon,
  addDomainAdons,
  domainList,
  setdomainList,
  adonsList,
  setadonsList,
}) {
  const classes = useStyle();

  const [suggestResult, setSuggestResult] = useState(result.slice(0, 10));
  const [suggestNumber, setSuggestNumber] = useState(10);

  useEffect(() => {
    setSuggestResult(result.slice(0, suggestNumber));
  }, [suggestNumber, result]);
  console.log(suggestResult.length);
  if (result.length) {
    return (
      <div className={classes.container}>
        {result.find((v) => v.domainName == loadingAddCart.name) && (
          <div
            style={{
              position: "absolute",
              top: "0",
              left: "0px",
              width: "100%",
              height: "100%",
              background: "#ffffffb3",
              zIndex: "1",
              paddingTop: "100px",
            }}
          >
            <Loader type="Oval" color="#f80155" height={80} width={80} />
          </div>
        )}
        <h4 className={classes.heading}>Suggested Domains</h4>
        {suggestResult.map((v) => (
          <div className={classes.cardContainer} key={v.domainName}>
            <div className={classes.card}>
              <h4 className={classes.h4}>{v.domainName}</h4>
              <div className={classes.priceContainer}>
                <div className={classes.price}>
                  <p style={{ margin: 0 }}>{v.pricing[1].register}</p>
                  <p
                    style={{ margin: "0", fontSize: "12px", marginTop: "5px" }}
                  >
                    Renew {v.pricing[1].renew}
                  </p>
                </div>

                <Button
                  color="secondary"
                  variant="contained"
                  className={classes.button}
                  onClick={() => {
                    onClick(v.domainName);
                    setdomainList([...domainList, v.domainName]);
                  }}
                  startIcon={
                    resultAddCart.name === v.domainName ||
                    domainList.find(
                      (value) => value === v.domainName
                    ) ? null : (
                      <AddShoppingCartIcon />
                    )
                  }
                >
                  {resultAddCart.name === v.domainName ||
                  domainList.find((value) => value === v.domainName) ? (
                    <CheckCircleIcon />
                  ) : loadingAddCart.name === v.domainName ? (
                    <CircularProgress size={20} style={{ color: "#fff" }} />
                  ) : (
                    "Add To Cart"
                  )}
                </Button>
              </div>
            </div>
            <div>
              {showAdons.name === v.domainName && (
                <div style={{ marginTop: "48px" }}>
                  <DomainAdons
                    title=" DNS Management"
                    description="External DNS Hosting can help speed up your website and improve availability with increased redundancy."
                    price="FREE! / 1 Year/s"
                    loading={loadingAddDomainAdon.dns}
                    result={resultAddDomainAdon.dns}
                    icon={
                      <Avatar style={{ background: "#3281e8" }}>
                        <DnsIcon />
                      </Avatar>
                    }
                    addDomainAdons={() => {
                      addDomainAdons(
                        adonsList,
                        `dnsmanagement[${domainList.findIndex(
                          (value) => value === v.domainName
                        )}]`
                      );
                      setadonsList([
                        ...adonsList,
                        `dnsmanagement[${domainList.findIndex(
                          (value) => value === v.domainName
                        )}]`,
                      ]);
                    }}
                  />
                  <DomainAdons
                    title=" ID Protection"
                    description="Protect your personal information and reduce the amount of spam to your inbox by enabling ID Protection."
                    price="$2.33 USD / 1 Year/s"
                    loading={loadingAddDomainAdon.id}
                    result={resultAddDomainAdon.id}
                    icon={
                      <Avatar style={{ background: "#78e3a2" }}>
                        <LockIcon />
                      </Avatar>
                    }
                    addDomainAdons={() => {
                      addDomainAdons(
                        adonsList,
                        `idprotection[${domainList.findIndex(
                          (value) => value === v.domainName
                        )}]`
                      );
                      setadonsList([
                        ...adonsList,
                        `idprotection[${domainList.findIndex(
                          (value) => value === v.domainName
                        )}]`,
                      ]);
                    }}
                  />
                  <DomainAdons
                    title="Email Forwarding"
                    description="Get emails forwarded to alternate email addresses of your choice so that you can monitor all from a single account."
                    price="FREE! / 1 Year/s"
                    loading={loadingAddDomainAdon.email}
                    result={resultAddDomainAdon.email}
                    icon={
                      <Avatar style={{ background: "#6651e5" }}>
                        <EmailIcon />
                      </Avatar>
                    }
                    addDomainAdons={() => {
                      addDomainAdons(
                        adonsList,
                        `emailforwarding[${domainList.findIndex(
                          (value) => value === v.domainName
                        )}]`
                      );
                      setadonsList([
                        ...adonsList,
                        `emailforwarding[${domainList.findIndex(
                          (value) => value === v.domainName
                        )}]`,
                      ]);
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        ))}
        {result.length == suggestResult.length ? (
          <p>
            That's all the results we have for you! If you still haven't found
            what you're looking for, please try a different search term or
            keyword.
          </p>
        ) : (
          <Button
            style={{
              textTransform: "capitalize",
              fontSize: "16px",
              fontWeight: "bold",
              color: "blue",
              padding: "5px",
              border: "1px solid #ccc",
              borderRadius: "8px",
            }}
            onClick={() => setSuggestNumber((v) => v + 10)}
          >
            Give me more suggestions!
          </Button>
        )}
      </div>
    );
  } else {
    return null;
  }
}

export default SuggestionCard;
