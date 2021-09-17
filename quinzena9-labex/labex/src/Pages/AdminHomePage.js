import React from "react";
import { useHistory } from "react-router";
import { useProtectedPage } from "../hooks/useProtectedPage";

const AdminHomePage = () => {
  useProtectedPage()
  
  const history = useHistory()

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


  return (
    <div>

    <p>Para o administrador ver a lista de viagens e poder <br/>
      deletá-las ou acessar o detalhe de cada uma delas</p>

      <button onClick={goBack}>
        Voltar
      </button>

      <button onClick={createTrip}>
        Criar Viagem
      </button>

      <button onClick={logout}>
        Logout
      </button>
      </div>
  )
}

export default AdminHomePage;