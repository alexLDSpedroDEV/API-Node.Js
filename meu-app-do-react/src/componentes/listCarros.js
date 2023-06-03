import React from 'react'
import axios from 'axios'
import style from './listCarro.module.css'

export default class ListCarros extends React.Component{
    

    //usando o state do react para criar um list de carros
    state={
        carros:[]
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

    deletCar(e){
        console.log(e)
        
    }

    render() {
        return(
            <div>
                
                {
                    //pegando todos os dados que estão na lista carro no state e mapeando e colocando em carro
                    this.state.carros.map(carro=>

                        //mostrando os dados mapeados
                        <div id='dd' className={style.div} key={carro._id}>
                            <p>{carro.name}</p>
                            <p>{carro.valor}</p>
                            <p>{carro.marca}</p>  
                            
                            <img src={carro.url}/>
                                                      
                        </div>
                    )
                }
                
            </div>
        )
    }
}