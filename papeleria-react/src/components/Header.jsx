import { NavLink } from 'react-router'

/**
 * Encabezado principal del Sistema de Gestión de Papelería.
 * Permite navegar entre las vistas principales.
 */
function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="brand">
          <span className="brand-icon">P</span>

          <div>
            <h1>Sistema de Papelería</h1>
            <p>Gestión de inventario</p>
          </div>
        </div>

        <nav className="nav">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Inicio
          </NavLink>

          <NavLink
            to="/productos"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Productos
          </NavLink>

          <NavLink
            to="/productos/nuevo"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Registrar producto
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header