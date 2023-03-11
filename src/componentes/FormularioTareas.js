import React, {useState} from 'react';
import styles from './css/formularioTares.module.css';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

const FormularioTareas = ({ tareas, cambiarTareas }) => {
    const [inputTarea, cambiarInputTarea] = useState('');
    

    const handleInput = (e) => {
        cambiarInputTarea(e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();

        cambiarTareas(
            [
                ...tareas,
                {
                    id: uuidv4() ,
                    tarea: inputTarea,
                    completada: false
                },
            ]
        );
        cambiarInputTarea('');
    }

    

    return (
        <form action='' className={styles.formulario} onSubmit={handleSubmit}>
            <input type='text' className={styles.input} placeholder='escribe una tarea'
            value={inputTarea} onChange={(e) => handleInput(e)}>

            </input>
            <button type='submit' className={styles.boton}>
                <FontAwesomeIcon icon={faPlusSquare} className={styles.icono}  />
            </button>
        </form>
    );
}

export default FormularioTareas;