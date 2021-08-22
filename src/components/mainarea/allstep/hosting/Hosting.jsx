import { Grid, makeStyles } from "@material-ui/core";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import Slider from "react-slick";
import { useToasts } from "react-toast-notifications";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import AppContext from "../../../../AppContext";
import GroupList from "./GroupList";
import HostingConfig from "./HostingConfig";
import ProductCard from "./ProductCard";
import "./style.css";

// slick slider nextArrow event
const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        right: "7%",
        top: "50%",
      }}
      onClick={onClick}
    />
  );
};

// slick slider prevArrow event
const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        left: "2%",
        top: "50%",
        zIndex: 1,
      }}
      onClick={onClick}
    />
  );
};

const useStyle = makeStyles((theme) => ({
  [theme.breakpoints.down("sm")]: {
    card: {
      display: "block",
    },
  },
}));

function Hosting({
  domainConfig,
  setbuttonState,
  width,
  domainStatus,
  hostingStatus,
  setdomainStatus,
  sethostingStatus,
  ProductValue,
  setProductValue,
  sethostingAddToCart,
  loadingAddCart,
  setloadingAddCart,
  showHostngConfig,
  setshowHostngConfig,
  gid,
  Product,
  loading,
  getHostingPac,
}) {
  const classes = useStyle();
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const { addToast } = useToasts();
  const { getCartData } = useContext(AppContext);

  const [addonList, setaddonList] = useState(false);
  const [resultAddCart, setresultAddCart] = useState(false);
  const [resultAddon, setresultAddon] = useState(false);

  const hostingAddToCart = async (
    v,
    billingcycle,
    addon,
    domain,
    token,
    type,
    condition,
    hosGid
  ) => {
    if (!condition) {
      setProductValue(Product.find((value) => value.data.id === v));
    }

    if (domainConfig || domain) {
      setloadingAddCart(true);
      let formData = new FormData();
      if (token) {
        formData.append("token", token);
      } else {
        formData.append("token", domainConfig.token);
      }
      if (domain) {
        formData.append("domain", domain);
      } else {
        formData.append("domain", domainConfig.domain);
      }
      if (type) {
        formData.append("type", type);
      } else {
        formData.append("type", domainConfig.type);
      }
      formData.append("source", "cartAddDomain");
      formData.append("pid", v);

      const res = await axios({
        method: "post",
        url: "https://coxhost.com/portal/index.php?rp=/domain/check",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });

      setloadingAddCart(false);
      if (res.status === 200) {
        // addToast("Domain Added Cart Successfully", {
        // 	appearance: "success",
        // 	autoDismiss: true,
        // });

        setloadingAddCart(true);
        let formData2 = new FormData();
        formData2.append("configure", true);
        formData2.append("billingcycle", billingcycle);
        formData2.append("a", "confproduct");
        formData2.append("i", 0);
        formData2.append("ajax", 1);

        if (hosGid === 9 || gid === 9) {
          formData2.append("customfield[13]", "Dhaka");
          formData2.append("customfield[14]", "Dhaka");
          formData2.append("customfield[15]", "Dhaka");
        }
        if (addon) {
          formData2.append(`addons[${addon}]`, "on");
        }

        const res2 = await axios({
          method: "post",
          url: "https://coxhost.com/portal/cart.php",
          data: formData2,
          headers: { "Content-Type": "multipart/form-data" },
        });

        if (hosGid === 5 || hosGid === 3 || gid === 5 || gid === 3) {
          console.log("redirect");
          window.open(
            "https://coxhost.com/portal/cart.php?a=confproduct",
            "_self"
          );
        }
        setloadingAddCart(false);
        if (res2.status === 200) {
          addToast("Hosting Update & Added Cart Successfully", {
            appearance: "success",
            autoDismiss: true,
          });
          setresultAddCart({ result: "added" });
          if (addon) {
            setresultAddon(true);
          }
          setshowHostngConfig(true);
          setbuttonState(false);
        } else {
          alert("Somthing Wrong Try Again!");
        }
      } else {
        alert("Somthing Wrong Try Again!");
      }
    } else {
      setdomainStatus({
        ...domainStatus,
        active: true,
      });
      sethostingStatus({
        ...hostingStatus,
        active: false,
      });
      addToast("Please add domain first!", {
        appearance: "error",
        autoDismiss: true,
      });
    }
    getCartData();
  };

  useEffect(() => {
    const getAddonList = async () => {
      const res = await fetch("https://coxhost.com/portal/textcart.php?adons");
      const data = await res.json();
      setaddonList(data);
    };
    getAddonList();

    setbuttonState(true);
  }, [setbuttonState]);

  useEffect(() => {
    sethostingAddToCart(() => hostingAddToCart);
  }, []);
  return (
    <div>
      {!showHostngConfig ? (
        <div>
          <GroupList onClick={getHostingPac} gid={gid} />
          <Grid container spacing={2} id="card" className={classes.card}>
            {loading || loadingAddCart ? (
              <div style={{ margin: "70px auto" }}>
                <Loader type="Oval" color="#f80155" height={80} width={80} />
              </div>
            ) : (
              Product &&
              (isWidthUp("md", width) ? (
                Product.map((v) => (
                  <ProductCard
                    loadingAddCart={loadingAddCart}
                    resultAddCart={resultAddCart}
                    key={v.data.id}
                    name={v.data.name}
                    description={v.data.description}
                    currency={v.price.currency}
                    price={
                      v.price.monthly > 0 ? v.price.monthly : v.price.annually
                    }
                    id={v.data.id}
                    onClick={hostingAddToCart}
                    type={v.price.monthly > 0 ? "Monthly" : "Annually"}
                  />
                ))
              ) : (
                <Slider {...settings}>
                  {Product.map((v) => (
                    <ProductCard
                      loadingAddCart={loadingAddCart}
                      resultAddCart={resultAddCart}
                      key={v.data.id}
                      name={v.data.name}
                      description={v.data.description}
                      currency={v.price.currency}
                      price={
                        v.price.monthly > 0 ? v.price.monthly : v.price.annually
                      }
                      id={v.data.id}
                      onClick={hostingAddToCart}
                      type={v.price.monthly > 0 ? "Monthly" : "Annually"}
                    />
                  ))}
                </Slider>
              ))
            )}
          </Grid>
        </div>
      ) : (
        <HostingConfig
          Product={ProductValue}
          addonList={addonList}
          gid={gid}
          loadingAddCart={loadingAddCart}
          hostingAddToCart={hostingAddToCart}
          resultAddon={resultAddon}
          setshowHostngConfig={setshowHostngConfig}
        />
      )}
    </div>
  );
}

export default withWidth()(Hosting);
