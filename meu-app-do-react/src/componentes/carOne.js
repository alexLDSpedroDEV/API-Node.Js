import React from 'react'
import axios from 'axios'


export default class CarOne extends React.Component{
    
   
    //Criando um json para armazenar os dados do backend
    constructor(props){
        super(props)
        
        //estou criando json para enviar ao backend
        this.state = {
            name: "",
            valor: ""
            
        }

        //enviando tudos que esta no constructor para o handleSubmit
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    state={
        carros:[]
    }

    //função para criar novos carros no banco de dados
    handleSubmit(e) {

        //pevinindo recarregamento da pagina
        e.preventDefault();
        
        
        //enviando os dados do state (json que criamos) para a url do backend
        axios.get(`http://localhost:8080/person/` + this.state.name)
        .then(res => {
            alert("achou")
            //colocando todos os dados que pegamos do backend no dadosCarros
            const dadosCarros=res.data;

            //usando a funçao setState para colocar todos os dados de dadosCarros em carros
            this.setState({carros: dadosCarros})
        })
    }
    
    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>

                    <h3>Registrar Novo Carro</h3>

                    <div>
                        <label>Nome do Carro</label>
                        <input
                        placeholder='Digite o nome do carro'
                        type='text'
                        className='form_input'
                        onChange={ e => this.setState({name: e.target.value})}
                        />
                    </div>

                    

                    <button type='submit'>enviar</button>

                    {console.log(this.state.carros.name)}

                </form>
            </div>
        )
    }
}