import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import LandingPage from '../Views/LandingPage/LandingPage';
import { Dash } from '../Views/Dash/Dash';
import { HouseholdDash } from '../Views/HouseholdDash/HouseholdDash';
import IndividualTaskCard from '../Components/Cards/IndividualTaskCards/IndividualTaskCards';
import { CommunityAgreement } from '../Views/CommunityAgreementView/CommunityAgreement';
import { ValueDeclarationView } from '../Views/ValueDeclarationView/ValueDeclarationView';
import { WaitingView } from '../Views/WaitingView/WaitingView';
import { UnassignedChartView } from '../Views/UnassignedChartView/UnassignedChartView';
import { NewVow } from '../Views/NewVow/NewVow';
import { HowTo } from '../Views/HowTo/HowTo';
import { AssignView } from '../Views/AssignView/AssignView';
import { RedealView } from '../Views/RedealView/RedealView';
import { AssignedChartView } from '../Views/AssignedChartView/AssignedChartView';

const PrivateRoute = ({ component: Component, user, ...rest }) => {
  // eslint-disable-next-line no-confusing-arrow
  const routeChecker = (taco) => user ? (
      <Component {...taco} user={user} />
  ) : (
      <Redirect to={{ pathname: '/', state: { from: taco.location } }} />
  );
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.func,
  user: PropTypes.any,
};

function Routes({
  user,
  setUser,
  steps,
  setSteps,
  users,
  setUsers,
  households,
  setHouseholds
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
        <PrivateRoute
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
              households={households}
              setHouseholds={setHouseholds}
            />
          )}
          user={user}
          setUser={setUser}
          steps={steps}
          setSteps={setSteps}
          users={users}
          setUsers={setUsers}
          households={households}
          setHouseholds={setHouseholds}
        />
          <PrivateRoute
          exact
          path='/dashboard/:householdId'
          component={() => (
            <HouseholdDash
              user={user}
              setUser={setUser}
              steps={steps}
              setSteps={setSteps}
              users={users}
              setUsers={setUsers}
              households={households}
              setHouseholds={setHouseholds}
            />
          )}
          user={user}
          setUser={setUser}
          steps={steps}
          setSteps={setSteps}
          users={users}
          setUsers={setUsers}
          households={households}
          setHouseholds={setHouseholds}
        />
        <PrivateRoute
          exact
          path='/dashboard/:householdId/assignView'
          component={() => (
            <AssignView
              user={user}
              setUser={setUser}
              steps={steps}
              setSteps={setSteps}
              users={users}
              setUsers={setUsers}
              households={households}
              setHouseholds={setHouseholds}
            />
          )}
          user={user}
          setUser={setUser}
          steps={steps}
          setSteps={setSteps}
          users={users}
          setUsers={setUsers}
          households={households}
          setHouseholds={setHouseholds}
        />
                <PrivateRoute
          exact
          path='/dashboard/finalDash/:householdId/redealView'
          component={() => (
            <RedealView
              user={user}
            />
          )}
          user={user}
        />
        <PrivateRoute
          exact
          path='/howTo'
          component={() => (
            <HowTo
              user={user}
              setUser={setUser}
              steps={steps}
              setSteps={setSteps}
              users={users}
              setUsers={setUsers}
              households={households}
              setHouseholds={setHouseholds}
            />
          )}
          user={user}
          setUser={setUser}
          steps={steps}
          setSteps={setSteps}
          users={users}
          setUsers={setUsers}
          households={households}
          setHouseholds={setHouseholds}
        />
          <PrivateRoute
          exact
          path='/dashboard/:householdId/awaitingOtherUsers'
          component={() => (
            <WaitingView
              user={user}
              setUser={setUser}
              steps={steps}
              setSteps={setSteps}
              users={users}
              setUsers={setUsers}
              households={households}
              setHouseholds={setHouseholds}
            />
          )}
          user={user}
          setUser={setUser}
          steps={steps}
          setSteps={setSteps}
          users={users}
          setUsers={setUsers}
          households={households}
          setHouseholds={setHouseholds}
        />
          <PrivateRoute
          exact
          path='/dashboard/:householdId/cards/:cardId'
          component={() => (
            <IndividualTaskCard
              user={user}
              setUser={setUser}
              steps={steps}
              setSteps={setSteps}
              users={users}
              setUsers={setUsers}
              households={households}
              setHouseholds={setHouseholds}
            />
          )}
          user={user}
          setUser={setUser}
          steps={steps}
          setSteps={setSteps}
          users={users}
          setUsers={setUsers}
          households={households}
          setHouseholds={setHouseholds}
        />
          <PrivateRoute
          exact
          path='/dashboard/communityagreement/:householdId'
          component={() => (
            <CommunityAgreement
              user={user}
              setUser={setUser}
              steps={steps}
              setSteps={setSteps}
              users={users}
              setUsers={setUsers}
              households={households}
              setHouseholds={setHouseholds}
            />
          )}
          user={user}
          setUser={setUser}
          steps={steps}
          setSteps={setSteps}
          users={users}
          setUsers={setUsers}
          households={households}
          setHouseholds={setHouseholds}
        />
          <PrivateRoute
          exact
          path='/dashboard/newVow/:householdId'
          component={() => (
            <NewVow
              user={user}
              setUser={setUser}
              steps={steps}
              setSteps={setSteps}
              users={users}
              setUsers={setUsers}
              households={households}
              setHouseholds={setHouseholds}
            />
          )}
          user={user}
          setUser={setUser}
          steps={steps}
          setSteps={setSteps}
          users={users}
          setUsers={setUsers}
          households={households}
          setHouseholds={setHouseholds}
        />
          <PrivateRoute
          exact
          path='/dashboard/:householdId/cards/value/:cardId'
          component={() => (
            <ValueDeclarationView
              user={user}
              setUser={setUser}
              steps={steps}
              setSteps={setSteps}
              users={users}
              setUsers={setUsers}
              households={households}
              setHouseholds={setHouseholds}
            />
          )}
          user={user}
          setUser={setUser}
          steps={steps}
          setSteps={setSteps}
          users={users}
          setUsers={setUsers}
          households={households}
          setHouseholds={setHouseholds}
        />
        <PrivateRoute
          exact
          path='/dashboard/:householdId/:stepName/valuechartview'
          component={() => (
            <UnassignedChartView
              user={user}
              setUser={setUser}
              steps={steps}
              setSteps={setSteps}
              users={users}
              setUsers={setUsers}
              households={households}
              setHouseholds={setHouseholds}
            />
          )}
          user={user}
          setUser={setUser}
          steps={steps}
          setSteps={setSteps}
          users={users}
          setUsers={setUsers}
          households={households}
          setHouseholds={setHouseholds}
        />
          <PrivateRoute
          exact
          path='/dashboard/:householdId/assignedChartView'
          component={() => (
            <AssignedChartView
              user={user}
              setUser={setUser}
              steps={steps}
              setSteps={setSteps}
              users={users}
              setUsers={setUsers}
              households={households}
              setHouseholds={setHouseholds}
            />
          )}
          user={user}
          setUser={setUser}
          steps={steps}
          setSteps={setSteps}
          users={users}
          setUsers={setUsers}
          households={households}
          setHouseholds={setHouseholds}
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
  households: PropTypes.any,
  setHouseholds: PropTypes.func
};

export default Routes;
