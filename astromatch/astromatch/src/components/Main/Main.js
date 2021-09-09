import React, {useState} from "react"
import AppBar from "../AppBar/AppBar"
import ChooseProfilePage from "../ChooseProfilePage/ChooseProfilePage"
import MatchListPage from "../MatchListPage/MatchListPage"
import styled from "styled-components"





const MainContainer = styled.div `
  width: 400px;
  height: 600px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid purple;
  border-radius: 5px;
  background-color: white;
  box-shadow: rgb(0 0 0 / 6%) 0px 0px 5px;
  align-items: center;
  
  
  
  
`


function Main() {
    const [selectedPage, setSelectedPage] = useState('choose-profile')

    const renderSelectedPage = () => {
        switch(selectedPage) {
            case 'choose-profile':
                return <ChooseProfilePage/>
            case 'match-list':
                return <MatchListPage/>
            default:
                return <ChooseProfilePage/>
            
        }
    }

    const goToChooseProfilePage = () => {
        setSelectedPage('choose-profile')
    }

    const goToMatchListPage = () => {
        setSelectedPage('match-list')
    }




    return(
        <MainContainer>
            <AppBar
                goToChooseProfilePage={goToChooseProfilePage}
                goToMatchListPage={goToMatchListPage}
            />
            {renderSelectedPage()}

            
        
                      
        </MainContainer>
    )


}

export default Main