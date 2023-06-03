import './App.css';
import React, { useEffect, useState } from 'react';
import ListCarros from './componentes/listCarros';
import CreatedCar from './componentes/createdCar';





const setActive = (props) => {
  if(props == true) {
    return <CreatedCar />
  } else {
    <ListCarros />
  }
}

function App() {

  return (
    <div>
      <h1> Estacionamento de Carros</h1>

      <button onClick={setActive}> registrar novo carro</button>
      
      
     
      
    </div>
  );
}

export default App;
