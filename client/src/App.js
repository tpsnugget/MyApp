import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom"
import Navbar from "./Navbar"
import Landing from "./Landing"
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = ({
      isLoggedIn: false
    })
  }

  render() {

    const { isLoggedIn } = this.state

    return (
      <div className="App">
      <Navbar isLoggedIn={isLoggedIn}/>
        <Switch>
          <Route>
            {isLoggedIn && <Landing />}
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
