import React from 'react';
import Main from '../main';
import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignIn from '../pages/sign-in/SignIn';
import Chosen from '../pages/chosen/Chosen';

function App({ places, offersQuantity }) {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Main places={places} offersQuantity={offersQuantity} />
          </Route>
          <Route path="/login" exact>
            <SignIn />
          </Route>
          <Route path="/favorites" exact>
            <Chosen />
          </Route>
          <Route path="/offer" exact>
            <Chosen />
          </Route>
          <Route>
            <h2>404</h2>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
App.propTypes = {
  places: PropTypes.array.isRequired,
  offersQuantity: PropTypes.number.isRequired,
};

export default App;
