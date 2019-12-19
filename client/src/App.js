import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom"
import Navbar from "./components/Navbar"
import Landing from "./components/Landing"
import New from "./restaurant/components/New"
import User from "./components/User"
import Login from "./components/Login"
import Beer from "./beer/components/Beer"
import BeerNew from "./beer/components/BeerNew"
import Recipe from "./recipe/components/Recipe"
import Restaurant from "./restaurant/components/Restaurant"
import RestaurantNew from "./restaurant/components/RestaurantNew"
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
            {isLoggedIn && <Landing />} 
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

          <Route exact path="/beer">
            {isLoggedIn && <Beer name="Beer"/>}
          </Route>
          <Route exact path="/beer/new">
            {isLoggedIn && <BeerNew username={loggedInName}/>}
          </Route>


          <Route exact path="/recipe">
            {isLoggedIn && <Recipe name="Recipe"/>}
          </Route>

          <Route exact path="/restaurant">
            {isLoggedIn && <Restaurant name="Restaurant"/>}
          </Route>
          <Route exact path="/restaurant/new">
            {isLoggedIn && <RestaurantNew username={loggedInName}/>}
          </Route>

          <Route exact path="/rv">
            {isLoggedIn && <RV name="RV"/>}
          </Route>

        </Switch>
      </div>
    );
  }
}

export default App;
