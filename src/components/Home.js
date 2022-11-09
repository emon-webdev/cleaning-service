import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import useTitle from "../hooks/useTitle";
import Banner from "./Banner";
import CtaArea from "./CtaArea";
import Feedback from "./Feedback";
import Services from "./Services";

const Home = () => {
    const services = useLoaderData();
    useTitle('Home')
  return (
    <div>
      <Banner />
      <Services services={services} />
      <div className="text-center mt-14">
        <Link to="/services">
          <button className="clean-btn">See All</button>
        </Link>
      </div>
      <CtaArea/>
      <Feedback />
    </div>
  );
};

export default Home;
