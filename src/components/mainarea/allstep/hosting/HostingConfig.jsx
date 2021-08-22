import { Avatar, makeStyles, NativeSelect, Button } from "@material-ui/core";
import ExtensionIcon from "@material-ui/icons/Extension";
import parse from "html-react-parser";
import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import DomainAdons from "../domain/DomainAdons";
const useStyle = makeStyles((theme) => ({
  selectEmpty: {
    width: "460px",
    padding: "14px",
    background: "#fff",
    borderRadius: "10px",
    fontSize: "18px",
    boxShadow: "0 0 25px 0 rgb(20 27 201 / 7%)",
    [theme.breakpoints.down("xs")]: {
      width: "95%",
    },
  },
}));

const HostingConfig = ({
  Product,
  addonList,
  gid,
  loadingAddCart,
  hostingAddToCart,
  resultAddon,
  setshowHostngConfig,
}) => {
  const classes = useStyle();

  const [bill, setbill] = useState(null);
  const [addon, setaddon] = useState(false);
  useEffect(() => {
    console.log(bill);
    if (Product.price.monthly > 0) {
      setbill("monthly");
    } else {
      setbill("annually");
    }
  }, [Product, bill]);
  return (
    <div style={{ textAlign: "center", position: "relative" }}>
      {loadingAddCart && (
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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "0",
          marginBottom: "38px",
        }}
      >
        <Button
          style={{ marginRight: "28px" }}
          color="primary"
          variant="contained"
          onClick={() => setshowHostngConfig(false)}
          startIcon={<ArrowBackIcon />}
        >
          Back
        </Button>
        <h4
          style={{
            fontSize: "24px",
            color: "#333",
          }}
        >
          Configure your desired options{" "}
        </h4>
      </div>

      <div
        style={{
          color: "#61648e",
          lineHeight: "25px",
          whiteSpace: "pre-wrap",
          fontSize: "14px",
          marginBottom: "38px",
        }}
      >
        <h4 style={{ margin: "0", fontSize: "18px" }}>{Product.data.name}</h4>

        {parse(Product.data.description)}
      </div>
      <div style={{ marginBottom: "48px" }}>
        <p>Choose Billing Cycle</p>
        <NativeSelect
          className={classes.selectEmpty}
          onChange={(v) => {
            setbill(v.target.value);
            hostingAddToCart(
              Product.data.id,
              v.target.value,
              addon,
              null,
              null,
              null,
              true
            );
          }}
        >
          {/* {domainList.map((v) => (
						<option key={v.id} value={v.extension}>
							{v.extension}
						</option>
					))} */}
          {Product.price.monthly > 0 && (
            <option value="monthly">
              ${Product.price.monthly} USD Monthly
            </option>
          )}

          {Product.price.annually > 0 && (
            <option value="annually">
              ${Product.price.annually} USD Annually
            </option>
          )}
        </NativeSelect>
      </div>
      {gid === 9 && (
        <div style={{ marginBottom: "48px" }}>
          <p>Select Your Server Location</p>
          <NativeSelect className={classes.selectEmpty}>
            <option value="Dhaka">Dhaka</option>
          </NativeSelect>
        </div>
      )}
      {addonList &&
        addonList.map((v) => (
          <DomainAdons
            addDomainAdons={() => {
              setaddon(v.data.id);
              hostingAddToCart(
                Product.data.id,
                bill,
                v.data.id,
                null,
                null,
                null,
                true
              );
            }}
            result={resultAddon}
            title={v.data.name}
            price={`$${v.price.monthly} USD ${v.data.billingcycle}`}
            description={v.data.description}
            icon={
              <Avatar style={{ background: "#3281e8" }}>
                <ExtensionIcon />
              </Avatar>
            }
          />
        ))}
    </div>
  );
};

export default HostingConfig;
