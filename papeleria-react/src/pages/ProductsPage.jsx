import { useEffect, useState } from 'react'
import { Link } from 'react-router'

import ProductTable from '../components/ProductTable'
import {
  deleteProduct,
  getProducts,
} from '../services/productService'

/**
 * Página encargada de consultar y administrar
 * los productos almacenados en el sistema.
 */
function ProductsPage() {
  const [productos, setProductos] = useState([])

  /**
   * Carga los productos almacenados.
   */
  const cargarProductos = () => {
    setProductos(getProducts())
  }

  useEffect(() => {
    cargarProductos()
  }, [])

  /**
   * Solicita confirmación antes de eliminar
   * un producto.
   */
  const handleDelete = (producto) => {
    const confirmar = window.confirm(
      `¿Está seguro de eliminar "${producto.nombre}"?`,
    )

    if (!confirmar) {
      return
    }

    deleteProduct(producto.id)
    cargarProductos()
  }

  return (
    <section className="page">
      <div className="page-header">
        <div>
          <span className="badge">
            Gestión de inventario
          </span>

          <h2>Productos</h2>

          <p>
            Consulta y administra los productos
            registrados en el sistema.
          </p>
        </div>

        <Link
          to="/productos/nuevo"
          className="btn btn-primary"
        >
          + Registrar producto
        </Link>
      </div>

      <ProductTable
        productos={productos}
        onDelete={handleDelete}
      />
    </section>
  )
}

export default ProductsPage