import React from 'react'
import CategoriesField from './components/CategoriesField'
import TopNews from './containers/TopNews'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Login from '';


const App = () => (
  <BrowserRouter>
  <div>
    <CategoriesField />
    <div id="empty-space"></div>
    <TopNews />
  </div></BrowserRouter>
)

export default App;
