import React from 'react'
import CategoriesField from './components/CategoriesField'
import TopNews from './containers/TopNews'

const App = () => (
  <div>
    <CategoriesField />
    <div id="empty-space"></div>
    <TopNews />
  </div>
)

export default App;
