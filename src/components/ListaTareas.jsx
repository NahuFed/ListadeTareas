import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({tareas,borrarTarea,editarTarea}) => {
  return (
    <div>
      <ListGroup className="rounded">
        {
          tareas.map((tarea,indiceTarea)=>   <ItemTarea nombreTarea={tarea} key={indiceTarea} borrarTarea={borrarTarea} editarTarea={editarTarea}></ItemTarea>)
        }
      
      </ListGroup>
    </div>
  );
};

export default ListaTareas;
