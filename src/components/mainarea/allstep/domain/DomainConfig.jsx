import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import Loader from "react-loader-spinner";
import DomainResult from "./DomainResult";
import DomainTransferResult from "./DomainTransferResult";
import SearchBox from "./SearchBox";
import SuggestionCard from "./SuggestionCard";
import domainImage from "../../../../assets/domain.svg";
import domainTransferImage from "../../../../assets/transfer.svg";

const useStyle = makeStyles((theme) => ({
  container: {
    width: "90%",
    margin: "10px auto",
    // border: "2px solid #333",
    padding: "10px",
    borderRadius: "10px",

    overflow: "hidden",
    transition: ".5s",
    background: "#fff",
    boxShadow: " rgb(28 57 115 / 20%) 0px 20px 30px 0px",
    position: "relative",
  },
  cardContainer: {
    marginTop: "20px",
  },
  h4: {
    margin: "5px 0",
    width: "100%",
    cursor: "pointer",
    fontSize: "1.4rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      margin: 0,
      fontSize: "1rem",
    },
  },
  icon: {
    width: "40px",
    marginRight: "10px",
  },
}));

const DomainConfig = ({
  title,
  searchType,
  placeholder,
  showContent,
  onClick,
  onClick2,
  domainList,
  getResult,
  hiddenInput,
  result,
  showAdons,
  loading,
  loadingAddCart,
  resultAddCart,
  addDomainAdons,
  loadingAddDomainAdon,
  resultAddDomainAdon,
  getDomainConfig,
  stepup,
  setinputValue,
  inputValue,
  SuggestedDomain,
  ProductValue,
  hostingAddToCart,
  setdomainStatus,
  sethostingStatus,
  setloadingAddCartH,
  setshowHostngConfig,
  themeConfig,
  themeAddToCart,
  setthemeStatus,
  setthemeloadingAddCart,
  loadingSuggested,
}) => {
  const classes = useStyle();
  const [addDomainList, setaddDomainList] = useState([]);
  const [adonsList, setadonsList] = useState([]);
  return (
    <div className={classes.container} style={{ height: showContent }}>
      <h4 className={classes.h4} onClick={onClick}>
        <img
          src={searchType === "Transfer" ? domainTransferImage : domainImage}
          className={classes.icon}
        />
        {title}
      </h4>
      <div>
        <SearchBox
          domainList={domainList}
          getResult={getResult}
          hiddenInput={hiddenInput}
          searchType={searchType}
          placeholder={placeholder}
          getDomainConfig={getDomainConfig}
          stepup={stepup}
          setinputValue={setinputValue}
          inputValue={inputValue}
          ProductValue={ProductValue}
          hostingAddToCart={hostingAddToCart}
          setdomainStatus={setdomainStatus}
          sethostingStatus={sethostingStatus}
          setloadingAddCartH={setloadingAddCartH}
          setshowHostngConfig={setshowHostngConfig}
          themeConfig={themeConfig}
          themeAddToCart={themeAddToCart}
          setthemeStatus={setthemeStatus}
          setthemeloadingAddCart={setthemeloadingAddCart}
        />
      </div>

      {loading ? (
        <Loader type="Oval" color="#f80155" height={60} width={60} />
      ) : searchType === "Search" ? (
        <div>
          <DomainResult
            onClick={onClick2}
            result={result}
            loadingAddCart={loadingAddCart}
            resultAddCart={resultAddCart}
            domainList={addDomainList}
            setdomainList={setaddDomainList}
            addDomainAdons={addDomainAdons}
            loadingAddDomainAdon={loadingAddDomainAdon}
            resultAddDomainAdon={resultAddDomainAdon}
            showAdons={showAdons}
            adonsList={adonsList}
            setadonsList={setadonsList}
          />
          {!loadingSuggested ? (
            <SuggestionCard
              domainList={addDomainList}
              setdomainList={setaddDomainList}
              result={SuggestedDomain}
              onClick={onClick2}
              loadingAddCart={loadingAddCart}
              resultAddCart={resultAddCart}
              addDomainAdons={addDomainAdons}
              loadingAddDomainAdon={loadingAddDomainAdon}
              resultAddDomainAdon={resultAddDomainAdon}
              showAdons={showAdons}
              adonsList={adonsList}
              setadonsList={setadonsList}
            />
          ) : (
            <div>
              <h4 style={{ textAlign: "center", color: "#333" }}>
                Suggested Domain Loading...
              </h4>
              <Loader type="Oval" color="#f80155" height={60} width={60} />
            </div>
          )}
        </div>
      ) : (
        <DomainTransferResult
          onClick={onClick2}
          result={result}
          loadingAddCart={loadingAddCart}
          resultAddCart={resultAddCart}
          setdomainList={setaddDomainList}
          domainList={addDomainList}
          setadonsList={setadonsList}
          showAdons={showAdons}
          addDomainAdons={addDomainAdons}
          loadingAddDomainAdon={loadingAddDomainAdon}
          resultAddDomainAdon={resultAddDomainAdon}
          adonsList={adonsList}
        />
      )}

      {/* {showAdons.name && (
        <div className={classes.cardContainer}>
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
            addDomainAdons={() => addDomainAdons("dnsmanagement", 0)}
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
            addDomainAdons={() => addDomainAdons("idprotection", 0)}
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
            addDomainAdons={() => addDomainAdons("emailforwarding", 0)}
          />
        </div>
      )} */}
    </div>
  );
};

export default DomainConfig;
