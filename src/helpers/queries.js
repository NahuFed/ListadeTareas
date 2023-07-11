const URL_tareas = import.meta.env.VITE_API_TAREA;

export const obtenerTareas = async () => {
  try {
    const respuesta = await fetch(URL_tareas);
    const listaTareas = await respuesta.json();
    return listaTareas;
  } catch (error) {
    console.log(error);
  }
};
export const crearTarea = async (receta) => {
  try {
    const respuesta = await fetch(URL_tareas, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(receta),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};
export const borrarTarea = async (id) => {
  try {
    const respuesta = await fetch(URL_tareas + "/" + id, {
      method: "DELETE",
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};
export const obtenerUnaTarea = async (id) => {
  try {
    const respuesta = await fetch(URL_tareas + "/" + id);
    const receta = await respuesta.json();
    return receta;
  } catch (error) {
    console.log(error);
  }
};
export const editarTarea = async (receta, id) => {
  try {
    const respuesta = await fetch(URL_tareas + "/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(receta),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};
