import React from "react";
import { useHistory } from "react-router";
import { useState } from "react";
import axios from "axios"


const LoginPage = () => {
    const [form, setForm] = useState({email:"", password: ""})
  
    const onChange = (event) => {
        const {name, value} = event.target
        setForm({ ...form, [name]: value})
        // const name = event.target.name
        // const value = event.target.value
    }
    
    const onSubmitLogin = (event) => {
        event.preventDefault()
        const body = {
            email: form.email,
            password: form.password
        }
        console.log(body)
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/hernan-barrientos/login', body)
        .then((response)=> {
            console.log('Deu certo: ', response.data.token)
            localStorage.setItem('token', response.data.token )
            history.push('/admin/trips/:id')
        }).catch((error) => {
            console.log ('Deu erro: ', error.response)
            alert('Usuário ou Senha incorreto. Tente novamente!')
            setForm({email:"", password: ""})

     })
    }


    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

   

    
  return (

    <div>
        <h2>Login</h2>
        <form onSubmit={onSubmitLogin}>
        <input
            name="email"
            placeholder="email"
            type="email"
            required
            value={form.email}
            onChange={onChange}
        />
        <input
            name="password"
            placeholder="Password"
            type="password"
            required
            pattern={"^.{6,}"}
            title={"Sua senha deve ter mais que 6 digitos"}
            value={form.password}
            onChange={onChange}
        />



        <button onClick={goBack}>
            Voltar
        </button>

        <button>
            Entrar
        </button>

        </form>



    </div>
  )
}

export default LoginPage;