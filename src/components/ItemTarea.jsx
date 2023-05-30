import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';



const ItemTarea = (props) => {
    return (
        <div>
            <ListGroup.Item className='d-flex justify-content-between'>
                {props.nombreTarea}
                <Button variant='danger' onClick={()=> props.borrarTarea(props.nombreTarea)}>Borrar</Button>
                    </ListGroup.Item>
        </div>
    );
};

export default ItemTarea;