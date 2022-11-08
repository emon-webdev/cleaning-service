import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="">
      <div className="hero min-h-[400px]">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-xl">
            <h1 className="mb-5 text-5xl font-bold">Blog</h1>

            <p className="mb-5 text-6xl font-bold">Home Service Here.</p>
            <Link to="/">
              <button class="clean-btn">Appointment</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="md:w-11/12 px-4 md:px-0 mx-auto my-14">
        <h2 className="text-center my-8 text-[#232F4B] text-5xl font-bold ">
          Faq
        </h2>
        <div
          tabIndex={0}
          className="collapse mb-6 collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            1. Difference between SQL and NoSQL?
          </div>
          <div className="collapse-content">
            <h2 className="text-3xl">SQL</h2>
            <p>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</p>
            <p>These databases have fixed or static or predefined schema</p>
            <p>Vertically Scalable and Follows ACID property</p>
            <h2 className="text-3xl">NoSQL</h2>
            <p>Non-relational or distributed database system.</p>
            <p>They have dynamic schema</p>
            <p>Follows CAP(consistency, availability, partition tolerance)</p>
          </div>
        </div>
        {/*  */}
        <div
          tabIndex={0}
          className="collapse  mb-6 collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            2. What is JWT, and how does it work?
          </div>
          <div className="collapse-content">
            <p>
              JSON Web Token, is an open standard used to share information
              between two parties securely — a client and a server
              <br />
              It can be used for an authentication system and can also be used
              for information exchange.
            </p>
          </div>
        </div>
        {/*  */}
        <div
          tabIndex={0}
          className="collapse  mb-6 collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            3. What is the difference between javascript and NodeJS?
          </div>
          <div className="collapse-content">
            <p>
              JavaScript is a simple programming language that can be used with
              any browser that has the JavaScript Engine installed. NodeJS is a
              Javascript runtime environment.
            </p>
          </div>
        </div>
        {/*  */}
        <div
          tabIndex={0}
          className="collapse  mb-6 collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            4.How does NodeJS handle multiple requests at the same time?
          </div>
          <div className="collapse-content">
            <p>
              NodeJS receives multiple client requests and places them into
              EventQueue.Multiple clients make multiple requests to the NodeJS
              server
            </p>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default Blog;
