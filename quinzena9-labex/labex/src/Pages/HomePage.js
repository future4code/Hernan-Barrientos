import React from "react";
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import { useHistory } from "react-router";
import ListTripsPage from "./ListTripsPage";
import AdminHomePage from "./AdminHomePage";

const HomePage = () => {

    const history = useHistory()

    const goToListTripsPage = () => {
        history.push("/trips/list")
    }
    const goToLogin = () => {
        history.push("/login")
    }

   
    return (
        <>
            <p>LABE X</p>

            <button onClick={goToListTripsPage}>
                List Trips
            </button>
            <button onClick ={goToLogin}>
                Login
            </button>
        
        </>
    )
}

export default HomePage;