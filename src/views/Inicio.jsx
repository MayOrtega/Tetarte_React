import React from "react";
import Navbar from "../components/Navbar";
import Slice from "../components/Slice";
import Blog from "../components/Blog";
import Anuncio1 from "../components/Advertising";
import VideoSlice from "../components/VideoSlice";
import Modals from "../components/Modals.jsx";

const Inicio = () => {
  return (
    <>
    <div>
      <Navbar />
      <Slice />
      <div className="content-inicio">
        <section className="section1">
          <Blog />
        </section>
        <section className="sectionVideos">
          <VideoSlice />
        </section>
      </div>
    </div>
    <Modals />
    </>
  );
};

export default Inicio;
