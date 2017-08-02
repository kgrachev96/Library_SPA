import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute( { user, component: Component, data, ...rest }: any ) {
    return(
        <Route {...rest} render = {
            props => (
                user ?
                    <Component data = {data} {...props}/>
                    :
                    <Redirect to = '/login'/>
                )
            } />

    );
}

export default PrivateRoute;