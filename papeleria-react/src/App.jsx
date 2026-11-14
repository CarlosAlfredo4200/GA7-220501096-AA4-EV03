import { Routes, Route } from 'react-router'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import ProductFormPage from './pages/ProductFormPage'
import Header from './components/Header'
import './styles/styles.css'

/**
 * Componente principal de la aplicación.
 * Define la estructura general y las rutas del sistema.
 */
function App() {
  return (
    <>
      <Header />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/productos" element={<ProductsPage />} />
          <Route path="/productos/nuevo" element={<ProductFormPage />} />
          <Route
            path="/productos/editar/:id"
            element={<ProductFormPage />}
          />
        </Routes>
      </main>
    </>
  )
}

export default App