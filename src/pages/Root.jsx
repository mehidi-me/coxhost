import React, { useState } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

import AppContext from "../AppContext";
import { useEffect } from "react";

export default function Root({
  children,
  setMainAreaProps = () => {},
  isAbout = false,
  Tawk_API,
}) {
  const [showContent1, setshowContent1] = useState("auto");
  const [showContent2, setshowContent2] = useState("48px");
  const [showContent3, setshowContent3] = useState("48px");

  const [hostingContext, setHostingContext] = useState({});

  const [hidemenu, sethidemenu] = useState(false);
  const [hidemenu2, sethidemenu2] = useState(false);
  const [onclick, setonclick] = useState(() => {});
  const [inputValue, setinputValue] = useState({
    value: { text: "", ltd: ".com" },
    func: () => {},
    hiddenInput: null,
  });
  const [totalCart, setTotalCart] = useState({ count: 0, price: "0.00" });

  const getCartData = async () => {
    fetch("https://coxhost.com/portal/textcart.php?getdata")
      .then((v) => v.json())
      .then((res) => {
        let count = 0;

        const product = res.products;
        const domain = res.domains;
        count = domain ? count + domain.length : count;
        count = product ? count + product.length : count;
        product &&
          product.map((v) => {
            count = count + v.addons.length;
            return null;
          });
        domain &&
          domain.map((v) => {
            if (v.dnsmanagement) {
              count = count + 1;
            }
            if (v.emailforwarding) {
              count = count + 1;
            }
            if (v.idprotection) {
              count = count + 1;
            }
            return null;
          });

        setTotalCart({ count, price: res.rawtotal ? res.rawtotal : "0.00" });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    setMainAreaProps(
      sethidemenu,
      sethidemenu2,
      setonclick,
      inputValue,
      setinputValue
    );
  }, []);
  return (
    <AppContext.Provider
      value={{
        showContent1,
        setshowContent1,
        showContent2,
        setshowContent2,
        showContent3,
        setshowContent3,
        hostingContext,
        setHostingContext,
        onclick,
        totalCart,
        getCartData,
      }}
    >
      <Header
        hidemenu={hidemenu}
        hidemenu2={hidemenu2}
        onClicks={onclick}
        inputValue={setinputValue}
        setinputValue={inputValue}
        isAbout={isAbout}
      />
      {children}
      <Footer onClicks={onclick} Tawk_API={Tawk_API} />
    </AppContext.Provider>
  );
}
