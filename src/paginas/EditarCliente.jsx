import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import Formulario from '../components/Formulario'

const EditarCliente = () => {

  const navigate = useNavigate();
  const { id } = useParams();
  const [client, setClient] = useState({});
  const [cargando, setCargando] = useState(false)
  useEffect(() => {
    setCargando(!cargando)
    const obtenerClienteAPI = async () => {
      try {
        const respuesta = await fetch(`https://my-json-server.typicode.com/gasteac/API-REACT-TEST/clientes/${id}/`);

        const resultado = await respuesta.json();

        setClient(resultado);
      } catch (error) {
        consol.log(error);
      }
      setTimeout(() => {
        setCargando(false)
      }, 250);
      
    };
    obtenerClienteAPI();
  }, []);

  return (
    <>
      <h1 className='font-black text-4xl text-blue-900'>Editar Cliente</h1>
      <p className='mt-3'>
        {client?.values?.nombre !== undefined ? 'Utiliza este form para editar un cliente' : "No existe este cliente"}
        
        </p>
      {client?.values?.nombre && (
      <Formulario
      client={client}
      cargando={cargando}
      >Editar cliente
      </Formulario>
      )}
    </>
  )
}

export default EditarCliente