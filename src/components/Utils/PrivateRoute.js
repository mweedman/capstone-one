import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import TokenService from '../../services/token-services';

export default function PrivateRoute({ component, ...rest}) {

  const Component = component;

  return (
    <Route
      {...rest}
      render={componentProps => {
        return TokenService.hasAuthToken()
        ? <Component {...componentProps} />
        : <Redirect to={{
            pathname: '/login',
            state: { from: componentProps.location }
        }}
        />
      }
    }
    />
  );
}
