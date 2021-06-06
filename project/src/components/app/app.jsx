import React from 'react';
import Main from '../main';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignIn from '../pages/sign-in/SignIn';
import Chosen from '../pages/chosen/Chosen';
import Room from '../pages/room/Room';
import NotFound from '../pages/not-found/NotFound';
import { AppRoute } from '../../const';
import PropTypes from 'prop-types';

import { placesType, locationsType, offersQuantityType } from '../../types';

function App({ places, offersQuantity, locations }) {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path={AppRoute.MAIN} exact>
            <Main
              places={places}
              offersQuantity={offersQuantity}
              locations={locations}
            />
          </Route>
          <Route path={AppRoute.SIGN_IN} exact>
            <SignIn />
          </Route>
          <Route path={AppRoute.FAVORITES} exact>
            <Chosen />
          </Route>
          <Route path={AppRoute.ROOM} exact>
            <Room />
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
  offersQuantity: offersQuantityType,
  locations: locationsType,
  places: PropTypes.arrayOf(placesType),
};

export default App;
