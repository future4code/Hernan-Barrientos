import React from "react";
import { useHistory } from "react-router";
import { useProtectedPage } from "../hooks/useProtectedPage";
import styled from "styled-components";
import useForm from "../hooks/useForm";
import axios from "axios"


const PageContainer = styled.div`
    height: 600px;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    background-color: rgba(131, 187, 187, 0.726);
`
const ContainerForm = styled.div`
width: 60vw;
height: 100vh;
display: flex;
flex-direction: column;
row-gap: 12px;
justify-items: center;
align-items: center;
margin: 8% auto;
`
const ButtonsPage = styled.div`
display: flex;
align-items: flex-start;
gap: 20px;
`
const FormStyled = styled.form`
width: auto;
height: auto;
display: flex;
flex-direction: column;
row-gap: 12px;
justify-items: center;
align-items: center;
margin:4% auto;

    input{
        width: 320px;
        height: 35px;
    }
    select{
        width: 322px;
        height: 35px;
    }
`

const CreateTripPage = () => {
    useProtectedPage()

    const { form, onChange, cleanFields } = useForm ({
        name:"",
        planet: "",
        date: "",
        description: "",
        durationInDays: ""

    })

   
    
    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    const tripCreate = (event) => {
        event.preventDefault()
        console.log(form)

        const body = {
        name:form.name,
        planet:form.planet,
        date: form.date,
        description: form.description,
        durationInDays: form.durationInDays
        }
        const token = localStorage.getItem('token')
        const promise = axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/hernan-barrientos/trips', body,{
            headers: {
                auth: token
            }    
        })
        const sucess = (response) => {
            history.push("/admin/trips")
            alert("Viagem criada com sucesso!")
        }

        const fail = (error) => {
            console.log(error)
        }
        promise.then(sucess).catch(fail)


    }


  return (
      <PageContainer>
      <ContainerForm>
          
          <h1>Criar Viagens</h1>

          <FormStyled onSubmit={tripCreate}>
          <input
          name={"name"}
          placeholder="nome da viagem"
          required
          value = {form.name}
          onChange = {onChange}

          />
          
          <select 
          name={"planet"}
          value={form.planet}
          onChange = {onChange}>
              <option value="" disabled > Selecione um planeta</option>
              <option value ="Venus"> Venus </option>
              <option value ="Mercúrio" > Mercúrio </option>
              <option value ="Marte"> Marte </option>
              <option value ="Jupter"> Jupter </option>
              <option value ="Saturno"> Saturno </option>
              <option value ="Urano"> Urano </option>
              <option value ="Netuno"> Netuno </option>
          </select>
          <input
          name={"date"}
          placeholder="Escolha a data"
          required
          type={"date"}
          value = {form.date}
          onChange = {onChange}
          />
          <input
          name={"description"}
          placeholder="Descrição"
          required
          value = {form.description}
          onChange = {onChange}
          />
          <input
          name={"durationInDays"}
          value = {form.durationInDays}
          onChange = {onChange}
          placeholder="Duração em dias"
          required
          type={"number"}
          min={50}
          
          />
          

          <ButtonsPage>
          <button onClick={goBack}>
              Voltar
          </button>
          <button 
        //   type="submit">
        >
              Criar
          </button>
          </ButtonsPage>
          </FormStyled>

          </ContainerForm>

      </PageContainer>
        
  )
}

export default CreateTripPage;