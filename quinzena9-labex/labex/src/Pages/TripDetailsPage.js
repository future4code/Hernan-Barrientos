import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";
import styled from "styled-components";
import { useProtectedPage } from "../hooks/useProtectedPage";

const PageContainer = styled.div`
width: 100vw;
height: 1900px;
background-color: rgba(131, 187, 187, 0.726);
`
const Container = styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
justify-items: center;
align-items: center;
padding-top: 50px;


`

const CardTrips = styled.div`
padding: 12px;
border: 1px solid gray;
box-shadow: 2px 2px 3px gray;
border-radius: 8px;
margin: 8px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
row-gap:8px;
width: 300px;
height: 50px;
background-color: white;

`
const ButtonsPage = styled.div`
    display: flex;
    flex-direction: column;
    width: 60px;
    height: 20px;
    gap: 8px;
    justify-content: center;
    
`

const TripDetailsPage = () => {
  useProtectedPage()
  let {id} = useParams()
  const [tripDetails, setTripDetails] = useState()
  const [listApproved, setListApproved] = useState()
  const token = localStorage.getItem('token')

  useEffect(() => {
    

    
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/hernan-barrientos/trip/${id}`,{
      headers: {
        auth: token
      }
    })
      .then((response) => {
        console.log(response.data.trip.candidates)
        
        setTripDetails(response.data.trip)
        
        
      }).catch((error)=>{
        alert("Ocorreu um erro, tente novamente")
        history.push("/admin/trips")      
      })
  },[])

  const history = useHistory()

  const goBack = () => {
    history.goBack()
  }

  const accepted = (id) =>{
    const body = {
      approve: true
    }
    axios.put(
      `https://us-central1-labenu-apis.cloudfunctions.net/labeX/hernan-barrientos/trips/${tripDetails.id}/candidates/${id}/decide`,body, {
      headers: {
        auth: token
      }
    })
      .then((response) => {
        alert("Candidato Aprovado com sucesso!")
        console.log(response)
        
      }).catch((error)=>{
        alert("Ocorreu um erro, tente novamente")
        console.log("deu erro", error)
             
      })
  }
  const regect = (id) => {
    const body = {
      approve: false
    }
    axios.put(
      `https://us-central1-labenu-apis.cloudfunctions.net/labeX/hernan-barrientos/trips/${tripDetails.id}/candidates/${id}/decide`,body, {
      headers: {
        auth: token
      }
    })
      .then((response) => {
        alert("Deseja excluir esse candidato?")
        
        
      }).catch((error)=>{
        alert("Ocorreu um erro, tente novamente")
        console.log("deu erro", error)
             
      })
  }
  
  return (
    <PageContainer>
     
    <Container>
    <button onClick={goBack}>
          Voltar
        </button>
      
    {tripDetails ? tripDetails.candidates.map(({name, id})=>{
      return <CardTrips key={id}><div>{name}</div>
      <ButtonsPage>
        <button onClick={() => accepted(id) }>
          Aprovar
        </button>
        <button onClick={() => regect(id)}>
        Reprovar
        </button>

        </ButtonsPage>
        </CardTrips>
    }):<h1> "Carregando..."</h1>
  }


    
       
    </Container>
    </PageContainer>
  )
}

export default TripDetailsPage;