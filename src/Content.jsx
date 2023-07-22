import React from "react";
import { Switch, Route } from 'react-router-dom';
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";

export const Content = () => {
    return(
      <Switch>
        <Route exact path='/cart' component={ Cart }/>
        <Route exact path='/' component={ Home }/>
      </Switch>
    )
}