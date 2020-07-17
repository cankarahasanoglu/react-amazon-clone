import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from '../StateProvider/StateProvider';
import { auth } from '../Firebase/firebase';

import Header from "../Header/Header";
import Home from "../Home/Home";
import Checkout from "../Checkout/Checkout";
import Login from '../Login/Login';

function App() {

  const [{ user }, dispatch] = useStateValue();

  // useEffect
  // Piece of code which runs based on a given condition

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        // the user logged out
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })

    return () => {
      // Any cleanup operations go in here
      unsubscribe();
    }

  }, []);

  console.log("USER IS >>>", user);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Header />
            <Login />
          </Route>
          <Route path="/">
            {/* Last one is the default route like homepage*/}
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
