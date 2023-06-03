
import React from 'react';
import styled from 'styled-components';
import HomeImage from '../img/homeImg.png'


const Container = styled.div`
  width:  90vw;
  height: auto;
  min-height: 80vh ;
  background-color: blue;
  overflow-x: hidden;
  margin: auto;
  display: flex;
  justify-content: space-between;
`;



const Boxtext = styled.div`
  width:  40vw;
  height: 80vh;
  display: grid;
  justify-content: center;
  align-content: center;
 
`;

const BoxImg = styled.div`
  width:  40vw;
  height: 80vh;
  display: grid;
  justify-content: center;
  align-content: center;
 
`;

const Img = styled.img`
  width: 702px;
  height: auto;
`;

const Btn = styled.button`
  width: 200px;
  padding: 20px 20px;
  font-size: 1.1em;
  margin-top: 20px;
`;

const Title = styled.h1`
  font-size: 4em;
  color: white;
  margin-bottom: 40px;
`;

const SubTitle = styled.p`
  font-size: 1.2em;
  
  margin-bottom: 40px;
`;


const Home = () => {

  return (
    <Container>
        <Boxtext>
            <Title>Venda seu carro Aki!!</Title>
            <SubTitle>
               Lorem ipsum dolor sit amet, consectetur adipiscing
               elit. In et sodales ex, nec dignissim neque. Sus
               pendisse ac posuere leo. Phasellus quis magna id
               dolor accumsan
            </SubTitle>
            <Btn >Vendar Carro</Btn>
        </Boxtext>

        <BoxImg>
            <Img src={HomeImage}/>
        </BoxImg>   
      
    </Container>
  );
}

export default Home;
