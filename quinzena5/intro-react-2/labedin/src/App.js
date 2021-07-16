import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardGrande/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://media-exp3.licdn.com/dms/image/C4E03AQHF8GKjVE69Cg/profile-displayphoto-shrink_800_800/0/1517519962016?e=1631750400&v=beta&t=4yVGaiU6d_kLxmeejQsXQSq8QjFDXc1Hln_8Mg0HP8w" 
          nome="Hernán Barrientos" 
          descricao="Oi, eu sou o Hernán Barrientos. 
          Estudante de Desenvolvimento Front-End com foco em JavaScript | React.JS 
          - Pela Labenu!"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />

        <CardPequeno
        imagem=""
        nome="E-mail"
        descricao="hrn.2211@gmail.com"
        />

        <CardPequeno
        imagem=""
        nome="Endereço"
        descricao="Rua dos loucos, nº 0"
        />

      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://media-exp3.licdn.com/dms/image/C4D0BAQHew6RUrGu7tA/company-logo_200_200/0/1625141496918?e=1634774400&v=beta&t=rdcf185mUYxoTyAb4qHnAblwMX3St7d8AjlhOJRZspE" 
          nome="GPA" 
          descricao="Rotinas operacionais e administrativas, com foco em redução de custos,
          controle de estoque e serviços terceirizados."
        />
        
        <CardGrande 
          imagem="https://media-exp3.licdn.com/dms/image/C4E0BAQExH1wSx3J7Ag/company-logo_200_200/0/1552323098795?e=1634774400&v=beta&t=p95d3eDLo73ZRf6lhgpb0fiBUvOL0A_Kis-5QLISbso"
          nome="Exército Brasileiro" 
          descricao="Logistica, administração, transporte, gestão de equipes, treinamento e desenvolvimento em grupo e interpessoal" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2017/04/instagram-logo.png" 
          texto="instagram" 
        />        
      </div>
    </div>
  );
}

export default App;
