import './App.css';
import { Routes, Route } from 'react-router-dom';
import Detail from './components/Detail';
import List from './components/List';
import Login from './components/Login';

function App() {

  return (

    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/Universos" element={<List/>} />
      <Route path="/Personajes/:nombre/:spiderimg/:universo/:descripcion/:habilidades/:debilidades/:imagen/:altImagen/:titulo" element={<Detail />} />
    </Routes>
  );
}

export default App;


