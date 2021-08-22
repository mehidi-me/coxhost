import React, { useState } from "react";
import MainArea from "../components/mainarea/MainArea";
import SelectUs from "../components/selectus/SelectUs";
import support from "../assets/Support.png";
import Loading from "../assets/Loading.png";
import Migration from "../assets/Migration.png";
import Platform from "../assets/Platform.png";
import Uptime from "../assets/Uptime.png";
import Guarantee from "../assets/Guarantee.png";

import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";
import s3 from "../assets/s3.png";
import s4 from "../assets/s4.png";
import s5 from "../assets/s5.png";
import s6 from "../assets/s6.png";
import Testimonial from "../components/testimonial/Testimonial";
import Root from "./Root";
import { useEffect } from "react";

export default function Home({ Tawk_API }) {
  const [selectUsCardData, setselectUsCardData] = useState([]);
  const [specialCardData, setspecialCardData] = useState([]);

  // const selectUsCardData = [
  //   {
  //     id: 1,
  //     img: "https://coxhost.com/images/Support.png",
  //     title: "24/7 Tech Support",
  //     description:
  //       "Need help launching your website or understanding anything about our service? Well, we got you back. Our professionally trained technical support agent will work with you side by side to solve your issue 24 hours a day, 7 days a week.",
  //   },
  //   {
  //     id: 2,
  //     img: "https://coxhost.com/images/Uptime.png",
  //     title: "99.9% Uptime",
  //     description:
  //       "We ensure you the maximum and stable uptime. 99.9% uptime is guaranteed at IT Nut Hosting. Our server administration and monitoring team ensure the maximum uptime and problem free operational environment.",
  //   },
  //   {
  //     id: 3,
  //     img: "https://coxhost.com/images/Loading.png",
  //     title: "Fast Loading Website",
  //     description:
  //       "We use all the latest features that enhance the performance your website http2,  SSD drives,  Nginx/Litespeed Server, and meme cache with redis. Enable caching features and take advantage of our latest web server technologies to improve your website speed and reduce load time.",
  //   },
  //   {
  //     id: 4,
  //     img: "https://coxhost.com/images/Platform.png",
  //     title: "Security & Privacy",
  //     description:
  //       "Secure your website with our advanced network firewall, DDoS protection, and secure web hosting environment. Our hosting security experts are always monitoring behind to keep our web hosting platform safe and secure.",
  //   },
  //   {
  //     id: 5,
  //     img: "https://coxhost.com/images/Guarantee.png",
  //     title: "Moneyback Guarantee",
  //     description:
  //       "Give it a risk-free trial. We have 30 days no question asked money-back guarantee. If you don’t receive the service as promised, you will get a full refund of the money that you used to purchase our hosting service.",
  //   },
  //   {
  //     id: 6,
  //     img: "https://coxhost.com/images/Migration.png",
  //     title: "Free Migration",
  //     description:
  //       "Already have a website to another provider but you want to take advantage of our awesome features? Switch to IT Nut Hosting free of cost. Our hosting migration experts will move your website without losing any data, SEO value or without any downtime.",
  //   },
  // ];

  // const specialCardData = [
  //   {
  //     id: 1,
  //     img: "https://coxhost.com/images/s1.png",
  //     title: "Networking and Security",
  //     description:
  //       "Need help launching your website or understanding anything about our service? Well, we got you back. Our professionally trained technical support agent will work with you side by side to solve your issue 24 hours a day, 7 days a week.",
  //   },
  //   {
  //     id: 2,
  //     img: "https://coxhost.com/images/s2.png",
  //     title: "Cyber Security Solutions",
  //     description:
  //       "We ensure you the maximum and stable uptime. 99.9% uptime is guaranteed at IT Nut Hosting. Our server administration and monitoring team ensure the maximum uptime and problem free operational environment.",
  //   },
  //   {
  //     id: 3,
  //     img: "https://coxhost.com/images/s3.png",
  //     title: "IT & Cloud Managment",
  //     description:
  //       "We use all the latest features that enhance the performance your website http2,  SSD drives,  Nginx/Litespeed Server, and meme cache with redis. Enable caching features and take advantage of our latest web server technologies to improve your website speed and reduce load time.",
  //   },
  //   {
  //     id: 4,
  //     img: "https://coxhost.com/images/s4.png",
  //     title: "Diployment and Migration",
  //     description:
  //       "Secure your website with our advanced network firewall, DDoS protection, and secure web hosting environment. Our hosting security experts are always monitoring behind to keep our web hosting platform safe and secure.",
  //   },
  //   {
  //     id: 5,
  //     img: "https://coxhost.com/images/s5.png",
  //     title: "Managed Web Application",
  //     description:
  //       "Give it a risk-free trial. We have 30 days no question asked money-back guarantee. If you don’t receive the service as promised, you will get a full refund of the money that you used to purchase our hosting service.",
  //   },
  //   {
  //     id: 6,
  //     img: "https://coxhost.com/images/s6.png",
  //     title: "Cyber Disaster Planning",
  //     description:
  //       "Already have a website to another provider but you want to take advantage of our awesome features? Switch to IT Nut Hosting free of cost. Our hosting migration experts will move your website without losing any data, SEO value or without any downtime.",
  //   },
  // ];

  const [mainAreaValue, setMainAreaValue] = useState({});

  const setMainAreaProps = (
    sethidemenu,
    sethidemenu2,
    setonclick,
    inputValue,
    setinputValue
  ) => {
    setMainAreaValue({
      sethidemenu,
      sethidemenu2,
      setonclick,
      inputValue,
      setinputValue,
    });
  };

  useEffect(() => {
    fetch("https://coxhost.com/site-data/specialCardData.json")
      .then((v) => v.json())
      .then((data) => {
        setspecialCardData(data);
      });
    fetch("https://coxhost.com/site-data/selectUsCardData.json")
      .then((v) => v.json())
      .then((data) => {
        setselectUsCardData(data);
      });
  }, []);
  return (
    <Root setMainAreaProps={setMainAreaProps} Tawk_API={Tawk_API}>
      <MainArea
        sethidemenu={mainAreaValue.sethidemenu}
        sethidemenu2={mainAreaValue.sethidemenu2}
        cardONClickHeader={mainAreaValue.setonclick}
        setinputValue={mainAreaValue.inputValue}
        inputValue={mainAreaValue.setinputValue}
      />
      <SelectUs
        data={selectUsCardData}
        align="center"
        title="Why should you select us?"
        subtitle="You trusted us with your business and site, and we don't take it lightly. Let's make difference together."
        cardbg="#f5f5fa"
      />
      <SelectUs
        data={specialCardData}
        align="left"
        title="Our Other Special Services"
        cardbg="#510089"
      />
      <Testimonial />
    </Root>
  );
}
