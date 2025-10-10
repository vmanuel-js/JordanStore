# 🛍️ JordanStore

**JordanStore** es una aplicación web de e-commerce desarrollada con **React.js + Vite**, que permite explorar, filtrar y comprar ropa urbana.  
Utiliza **Firebase Firestore** para la gestión de productos y órdenes, siguiendo las mejores prácticas del ecosistema de React.

---

## 🚀 Características principales

- 🧭 **Navegación SPA** con React Router.
- 🔥 **Firebase Firestore** para productos, categorías y órdenes.
- 🛒 **Carrito de compras global** con Context API.
- 💬 **Notificaciones en tiempo real** con React Hot Toast.
- 🕓 **Loaders dinámicos** con react-spinners.
- ✅ **Formulario de compra validado**, que genera una orden en Firestore.
- 🎨 **Interfaz moderna y responsiva** con React-Bootstrap.
- 🧩 **Arquitectura modular y escalable** con separación entre lógica y vista.

---

## ⚙️ Tecnologías utilizadas

| Categoría                      | Tecnologías                     |
| ------------------------------ | ------------------------------- |
| **Frontend**                   | React.js 19, Vite               |
| **Enrutamiento**               | React Router 7                  |
| **Base de datos**              | Firebase Firestore              |
| **Estilos y UI**               | React-Bootstrap, Bootstrap 5    |
| **Estado global**              | Context API                     |
| **Feedback UX**                | React Hot Toast, React Spinners |
| **Herramientas de desarrollo** | ESLint, globals, React Refresh  |

---

## 📦 Dependencias principales

Desde el archivo `package.json`:

```json
"dependencies": {
  "bootstrap": "^5.3.8",
  "firebase": "^12.3.0",
  "react": "^19.1.1",
  "react-bootstrap": "^2.10.10",
  "react-dom": "^19.1.1",
  "react-hot-toast": "^2.6.0",
  "react-router": "^7.9.1",
  "react-spinners": "^0.17.0"
}
```

---

## 🧭 Rutas principales

| Ruta            | Descripción                       |
| --------------- | --------------------------------- |
| `/`             | Lista general de productos        |
| `/category/:id` | Filtra productos por categoría    |
| `/prod/:id`     | Muestra el detalle de un producto |
| `/cart`         | Carrito de compras                |
| `/checkout`     | Formulario de compra              |

---

## 🧾 Flujo de usuario

1. El usuario accede al catálogo y navega entre categorías.
2. Visualiza el detalle de un producto y lo agrega al carrito.
3. Desde el carrito, puede modificar cantidades o eliminar productos.
4. Completa el formulario de compra y confirma la orden.
5. La orden se registra en Firebase Firestore con un ID único.
6. Se muestra una notificación de éxito con react-hot-toast.

---

## 👨‍💻 Autor

Victor Manuel Jordan Solis

Proyecto desarrollado como entrega final del curso de React.js

9/10/2025

Coderhouse
