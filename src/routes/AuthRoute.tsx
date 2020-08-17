import React from 'react';
import { Route, Redirect, RouteComponentProps } from 'react-router-dom';

interface AuthRouteProps {
  logged: boolean;
  path?: string | string[];
  component?: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
  render?: (props: RouteComponentProps<any>) => React.ReactNode;
}

function AuthRoute({ logged, component: Component, render, ...rest }: AuthRouteProps) {
  return (
    <Route
      {...rest}
      render={(props) =>
        logged ? (
          render ? (
            render(props)
          ) : (
            Component && <Component {...props} />
          )
        ) : (
          <Redirect to={{ pathname: '/accounts/login', state: { from: props.location } }} />
        )
      }
    />
  );
}

export default AuthRoute;
