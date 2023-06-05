import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Btn = styled.button`
  background-color: #00000000;
  color: white;
  width: 50px;
  height: 45px;
  font-size: 2em;
`;



export default class DeleteCar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deletado: false
    };
  }

  
  handleDelete = (e) => {
    axios
      .delete(`http://localhost:8080/person/` + e ) // Substitua pela URL correta para o endpoint DELETE
      
      .then((response) => {
        // Atualizar o estado para indicar que o documento foi excluído com sucesso
        this.setState({ deletado: true });
        console.log("Deletado")
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    const { deletado } = this.state;

    //id do carro que o botão esta
    const { idCar } = this.props;

    return (
      <div>
        {deletado ? (
          <p>Documento excluído com sucesso!</p>
        ) : (
          <Btn onClick={() => this.handleDelete(idCar) }>X</Btn>
        )}
      </div>
    );
  }
}
