import React from 'react'
import axios from 'axios'
import style from './listCarro.module.css'
export default class ListCarros extends React.Component{
    
    state={
        carros:[]
    }
    
    componentDidMount(){
        axios.get('http://localhost:8080/person/')
        .then(res => {
            const dadosCarros=res.data;
            this.setState({carros: dadosCarros})
        })
    }
    constructor(props){
        super(props)
        //estou criando json para enviar ao backend
        this.state = {
            name: "",
            valor: "",
            marca: "",
        }
    }
    
    render() {
        return(
            <div>
                <form>

                    <h3>Registrar Novo Carro</h3>

                    <div>
                        <label>Nome do Carro</label>
                        <input
                        placeholder='Digite o nome do carro'
                        type='text'
                        className='form_input'
                        />
                    </div>

                    <div>
                        <label>Marca do Carro</label>
                        <input
                        placeholder='Digite a marca do carro'
                        type='text'
                        className='form_input'
                        />
                    </div>

                    <div>
                        <label>Valor do Carro</label>
                        <input
                        placeholder='Digite o valor do carro'
                        type='text'
                        className='form_input'
                        />
                    </div>


                </form>
                {/* {this.state.carros.map(carro=>
                    <div id='dd' className={style.div} key={carro._id}>
                        <p>{carro.name}</p>
                        <p>{carro.valor}</p>
                        <p>{carro.marca}</p>
                        <img src={carro.url}/>
                    </div>
                )} */}
            </div>
        )
    }
}