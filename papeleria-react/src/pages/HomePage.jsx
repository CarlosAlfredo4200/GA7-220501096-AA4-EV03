import { Link } from 'react-router'

/**
 * Página inicial del sistema.
 */
function HomePage() {
  return (
    <section className="home">
      <div className="hero-card">
        <span className="badge">GA7 - AA4 - EV03</span>

        <h2>Sistema de Gestión de Papelería</h2>

        <p>
          Aplicación front-end desarrollada con React para gestionar
          productos de papelería mediante operaciones de registro,
          consulta, edición y eliminación.
        </p>

        <div className="hero-actions">
          <Link to="/productos" className="btn btn-primary">
            Ver productos
          </Link>

          <Link to="/productos/nuevo" className="btn btn-secondary">
            Registrar producto
          </Link>
        </div>
      </div>

      <div className="features">
        <article className="feature-card">
          <h3>Registrar</h3>
          <p>
            Permite agregar nuevos productos al inventario.
          </p>
        </article>

        <article className="feature-card">
          <h3>Consultar</h3>
          <p>
            Permite visualizar los productos registrados.
          </p>
        </article>

        <article className="feature-card">
          <h3>Editar</h3>
          <p>
            Permite actualizar la información de cada producto.
          </p>
        </article>

        <article className="feature-card">
          <h3>Eliminar</h3>
          <p>
            Permite retirar productos que ya no son necesarios.
          </p>
        </article>
      </div>
    </section>
  )
}

export default HomePage