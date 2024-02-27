import React from 'react';

import { Route } from 'react-router-dom';

import RouteSide from '../layouts';

const AppRoute = ({ component: Component, rest }) => {
    return (
        <Route
            {...rest}
            render={(routeProps) => (
                <RouteSide>
                    <Component {...routeProps} />
                </RouteSide>
            )}
        />
    );
};

export default AppRoute;