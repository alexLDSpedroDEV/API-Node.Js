import './App.css';
import React, { useEffect, useState } from 'react';
import ListCarros from './componentes/listCarros';

const allCar = () => {
    
  return <ListCarros />;
}

function App() {

  return (
    <div>
      <button onClick={allCar}>enviar</button>
      
    </div>
  );
}

export default App;
