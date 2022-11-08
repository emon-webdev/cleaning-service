import React from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import CtaArea from "./CtaArea";
import Feedback from "./Feedback";
import Services from "./Services";

const Home = () => {
    const services = useLoaderData();
  return (
    <div>
      <Banner />
      <Services services={services} />
      <CtaArea/>
      <Feedback />
    </div>
  );
};

export default Home;
