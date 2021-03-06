import React from "react"
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import HomePage from "../Pages/HomePage";
import ListTripsPage from "../Pages/ListTripsPage";
import AdminHomePage from "../Pages/AdminHomePage";
import ApplicationFormPage from "../Pages/ApplicationFormPage";
import TripDetailsPage from "../Pages/TripDetailsPage";
import CreateTripPage from "../Pages/CreateTripPage";
import LoginPage from "../Pages/LoginPage";
const Router = () => {
    return(
        <BrowserRouter> 
      <Switch>
        <Route exact path={"/"}>
          <HomePage />
        </Route>
        <Route exact path={"/trips/list"}>
          <ListTripsPage />
        </Route>

        <Route exact path={"/login"}>
          <LoginPage />
        </Route>

        <Route exact path={"/trips/application/:id"}>
          <ApplicationFormPage />
        </Route>

        <Route exact path={"/admin/trips/details/:id"}>
          <TripDetailsPage />
        </Route>

        <Route exact path={"/admin/trips/create"}>
          <CreateTripPage />
        </Route>

        <Route exact path={"/admin/trips"}>
          <AdminHomePage />
        </Route>

      
      </Switch>
    </BrowserRouter>
    )
}
export default Router 