/**
 * Clave utilizada para almacenar los productos en localStorage.
 */
const STORAGE_KEY = 'papeleria_productos'

/**
 * Productos iniciales para facilitar las pruebas del sistema.
 */
const productosIniciales = [
  {
    id: '1',
    nombre: 'Cuaderno universitario',
    descripcion: 'Cuaderno cuadriculado de 100 hojas',
    cantidad: 25,
    precio: 8500,
  },
  {
    id: '2',
    nombre: 'Lapicero azul',
    descripcion: 'Lapicero de tinta azul',
    cantidad: 40,
    precio: 2500,
  },
]

/**
 * Obtiene todos los productos almacenados.
 *
 * @returns {Array} listado de productos.
 */
export function getProducts() {
  const data = localStorage.getItem(STORAGE_KEY)

  if (!data) {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(productosIniciales),
    )

    return productosIniciales
  }

  try {
    return JSON.parse(data)
  } catch {
    return []
  }
}

/**
 * Obtiene un producto por su identificador.
 *
 * @param {string} id identificador del producto.
 * @returns {Object|undefined} producto encontrado.
 */
export function getProductById(id) {
  const productos = getProducts()

  return productos.find(
    (producto) => String(producto.id) === String(id),
  )
}

/**
 * Guarda un nuevo producto.
 *
 * @param {Object} producto producto a registrar.
 * @returns {Object} producto registrado.
 */
export function createProduct(producto) {
  const productos = getProducts()

  const nuevoProducto = {
    ...producto,
    id: Date.now().toString(),
  }

  const productosActualizados = [
    ...productos,
    nuevoProducto,
  ]

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(productosActualizados),
  )

  return nuevoProducto
}

/**
 * Actualiza un producto existente.
 *
 * @param {string} id identificador del producto.
 * @param {Object} datos nuevos datos del producto.
 */
export function updateProduct(id, datos) {
  const productos = getProducts()

  const productosActualizados = productos.map(
    (producto) =>
      String(producto.id) === String(id)
        ? { ...producto, ...datos }
        : producto,
  )

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(productosActualizados),
  )
}

/**
 * Elimina un producto.
 *
 * @param {string} id identificador del producto.
 */
export function deleteProduct(id) {
  const productos = getProducts()

  const productosActualizados = productos.filter(
    (producto) =>
      String(producto.id) !== String(id),
  )

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(productosActualizados),
  )
}