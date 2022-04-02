import { useNavigate } from "react-router-dom"

const Cliente = ({cliente, handleEliminar}) => {
  const navigate = useNavigate()
  return (
    <tr className="text-center border-b hover:bg-gray-100">
    <td className='p-2'>{cliente.values.nombre}</td>
    <td className='p-2'>
        <p><span className="text-gray-800 uppercase font-bold">Telefono: </span> {cliente.values.tel}</p>
        <p><span className="text-gray-800 uppercase font-bold">Email: </span> {cliente.values.email}</p>
    </td>
    <td className='p-2'>{cliente.values.empresa}</td>
    <td className='p-2'>
        <button
        className="bg-green-600 hover:bg-green-700 block w-full text-white p-2 uppercase font-bold text-xs mt-2 mb-2"
        type='button'
        onClick={()=> navigate(`/clientes/${cliente.id}`)}
        >Ver</button>
        <button
        className="bg-blue-600 hover:bg-blue-700 block w-full text-white p-2 uppercase font-bold text-xs mt-2 mb-2"
        type='button'
        onClick={()=> navigate(`/clientes/editar/${cliente.id}`)}
        >Editar</button>
        <button
        className="bg-red-600 hover:bg-red-700 block w-full text-white p-2 uppercase font-bold text-xs mt-2 mb-2"
        type='button'
        onClick={()=> handleEliminar(cliente.id)}
        >Eliminar</button>
    </td>
  </tr>
  )
}

export default Cliente