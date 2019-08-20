import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavigationBar from "./navigationBar/navigationBar";
import Sidebar from "./sidebar/sidebar";
import Logo from "./img/logo.jpg";
import Home from "./home/home";
import Messages from "./messages/messages";
import Wishlist from "./wishlist/wishlist";
import Settings from "./settings/settings";
import MyAccount from "./my-account/myAccount";

import "./styles.scss";

function App() {
  const [filters, setFilters] = useState({
    sale: false,
    expired: false,
    favorite: false
  });

  const [items, setItems] = useState([]);

  return (
    <Router>
      <div className="app app-layout">
        <div className="app-layout__logo">
          <img src={Logo} alt="Company name" />
        </div>
        <NavigationBar className="app-layout__menu" />
        <Sidebar
          filters={filters}
          setFilters={setFilters}
          className="app-layout__sidebar"
        />
        <main className="app-layout__main">
          <Switch>
            <Route path="/messages" render={props => <Messages />} />
            <Route exact path="/wishlist" render={props => <Wishlist />} />
            <Route exact path="/settings" render={props => <Settings />} />
            <Route exact path="/my-account" render={props => <MyAccount />} />
            <Route
              exact
              path="/"
              render={props => <Home items={items} setItems={setItems} />}
            />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
