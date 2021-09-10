import React from "react";
import { useHistory } from "react-router";

const ListTripsPage = () => {
    
    const history = useHistory()

    const goBack = () =>{
        history.goBack()
    }

    const goToTripsApplication = () => {
        history.push("/trips/application")
    }





  return (
    <div>
        <button onClick={goBack}> 
            Voltar
        </button>

        <button onClick={goToTripsApplication}> 
            Inscrever-se
        </button>


    </div>
    
  )
}

export default ListTripsPage;