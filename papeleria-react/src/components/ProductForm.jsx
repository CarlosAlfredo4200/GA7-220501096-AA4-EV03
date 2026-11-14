import { useEffect, useState } from 'react'

/**
 * Formulario reutilizable para registrar
 * y editar productos del inventario.
 */
function ProductForm({
  productoInicial,
  onSubmit,
  textoBoton = 'Guardar producto',
}) {
  const [formulario, setFormulario] = useState({
    nombre: '',
    descripcion: '',
    cantidad: '',
    precio: '',
  })

  const [errores, setErrores] = useState({})

  /**
   * Si se recibe un producto existente,
   * carga sus datos en el formulario.
   */
  useEffect(() => {
    if (productoInicial) {
      setFormulario({
        nombre: productoInicial.nombre ?? '',
        descripcion: productoInicial.descripcion ?? '',
        cantidad: productoInicial.cantidad ?? '',
        precio: productoInicial.precio ?? '',
      })
    }
  }, [productoInicial])

  /**
   * Actualiza el estado del formulario
   * cuando el usuario modifica un campo.
   */
  const handleChange = (event) => {
    const { name, value } = event.target

    setFormulario((anterior) => ({
      ...anterior,
      [name]: value,
    }))

    setErrores((anteriores) => ({
      ...anteriores,
      [name]: '',
    }))
  }

  /**
   * Valida los datos antes de guardar.
   */
  const validarFormulario = () => {
    const nuevosErrores = {}

    const nombre = formulario.nombre.trim()
    const descripcion = formulario.descripcion.trim()
    const cantidad = Number(formulario.cantidad)
    const precio = Number(formulario.precio)

    if (!nombre) {
      nuevosErrores.nombre =
        'El nombre es obligatorio.'
    } else if (nombre.length < 3) {
      nuevosErrores.nombre =
        'El nombre debe tener mínimo 3 caracteres.'
    } else if (nombre.length > 100) {
      nuevosErrores.nombre =
        'El nombre no puede superar los 100 caracteres.'
    }

    if (descripcion.length > 255) {
      nuevosErrores.descripcion =
        'La descripción no puede superar los 255 caracteres.'
    }

    if (formulario.cantidad === '') {
      nuevosErrores.cantidad =
        'La cantidad es obligatoria.'
    } else if (!Number.isInteger(cantidad)) {
      nuevosErrores.cantidad =
        'La cantidad debe ser un número entero.'
    } else if (cantidad < 0) {
      nuevosErrores.cantidad =
        'La cantidad no puede ser negativa.'
    }

    if (formulario.precio === '') {
      nuevosErrores.precio =
        'El precio es obligatorio.'
    } else if (precio <= 0) {
      nuevosErrores.precio =
        'El precio debe ser mayor que cero.'
    }

    setErrores(nuevosErrores)

    return Object.keys(nuevosErrores).length === 0
  }

  /**
   * Procesa el envío del formulario.
   */
  const handleSubmit = (event) => {
    event.preventDefault()

    if (!validarFormulario()) {
      return
    }

    onSubmit({
      nombre: formulario.nombre.trim(),
      descripcion: formulario.descripcion.trim(),
      cantidad: Number(formulario.cantidad),
      precio: Number(formulario.precio),
    })
  }

  return (
    <form
      className="product-form"
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="form-group">
        <label htmlFor="nombre">
          Nombre del producto
        </label>

        <input
          id="nombre"
          name="nombre"
          type="text"
          value={formulario.nombre}
          onChange={handleChange}
          placeholder="Ejemplo: Cuaderno universitario"
          maxLength="101"
        />

        {errores.nombre && (
          <span className="validation-error">
            {errores.nombre}
          </span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="descripcion">
          Descripción
        </label>

        <textarea
          id="descripcion"
          name="descripcion"
          value={formulario.descripcion}
          onChange={handleChange}
          placeholder="Descripción del producto"
          rows="4"
          maxLength="256"
        />

        <div className="field-info">
          {formulario.descripcion.length}/255
        </div>

        {errores.descripcion && (
          <span className="validation-error">
            {errores.descripcion}
          </span>
        )}
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="cantidad">
            Cantidad
          </label>

          <input
            id="cantidad"
            name="cantidad"
            type="number"
            value={formulario.cantidad}
            onChange={handleChange}
            placeholder="0"
            step="1"
          />

          {errores.cantidad && (
            <span className="validation-error">
              {errores.cantidad}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="precio">
            Precio
          </label>

          <input
            id="precio"
            name="precio"
            type="number"
            value={formulario.precio}
            onChange={handleChange}
            placeholder="0"
            step="100"
          />

          {errores.precio && (
            <span className="validation-error">
              {errores.precio}
            </span>
          )}
        </div>
      </div>

      <div className="form-actions">
        <button
          type="submit"
          className="btn btn-primary"
        >
          {textoBoton}
        </button>
      </div>
    </form>
  )
}

export default ProductForm