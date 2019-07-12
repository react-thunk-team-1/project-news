import React from 'react';

const NewsItem = ({ article }) => (
  <article >
    <div className="article">
      <h3 className="judul-artikel">{article.title}</h3>
      <img src={article.urlToImage} alt="" />
      <p className="deskripsi-artikel">{article.description}</p>
      <a href={article.url} target="#"> read more </a>
    </div>
  </article>
);

export default NewsItem ;