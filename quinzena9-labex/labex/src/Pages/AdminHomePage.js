import React from "react";
import { useHistory, useParams } from "react-router";
import styled from "styled-components";
import { useProtectedPage } from "../hooks/useProtectedPage";
import { useEffect, useState} from "react";
import axios from "axios"

const ContainerAdmHome = styled.div`
display: flex;
flex-direction: column; 
align-items: center;
justify-items: center;
width: 100vw;
min-height: 650px;
padding-top: 10px;
background-color: rgba(131, 187, 187, 0.726)
`
const CardAdmPage = styled.div`
display: grid;
align-items: center;
justify-items: center;
width: 50vw;
height: 20vh;


  h1{
    margin-bottom: 2px;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    color: darkgray;
    text-shadow: 2px 2px 1px black ;
  }
`
const ButtonsPage = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
gap: 20px;

`

const CardTrips = styled.div`
padding: 8px;
border: 1px solid gray;
box-shadow: 2px 2px 3px gray;
border-radius: 8px;
margin: 8px;
padding: 12px;
display: flex;
align-items: center;
justify-content: space-between;
row-gap:8px;
width: 30vw;
height: 30px;
background-color: white;
`

const AdminHomePage = () => {
  let {id} = useParams()
  useProtectedPage()
  const [listTrips, setListTrips] = useState([])
  
  const history = useHistory()

  useEffect(() => {
    const promise = axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/hernan-barrientos/trips')

    const sucess = (response) => {
         setListTrips(response.data.trips)
    }
    
    const fail = (error) => {
        console.log(error)
    }
    
    promise.then(sucess).catch(fail)
},[])

  const goBack = () => {
    history.goBack()
  }

  const createTrip = () => {
    history.push("/admin/trips/create")
  }

  const logout = () => {
    
    localStorage.clear()
          
    history.push("/login")
  }

  const token = localStorage.getItem('token')

  const deleteTrip = (id) => {
    const promise = axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/hernan-barrientos/trips/${id}`,{
      headers: {
        auth: token
      }
    })
    
    const sucess = (response) => {
      history.push("/admin/trips")
    
        const fail = (error) => {
        console.log(error)
    }
    
    promise.then(sucess).catch(fail)
}
        
        


  
  }


  return (
    <ContainerAdmHome>
    <CardAdmPage>

    <h1>Painel Administrativo</h1>
      
    <ButtonsPage>

      <button onClick={goBack}>
        Voltar
      </button>

      <button onClick={createTrip}>
        Criar Viagem
      </button>

      <button onClick={logout}>
        Logout
      </button>

    </ButtonsPage>
      </CardAdmPage>
      <div>
      
        {listTrips ? listTrips.map(({name, id})=>{
            return <CardTrips key={id}>
                <div>
                {name}
                </div>
               
                <ButtonsPage>
                <button onClick={ () => history.push(`/admin/trips/details/${id}`)}> 
               detalhes
                </button>
                <button onClick={() => deleteTrip(`${id}`)}>
                Excluir
                </button>
                </ButtonsPage>
                


            </CardTrips>
            
        }): "Carregando..."}
        </div>
      </ContainerAdmHome>
  )
}

export default AdminHomePage;