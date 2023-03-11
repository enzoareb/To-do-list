import React from 'react';
import styles from './css/header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Header = ({ tareasCompletadas, mostrarTareasCompletadas }) => {

    const toggleCompletadas = () => {
        mostrarTareasCompletadas(!tareasCompletadas);
    }

    return (
        <header className={styles.header}>
            <h1 className={styles.titulo}>Listas de tareas</h1>
            {tareasCompletadas ?
                <button className={styles.boton} 
                onClick={() => toggleCompletadas()}>
                    No mostrar completadas
                    <FontAwesomeIcon icon={faEyeSlash}
                        className={styles.icono}
                         />
                </button>
                :
                <button className={styles.boton} 
                onClick={() => toggleCompletadas()}>
                    Mostrar completadas
                    <FontAwesomeIcon icon={faEye}
                        className={styles.icono}
                         />
                </button>
            }
        </header>
    );
}

export default Header;