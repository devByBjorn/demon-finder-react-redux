import React, { Fragment } from "react"
import { useSelector } from 'react-redux'
import { Route, Redirect } from "react-router-dom"
import HeaderAndMenu from '../components/navigation/HeaderAndMenu'

/*
  ///
  PrivateRoute (This explination goes for PublicRoute as well)
  Props: To understand the props of PrivateRoute we need to know what Route - https://reacttraining.com/react-router/web/api/Route - looks like. 
  The Route component from react router dom takes a bunch of properties like "path", "component", "exact" and some others. exampel:  

  <Route path="/" component={LoginPage} exact={true} />

  The component is something we know we will always use, because without a Component nothing will get rendered to the screen. So we explicitly
  write this prop out. Still we want the component prop to be dynamic, meaning we want to be able to pass in any Component to the component prop 
  used with our PrivateRoute, so we set up the prop argument like "component: Component". For the rest of the props, "path", "exact" etc, we do not 
  know which ones we are going to use and we eant to be able to use them all if. Therefore we use the rest parameters - 
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters -  The rest parameters makes it possible for us to use 
  whatever props we like in our PrivateRoute, we do not need to decide beforehand.   
  
  ///
  
  Private route is only ment to route users that are logged in. To accomplish this we check the authentication state 
  to se if an user is loged in or not. Authentication state is found in our store in object authState and porperty uid. 
  If an uid does exsist the user is loged in, and isAuthenticated will be true. If an uid does not exsist the user is loged 
  in and isAuthenticated will be false.

  By using the react-redux hook "useSelector" we can acces the the state we want to use - state.authState.uid
  If you have used Redux useSelector is equivalent, though not the same, as mapStateToProps. Read documentation: 
  - https://react-redux.js.org/api/hooks -

  
  Redirect - https://reacttraining.com/react-router/web/api/Redirect
  We use the Redirect component provided by react router dom to automatically redirect a non loged in user to the login page "/", 
  If we do not set up this conditional the non loged in users will have acces to all pages that are private. 
*/

export const PrivateRoute = ({ component: Component, ...restOfprops }) => {
  const isAuthenticated = useSelector(state => !!state.authState.uid)

  return (
    <Route {...restOfprops} component={(props) => (
      isAuthenticated
        ? (
          <>
            <HeaderAndMenu />
            <Component {...props} />
          </>
        )
        : (
          <Redirect to="/" />
        )
    )} />
  )
}

export default PrivateRoute
