import ProductRow from './ProductRow'

/**
 * Tabla encargada de mostrar los productos
 * registrados en el inventario.
 */
function ProductTable({
  productos,
  onDelete,
}) {
  if (productos.length === 0) {
    return (
      <div className="empty-state">
        <h3>No hay productos registrados</h3>

        <p>
          Registra un nuevo producto para comenzar
          a gestionar el inventario.
        </p>
      </div>
    )
  }

  return (
    <div className="table-container">
      <table className="product-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {productos.map((producto) => (
            <ProductRow
              key={producto.id}
              producto={producto}
              onDelete={onDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ProductTable