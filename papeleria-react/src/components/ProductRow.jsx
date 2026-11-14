import { Link } from 'react-router'

/**
 * Representa un producto dentro de la tabla.
 */
function ProductRow({
  producto,
  onDelete,
}) {
  const precioFormateado =
    new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      maximumFractionDigits: 0,
    }).format(producto.precio)

  return (
    <tr>
      <td>{producto.id}</td>

      <td>
        <strong>{producto.nombre}</strong>
      </td>

      <td>{producto.descripcion}</td>

      <td>{producto.cantidad}</td>

      <td>{precioFormateado}</td>

      <td>
        <div className="table-actions">
          <Link
            to={`/productos/editar/${producto.id}`}
            className="btn btn-edit"
          >
            Editar
          </Link>

          <button
            type="button"
            className="btn btn-delete"
            onClick={() => onDelete(producto)}
          >
            Eliminar
          </button>
        </div>
      </td>
    </tr>
  )
}

export default ProductRow