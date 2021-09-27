import React from "react";
import { useHistory, useParams } from "react-router";
import styled from "styled-components";
import axios from "axios"
import useForm from "../hooks/useForm";
import TripDetailsPage from "./TripDetailsPage";




const PageContainer = styled.div`

    
    height: 100vh;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    background-color: rgba(131, 187, 187, 0.726);

    h2{
        margin: 40px;
    }
`
const ContainerForm = styled.div`
width: 70vw;
display: flex;
flex-direction: column;
row-gap: 12px;
justify-items: center;
align-items: center;
margin: 8px;
`
const ButtonsPage = styled.div`
display: flex;
align-items: flex-start;
gap: 20px;

`
const FormStyled = styled.form`
width: 350px;
display: flex;
flex-direction: column;
row-gap: 12px;
justify-items: center;
align-items: center;


input{
    width: 320px;
    height: 25px;
}
select{
    width: 324px;
    height: 25px;
}
`


const countrys = ['Selecione um país', 'Alemanha', 'Andorra', 'Angola', 'Antígua e Barbuda', 'Arábia Saudita',
    'Argélia', 'Argentina', 'Armênia', 'Austrália', 'Áustria', 'Azerbaijão', 'Bahamas', 'Bahrein',
    'Bangladesh', 'Barbados', 'Bélgica', 'Belize', 'Benim', 'Bielorrússia', 'Bolívia', 'Bósnia e Herzegovina',
    'Botswana (ou Botsuana)', 'Brasil', 'Brunei', 'Bulgária', 'Burkina Faso (ou Burquina Faso)', 'Burundi', 'Butão',
    'Cabo Verde', 'Camarões', 'Camboja', 'Canadá', 'Catar (ou Qatar)', 'Cazaquistão', 'Chade', 'Chile', 'China',
    'Chipre', 'Cingapura (ou Singapura)', 'Colômbia', 'Comores', 'Congo', 'Coreia do Norte', 'Coreia do Sul',
    'Costa do Marfim', 'Costa Rica', 'Croácia', 'Cuba', 'Dinamarca', 'Dominica', 'Egito', 'El Salvador', 'Emirados Árabes Unidos',
    'Equador', 'Eritreia', 'Escócia', 'Eslováquia', 'Eslovênia', 'Espanha', 'Estados Federados da Micronésia',
    'Estados Unidos da América', 'Estônia', 'Eswatini (ou Essuatíni, ou Suazilândia)', 'Etiópia', 'Fiji',
    'Filipinas', 'Finlândia', 'França', 'Gabão', 'Gâmbia', 'Gana', 'Geórgia', 'Granada', 'Grécia', 'Guatemala',
    'Guiana', 'Guiné', 'Guiné-Bissau', 'Guiné Equatorial', 'Haiti', 'Holanda', 'Honduras', 'Hungria', 'Iêmen',
    'Índia', 'Indonésia', 'Inglaterra', 'Irã', 'Iraque', 'Irlanda do Norte', 'Irlanda',
    'Islândia', 'Israel', 'Itália', 'Jamaica', 'Japão', 'Jordânia', 'Kiribati (ou Quiribati)',
    'Kosovo', 'Kuwait', 'Laos', 'Lesoto', 'Letônia', 'Líbano', 'Libéria', 'Líbia',
    'Liechtenstein (ou Listenstaine)', 'Lituânia', 'Luxemburgo', 'Macedônia do Norte', 'Madagascar (ou Madagáscar)'
    , 'Malásia', 'Malawi (ou Malauí)', 'Maldivas', 'Mali', 'Malta', 'Marrocos', 'Marshall', 'Maurícia', 'Mauritânia', 'México'
    , 'Mianmar', 'Micronésia', 'Moçambique', 'Moldávia', 'Mônaco', 'Mongólia', 'Montenegro', 'Namíbia', 'Nauru', 'Nepal'
    , 'Nicarágua', 'Níger', 'Nigéria', 'Noruega', 'Nova Zelândia', 'Omã', 'Ossétia do Sul', 'País de Gales', 'Países Baixos', 'Palau'
    , 'Palestina', 'Panamá', 'Papua-Nova Guiné', 'Paquistão', 'Paraguai', 'Peru', 'Polônia', 'Portugal', 'Qatar (ou Catar)'
    , 'Quênia', 'Quirguistão', 'Quiribati (ou Kiribati)', 'Reino Unido', 'República Árabe Saaraui Democrática', 'República Centro-Africana'
    , 'República Democrática do Congo', 'República do Congo', 'República Dominicana', 'República Tcheca (ou Tchéquia)'
    , 'República Turca de Chipre do Norte', 'Romênia', 'Ruanda', 'Rússia', 'Salomão', 'Samoa', 'San Marino (ou São Marinho)'
    , 'Santa Lúcia', 'São Cristóvão e Névis (ou São Cristóvão e Neves)', 'São Tomé e Príncipe', 'São Vicente e Granadinas'
    , 'Senegal', 'Serra Leoa', 'Sérvia', 'Seychelles (ou Seicheles)', 'Singapura (ou Cingapura)', 'Síria', 'Somália', 'Sri Lanka'
    , 'Suazilândia (ou Eswatini, ou Essuatíni)', 'Sudão do Sul', 'Sudão', 'Suécia', 'Suíça', 'Suriname', 'Tailândia', 'Taiwan'
    , 'Tajiquistão (ou Tadjiquistão)', 'Tanzânia', 'Tchéquia (ou República Tcheca)', 'Timor-Leste', 'Togo', 'Tonga', 'Trinidad e Tobago'
    , 'Tunísia', 'Turcomenistão (ou Turquemenistão)', 'Turquia', 'Tuvalu', 'Ucrânia', 'Uganda', 'Uruguai', 'Uzbequistão', 'Vanuatu'
    , 'Vaticano', 'Venezuela', 'Vietnã (ou Vietname)', 'Zâmbia', 'Zimbábue']

