import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import LandingPage from '../Views/LandingPage/LandingPage';
import { Dash } from '../Views/Dash/Dash';

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

function Routes({
  user,
  setUser,
  steps,
  setSteps,
  users,
  setUsers
}) {
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
        <Route
          exact
          path='/dashboard'
          component={() => (
            <Dash
              user={user}
              setUser={setUser}
              steps={steps}
              setSteps={setSteps}
              users={users}
              setUsers={setUsers}
            />
          )}
          user={user}
          setUser={setUser}
          steps={steps}
          setSteps={setSteps}
          users={users}
          setUsers={setUsers}
        />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  user: PropTypes.any,
  setUser: PropTypes.func,
  steps: PropTypes.any,
  setSteps: PropTypes.func,
  users: PropTypes.any,
  setUsers: PropTypes.func,
};

export default Routes;
