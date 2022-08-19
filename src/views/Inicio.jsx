import React from "react";
import Navbar from "../components/Navbar";
import Slice from "../components/Slice";
import Blog from "../components/Blog";
import VideoSlice from "../components/VideoSlice";
import Advertising from "../components/Advertising";
import Pictures from "../components/Pictures";
import Footer from "../components/Footer";

const Inicio = () => {
  return (
    <>
      <div className="banner">
        <Navbar />
        <Slice />
        <div className="content-inicio">
          <section className="">
            <Blog />
          </section>
          <section className="sectionVideos">
            <VideoSlice />
          </section>
        </div>
        <Pictures />
        <Advertising />
        <Footer />
      </div>
    </>
  );
};

export default Inicio;
