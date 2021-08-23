import React from "react";
import styled from "styled-components";
import axios from "axios"

const Container = styled.div`
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    

`

const ButtonsContainer = styled.div`
    width: 280px;
    display: flex;
    justify-content: space-between;
  
`

class CriarPlayList extends React.Component{

    state = {
        createPlaylist: ""
    }




    render() { 
    return (
        <Container>
            <h1>Labefy</h1>
            <ButtonsContainer>
                <input 
                placeholder="Nova Playlist"
                onChange={(e) => this.setState({createPlaylist: e.target.value})} 
                value={this.state.createPlaylist}
                /> 
       
                <button
                    onClick={() => {
                        axios({
                            url: "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
                            method: "post",
                            data: {
                                name: this.state.createPlaylist
                            },

                            headers: {
                              Authorization: "hernan-barrientos-johnson"
                
                            }
                          })
                          .then(() =>{
                              this.props.onCreatePlayList({name:this.state.createPlaylist})
                         
                          })
                          .catch(function (error) {

                            alert ("Ops! Você inserir outro nome para criar sua playlist")
                          })
                          .then(() => {
                            this.setState({createPlaylist:""})
                          })
                          
                    }}>
                    Criar Playlist
                    </button>
                
            </ButtonsContainer>
        </Container>
    )}
} 


export default CriarPlayList