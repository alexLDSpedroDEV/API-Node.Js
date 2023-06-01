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
    
    render() {
        return(
            <div>
                {this.state.carros.map(carro=>
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