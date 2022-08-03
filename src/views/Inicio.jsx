import React from "react";
import Navbar from "../components/Navbar";
import Slice from "../components/Slice";
import Blog from "../components/Blog";
import VideoSlice from "../components/VideoSlice";
import Title from "../components/Title";
import Advertising from "../components/Advertising";
import Pictures from "../components/Pictures";

const Inicio = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="title-inicio">
          <Title title="Galería TetArte" />
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
      </div>
    </>
  );
};

export default Inicio;
