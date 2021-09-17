import axios from "axios";
import React, { useEffect } from "react";
import { useProtectedPage } from "./hooks/useProtectedPage";



const TripDetailsPage = () => {
  useProtectedPage()
  

  useEffect(() => {

    const token = localStorage.getItem('token')
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/hernan-barrientos/trip/EjuUmFvC9f87dVa4PdIe',{
      headers: {
        auth: token
      }
    })
      .then((response) => {
        
      }).catch((error)=>{
        console.log('Deu erro: ',error.response)        
      })
  },[])
  return (

    <p>Detalhes da viagem</p>
  )
}

export default TripDetailsPage;