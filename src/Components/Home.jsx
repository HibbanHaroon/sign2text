import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import Info from "./Info";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <div style={{ margin: "50px auto" }}>
        <a className="main_pg_link" href="/setup">
          <span>Click here to start Talking</span>
        </a>
      </div>
      <Info />
      <Footer />
    </div>
  );
};

export default Home;
