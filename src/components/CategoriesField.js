import React from 'react'
import Category from '../containers/Categories'
import { fetchPosts } from '../actions'

const CategoriesField = () => (

  <div id="categories-field" >
    <Category categoryName="BUSINESS" categoryString="business" />
    <Category categoryName="ENTERTAINMENT" categoryString   ="entertainment" />
    <Category categoryName="HEALTH" categoryString="health" />
    <Category categoryName="SCIENCE" categoryString="science" />
    <Category categoryName="SPORTS" categoryString="sports" />
    <Category categoryName="TECHNOLOGY" categoryString="technology" />
  </div>
);

export default CategoriesField;

