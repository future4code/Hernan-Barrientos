import React from "react";
import { useHistory } from "react-router";

const ApplicationFormPage = () => {

    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    const goToApplicationTrip = () => {
        history.push("/trips/list")
        alert("Inscrição concluida, aguarde contato")
    }
  return (
    <div>
        <p>ApplicationFormPage</p>

        <button onClick={goBack}>
            Voltar
        </button>

        <button onClick={goToApplicationTrip}>
            Enviar
        </button>


    </div>
    


  )
}

export default ApplicationFormPage;