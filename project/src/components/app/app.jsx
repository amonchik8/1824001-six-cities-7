import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AppRoute, PlaceClass } from '../../const';
import Main from '../main';
import SignIn from '../pages/sign-in/SignIn';
import Chosen from '../pages/chosen/Chosen';
import Room from '../pages/room/Room';
import NotFound from '../pages/not-found/NotFound';
import {
  hotelsType,
  locationsType,
  offersQuantityType,
  reviewsType
} from '../../types';

function App({ hotels, offersQuantity, locations, reviews }) {
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
            <Room reviews={reviews} hotels={hotels} type={PlaceClass.NEAR_PLACES}/>
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
  reviews: PropTypes.arrayOf(reviewsType),
};

export default App;
