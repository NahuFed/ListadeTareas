// import { Form, Button } from "react-bootstrap"; se pueden agregar varios componentes entre llaves
import Form from "react-bootstrap/Form"; //Se importa uno solo por linea
import Button from "react-bootstrap/Button";
import ListaTareas from "./ListaTareas";
import { useState, useEffect } from "react";



const FormularioTarea = () => {
  let tareasDelLocalStorage = JSON.parse(localStorage.getItem('listaTareas')) || []; // guardo en una variable las tareas del localstorage
  const [tarea, setTarea] = useState("");
  const [arrayTareas, setArrayTareas] = useState(tareasDelLocalStorage); //se cargan las tareas del localstorage en el montaje


  //ciclo de vida
  useEffect(()=>{
    localStorage.setItem('listaTareas', JSON.stringify(arrayTareas)) ;
  },[arrayTareas])
//   se agrega un segundo parametro que indica el state donde se ejecutara la funcion
  const handleSubmit = (e) => {
    e.preventDefault();
    setArrayTareas([...arrayTareas, tarea]);
    setTarea("");
  };

  const borrarTarea = (nombreTarea) =>{
    let copiaTareas = arrayTareas.filter((itemTarea)=> itemTarea !== nombreTarea)
    setArrayTareas(copiaTareas)
  }
   const editarTarea = (nombreTarea, nuevoNombreTarea) => {
    const copiaTareas = arrayTareas.map((itemTarea) => {
      if (itemTarea === nombreTarea) {
        return nuevoNombreTarea;
      }
      return itemTarea;
    });
  
    setArrayTareas(copiaTareas);
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
      <ListaTareas tareas={arrayTareas} borrarTarea={borrarTarea} editarTarea={editarTarea}></ListaTareas>
    </>
  );
};

export default FormularioTarea;
