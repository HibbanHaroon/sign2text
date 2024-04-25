import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const AboutUs = () => {
  return (
    <div>
      <Header />
      <div className="page_heading">
        <h1 className="pg_heading mx-auto">About Us</h1>
      </div>
      <div className="flex flex-col md:flex-row md:mx-24 mt-11 mx-5">
        <div className="md:w-1/2 mt-11 mb-11 animate-fade-in-left">
          <img
            src="/Images/team_logo.png"
            className="about_img"
            alt=""
            style={{ borderRadius: "50%" }}
          />
          <p className="text mt-11 text-justify pr-5">
            Team DedSec, consisting of Ahmed Kalair, Talha Butt, and Aayan
            Khattak, are the visionary minds behind Sign2Text and its website.{" "}
            <br></br>
            <br></br>As Fall 2020 students at Bahria University, we embarked on
            a transformative journey to redefine communication for individuals
            with hearing impairments. <br></br>
            <br></br>Drawing upon our expertise in deep learning, computer
            vision, and natural language processing, we brought Sign2Text to
            life under the DedSec banner. For inquiries, reach out to us at
            dedsecbahria@gmail.com or on Instagram @dedsecbahria.
          </p>
        </div>
        <div className="md:w-1/2 md:ml-auto mb-11 animate-fade-in-right">
          <img
            src="/Images/about-us.jpg"
            className="about_img"
            alt=""
            style={{ height: "90%", borderRadius: "30px" }}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
