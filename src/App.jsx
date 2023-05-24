import { useState, useEffect } from 'react'
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {
  //Declara la función para guardar los datos de los pacientes en un array vacío
  const [pacientes, setPacientes] = useState([]);
  //Declaro una variable para guardar los datos de un paciente, es un objeto
  const [paciente, setPaciente] = useState({});

  //va a buscar si en Local Storage hay algo guardado ya para empezar con ese valor y no perder los datos
  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPacientes(pacientesLS)
    }
    obtenerLS();
  }, []);

  //Guardar los pacientes en un local Storage, convirtiendo el array a String
  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify( pacientes ));
  }, [pacientes])

  //Eliminar pacientes
  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id);
    setPacientes(pacientesActualizados)
  }

  return (
    <div className="container mx-auto mt-20">
        <Header />
        <div className="mt-12 md:flex ">
          <Formulario 
          //Añadimos una propiedad (prop) al formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
          />
          <ListadoPacientes 
          //Añadir prop para mandar la información de los pacientes añadidos
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}

          />
        </div>
    </div>
  )
}

export default App
