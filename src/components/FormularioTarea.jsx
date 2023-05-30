// import { Form, Button } from "react-bootstrap"; se pueden agregar varios componentes entre llaves
import Form from "react-bootstrap/Form"; //Se importa uno solo por linea
import Button from "react-bootstrap/Button";
import ListaTareas from "./ListaTareas";
import { useState } from "react";

const FormularioTarea = () => {
  const [tarea, setTarea] = useState("");
  const [arrayTareas, setArrayTareas] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setArrayTareas([...arrayTareas, tarea]);
    setTarea("");
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex" controlId="tarea">
          <Form.Control
            type="text"
            placeholder="Ingresa una tarea"
            onChange={(e) => setTarea(e.target.value)}
            value={tarea}
          />
          <Button variant="success" type="submit">
            Agregar
          </Button>
        </Form.Group>
      </Form>
      <ListaTareas></ListaTareas>
    </>
  );
};

export default FormularioTarea;
