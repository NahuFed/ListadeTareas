import { useState } from 'react';

import { Modal, Button, Form } from 'react-bootstrap';



const EditarTareaModal = ({ tarea, editarTarea }) => {
  const [showModal, setShowModal] = useState(false);
  const [nuevoNombreTarea, setNuevoNombreTarea] = useState('');

  const handleClose = () => {
    setShowModal(false);
    setNuevoNombreTarea('');
  };

  const handleGuardar = () => {
    editarTarea(tarea._id, nuevoNombreTarea);
    handleClose();
  };

  return (
    <>
      <Button variant="primary" onClick={() => setShowModal(true)}>
        Editar
      </Button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Tarea</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="nuevoNombreTarea">
              <Form.Label>Nuevo nombre de tarea</Form.Label>
              <Form.Control
                type="text"
                value={nuevoNombreTarea}
                onChange={(e) => setNuevoNombreTarea(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleGuardar}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditarTareaModal;
