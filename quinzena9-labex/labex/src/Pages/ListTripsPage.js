import React from "react";
import { useHistory } from "react-router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios"

const Container = styled.div`
width: 100vw;
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
justify-items: center;
align-items: center;
padding-top: 50px;
background-color: rgba(131, 187, 187, 0.726);

    h1{
        color: purple;
    }
`

const CardTrips = styled.div`
padding: 8px;
border: 1px solid gray;
box-shadow: 2px 2px 3px gray;
border-radius: 8px;
margin: 8px;
display: flex;
flex-direction: row;
justify-content: space-between;
row-gap:8px;
width: 50vw;
height: auto;
background-color: white;

`
const ContainerText = styled.div`
p{
    margin: 8px;
    padding: 4px;
    font-family: Arial, Helvetica, sans-serif;
    font-style: italic;
    
}
`
const ButtonsPage = styled.div`
    display: flex;
    flex-direction: rows;
    position: relative;
    width: 90px;
    height: 40px;
    margin-left: 20px;
`

const ListTripsPage = () => {
    const [listTrips, setListTrips] = useState([])
    
    const history = useHistory()

    const goBackhome = () =>{
        history.push("/")
    }

    const goToTripsApplication = (id) => {
        history.push(`/trips/application/${id}`)
    }

    
useEffect(() => {
    const promise = axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/hernan-barrientos/trips')

    const sucess = (response) => {
        setListTrips(response.data.trips)
        

    }
    
    const fail = (error) => {
        alert("Ocorreu um erro ao tentar carregar, tente novamente")
        history.push("/")
    }
    
    promise.then(sucess).catch(fail)
},[])
 


  return (
      <Container>
          
          <h1>Lista de Viagens</h1>
          <button onClick={goBackhome}> 
            Voltar
        </button>
        
    <div>
        {listTrips.map((trip)=>{
            return <CardTrips key={trip.id}>
                <ContainerText >
                <p><b>Nome:</b> {trip.name}</p>
                <p><b>Descrição:</b> {trip.description}</p>
                <p><b>Planeta: </b>{trip.planet}</p>
                <p><b>Duração: </b>{trip.durationInDays} dias</p>
                <p><b>Data: </b>{trip.date}</p>

                </ContainerText>
               


                <ButtonsPage>
                <button onClick={ () => {goToTripsApplication(trip.id)}}> 
                Inscrever-se
                </button>
                </ButtonsPage>
                


            </CardTrips>
            
        })
        }
        


    </div>
    <button onClick={goBackhome}> 
            Voltar
        </button>
    </Container>
    
  )
}

export default ListTripsPage;