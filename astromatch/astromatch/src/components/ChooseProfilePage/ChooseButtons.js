
import React from "react"
import styled from "styled-components"

const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    z-index: 1;
`

function ChooseButtons(props) {
    
    
    return(
        <ButtonsContainer>
            <button onClick={props.onClickNo}>Não</button>
            <button onClick={props.onClickYes}>Sim</button>
            
        </ButtonsContainer>
    )


}

export default ChooseButtons;