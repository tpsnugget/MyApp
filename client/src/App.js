import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom"
import Navbar from "./Navbar"
import Landing from "./Landing"
import New from "./New"
import User from "./User"
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = ({
      isLoggedIn: true
    })
  }

  render() {

    const { isLoggedIn } = this.state

    return (
      <div className="App">
      <Navbar isLoggedIn={isLoggedIn}/>
        <Switch>
          <Route exact path="/">
            {isLoggedIn && <Landing />}
          </Route>
          <Route exact path="/new">
            {isLoggedIn && <New />}
          </Route>
          <Route exact path="/user">
            {isLoggedIn && <User isLoggedIn={isLoggedIn}/>}
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
