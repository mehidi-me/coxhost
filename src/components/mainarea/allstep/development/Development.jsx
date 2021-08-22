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
import ProductCard from "../hosting/ProductCard";
import GroupList from "./GroupList";
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

const Development = ({
  domainConfig,
  width,
  domainStatus,
  setthemeConfig,
  setdomainStatus,
  setthemeStatus,
  sethostingAddToCart,
  loadingAddCart,
  setloadingAddCart,
}) => {
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

  const [gid, setgid] = useState(null);
  const [Product, setProduct] = useState(null);

  const [loading, setloading] = useState(false);

  const getHostingPac = async (v) => {
    setgid(v);
    setloading(true);
    const res = await fetch(`https://coxhost.com/portal/textcart.php?gid=${v}`);
    const data = await res.json();
    setProduct(data);
    setloading(false);
  };
  const hostingAddToCart = async (v, call, domain, token, type) => {
    if (domainConfig || call !== "One Time") {
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
        setloadingAddCart(true);
        (async () => {
          await fetch(`https://coxhost.com/portal/cart.php?a=confproduct&i=0`);
        })();
        setloadingAddCart(false);
        addToast("Development Package Added Cart Successfully", {
          appearance: "success",
          autoDismiss: true,
        });
        window.open("https://coxhost.com/portal/cart.php?a=view", "_self");
      } else {
        alert("Somthing Wrong Try Again!");
      }
    } else {
      setthemeConfig({ id: v });
      setdomainStatus({
        ...domainStatus,
        active: true,
      });
      setthemeStatus({
        complete: false,
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
    sethostingAddToCart(() => hostingAddToCart);
  }, []);
  return (
    <div>
      <GroupList onClick={getHostingPac} gid={gid} />
      <Grid container spacing={2} id="card" className={classes.card}>
        {loading || loadingAddCart ? (
          <div style={{ margin: "70px auto" }}>
            <Loader type="Oval" color="#f80155" height={80} width={80} />
          </div>
        ) : isWidthUp("md", width) ? (
          Product &&
          Product.map((v) => (
            <ProductCard
              loadingAddCart={loadingAddCart}
              resultAddCart={false}
              key={v.data.id}
              name={v.data.name}
              description={v.data.description}
              currency={v.price.currency}
              price={v.price.monthly > 0 ? v.price.monthly : v.price.annually}
              id={v.data.id}
              onClick={hostingAddToCart}
              type="One Time"
            />
          ))
        ) : (
          <Slider {...settings}>
            {Product &&
              Product.map((v) => (
                <ProductCard
                  loadingAddCart={loadingAddCart}
                  resultAddCart={false}
                  key={v.data.id}
                  name={v.data.name}
                  description={v.data.description}
                  currency={v.price.currency}
                  price={
                    v.price.monthly > 0 ? v.price.monthly : v.price.annually
                  }
                  id={v.data.id}
                  onClick={hostingAddToCart}
                  type="One Time"
                />
              ))}
          </Slider>
        )}
      </Grid>
    </div>
  );
};

export default withWidth()(Development);
