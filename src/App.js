import React, { useState ,useEffect} from 'react';
import { stringify } from 'uuid';
import './App.css';
import FormularioTareas from './componentes/FormularioTareas';
import Header from './componentes/Header';
import ListaTareas from './componentes/ListaTareas';

const App = () => {
  const tareasGuardadas = localStorage.getItem('tareas') ? JSON.parse(localStorage.getItem('tareas')) : [];
  const tareasCompletadasGuardadas = localStorage.getItem('tareasCompletadas') ? JSON.parse(localStorage.getItem('tareasCompletadas')) : true;
  const [tareas, cambiarTareas] = useState(tareasGuardadas);
  const [tareasCompletadas, mostrarTareasCompletadas] = useState(tareasCompletadasGuardadas);

  useEffect( () => {
    localStorage.setItem("tareas",JSON.stringify(tareas));

  },[tareas])

  useEffect( () => {
   
    localStorage.setItem("tareasCompletadas",JSON.stringify(tareasCompletadas));
  },[tareasCompletadas])
 
  return (
    <div className='contenedor'>
      <Header tareasCompletadas={tareasCompletadas} 
      mostrarTareasCompletadas={mostrarTareasCompletadas} />
      <FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas} />
      <ListaTareas tareas={tareas} cambiarTareas={cambiarTareas} 
      tareasCompletadas={tareasCompletadas} />
    </div>
  );
}

export default App;
