import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

/*
  ///
    See PrivateRoute.js for a deeper explination of the component. 
  ///

  PublicRoute is only ment to route users that are not logged in. To accomplish this we check the authentication state 
  to se if a user is loged in or nor. Authentication state is found in our store in object authState and porperty uid. 
  If an uid does not exsist the user is not loged in, and isAuthenticated will be false. If an uid does exsist the user 
  is loged in and isAuthenticated will be true.
  
  We use Redirect provided by react router dom to automatically redirect a loged in user to the 
  "/dashboard" page, if we do not set up this conditional the loged in users will automatically be redirected to the landing page 
  where  the login page is("/"), which makes for a bad user experience. 
*/

export const PublicRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector(state => state.authState.uid)

  return (
    <Route {...rest} component={(props) => (
      !isAuthenticated
        ? (
          <Component {...props} />
        )
        : (
          <Redirect to="/demons" />
        )
    )} />
  )
}

export default PublicRoute