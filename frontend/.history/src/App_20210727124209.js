import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
impor

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