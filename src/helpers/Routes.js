import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import LandingPage from '../Views/LandingPage/LandingPage';

// const PrivateRoute = ({ component: Component, user, ...rest }) => {
//   // eslint-disable-next-line no-confusing-arrow
//   const routeChecker = (taco) => user ? (
//       <Component {...taco} user={user} />
//   ) : (
//       <Redirect to={{ pathname: '/', state: { from: taco.location } }} />
//   );
//   return <Route {...rest} render={(props) => routeChecker(props)} />;
// };

// PrivateRoute.propTypes = {
//   component: PropTypes.func,
//   user: PropTypes.any,
// };

function Routes({ user }) {
  return (
    <div>
      <Switch>
      <Route
          exact
          path='/'
          component={() => (
            <LandingPage
              user={user}
            />
          )}
          user={user}
        />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  user: PropTypes.any,
};

export default Routes;
