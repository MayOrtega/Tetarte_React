import React from "react";
import Show from "../components/Show";
import Create from "../components/Create";
import Navbar from "../components/Navbar";
import PostMensual from "../components/PostMensual";
import Title from "../components/Title";

const BlogTetarte = () => {
  return (
    <>
      <div className="banner-blog-tetarte">
        <div className="nav-tetarte">
          <Navbar />
        </div>
        <div className="title-blog-tetarte">
          <Title title="Blog Tetarte" />
        </div>
        <div className="div-post-mensual">
          <PostMensual />
        </div>
        <Create />
        <Show />
      </div>
    </>
  );
};

export default BlogTetarte;
