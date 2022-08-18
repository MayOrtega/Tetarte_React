import React from "react";
import video from "../img/videoTetarte.mp4";
import ReactPlayer from "react-player";

const VideoSlice = () => {
  return (
    <div className="content-video-slice">
      <h1 className="title-videos">Testimonios</h1>
      <section className="section-video">
        <ReactPlayer url={video} width="70%" controls />
      </section>
    </div>
  );
};

export default VideoSlice;
