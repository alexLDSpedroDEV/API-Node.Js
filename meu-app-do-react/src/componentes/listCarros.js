import React from 'react'
import axios from 'axios'
import DeleteCar from './deletCar';
import EditeCar from './editarCar';

import styled from 'styled-components'


const Container = styled.div`
  width:  90vw;
  height: auto;
  
  background-color: blue;
  overflow-x: hidden;
  margin: auto;
  display: grid;

`;
const Boxtitles = styled.div`
  width:  90vw;
  height: 100px;
  display: grid;
  background-color: white;
  grid-template-columns: 20% 20% 20% 20% 15% 5%;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Box = styled.div`
  width: 89.7vw;
  height: 150px;
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 15% 5%;
  justify-items: center;
  text-align: center;
  margin-top: 40px;
  align-items: center;
  color: white;
 
`;

const Img = styled.img`
  width:  200px;
`;

const Title = styled.p`
  font-size: 1.4em;
`;

const Popup = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  width: 100vw;
  height: 100vh;
  display: none;
`;


export default class ListCarros extends React.Component{
    

    //usando o state do react para criar um list de carros
    state={
        carros:[],  
    }
    
    //criando um function acinada para pegar os dados do backend
    componentDidMount(){
        axios.get('http://localhost:8080/person/')
        .then(res => {
            
            //colocando todos os dados que pegamos do backend no dadosCarros
            const dadosCarros=res.data;

            //usando a funçao setState para colocar todos os dados de dadosCarros em carros
            this.setState({carros: dadosCarros})
        })
    }

    
    

    render() {
        return(
            <Container>
                

                <Boxtitles>
                    <div>
                        <Title>Nome</Title>
                    </div>
                    <div>
                        <Title>Ano</Title>
                    </div>
                    <div>
                        <Title>Marca</Title>
                    </div>
                    <div>
                        <Title>valor</Title>
                    </div>
                    <div>
                        <Title>imagen</Title>
                    </div>
                </Boxtitles>
                <Popup>
                    <EditeCar /> 
                </Popup> 
                
                {
                    //pegando todos os dados que estão na lista carro no state e mapeando e colocando em carro
                    this.state.carros.map(carro=>

                        //mostrando os dados mapeados
                        <Box  key={carro._id}>
                            <p>{carro.name}</p>
                            <p>{carro.ano}</p> 
                            <p>{carro.marca}</p>
                            <p>R$: {carro.valor}</p>  
                            <Img src={carro.url}/>
                            <div>
                                <DeleteCar idCar={carro._id} />
                                <button>editar</button>
                            </div>
                                                        
                        </Box>
                        
                    )
                }
                
            </Container>
        )
    }
}