import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AppRoute } from '../../const';
import Main from '../main';
import SignIn from '../pages/sign-in/SignIn';
import Chosen from '../pages/chosen/Chosen';
import Room from '../pages/room/Room';
import NotFound from '../pages/not-found/NotFound';
import PropTypes from 'prop-types';

import { hotelsType, locationsType, offersQuantityType } from '../../types';

function App({ hotels, offersQuantity, locations }) {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path={AppRoute.MAIN} exact>
            <Main
              hotels={hotels}
              offersQuantity={offersQuantity}
              locations={locations}
            />
          </Route>
          <Route path={AppRoute.SIGN_IN} exact>
            <SignIn />
          </Route>
          <Route path={AppRoute.FAVORITES} exact>
            <Chosen hotels={hotels} />
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
  hotels: PropTypes.arrayOf(hotelsType),
};

export default App;
