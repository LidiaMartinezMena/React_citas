import Paciente from "./Paciente"



const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {




  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

{/*Hacer un condicional para mostrar un texto si hay o no pacientes*/}
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center ">Listado Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {""}
            <span className="text-indigo-500 font-bold">Pacientes y Citas</span>
          </p>

          {/*Paciente es una variable temporal para iterar en el array de pacientes*/}

          {pacientes.map( paciente => (
          <Paciente 
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
          />
         ))}
      </>

      ):(
        <>
          <h2 className="font-black text-3xl text-center ">No hay pacientes</h2>
            <p className="text-xl mt-5 mb-10 text-center">
              Comienza agregando {""}
              <span className="text-indigo-500 font-bold">pacientes</span>
            </p>
        </>
      )
    }


      


      
    </div>
  )
}

export default ListadoPacientes
