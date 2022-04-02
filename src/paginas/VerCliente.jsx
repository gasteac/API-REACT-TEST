import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";

const VerCliente = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [client, setClient] = useState({});
  const [cargando, setCargando] = useState(false)
  useEffect(() => {
    setCargando(!cargando)
    const obtenerClienteAPI = async () => {
      try {
        const respuesta = await fetch(`http://localhost:4001/clientes/${id}/`);

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

    cargando ? <Spinner/>:
      Object.keys(client).length === 0 ? 
      'No hay resultados':
      (
        <>
          <h1 className="font-bold mb-2 text-xl">
            CLIENTE: <span className="font-normal">{client.values.nombre}</span>
          </h1>
          <p className="font-bold mb-2">
            Empresa:{" "}
            <span className="font-normal">{client.values.empresa}</span>
          </p>
          <p className="font-bold mb-2">
            Email: <span className="font-normal">{client.values.email}</span>
          </p>
          <p className="font-bold mb-2">
            Telefono: <span className="font-normal">{client.values.tel}</span>
          </p>
          <p className="font-bold mb-4">
            Notas: <span className="font-normal">{client.values.notas}</span>
          </p>
          <button
            onClick={() => navigate("/clientes")}
            type="button"
            className="bg-blue-900 hover:bg-blue-700 block text-white p-2 uppercase font-bold text-xs mt-2 mb-2"
          >
            Volver
          </button>

          </>
          )
  );
};

export default VerCliente;
