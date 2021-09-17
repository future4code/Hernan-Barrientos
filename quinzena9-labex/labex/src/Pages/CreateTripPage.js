import React from "react";
import { useHistory } from "react-router";
import { useProtectedPage } from "../hooks/useProtectedPage";

const CreateTripPage = () => {
    useProtectedPage()
    
    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    const tripCreate = () => {
        history.push("/admin/trips/list")
        alert("Viagem criada com sucesso!")
    }


  return (
      <div>
          <p>Aqui terá o formulário para o Adm criar as viagens</p>
          <button onClick={goBack}>
              Voltar
          </button>
          <button onClick={tripCreate}>
              Criar
          </button>
      </div>
    
  )
}

export default CreateTripPage;