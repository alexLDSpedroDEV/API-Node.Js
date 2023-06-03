import './App.css';
import React, { useEffect, useState } from 'react';
import ListCarros from './componentes/listCarros';
import CreatedCar from './componentes/createdCar'

function App() {

  const [tela, setTela] = useState(0)

  useEffect(() => {
    const url = window.location.href
    const res = url.split('?')
    setTela(res[1])
  })

  const linkPaginas = (e) => {
    if(e == 1) {
      window.open('http://localhost:3000?1','_self')
    } else if (e == 2) {
      window.open('http://localhost:3000?2','_self')
    }
  }

  console.log(tela)

  const retunrpage = () => {
    if(tela == 1){
      return <ListCarros/>
    } else if (tela == 2) {
      return <CreatedCar/>
    } else {
      return <div>
        <button onClick={() => linkPaginas(1)}>paina 1</button>
        <button onClick={() => linkPaginas(2)}>paina 2</button>
      </div>
    }
  }


  return (
    <div>
      
      {retunrpage()}
     
      
    </div>
  );
}

export default App;
