import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from """

export class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
        <Switch>

          <Route exact path="/">
            <Home/>
          </Route>
        </Switch>
        
        </BrowserRouter>
      </>
    )
  }
}

export default App
