import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
        <Switch>

          <Route exact path="/">
            <Hom
          </Route>
        </Switch>
        
        </BrowserRouter>
      </>
    )
  }
}

export default App
