import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router,  Switch, Route } from "react-router-dom";
import MarketPlace from "./pages/MarketPlace";
import Home from "./pages/Home";
import MyTokens from './pages/MyTokens';
import {createBrowserHistory} from 'history';

export const customHistory = createBrowserHistory();  //This maintains custom history
function App() {
  return (
    <React.Fragment>
    <Router history={customHistory}>
      <Navbar />
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/marketplace">
              <MarketPlace />
            </Route>
            <Route path="/mytokens">
              <MyTokens />
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
    </React.Fragment>
  );
}


export default App;
