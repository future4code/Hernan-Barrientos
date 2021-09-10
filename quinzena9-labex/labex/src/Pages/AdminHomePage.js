import React from "react";
import { useHistory } from "react-router";

const AdminHomePage = () => {
  
  const history = useHistory()

  const goBack = () => {
    history.goBack()
  }

  const createTrip = () => {
    history.push("/admin/trips/create")
  }

  const logout = () => {
    history.push("/")
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