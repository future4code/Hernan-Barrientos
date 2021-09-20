import React from "react";
import { useHistory } from "react-router";
import useForm from "../hooks/useForm";
import axios from "axios"
import styled from "styled-components";
import login from '../components/imgs/login.png'


const ContainerLogin = styled.div`

height: 100vh;
display: flex;
flex-direction: column;
text-align: center;
align-items: center;
width: 100vw;
height: 100vh;
text-align: center;
row-gap: 20px;
background-color: rgba(131, 187, 187, 0.726)
 
`

const FormLogin = styled.form`

display: flex;
flex-direction: column;
width: 400px;
margin: 30px;
column-gap: 20px;
row-gap: 10px;
text-align: center;
align-items: center;


    input{
        height: 20px;
        border-radius: 4px;
    }

`
const CardLogin = styled.div`
width: 70vw;
height: 60vh;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 30px;
padding: 20px;

img{
        width: 50%;
        
    }
`
const ButtonsPage = styled.div`
display: flex;
align-items: flex-start;
gap: 20px;

`


const LoginPage = () => {
    const {form, onChange, cleanFields} = useForm ({email: "", password: ""})
       
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
            history.push('/admin/trips')
        }).catch((error) => {
            console.log ('Deu erro: ', error.response)
            alert('Usuário ou Senha incorreto. Tente novamente!')
            cleanFields()

     })
    }


    const history = useHistory()

    const goBack = () => {
        history.push("/")
    }

   

    
  return (

    <ContainerLogin>
    <CardLogin>
    <img src={login} alt="login.png"/>
        <FormLogin onSubmit={onSubmitLogin}>
        <input
            name="email"
            placeholder="  email"
            type="email"
            required
            value={form.email}
            onChange={onChange}
        />
        <input
            name="password"
            placeholder="  Password"
            type="password"
            required
            pattern={"^.{6,}"}
            title={"Sua senha deve ter mais que 6 digitos"}
            value={form.password}
            onChange={onChange}
        />


        <ButtonsPage>
        <button onClick={goBack}>
            Voltar
        </button>

        <button>
            Entrar
        </button>
        </ButtonsPage>

        </FormLogin>



    </CardLogin>
    </ContainerLogin>
  )
}

export default LoginPage;