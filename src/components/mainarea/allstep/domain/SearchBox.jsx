import { Button, makeStyles, NativeSelect } from "@material-ui/core";
import parse from "html-react-parser";
import isValidDomain from "is-valid-domain";
import React, { useEffect, useState } from "react";
import { useToasts } from "react-toast-notifications";
import "./style.css";

const useStyle = makeStyles((theme) => ({
  Root: {
    display: "flex",
    flexDirection: "row",
    width: "70%",
    //height: "100%",
    borderRadius: "5px",
    overflow: "hidden",
    //backgroundColor: "rgb(246, 246, 246)",
    margin: "42px auto",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },
  Root2: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "100%",
    overflow: "hidden",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  Input: {
    backgroundColor: "white",
    letterSpacing: "0.025em",
    fontWeight: "500",

    fontSize: "1.5rem",
    width: "100%",
    padding: "15px 22px",
    border: "none",
    margin: "30px 20px",
    borderRadius: "20px",
    outline: "0",
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.875rem",
      margin: "20px 10px",
    },
    boxShadow: "2px 4px 18px #ababab, -9px -9px 18px #ffffff",
    textTransform: "lowercase",
  },
  SearchButton: {
    color: "rgb(255, 255, 255)",
    cursor: "pointer",
    margin: "36px 0px",
    background: theme.palette.secondary.main,
    alignItems: "center",
    fontWeight: "700",
    borderRadius: "20px",
    textTransform: "none",
    height: "45px",
    width: "112px",
    [theme.breakpoints.down("xs")]: {
      margin: 0,
    },
  },
  selectEmpty: {
    background: "#fff",
    //border: `2px solid ${theme.palette.secondary.main}`,
    borderLeft: "0",
  },
}));

const SearchBox = ({
  domainList,
  getResult,
  hiddenInput,
  searchType,
  placeholder,
  getDomainConfig,
  stepup,
  setinputValue,
  inputValue,
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
}) => {
  const classes = useStyle();
  const { addToast } = useToasts();
  const [value, setvalue] = useState({ text: "", ltd: ".com" });

  const getValue = async (e, t, d) => {
    let token;
    if (e && e.target[1].name === "token") {
      token = e.target[1].value;
    } else {
      token = t;
    }

    if (searchType === "Use") {
      let domain = value.text;
      if (isValidDomain(domain)) {
        getDomainConfig({ domain, token, type: "owndomain" });
        if (ProductValue) {
          const type = ProductValue.price.monthly > 0 ? "Monthly" : "Annually";
          setloadingAddCartH(true);
          setdomainStatus({
            active: false,
            completed: true,
          });
          sethostingStatus({
            completed: false,
            active: true,
          });
          await hostingAddToCart(
            ProductValue.data.id,
            type,
            null,
            domain,
            token,
            "owndomain",
            true
          );
          setloadingAddCartH(false);
          setshowHostngConfig(true);
        } else if (themeConfig.id) {
          setthemeloadingAddCart(true);
          setdomainStatus({
            active: false,
            completed: true,
          });
          sethostingStatus({
            completed: false,
            active: false,
          });
          setthemeStatus({
            completed: false,
            active: true,
          });
          themeAddToCart(themeConfig.id, true, domain, token, "owndomain");
        } else {
          stepup();
        }
      } else {
        addToast("Invalid Domain Name!", {
          appearance: "error",
          autoDismiss: true,
        });
      }
    } else {
      if (d) {
        getResult(d, token);
      } else {
        getResult(value.text + value.ltd, token);
      }
    }
    e && e.preventDefault();
  };

  useEffect(() => {
    if (setinputValue) {
      setvalue(setinputValue.value);
    }
  }, [setinputValue]);

  useEffect(() => {
    if (setinputValue) {
      inputValue({
        ...setinputValue,
        func: getValue,
        hiddenInput: hiddenInput && parse(hiddenInput),
      });
    }
  }, [hiddenInput]);
  return (
    <form onSubmit={getValue} className={classes.Root}>
      <div className={classes.Root2}>
        <input
          onChange={(v) => {
            const text = v.target.value;
            setvalue({ ...value, text });
          }}
          required
          type="text"
          name="text"
          className={classes.Input}
          placeholder={placeholder}
          value={value && value.text}
        />
        {hiddenInput && parse(hiddenInput)}

        {domainList ? (
          <NativeSelect
            value={value.ltd}
            name="ltd"
            onChange={(v) => {
              const ltd = v.target.value;
              setvalue({ ...value, ltd });
            }}
            className={classes.selectEmpty}
          >
            {domainList.map((v) => (
              <option key={v.id} value={v.extension}>
                {v.extension}
              </option>
            ))}
          </NativeSelect>
        ) : (
          <div className={classes.selectEmpty}></div>
        )}
      </div>

      <Button
        color="secondary"
        variant="contained"
        className={classes.SearchButton}
        type="submit"
      >
        {searchType}
      </Button>
    </form>
  );
};

export default SearchBox;
