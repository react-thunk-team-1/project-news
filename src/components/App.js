import React from 'react'
import CategoriesField from './CategoriesField'
import Button from '../containers/Button'
import TopNews from '../containers/TopNews'

const App = () => (
  <div>
    <CategoriesField />
    <div id="empty-space"></div>
    <TopNews />
  </div>
)

export default App;