const ApplicationFormPage = () => {
    let { id } = useParams()

    const { form, onChange, cleanFields } = useForm({
        name: "",
        age: "",
        applicationText: "",
        profession: "",
        country: ""

    })
    


    const history = useHistory()

    const goBack = () => {
        history.push("/trips/list")
    }

    const goToApplicationTrip = (event) => {
        event.preventDefault()
        console.log(form)
        const body = {
            "name": form.name,
            "age": form.age,
            "applicationText": form.applicationText,
            "profession": form.profession,
            "country": form.country
        }
        const promise = axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/hernan-barrientos/trips/${id}/apply`, body)

        const sucess = (response) => {
            console.log(response)
            alert("Inscrição efetuada com sucesso")
            history.push("/trips/list")

        }
        const fail = (error) => {
            alert("Tente novamente")

        }

        promise.then(sucess).catch(fail)
    }



    return (
        <PageContainer>

            <h2>Preencher com seus dados</h2>

            <ContainerForm>
                <FormStyled onSubmit={goToApplicationTrip}>

                    <input
                        name={"name"}
                        placeholder="Nome"
                        required
                        value={form.name}
                        onChange={onChange}
                    />
                    <input
                        name={"age"}
                        placeholder="Idade"
                        type={"number"}
                        min={18}
                        value={form.age}
                        onChange={onChange}
                        required
                    />
                    <input
                        name={"applicationText"}
                        placeholder="Texto de Candidatura"
                        value={form.applicationText}
                        onChange={onChange}
                        required
                    />
                    <input
                        name={"profession"}
                        placeholder="Profissão"
                        value={form.profession}
                        onChange={onChange}
                        required
                    />

                    <select
                        name={"country"}
                        required
                        value={form.country}
                        onChange = {onChange}>
                        {countrys.map((country, key) => {
                            return <option key={key} value={country}>{country}</option>
                        })}
                    </select>
                    <ButtonsPage>

                        <button onClick={goBack}>
                            Voltar
                        </button>

                        <button >
                            Enviar
                        </button>
                    </ButtonsPage>

                </FormStyled>


            </ContainerForm>



        </PageContainer>


    )
}

export default ApplicationFormPage;