import React, { useEffect } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Search from "./Pages/Search"
import MapPage from "./Pages/Map"
import "antd/dist/antd.css";

const App = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#F4F6F6";
  });
  return (
    <Switch>
      <Route exact path="/">
        {<Redirect to={"/jenosize"} />}
      </Route>
      <Route exact path="/jenosize" component={Home} />
      <Route exact path="/jenosize/search" component={Search} />
      <Route exact path="/jenosize/map" component={MapPage} />
    </Switch>
  );
};

export default App;
