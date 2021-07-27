import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home"

export class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
        <Hea>
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
