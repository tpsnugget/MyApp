import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom"
import Navbar from "./Navbar"
import Landing from "./Landing"
import New from "./New"
import User from "./User"
import Login from "./Login"
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = ({
      isLoggedIn: false,
      loggedInName: ""
    })
    this.updateLoggedInName = this.updateLoggedInName.bind(this)
  }

  updateLoggedInName(e){
    console.log("updateLoggedInName: ", e)
    this.setState({
      isLoggedIn: true,
      loggedInName: e
    })
  }

  render() {

    const { isLoggedIn, loggedInName } = this.state

    return (
      <div className="App">
      <Navbar isLoggedIn={isLoggedIn} loggedInName={loggedInName}/>
        <Switch>
          <Route exact path="/">
            {isLoggedIn && <Landing />}
          </Route>
          <Route exact path="/new">
            {isLoggedIn && <New />}
          </Route>
          <Route exact path="/login">
            <Login updateLoggedInName={this.updateLoggedInName}/>
          </Route>
          <Route exact path="/user">
            <User />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
