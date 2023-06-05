import React, { Component } from 'react';
import axios from 'axios';




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
          <button onClick={() => this.handleDelete(idCar) }>X</button>
        )}
      </div>
    );
  }
}