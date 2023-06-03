import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Button = styled.button`
  color: black;
  font-size: 1em;
  margin: 1em;
  padding: 15px 20px;
  border-radius: 3px;
`;

const FormNewCar = styled.form`
    width: 90vw;
    height: 70vh;
    background-color: blue;
    margin: auto;
    display: grid;
    justify-content: center;
    align-content: space-around;
    border-radius: 50px;
`;


const Title = styled.h1`
    font-size: 2em;
    color: white;
    text-transform: uppercase; 
`;

const Input = styled.input`
    width: 300px;
    padding: 10px 20px;

`;

const Label = styled.label`
    display: block;
    padding: 20px 0px;
    font-size: 1em;
    color: white;

`;

const DivForm = styled.div`
    display: grid;
    justify-content: center;
    align-content: center;

`;




export default class CreatedCar extends React.Component{
    
    

   
    //Criando um json para armazenar os dados do backend
    constructor(props){
        super(props)
        
        //estou criando json para enviar ao backend
        this.state = {
            name: "",
            valor: "",
            marca: "",
            url: "",
            ano: "",
        }

        
        //enviando tudos que esta no constructor para o handleSubmit
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    //função para criar novos carros no banco de dados
    handleSubmit(e) {

        //pevinindo recarregamento da pagina
        e.preventDefault();
        
        
        //enviando os dados do state (json que criamos) para a url do backend
        axios.post('http://localhost:8080/person/', this.state)
        .then(res => {
            alert("Registrado com sucesso")
        })
        
    }

    
    
    render() {
        return(
            <div>
                <FormNewCar  onSubmit={this.handleSubmit}>

                    <Title>Registrar Novo Carro</Title>

                    <DivForm>
                        <Label>Nome do Carro</Label>
                        <Input
                        placeholder='Digite o nome do carro'
                        type='text'
                        className='form_input'
                        onChange={ e => this.setState({name: e.target.value})}
                        />
                    </DivForm>

                    <DivForm>
                        <Label>Marca do Carro</Label>
                        <Input
                        placeholder='Digite a marca do carro'
                        type='text'
                        className='form_input'
                        onChange={ e => this.setState({marca: e.target.value})}
                        />
                    </DivForm>

                    <DivForm>
                        <Label>Ano  do Carro</Label>
                        <Input
                        placeholder='Digite o ano do carro'
                        type='text'
                        className='form_input'
                        onChange={ e => this.setState({ano: e.target.value})}
                        />
                    </DivForm>

                    <DivForm>
                        <Label>Valor do Carro</Label>
                        <Input
                        placeholder='Digite o valor do carro'
                        type='number'
                        className='form_input'
                        onChange={ e => this.setState({valor: e.target.value})}
                        />
                    </DivForm>

                    <DivForm>
                        <Label>Foto do seu carro</Label>
                        <Input
                        placeholder='Digite a Url da imagens'
                        type='text'
                        className='form_input'
                        onChange={ e => this.setState({url: e.target.value})}
                        />
                        
                    </DivForm>

                    <Button type='submit'>enviar</Button>
                </FormNewCar>
            </div>
        )
    }
}