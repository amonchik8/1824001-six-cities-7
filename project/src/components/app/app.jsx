import React from 'react';
import { Switch, Route, Router as BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { AppRoute, PlaceClass } from '../../const';
import { reviewsType } from '../../types';
import { isCheckedAuth } from '../../utils/utils';
import Main from '../main';
import SignIn from '../pages/sign-in/SignIn';
import Chosen from '../pages/chosen/Chosen';
import Room from '../pages/room/Room';
import NotFound from '../pages/not-found/NotFound';
import LoadingScreen from '../loading-screen';
import PrivateRoute from '../private-router/PrivateRoute';
import browserHisory from '../../browser-history';

function App({ authorizationStatus, isOffersLoaded, reviews }) {
  if (isCheckedAuth(authorizationStatus) || !isOffersLoaded) {
    return <LoadingScreen />;
  }
  return (
    <div>
      <BrowserRouter history={browserHisory}>
        <Switch>
          <Route path={AppRoute.MAIN} exact>
            <Main />
          </Route>
          <Route path={AppRoute.SIGN_IN} exact>
            <SignIn />
          </Route>
          <PrivateRoute
            path={AppRoute.FAVORITES}
            exact
            render={() => <Chosen />}
          />
          <Route path={AppRoute.ROOM} exact>
            <Room reviews={reviews} type={PlaceClass.NEAR_PLACES} />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
App.propTypes = {
  reviews: PropTypes.arrayOf(reviewsType),
  authorizationStatus: PropTypes.string.isRequired,
  isOffersLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
  isOffersLoaded: state.isOffersLoaded,
});

export { App };
export default connect(mapStateToProps, null)(App);
