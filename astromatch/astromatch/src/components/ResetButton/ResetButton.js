import axios from "axios"
import React from "react"
import styled from "styled-components"

const ButtonResetStyled = styled.div`

margin: 4px;
padding: 4px;

`

function ResetButton() {

    const onClickReset = () => {
        axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/hernan-barrientos/clear')
        .then(response => {
           console.log(response) 
        })
    }
    return(
        <ButtonResetStyled><button onClick={onClickReset}>Limpar Curtidas e Matches</button></ButtonResetStyled>
    )


}

export default ResetButton