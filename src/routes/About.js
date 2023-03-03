import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BgImg2 from "../components/BgImg2";

const about = () => {
  return (
    <div>
      <Navbar />
      <BgImg2 heading="ABOUT." text="Full Stack Developer" />
      <Footer />
    </div>
  );
};

export default about;
