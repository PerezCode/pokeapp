import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Main } from "../pages/Main";
import { NotFound } from "../pages/NotFound/index";

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route exact path="/pokemons" component={Main}/>
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
}
