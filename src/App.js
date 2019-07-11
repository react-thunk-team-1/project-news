import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CategoriesField from './components/CategoriesField'
import Login from './components/login'

const App = () => (
  <BrowserRouter>
  <div>
  <Switch>
    <Route exact path='/' component={Login}/>
    <Route path='/Category' component={CategoriesField}/>
  </Switch>
  </div>
  
  </BrowserRouter>
)

export default App;
