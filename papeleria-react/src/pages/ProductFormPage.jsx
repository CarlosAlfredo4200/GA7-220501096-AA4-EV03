import { useEffect, useState } from 'react'
import {
  Link,
  useNavigate,
  useParams,
} from 'react-router'

import ProductForm from '../components/ProductForm'

import {
  createProduct,
  getProductById,
  updateProduct,
} from '../services/productService'

/**
 * Página utilizada tanto para registrar
 * como para editar productos.
 */
function ProductFormPage() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [producto, setProducto] =
    useState(null)

  const [cargando, setCargando] =
    useState(Boolean(id))

  const esEdicion = Boolean(id)

  /**
   * Cuando existe un ID en la URL,
   * obtiene el producto que será editado.
   */
  useEffect(() => {
    if (!esEdicion) {
      return
    }

    const productoEncontrado =
      getProductById(id)

    setProducto(productoEncontrado ?? null)
    setCargando(false)
  }, [id, esEdicion])

  /**
   * Guarda un producto nuevo o actualiza
   * uno existente.
   */
  const handleSubmit = (datos) => {
    if (esEdicion) {
      updateProduct(id, datos)
    } else {
      createProduct(datos)
    }

    navigate('/productos')
  }

  if (cargando) {
    return (
      <section className="page">
        <p>Cargando producto...</p>
      </section>
    )
  }

  if (esEdicion && !producto) {
    return (
      <section className="page">
        <div className="empty-state">
          <h2>Producto no encontrado</h2>

          <p>
            El producto solicitado no existe
            en el inventario.
          </p>

          <Link
            to="/productos"
            className="btn btn-primary"
          >
            Volver a productos
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="page form-page">
      <div className="page-header">
        <div>
          <span className="badge">
            {esEdicion
              ? 'Actualizar producto'
              : 'Nuevo producto'}
          </span>

          <h2>
            {esEdicion
              ? 'Editar producto'
              : 'Registrar producto'}
          </h2>

          <p>
            {esEdicion
              ? 'Modifica la información del producto seleccionado.'
              : 'Ingresa la información del nuevo producto.'}
          </p>
        </div>

        <Link
          to="/productos"
          className="btn btn-secondary"
        >
          Volver
        </Link>
      </div>

      <ProductForm
        productoInicial={producto}
        onSubmit={handleSubmit}
        textoBoton={
          esEdicion
            ? 'Actualizar producto'
            : 'Guardar producto'
        }
      />
    </section>
  )
}

export default ProductFormPage