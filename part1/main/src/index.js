import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = (props) =>{

  const [contador,setContador] = useState(13)
  /* Version no simplificada de useState
  const contador = useState(0)
  const contadorValue =contador[0]
  const updateContador = contador[1]
  */
  const handleClick = () =>{
    setContador(contador+1)
    }
      const handleClickReset = () =>{
       setContador(0)
    }

  const isEven = contador%2===0
  const mensajePar = isEven ? 'Es par' : 'Es impar'

  console.log('renderizado');
  return (
    <div>
      <p>El valor del contador es: </p>
      <h1>{contador}</h1>
      <p>{mensajePar}</p>
      <button onClick={handleClick}>Incrementar</button>  
      <button onClick={handleClickReset}>Reset</button>
    </div>
  )
}



  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );



  /*  El boton primeras versiones
  <button 
        onClick={handleClick}   //ojo no poner handleClick()
        // onClick={()=>{
          //console.log("click")
          //setContador(contador+1)
          //Manera optima para saber valor anterior del contador o lo que sea
          // setContador(prevContador =>{
          //   return prevContador+1
          // })
        // }}
      >
  */



/* Version incorrecta de refrescar la pagina

const App = (props) =>{
  return <h1>{props.contadorInicial}</h1>
}

let contador = 0

const refresh = () =>{
  root.render(
    <React.StrictMode>
      <App contadorInicial={contador}/>
    </React.StrictMode>
  );
}

setInterval(() =>{
  refresh()
  contador++
},1000)

*/

