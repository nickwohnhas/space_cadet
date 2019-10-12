import React from 'react'
import Game from './components/Game'
import Menu from './components/Menu'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => {

    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/game">
              <Game />
            </Route>
            <Route path="/">
              <Menu />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }

export default App
