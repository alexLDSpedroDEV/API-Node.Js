import './App.css';
import React, { useEffect, useState } from 'react';
import ListCarros from './componentes/listCarros';
import CreatedCar from './componentes/createdCar'
import Home from './componentes/home';
import styled from 'styled-components';



const Container = styled.div`
  width:  100vw;
  height: auto;
  min-height: 100vh ;
  background-color: blue;
  overflow: hidden;
`;
const Header = styled.header`
  width:  80vw;
  height: 100px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  
`;

const Btn = styled.button`
  width:  100px;
  padding: 20px 10px;
  background-color: blue;
  margin-left: 50px;
  font-size: 1.4em;
  margin-top: 20px;
  color: white;
  border: 0px solid white;
  
`;


function App() {

  const [tela, setTela] = useState(0)

  useEffect(() => {
    const url = window.location.href
    const res = url.split('?')
    setTela(res[1])
  })

  const linkPaginas = (e) => {
    if(e == 1) {
      window.open('http://localhost:3000?1','_self')
    } else if (e == 2) {
      window.open('http://localhost:3000?2','_self')
    } else if (e == 0) {
      window.open('http://localhost:3000?0','_self')
    }
    
  }


  const retunrpage = () => {
    if(tela == 1){
      return <ListCarros/>
    } else if (tela == 2) {
      return <CreatedCar/>
    } else if (tela == 0) {
      return <Home/>
    }
  }


  return (
    <Container>
      <Header>
        <div>
          <h1>VendeCar</h1>
        </div>
        <div>
          <Btn onClick={() => linkPaginas(0)}>Home</Btn>
          <Btn onClick={() => linkPaginas(1)}>Carros</Btn>
          <Btn onClick={() => linkPaginas(2)}>Cadastrar</Btn>
        </div>
      </Header>
      
      {/* função para renderizar as paginas  */}
      {retunrpage()}
     
      
    </Container>
  );
}

export default App;
