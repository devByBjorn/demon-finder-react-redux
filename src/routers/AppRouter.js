import React from 'react'
import { Router, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import LoginPage from '../pages/LoginPage'
import OverviewDemonsPage from '../pages/OverviewDemonsPage'
import AddDemonPage from '../pages/AddDemonPage'
import EditDemonPage from '../pages/EditDemonPage'
import NotFoundPage from '../pages/NotFoundPage'
import ExampelDemonPage from '../pages/ExampelDemonPage'
import OriginalDemonPage from '../pages/OriginalDemonPage'
import ContactPage from '../pages/ContactPage'

/* 
  We have two type of customized Routes here: PrivateRoute and PublicRoute. The PrivateRoute is used when you create a page that only should be available for a user in loged in state. The PublicRoute is used when you create a page that should be available for loged out users. See PrivateRoute.js and PublicRoute.js for conditonal rendering of components depending on users loged in/out state. 

  https://www.npmjs.com/package/history - the history package makes it possible for us to manually create our own history. We do that by assigning the variable "history" below the value of createBrowserHistory(). By createing this variable we can export it and use the history where ever we like, not just in the in our Router.  

  BrowserRouter has the history prop built in, but then we can not export the history and use it in other files. 
*/

export const history = createBrowserHistory()

const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <PublicRoute exact path="/" component={LoginPage} />
      <PrivateRoute path="/demons" component={OverviewDemonsPage} />
      <PrivateRoute path="/add" component={AddDemonPage} />
      <PrivateRoute path="/edit/:id" component={EditDemonPage} />
      <PrivateRoute path="/example" component={ExampelDemonPage} />
      <PrivateRoute path="/original" component={OriginalDemonPage} />
      <PrivateRoute path="/contact" component={ContactPage} />
      <PrivateRoute component={NotFoundPage} />
    </Switch>
  </Router>
)

export default AppRouter
