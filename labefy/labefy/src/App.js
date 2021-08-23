import React from "react"
import styled from "styled-components"
import axios from "axios"
import CriarPlayList from "./components/CriarPlayList"



const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
  text-align: center;
  font-size: 1.5rem;
  justify-content: center;
  align-items: center;
  display: grid;
  margin: 12px;
  color: DeepSkyBlue;

 
`
const CardPlayList = styled.div`
  width: 8vw;
  height: 16vh;
  border: 2px solid #FF1493;
  border-radius: 8px;
  box-shadow: 2px 2px 4px ;
  text-align: center;
  background-color: #1C1C1C ;
  display: grid;
  grid-template-rows: 3fr 1fr;
  align-items: center;
 

  button{
    width: 1.5vw;
    height: 3.5vh;
    color: red;
 
  }
  

` 
const ContainerCardPlayList = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 12px;


  

`



class App extends React.Component {

  state = {
    playlists: [],
    
  }

  componentDidMount() {
    axios({
      url: "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
      method: "get",
      headers: {
        Authorization: "hernan-barrientos-johnson"
      }
    })
      .then(response => {
        this.setState({ playlists: response.data.result.list })
        
      })
      .catch(function (error) {

        console.error(error);
      })
  }








  render() {

    const playlists = this.state.playlists.map((playlist, i) => {
      return <CardPlayList
        key={i}
        name={playlist.name}
        playlistId={playlist.id}
        
      >{playlist.name}
      <button
        onClick={() => {
        axios({
            url: "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId",
            method: "delete",
            data: {
              playlistId: this.state.playlists.id 
            },

            headers: {
              Authorization: "hernan-barrientos-johnson"

            }
          })
          .then((response) =>{
              this.onDeletePlayList({id:this.state.playlists})
              
         
          })
          .catch(function (error) {

            alert ("Ops, não foi possível atender sua solicitação =(")
          })
          
          
        }}
      > 
      X
      </button>
      </CardPlayList>

    })

    return (
      <AppContainer>
        

        <CriarPlayList
         onCreatePlayList = { (novaPlaylist) =>{
          this.setState({playlists:[...this.state.playlists, novaPlaylist]})

         }} />
          <h3>Minhas PlayLists ♥</h3>
          <ContainerCardPlayList
            onDeletePlayList = { (deletePlayList) => {
              this.setState({plalists:[...this.state.playlists, deletePlayList]})
            }}
          >
            {playlists}
          </ContainerCardPlayList>
        

           



      </AppContainer>
    );

  }



}

export default App;
