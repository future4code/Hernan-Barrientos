import React from "react"
import styled from "styled-components"

const Logo = styled.img`
  width: 45%;
`

const AppBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid lightgray;
    align-items: center;
    padding: 8px 12px;
`

function AppBar(props) {
    return(
        <AppBarContainer>
            <button onClick={props.goToChooseProfilePage}>Escolher</button>
            <Logo src="/img/logoastro.png"/>
            <button onClick={props.goToMatchListPage}>Lista</button>
        </AppBarContainer>
    )


}

export default AppBar;