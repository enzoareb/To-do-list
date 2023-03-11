import React from 'react';
import styles from './css/listaTareas.module.css';
import Tarea from './Tarea';

const ListaTareas = ({ tareas, cambiarTareas, tareasCompletadas }) => {

    const toogleCompletada = (id) => {
        cambiarTareas(
            tareas.map((tarea) => {
                if (tarea.id === id) {
                    return { ...tarea, completada: !tarea.completada }
                }
                return tarea;
            })
        )
    }

    const actualizarTareaList = (id, tareaNueva) => {
        cambiarTareas(
            tareas.map((tarea) => {
                if (tarea.id === id) {
                    return { ...tarea, tarea: tareaNueva }
                }
                return tarea;
            })
        )
    }

    const eliminarTarea = (id) => {
        cambiarTareas(
            tareas.filter((tarea) => {
                if (tarea.id !== id) {
                    return tarea;
                }
                return;
            })
        )
    }

    const ocultarCompletadas = () => {
        cambiarTareas(
            tareas.map((tarea) => {
                if (tarea.completada) {
                    return;
                }
                return tarea;
            })
        )
    }

    return (
        <ul className={styles.lista}>


            {tareas.length > 0 ?
                
                
                tareas.map((tarea) => {
                    if (tareasCompletadas) {
                        return <Tarea key={tarea.id} tarea={tarea}
                            toogleCompletada={toogleCompletada}
                            actualizarTareaList={actualizarTareaList}
                            eliminarTarea={eliminarTarea}
                             />
                    }else if(!tarea.completada){
                        return <Tarea key={tarea.id} tarea={tarea}
                            toogleCompletada={toogleCompletada}
                            actualizarTareaList={actualizarTareaList}
                            eliminarTarea={eliminarTarea}
                             />
                    }
                    return;
                })
                :
                <div className={styles.mensaje}>~ No tienes tareas ~</div>

            }

        </ul>
    );
}

export default ListaTareas;
