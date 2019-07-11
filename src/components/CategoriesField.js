import React from 'react'
import Category from '../containers/Categories'
import { fetchPosts } from '../actions'

const CategoriesField = () => (

  <div id="categories-field" >
    <Category categoryName="business" categoryString="business" />
    <Category categoryName="entertainment" categoryString   ="entertainment" />
    <Category categoryName="health" categoryString="health" />
    <Category categoryName="science" categoryString="science" />
    <Category categoryName="sports" categoryString="sports" />
    <Category categoryName="technology" categoryString="technology" />
  </div>
);

export default CategoriesField;

