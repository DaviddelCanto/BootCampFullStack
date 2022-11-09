
import './App.css';
import Mensaje from './Mensaje.js'


const Descripcion = () => {
  return <p>Esta es la app para el curso fullstack</p>
}

function App() {

  return (
    <div className="App">
      <Mensaje color='red' message='Estamos trabajando'/>
      <Mensaje color='blue' message='En un curso'/>
      <Mensaje color='green' message='De React'/>
      <Descripcion />
    </div>
  );
}

export default App;
