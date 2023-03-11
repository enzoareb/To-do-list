import React, { useState } from 'react';
import styles from './css/listaTareas.module.css';
import styles2 from './css/tarea.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faEdit, faSquare, faTimes } from '@fortawesome/free-solid-svg-icons';

const Tarea = ({ tarea , toogleCompletada, actualizarTareaList, eliminarTarea}) => {
    const [editarTarea, editandoTarea] = useState(false);
    const [nuevaTarea, cambiarNuevaTarea] = useState(tarea.tarea);
   
    return (
        <li key={tarea.id} className={styles.tarea}>
            <FontAwesomeIcon icon={tarea.completada ? faCheckSquare : faSquare} 
            className={styles.iconoCheck} onClick={() => {toogleCompletada(tarea.id)}}/>
            
            <div className={styles.texto}>
                {editarTarea ?
                    <form action='' className={styles2.editarTarea}>
                        <input type='text' className={styles2.editarTareaInput} value={nuevaTarea} 
                        onChange={(e) => {cambiarNuevaTarea(e.target.value)}} >
                        </input>
                        <button type='submit' className={styles2.editarTareaBoton} 
                            onClick={() => {
                            editandoTarea(false);
                            actualizarTareaList(tarea.id,nuevaTarea)
                            }}>
                            Actualizar
                        </button>
                    </form>
                    :
                    nuevaTarea}
            </div>

            <div className={styles.contenedorBotones}>
                <FontAwesomeIcon icon={faEdit} className={styles.iconoAccion} 
                onClick={() => {editandoTarea(true)}}/>
                <FontAwesomeIcon icon={faTimes} className={styles.iconoAccion} 
                onClick={() => {eliminarTarea(tarea.id)}}/>
            </div>


        </li>

    );

}

export default Tarea;