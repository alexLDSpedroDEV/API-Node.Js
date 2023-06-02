import React from 'react'
import axios from 'axios'
import style from './listCarro.module.css'
export default class ListCarros extends React.Component{
    
   
    arrey={
        carros:[]
    }


    componentDidMount(){
        axios.get('http://localhost:8080/person/')
        .then(res => {
            const dadosCarros=res.data;
            this.setState({carros: dadosCarros})
            
        })
        
    }
    

    //Criando um json para armazenar os dados do backend
    constructor(props){
        super(props)
        
        //estou criando json para enviar ao backend
        this.state = {
            name: "",
            valor: "",
            marca: "",
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

                    <div>
                        <label>Marca do Carro</label>
                        <input
                        placeholder='Digite a marca do carro'
                        type='text'
                        className='form_input'
                        onChange={ e => this.setState({marca: e.target.value})}
                        />
                    </div>

                    <div>
                        <label>Valor do Carro</label>
                        <input
                        placeholder='Digite o valor do carro'
                        type='text'
                        className='form_input'
                        onChange={ e => this.setState({valor: e.target.value})}
                        />
                    </div>

                    <button type='submit'>enviar</button>
                </form>


                {this.arrey.carros.map(carro=>
                    <div id='dd' className={style.div} key={carro._id}>
                        <p>{carro.name}</p>
                        <p>{carro.valor}</p>
                        <p>{carro.marca}</p>
                        <img src={carro.url}/>
                    </div>
                )}
            </div>
        )
    }
}