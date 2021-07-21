import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';


const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'Chikito Bacana'}
          fotoUsuario={'https://http2.mlstatic.com/D_NQ_NP_905440-CBT45648805469_042021-V.jpg'}
          fotoPost={'https://picsum.photos/200/150'}
        />

        <Post
          nomeUsuario={'Kelevra'}
          fotoUsuario={'https://images.squarespace-cdn.com/content/v1/5f6e0aeda7c29f47d7fd88fb/1614790096271-3ETZEOEHVRPDL1W9RQ34/KELEVRA+LOGO.jpg?format=1000w'}
          fotoPost={'https://picsum.photos/200'}
        />
        <Post
          nomeUsuario={'Ruthiellen'}
          fotoUsuario={'https://live.staticflickr.com/2614/4020230668_facd4a5061_m.jpg'}
          fotoPost={'https://picsum.photos/150'}
        />
      </MainContainer>
    );
  }
}

export default App;
