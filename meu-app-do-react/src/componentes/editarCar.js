import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Btn = styled.button`
  background-color: red;
  color: red;
`;

export default class EditarCar extends Component {
    


  
  handleEdite = (e) => {
    const dado = e
    


    console.log(dado)
    axios
      .put(`http://localhost:8080/person/` + dado._id, dado) // Substitua pela URL correta para o endpoint DELETE
      
      .then((response) => {
        // Atualizar o estado para indicar que o documento foi excluído com sucesso
        console.log("Deletado")
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    

    //id do carro que o botão esta
    const { dados } = this.props;

    return (
      <div>
    
          <Btn onClick={() => this.handleEdite(dados) }>Editar seu carro</Btn>
        
      </div>
    );
  }
}

