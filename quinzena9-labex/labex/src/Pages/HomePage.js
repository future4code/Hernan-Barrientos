import React from "react";
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import { useHistory } from "react-router";
import styled from "styled-components";
import logo from '../components/imgs/logo.png'

const HomeContainer = styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
justify-items: center;
align-items: center;
background-color: rgba(131, 187, 187, 0.726);
`
const CardContainer = styled.div`
width: 70vw;
height: 60vh;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 8px;

img{
        width: 100%;
        
    }
`


const ButtonsPage = styled.div`
display: flex;
align-items: flex-start;
gap: 20px;

`
const HomePage = () => {


    const history = useHistory()

    const goToListTripsPage = () => {
        history.push("/trips/list")
    }
    const goToLogin = () => {
        history.push("/login")
    }

   
    return (
        <HomeContainer>
            
            <CardContainer>
            <img src={logo} alt="logo.png"/>
            
            <ButtonsPage>
            <button onClick={goToListTripsPage}>
                List Trips
            </button>
            <button onClick ={goToLogin}>
                Login
            </button>
            </ButtonsPage>
            </CardContainer>
        
        </HomeContainer>
    )
}

export default HomePage;