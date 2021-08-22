import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useToasts } from "react-toast-notifications";
import AppContext from "../../../../AppContext";
import Domain from "./DomainConfig";

//const useStyle = makeStyles((theme) => ({}));

const DomainMain = ({
  setbuttonState,
  getDomainConfig,
  stepup,
  width,
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
  const { addToast } = useToasts();
  const {
    showContent1,
    setshowContent1,
    showContent2,
    setshowContent2,
    showContent3,
    setshowContent3,
    getCartData,
  } = useContext(AppContext);
  // const [showContent1, setshowContent1] = useState("auto");
  // const [showContent2, setshowContent2] = useState("30px");
  // const [showContent3, setshowContent3] = useState("30px");

  const [domainList, setdomainList] = useState([]);
  const [SuggestedDomain, setSuggestedDomain] = useState([]);
  const [hiddenInput, sethiddenInput] = useState(null);
  const [domainConfig, setdomainConfig] = useState({
    domain: "",
    token: "",
  });
  const [domainAdonList, setdomainAdonList] = useState({
    dns: "off",
    id: "off",
    email: "off",
  });
  // {
  // 	domainName: "mehidi123.xyz",
  // 	isValidDomain: true,
  // 	isAvailable: true,
  // 	isRegistered: false,
  // 	pricing: {
  // 		1: {
  // 			register: "$10.00 USD",
  // 		},
  // 	},
  // }
  const [result, setresult] = useState(null);
  const [resultAddCart, setresultAddCart] = useState({ name: null });
  const [resultAddDomainAdon, setresultAddDomainAdon] = useState({
    dns: false,
    id: false,
    email: false,
  });

  const [showAdons, setshowAdons] = useState({ name: null });
  const [loading, setloading] = useState(false);
  const [loadingSuggested, setloadingSuggested] = useState(false);
  const [loadingAddCart, setloadingAddCart] = useState({ name: null });
  const [loadingAddDomainAdon, setloadingAddDomainAdon] = useState({
    dns: false,
    id: false,
    email: false,
  });

  const addDomainAdons = async (arr, value) => {
    let formData = new FormData();

    if (value.startsWith("d")) {
      setdomainAdonList({ ...domainAdonList, dns: "on" });
      setloadingAddDomainAdon({ ...loadingAddDomainAdon, dns: true });
    }
    if (value.startsWith("i")) {
      setdomainAdonList({ ...domainAdonList, id: "on" });
      setloadingAddDomainAdon({ ...loadingAddDomainAdon, id: true });
    }
    if (value.startsWith("e")) {
      setdomainAdonList({ ...domainAdonList, email: "on" });
      setloadingAddDomainAdon({
        ...loadingAddDomainAdon,
        email: true,
      });
    }

    // let dns = v === "emailforwarding" ? "on" : domainAdonList.dns;
    // let id = v === "idprotection" ? "on" : domainAdonList.id;
    // let email = v === "emailforwarding" ? "on" : domainAdonList.email;

    // if (dns === "on") {
    //   formData.append(`dnsmanagement[${index}]`, dns);
    // }
    // if (id === "on") {
    //   formData.append(`idprotection[${index}]`, id);
    // }
    // if (email === "on") {
    //   formData.append(`emailforwarding[${index}]`, email);
    //}
    arr.map((v) => {
      formData.append(v, "on");
      return null;
    });
    formData.append(value, "on");
    formData.append("token", domainConfig.token);
    formData.append("update", true);

    const res = await axios({
      method: "post",
      url: "https://coxhost.com/portal/cart.php?a=confdomains",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    });
    setloadingAddDomainAdon({
      dns: false,
      id: false,
      email: false,
    });

    if (res.status === 200) {
      if (value.startsWith("d")) {
        setresultAddDomainAdon({
          ...resultAddDomainAdon,
          dns: true,
        });
      }
      if (value.startsWith("i")) {
        setresultAddDomainAdon({
          ...resultAddDomainAdon,
          id: true,
        });
      }
      if (value.startsWith("e")) {
        setresultAddDomainAdon({
          ...resultAddDomainAdon,
          email: true,
        });
      }
      addToast("Domain Adons Added Successfully", {
        appearance: "success",
        autoDismiss: true,
      });
    } else {
      alert("Somthing Wrong Try Again!");
    }
    getCartData();
  };

  const domainAddtoCartTransfer = async (epp, domainName) => {
    if (!epp) {
      addToast("Please Enter Epp Code", {
        appearance: "error",
        autoDismiss: true,
      });
    } else {
      setloadingAddCart(true);
      let formData = new FormData();
      formData.append("token", domainConfig.token);
      formData.append("domains[]", domainName);
      formData.append("domainoption", "transfer");
      formData.append(`domainsregperiod[${domainName}]`, 1);
      //formData.append("epp", epp);

      const res = await axios({
        method: "post",
        url: "https://coxhost.com/portal/cart.php?a=add&pid=2&domainselect=1",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });

      setloadingAddCart(false);
      if (res.status === 200) {
        setloadingAddCart(true);
        let formData2 = new FormData();
        formData2.append("token", domainConfig.token);
        formData2.append("update", true);
        formData2.append("epp[0]", epp);

        const res2 = await axios({
          method: "post",
          url: "https://coxhost.com/portal/cart.php?a=confdomains",
          data: formData2,
          headers: { "Content-Type": "multipart/form-data" },
        });

        setloadingAddCart(false);

        if (isWidthUp("sm", width)) {
          setshowContent2("auto");
        } else {
          setshowContent2("auto");
        }
        setshowAdons({ name: domainName });
        setresultAddCart({ name: domainName });
        getDomainConfig({
          token: domainConfig.token,
          domain: domainName,
          type: "incart",
        });

        addToast("Domain Added Cart Successfully", {
          appearance: "success",
          autoDismiss: true,
        });
        setbuttonState(false);

        setresultAddDomainAdon({
          dns: false,
          id: false,
          email: false,
        });
      } else {
        alert("Somthing Wrong Try Again!");
      }
    }
    getCartData();
  };
  const domainAddtoCart = async (domainName) => {
    setloadingAddCart({ name: domainName });
    let formData = new FormData();
    formData.append("token", domainConfig.token);
    formData.append("domain", domainName);
    formData.append("a", "addToCart");
    formData.append("whois", 0);
    formData.append("sideorder", 0);

    const res = await axios({
      method: "post",
      url: "https://coxhost.com/portal/cart.php",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    });

    setloadingAddCart({ name: null });
    if (res.status === 200) {
      if (isWidthUp("sm", width)) {
        setshowContent1("auto");
      } else {
        setshowContent1("auto");
      }

      setshowAdons({ name: domainName });
      setresultAddCart({ name: domainName });
      getDomainConfig({
        token: domainConfig.token,
        domain: domainName,
        type: "incart",
      });

      addToast("Domain Added Cart Successfully", {
        appearance: "success",
        autoDismiss: true,
      });
      setbuttonState(false);

      setresultAddDomainAdon({
        dns: false,
        id: false,
        email: false,
      });
    } else {
      alert("Somthing Wrong Try Again!");
    }
    getCartData();
  };

  const getResult = async (domain, token) => {
    setloading(true);
    setresultAddCart(false);
    let formData = new FormData();
    formData.append("token", token);
    formData.append("domain", domain);
    formData.append("a", "checkDomain");
    formData.append("type", "domain");
    formData.append("source", "cartAddDomain");

    const res = await axios({
      method: "post",
      url: "https://coxhost.com/portal/index.php?rp=/domain/check",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    });
    setloading(false);
    if (res.status === 200) {
      setdomainConfig({ token, domain, type: "incart" });

      setresult(res.data.result[0]);

      setloadingSuggested(true);
      let formData2 = new FormData();
      formData2.append("token", token);
      formData2.append("domain", domain);
      formData2.append("a", "checkDomain");
      formData2.append("type", "suggestions");
      formData2.append("source", "cartAddDomain");

      const res2 = await axios({
        method: "post",
        url: "https://coxhost.com/portal/index.php?rp=/domain/check",
        data: formData2,
        headers: { "Content-Type": "multipart/form-data" },
      });

      setloadingSuggested(false);

      if (res2.status === 200) {
        console.log(res2.data);
        setSuggestedDomain(res2.data.result);
      }
    } else {
      alert("Somthing Wrong Try Again!");
    }
  };

  useEffect(() => {
    const getDomainList = async () => {
      const res = await fetch(
        "https://coxhost.com/portal/textcart.php?domainlist"
      );
      const data = await res.json();
      setdomainList(data);
    };

    getDomainList();

    fetch("https://coxhost.com/portal/textcart.php?token")
      .then((v) => v.json())
      .then((data) => {
        sethiddenInput(data.token);
      })
      .catch((err) => console.log(err));

    fetch("https://coxhost.com/portal/textcart.php?token")
      .then((v) => v.json())
      .then((data) => {
        sethiddenInput(data.token);
      })
      .catch((err) => console.log(err));

    setbuttonState(true);
  }, [setbuttonState]);

  return (
    <div>
      <Domain
        setinputValue={setinputValue}
        inputValue={inputValue}
        getResult={getResult}
        hiddenInput={hiddenInput}
        searchType="Search"
        result={result}
        loading={loading}
        title="Register a new domain"
        showContent={showContent1}
        loadingAddCart={loadingAddCart}
        resultAddCart={resultAddCart}
        addDomainAdons={addDomainAdons}
        loadingAddDomainAdon={loadingAddDomainAdon}
        resultAddDomainAdon={resultAddDomainAdon}
        onClick={() => {
          if (isWidthUp("sm", width)) {
            setshowContent1("auto");
          } else {
            setshowContent1("auto");
          }

          setshowContent2("48px");
          setshowContent3("48px");
        }}
        onClick2={domainAddtoCart}
        showAdons={showAdons}
        placeholder="Find your new domain name"
        SuggestedDomain={Object.values(SuggestedDomain)}
        setloadingAddCartH={setloadingAddCartH}
        setshowHostngConfig={setshowHostngConfig}
        loadingSuggested={loadingSuggested}
      />
      <Domain
        domainList={domainList}
        getResult={getResult}
        hiddenInput={hiddenInput}
        loadingAddCart={loadingAddCart}
        resultAddCart={resultAddCart}
        addDomainAdons={addDomainAdons}
        loadingAddDomainAdon={loadingAddDomainAdon}
        resultAddDomainAdon={resultAddDomainAdon}
        searchType="Transfer"
        title="Transfer your domain from another registrar"
        showContent={showContent2}
        result={result}
        loading={loading}
        placeholder="Enter Your Transfer Domain Name"
        onClick={() => {
          setshowContent1("48px");
          if (isWidthUp("sm", width)) {
            setshowContent2("420px");
          } else {
            setshowContent2("auto");
          }
          setshowContent3("48px");
        }}
        onClick2={domainAddtoCartTransfer}
        showAdons={showAdons}
        setloadingAddCartH={setloadingAddCartH}
        setshowHostngConfig={setshowHostngConfig}
      />
      <Domain
        hiddenInput={hiddenInput}
        title="I will use my existing domain and update my nameservers"
        showContent={showContent3}
        searchType="Use"
        placeholder="Enter Your Full Domain Name.    like example.com"
        getDomainConfig={getDomainConfig}
        stepup={stepup}
        onClick={() => {
          setshowContent1("48px");
          setshowContent2("48px");
          if (isWidthUp("sm", width)) {
            setshowContent3("300px");
          } else {
            setshowContent3("auto");
          }
        }}
        onClick2={() => setshowContent3("630px")}
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
  );
};

export default withWidth()(DomainMain);
