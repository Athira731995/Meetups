import "./App.css";
import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { AllMeetUps } from "./pages/AllMeetUps";
import { MeetupForm } from "./pages/MeetupForm";
import { Favorites } from "./pages/Favorites";
import { MainNavigation } from "./components/layouts/MainNavigation";
export default class App extends Component {
  render() {
    return (
     <>
     <MainNavigation/>
      
        <Switch>
          <Route path="/" exact>
            <AllMeetUps />
          </Route>
          <Route path="/add">
            <MeetupForm />
          </Route>
          <Route path="/favorite">
            <Favorites />
          </Route>
        </Switch>
        
        </>
   
    );
  }
}
