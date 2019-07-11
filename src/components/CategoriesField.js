import React from "react";
import Category from "../containers/Categories";
import { Link, Route } from "react-router-dom";
import TopNews from "../containers/TopNews";

const CategoriesField = () => (
  <div>
    <div id="categories-field">
      <Category categoryName="business" categoryString="business" />
      <Category categoryName="entertainment" categoryString="entertainment" />
      <Category categoryName="health" categoryString="health" />
      <Category categoryName="science" categoryString="science" />
      <Category categoryName="sports" categoryString="sports" />
      <Category categoryName="technology" categoryString="technology" />
      <Link
        to="/"
        style={{
          float: "right",
          textDecoration: "none",
          margin: "15px 30px",
          color: "white"
        }}
      >
        Log out
      </Link>
    </div>
    <div id="news-wrapper">
      <TopNews />
    </div>
  </div>
);

export default CategoriesField;
