import React from "react";
import "./MainPageArticles.css";

export default function MainPageArticles() {
  return (
    <div className="main_page_articles_container my-5">
      <h3 className="main_page_title">Popüler Makaleler</h3>
      <div className="row main_page_articles_cards">
        <div className="col p-std border-std main_page_articles_card d-flex flex-column justify-content-between">
          <img
            src="https://res.cloudinary.com/hrmsfl/image/upload/v1624446704/article1_f8g9qk.jpg"
            className="main_page_article_image"
          ></img>
          <p className="main_page_article_header font-2">
            Lorem ipsum odor amet, consectetuer adipiscing elit.
          </p>
          <p className="main_page_article_article">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in
            massa egestas mollis varius; dignissim elementum.
          </p>
          <p className="main_page_article_date font-1">HRMS team</p>
        </div>
        <div className="col p-std border-std main_page_articles_card d-flex flex-column justify-content-between">
          <img
            src="https://res.cloudinary.com/hrmsfl/image/upload/v1624446704/article2_xsqdfx.jpg"
            className="main_page_article_image"
          ></img>
          <p className="main_page_article_header font-2">
            Lorem ipsum odor amet, consectetuer adipiscing elit.
          </p>
          <p className="main_page_article_article">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in
            massa egestas mollis varius; dignissim elementum.
          </p>
          <p className="main_page_article_date font-1">HRMS team</p>
        </div>
        <div className="col p-std border-std main_page_articles_card d-flex flex-column justify-content-between">
          <img
            src="https://res.cloudinary.com/hrmsfl/image/upload/v1624446703/article3_q97s38.jpg"
            className="main_page_article_image"
          ></img>
          <p className="main_page_article_header font-2">
            Lorem ipsum odor amet, consectetuer adipiscing elit.
          </p>
          <p className="main_page_article_article">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in
            massa egestas mollis varius; dignissim elementum.
          </p>
          <p className="main_page_article_date font-1">HRMS team</p>
        </div>
      </div>
    </div>
  );
}
