# Sistema de Gestión de Papelería

Proyecto desarrollado como parte de la evidencia **GA7-220501096-AA4-EV03 – Componente front-end del proyecto formativo y proyectos de clase** del programa de formación **Análisis y Desarrollo de Software – SENA**.

## Descripción

El Sistema de Gestión de Papelería es una aplicación web desarrollada con React que permite administrar productos de un inventario mediante una interfaz sencilla, organizada y responsive.

El proyecto fue construido aplicando conceptos de desarrollo front-end basados en componentes reutilizables, navegación entre vistas, manejo de eventos, validaciones de formularios y persistencia local de información.

## Funcionalidades

La aplicación permite:

- Visualizar la página principal.
- Consultar los productos registrados.
- Registrar nuevos productos.
- Editar productos existentes.
- Eliminar productos.
- Confirmar la eliminación antes de borrar un registro.
- Validar los datos ingresados en los formularios.
- Conservar la información mediante `localStorage`.
- Navegar entre las diferentes vistas de la aplicación.

## Tecnologías utilizadas

- React
- JavaScript
- JSX
- Vite
- React Router
- HTML5
- CSS3
- LocalStorage
- Git
- GitHub

## Componentes principales

El proyecto utiliza diferentes componentes React para separar responsabilidades y facilitar el mantenimiento del código.

### Header

Muestra el encabezado principal del sistema y las opciones de navegación.

### HomePage

Representa la página inicial de la aplicación.

### ProductsPage

Muestra el listado general de productos registrados.

### ProductTable

Organiza la información de los productos dentro de una tabla.

### ProductRow

Representa cada producto individual dentro de la tabla.

### ProductForm

Formulario reutilizable para registrar y editar productos.

## Rutas de la aplicación

La navegación del sistema está organizada de la siguiente manera:

```text
/                         Página principal
/productos                Listado de productos
/productos/nuevo          Registrar producto
/productos/editar/:id     Editar producto
```

## Validaciones implementadas

El formulario realiza diferentes validaciones antes de guardar la información:

- El nombre del producto es obligatorio.
- El nombre debe tener mínimo 3 caracteres.
- El nombre no puede superar los 100 caracteres.
- La descripción no puede superar los 255 caracteres.
- La cantidad es obligatoria.
- La cantidad debe ser un número entero.
- La cantidad no puede ser negativa.
- El precio es obligatorio.
- El precio debe ser mayor que cero.

## Persistencia de datos

Para esta evidencia front-end, los productos son almacenados utilizando `localStorage`.

Esto permite conservar la información aunque el usuario actualice o cierre temporalmente la página.

Las principales operaciones implementadas son:

```text
getProducts()
getProductById()
createProduct()
updateProduct()
deleteProduct()
```

Estas funciones se encuentran en:

```text
src/services/productService.js
```

## Estructura del proyecto

```text
papeleria-react/
│
├── public/
│
├── src/
│   │
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── ProductForm.jsx
│   │   ├── ProductTable.jsx
│   │   └── ProductRow.jsx
│   │
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── ProductsPage.jsx
│   │   └── ProductFormPage.jsx
│   │
│   ├── services/
│   │   └── productService.js
│   │
│   ├── styles/
│   │   └── styles.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── .gitignore
├── package.json
├── README.md
└── index.html
```

## Instalación

Para ejecutar el proyecto es necesario tener instalado Node.js y npm.

Clonar el repositorio:

```bash
git clone URL_DEL_REPOSITORIO
```

Ingresar al proyecto:

```bash
cd papeleria-react
```

Instalar las dependencias:

```bash
npm install
```

Ejecutar el proyecto:

```bash
npm run dev
```

Luego acceder desde el navegador a:

```text
http://localhost:5173
```

## Estándares de codificación

Durante el desarrollo se aplicaron las siguientes prácticas:

- Nombres descriptivos para variables y funciones.
- Componentes React con nombres iniciados en mayúscula.
- Separación de responsabilidades.
- Reutilización de componentes.
- Organización del código por carpetas.
- Comentarios en las partes principales del código.
- Indentación uniforme.
- Evitar duplicación innecesaria de código.
- Uso de funciones específicas para cada operación.

## Versionamiento

El proyecto utiliza Git para el control de versiones y GitHub como repositorio remoto.

Ejemplos de comandos utilizados:

```bash
git add .
git commit -m "Implementación CRUD de productos con React y localStorage"
git push
```

## Evidencia

**Código:** GA7-220501096-AA4-EV03

**Nombre:** Componente front-end del proyecto formativo y proyectos de clase.

## Autor

**Carlos Alfredo Montoya Goez**

Aprendiz  
Servicio Nacional de Aprendizaje – SENA  
2026