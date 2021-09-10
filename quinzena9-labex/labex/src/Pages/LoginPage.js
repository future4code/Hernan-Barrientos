import React from "react";
import { useHistory } from "react-router";

const LoginPage = () => {

    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    const goToAcess = () => [
        history.push("/admin/trips/list")
    ]

  return (

    <div>
        <p> Login </p>

        <p>Aqui terá o formulário para login e senha</p>



        <button onClick={goBack}>
            Voltar
        </button>

        <button onClick={goToAcess}>
            Entrar
        </button>



    </div>
  )
}

export default LoginPage;