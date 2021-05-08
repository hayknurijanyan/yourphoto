import React, { Component } from "react";
import "./AppDownload.css";
import "./@Shared.css";
import appImg from "../../imgs/app-download/app.png";
import appstore from "../../imgs/app-download/appstore.png";
import playstore from "../../imgs/app-download/playstore.png";

const AppDownload = () => {
  return (
    <>
      <section id="app-download">
        <article className="app-download-article">
          <h5>4.7 STARS AND OVER 5K DOWNLOADS</h5>
          <h1>
            Print photos from your <br /> Instagram or camera roll.
          </h1>
          <div className="app-download-article-icons">
            <img src={appstore} alt="" width="150px" />
            <img src={playstore} alt="" width="150px" />
          </div>
        </article>

        <img className="app-img" src={appImg} alt="" />
      </section>
    </>
  );
};

export default AppDownload;
