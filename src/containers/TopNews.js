import React from "react";
import { connect } from "react-redux";
import NewsItem from "../components/NewsItem";

let TopNews = ({ categories, loading }) => {
  let topNews = "";

  if (categories) {
    topNews = categories.map((article, index) => (
      <div className="news-content grid-item" key={`${index}`}>
        <NewsItem article={categories[index]} />
      </div>
    ));
  }
  if (loading) {
    topNews = <h3 className="loading-indicator">Loading ...</h3>;
  }

  return <div id="content-wrapper" class="grid" data-masonry='{ "itemSelector": ".grid-item", "columnWidth": 200 }'>{topNews}</div>;
};

const mapStateToProps = state => {
  console.log(state);
  return { categories: state.json, loading: state.loading };
};

TopNews = connect(
  mapStateToProps,
  null
)(TopNews);

export default TopNews;
