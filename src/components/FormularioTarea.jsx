import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { obtenerTareas, crearTarea, borrarTarea, editarTarea } from "../helpers/queries";

const FormularioTarea = () => {
  const [tarea, setTarea] = useState("");
  const [arrayTareas, setArrayTareas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tareas = await obtenerTareas();
        setArrayTareas(tareas);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const nuevaTarea = { tarea };
      const respuesta = await crearTarea(nuevaTarea);
      if (respuesta.status === 201) {
        const tareasActualizadas = await obtenerTareas()
        setArrayTareas(tareasActualizadas);
        setTarea("");
        
      } else {
        console.log("Hubo un error al crear la tarea");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleBorrarTarea = async (id) => {
    try {
      const respuesta = await borrarTarea(id);
      if (respuesta && respuesta.status === 200) {
        const nuevasTareas = arrayTareas.filter((tarea) => tarea._id !== id);
        setArrayTareas(nuevasTareas);
      } else {
        console.log("Hubo un error al borrar la tarea");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditarTarea = async (id, nuevoNombreTarea) => {
    try {
      const respuesta = await editarTarea({ tarea: nuevoNombreTarea }, id);
      if (respuesta && respuesta.status === 200) {
        const nuevasTareas = arrayTareas.map((tarea) => {
          if (tarea._id === id) {
            return { ...tarea, tarea: nuevoNombreTarea };
          }
          return tarea;
        });
        setArrayTareas(nuevasTareas);
      } else {
        console.log("Hubo un error al editar la tarea");
      }
    } catch (error) {
      console.log(error);
    }
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
      <ListaTareas
        tareas={arrayTareas}
        borrarTarea={handleBorrarTarea}
        editarTarea={handleEditarTarea}
      />
    </>
  );
};

export default FormularioTarea;
