import React from "react";
import Navbar from "../components/Navbar";
import Slice from "../components/Slice";
import Blog from "../components/Blog";
import VideoSlice from "../components/VideoSlice";
import Title from "../components/Title";
import Advertising from "../components/Advertising";
import Pictures from "../components/Pictures";
import Footer from "../components/Footer";

const Inicio = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="title-inicio">
          <Title title="Masivas TetArte" />
        </div>
        <Slice />
        <div className="content-inicio">
          <section className="section1">
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
