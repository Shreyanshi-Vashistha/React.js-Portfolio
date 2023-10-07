import React from "react";
import Navbar from "../components/Navbar";
import BgImg from "../components/BgImg";
import Footer from "../components/Footer";
import Work from "../components/Work";

const home = () => {
  return (
    <div>
      <Navbar />
      <BgImg />
      {/* <Work /> */}
      <Footer />
    </div>
  );
};

export default home;
