import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom"
import Navbar from "./restaurant/components/Navbar"
import Landing from "./components/Landing"
import New from "./restaurant/components/New"
import User from "./components/User"
import Login from "./components/Login"
import Beer from "./beer/components/Beer"
import Recipe from "./recipe/components/Recipe"
import Restaurant from "./restaurant/components/Restaurant"
import RV from "./rv/components/RV"
import './css/App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = ({
      isLoggedIn: false,
      loggedInName: ""
    })
    this.updateLoggedInName = this.updateLoggedInName.bind(this)
    this.logout = this.logout.bind(this)
  }

  updateLoggedInName(e) {
    this.setState({
      isLoggedIn: true,
      loggedInName: e
    })
  }

  logout() {
    this.setState({ isLoggedIn: false })
  }

  render() {

    const { isLoggedIn, loggedInName } = this.state

    return (
      <div className="App">
        <Navbar isLoggedIn={isLoggedIn} loggedInName={loggedInName} logout={this.logout} />
        <Switch>
          <Route exact path="/landing">

            {/*  Commented out so I don't have to sign in each time during development.
                 Uncomment once App is complete
            {isLoggedIn && <Landing />}  */}
          </Route>

          {/* This gets deleted once App is complete */}
          <Route exact path="/">
            <Landing />
          </Route>

          <Route exact path="/new">
            {isLoggedIn && <New />}
          </Route>
          <Route exact path="/login">
            <Login updateLoggedInName={this.updateLoggedInName} />
          </Route>
          <Route exact path="/user">
            <User />
          </Route>

          <Route exact path="/landingBeer">
            <Beer />
          </Route>
          <Route exact path="/landingRecipe">
            <Recipe />
          </Route>
          <Route exact path="/landingRestaurant">
            <Restaurant />
          </Route>
          <Route exact path="/landingRV">
            <RV />
          </Route>

        </Switch>
      </div>
    );
  }
}

export default App;
