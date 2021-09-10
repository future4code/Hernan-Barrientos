import React from "react";
import { useHistory } from "react-router";

const CreateTripPage = () => {
    
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