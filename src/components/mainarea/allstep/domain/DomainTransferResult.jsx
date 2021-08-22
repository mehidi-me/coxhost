import { Avatar, Button, makeStyles } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import React, { useState } from "react";
import DomainAdons from "./DomainAdons";
import DnsIcon from "@material-ui/icons/Dns";
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";
import Loader from "react-loader-spinner";

const useStyle = makeStyles((theme) => ({
  textContent: {
    margin: "30px auto",
  },
  h4: {
    fontSize: "28px",
    color: theme.palette.secondary.main,
    margin: 0,
    fontWeight: 400,
  },
  button: {
    textTransform: "none",
  },
  eppInput: {
    padding: "10px",
    margin: "18px auto",
    width: "60%",
    borderColor: theme.palette.secondary.main,
    borderRadius: "5px",
    outline: 0,
    display: "block",
  },
}));

const DomainTransferResult = ({
  onClick,
  result,
  loadingAddCart,
  resultAddCart,
  setdomainList,
  domainList,
  addDomainAdons,
  setadonsList,
  showAdons,
  loadingAddDomainAdon,
  resultAddDomainAdon,
  adonsList,
}) => {
  const classes = useStyle();
  const [eppCode, setEppCode] = useState("");
  return (
    <div>
      {result && (
        <div>
          {loadingAddCart.name === result.domainName && (
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

          <div className={classes.textContent}>
            {result.isValidDomain ? (
              result.isAvailable && !result.isRegistered ? (
                <div className={classes.textContent}>
                  <h4 className={classes.h4}>Not Eligible for Transfer</h4>{" "}
                  <p>
                    The domain you entered does not appear to be registered. If
                    the domain was registered recently, you may need to try
                    again later. Alternatively, you can perform a search to
                    register this domain.
                  </p>
                </div>
              ) : (
                <div className={classes.textContent}>
                  <h4 className={classes.h4}>
                    Your domain is eligible for transfer
                  </h4>
                  <p>
                    Transfer to us and extend by 1 year* for{" "}
                    {result.pricing[1].transfer}
                  </p>
                  <input
                    onChange={(v) => setEppCode(v.target.value)}
                    type="text"
                    placeholder="EPP Code"
                    className={classes.eppInput}
                  />
                  {/* <Button
                  color="secondary"
                  variant="contained"
                  className={classes.button}
                  onClick={() => onClick(eppCode, result.domainName)}
                  startIcon={resultAddCart ? null : <AddShoppingCartIcon />}
                >
                  {resultAddCart ? (
                    resultAddCart.result === "added" && <CheckCircleIcon />
                  ) : loadingAddCart ? (
                    <CircularProgress size={20} style={{ color: "#fff" }} />
                  ) : (
                    "Add To Cart"
                  )}
                </Button> */}

                  <Button
                    color="secondary"
                    variant="contained"
                    className={classes.button}
                    onClick={() => {
                      onClick(eppCode, result.domainName);
                      if (eppCode) {
                        setdomainList([...domainList, result.domainName]);
                      }
                    }}
                    startIcon={
                      resultAddCart.name === result.domainName ||
                      domainList.find(
                        (value) => value === result.domainName
                      ) ? null : (
                        <AddShoppingCartIcon />
                      )
                    }
                  >
                    {loadingAddCart.name === result.domainName ? (
                      <CircularProgress size={20} style={{ color: "#fff" }} />
                    ) : resultAddCart.name === result.domainName ||
                      domainList.find(
                        (value) => value === result.domainName
                      ) ? (
                      <CheckCircleIcon />
                    ) : (
                      "Add To Cart"
                    )}
                  </Button>
                </div>
              )
            ) : (
              <h4 className={classes.h4}>Invalid domain name provided</h4>
            )}
          </div>
          <div>
            {showAdons.name === result.domainName && (
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
                        (value) => value === result.domainName
                      )}]`
                    );
                    setadonsList([
                      ...adonsList,
                      `dnsmanagement[${domainList.findIndex(
                        (value) => value === result.domainName
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
                        (value) => value === result.domainName
                      )}]`
                    );
                    setadonsList([
                      ...adonsList,
                      `idprotection[${domainList.findIndex(
                        (value) => value === result.domainName
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
                        (value) => value === result.domainName
                      )}]`
                    );
                    setadonsList([
                      ...adonsList,
                      `emailforwarding[${domainList.findIndex(
                        (value) => value === result.domainName
                      )}]`,
                    ]);
                  }}
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DomainTransferResult;
