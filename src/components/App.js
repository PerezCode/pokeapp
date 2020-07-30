import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Main } from "../pages/Main";

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route exact path="/pokemons" component={Main}/>
        <Route exact path="/pokemon/:name" component={Main}/>
      </Switch>
    </BrowserRouter>
  );
}
