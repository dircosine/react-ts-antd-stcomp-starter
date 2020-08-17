import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';

interface AccountsRouteProps {
  logged: boolean;
  localLogin: () => void;
}

function AccountsRoute({ logged, localLogin }: AccountsRouteProps) {
  return (
    <Switch>
      <Route
        path="/accounts/login"
        render={(props) => <LoginPage logged={logged} localLogin={localLogin} />}
      />
      <Route path="/accounts/signup" render={(props) => <SignupPage logged={logged} />} />
      ;
      <Redirect path="*" to="/" />
    </Switch>
  );
}

export default AccountsRoute;
