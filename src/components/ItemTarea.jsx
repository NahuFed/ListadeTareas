import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import EditarTareaModal from './EditarTareaModal';



const ItemTarea = (props) => {
    return (
        <div className='p-3'>
            <ListGroup.Item className='d-flex justify-content-between'>
                {props.nombreTarea}
                <div>
                <EditarTareaModal editarTarea={props.editarTarea} nombreTarea={props.nombreTarea} />
                <Button variant='danger' className='ms-2' onClick={()=> props.borrarTarea(props.nombreTarea)}>Borrar</Button>
                </div>
                    </ListGroup.Item>
        </div>
    );
};

export default ItemTarea;