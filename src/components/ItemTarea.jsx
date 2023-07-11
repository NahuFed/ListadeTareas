import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import EditarTareaModal from './EditarTareaModal';




const ItemTarea = ({ tarea, editarTarea,borrarTarea }) => { 

  return (
    <ListGroup.Item className="d-flex justify-content-between">
      {tarea.tarea}
      <div>
        <EditarTareaModal tarea={tarea} editarTarea={editarTarea} />
        <Button variant="danger" className="ms-2" onClick={()=>{borrarTarea(tarea._id)}}>
          Borrar
        </Button>
      </div>
    </ListGroup.Item>
  );
};

export default ItemTarea;
