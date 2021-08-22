// code is working
import { createTheme, ThemeProvider } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { ToastProvider } from "react-toast-notifications";
import About from "./pages/About";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";

import MessengerCustomerChat from "react-messenger-customer-chat";

// import tawkTo from "tawkto-react";

const outerTheme = createTheme({
  palette: {
    primary: {
      //main: "#009ddbfa",
      main: "#2e5490",
    },
    secondary: {
      main: "#ad003b",
    },
  },
  typography: {
    h2: {
      fontWeight: "700",
    },
    h3: {
      fontWeight: "700",
      textAlign: "center",
      fontSize: "38px",
    },
    fontFamily: "Montserrat",
  },
});
const App = () => {
  useEffect(() => {
    const el = document.querySelector(".loader-container");
    if (el) {
      el.remove(); // removing the spinner element
    }
    (async () => {
      await fetch("https://coxhost.com/portal/textcart.php?cleardata");
    })();
  }, []);

  // const tawkToPropertyId = "5905d0464ac4446b24a6c9b2";

  // // Direct Chat Link
  // // https://tawk.to/chat/tawkToPropertyId/tawkToKey

  // const tawkToKey = "";
  var Tawk_API = Tawk_API || {},
    Tawk_LoadStart = new Date();
  useEffect(() => {
    var s1 = document.createElement("script"),
      s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = "https://embed.tawk.to/968ec3d4b5358dc406989ef6b2be004cfb4a7452";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    s0.parentNode.insertBefore(s1, s0);

    // <MessengerCustomerChat pageId="100264995497079" appId="2944143205855394" />;
  }, []);

  return (
    <ThemeProvider theme={outerTheme}>
      <ToastProvider>
        <Home Tawk_API={Tawk_API} />
        {/* <Router>
          <Switch>
         <Route path="/about" component={withRouter(About)} />
            <Route exact path="/" component={withRouter(Home)} />
          </Switch>
        </Router> */}
      </ToastProvider>
    </ThemeProvider>
  );
};

export default App;
