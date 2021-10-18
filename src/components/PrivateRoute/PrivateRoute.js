import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const {user} = useAuth();
    console.log("This is User",user);
    return (
       <Route
           {...rest}
           render = {( { location }) => user.email? children: <Redirect
               to = {{
                   pathname: "/login",
                   state: { from: location}
               }}
              >
           </Redirect>}
        >
       </Route>
    );
};

export default PrivateRoute;