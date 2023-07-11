import React from "react";
import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({ tareas, borrarTarea, editarTarea }) => {
  if (!tareas || !Array.isArray(tareas) || tareas.length === 0) {
    return <div>No hay tareas</div>;
  }
  return (
    <div>
      <ListGroup className="rounded">
        {tareas.map((tarea, indexTarea) => (
          <ItemTarea tarea={tarea} key={indexTarea} borrarTarea={borrarTarea} editarTarea={editarTarea}/>
        ))}
      </ListGroup>
    </div>
  );
};

export default ListaTareas;
