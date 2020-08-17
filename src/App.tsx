import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import 'antd/dist/antd.less';

import HomePage from './pages/HomePage';
import AccountsRoute from './routes/AccountsRoute';

import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';
import { ClientUserType } from './lib/types/user';
import { getUser } from './lib/utils';
import AuthRoute from './routes/AuthRoute';

function App() {
  const [user, setUser] = useState<ClientUserType | null>(getUser());
  const logged = user != null;

  const localLogin = () => setUser(getUser());
  const localLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <div className="App">
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Helmet>
            <title>스터디팜</title>
            <meta name="description" content="깰껌한 스터디 찾기" />
          </Helmet>

          <Switch>
            <Route exact path="/" render={() => <HomePage logged={logged} />} />

            <Route
              path="/accounts"
              render={(props) => <AccountsRoute logged={logged} localLogin={localLogin} />}
            />

            <AuthRoute logged={logged} path="/post/:postId" component={undefined} />
            <Redirect path="*" to="/" />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
