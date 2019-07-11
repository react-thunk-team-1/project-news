import React from 'react'
import CategoriesField from './components/CategoriesField'
import TopNews from './containers/TopNews'
import Login from './components/login'

const App = () => (
  <div>
    <Login/>
    <CategoriesField />
    <div id="empty-space"></div>
    <TopNews />
  </div>
)

export default App;
