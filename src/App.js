import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CardOne } from "components/CardOne";
import { Home } from "components/Home";
import { News } from "components/News";
import { Contact } from "components/Contact";

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <CardOne />
          </Route>

          <Route path="/Order Now">
            <Home />
          </Route>

          <Route path="/Order Three">
            <News />
          </Route>

          <Route path="/Order Contact">
            <Contact />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};
