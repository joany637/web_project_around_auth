# Tripleten web_project_around_auth
# 🌍 Proyecto Around - Red Social de Viajes

Aplicación web donde los usuarios pueden registrarse, iniciar sesión, compartir fotos de lugares, dar "me gusta" y eliminar sus propias publicaciones.

---

## ✨ Funcionalidades Principales

### 🔄 Enlace dinámico en el Encabezado
El encabezado cambia automáticamente el texto según la página en la que te encuentres:
- **En la página de Registro** → muestra **"Iniciar sesión"** → lleva al formulario de acceso
- **En la página de Iniciar sesión** → muestra **"Registrarse"** → lleva al formulario de registro

> Se implementó usando el hook `useLocation` de React Router para detectar la ruta actual y renderizar el enlace correspondiente de forma condicional.

---

### 📧 Correo del usuario en el encabezado
Cuando el usuario inicia sesión correctamente, se muestra **su correo electrónico** al lado del botón "Cerrar sesión".

- El correo se obtiene al verificar el token del usuario almacenado en `localStorage`
- Se pasa desde el componente principal `App.jsx` al `Header.jsx` mediante propiedades
- Solo se muestra cuando el usuario ha iniciado sesión (`loggedIn === true`)

---

### 🏷️ Nombre de cada tarjeta
Cada tarjeta muestra el **nombre del lugar** debajo de su imagen.

- Los datos de cada tarjeta (`name`, `link`, `likes`) se reciben desde la API
- En el componente `Card.jsx` se renderiza el nombre con la etiqueta correspondiente
- Se aplicaron estilos para que el texto se recorte con puntos suspensivos si es muy largo

---

### 🗑️ Botón de Eliminar Tarjeta
Aparece un **ícono de basura** en la esquina superior derecha **SOLO en las tarjetas creadas por el propio usuario**.

- **¿Cómo funciona?** Se compara el ID del dueño de la tarjeta con el ID del usuario actual: `card.owner._id === currentUser._id`
- Si la tarjeta es tuya → se agrega la clase `card__delete-button_is-visible` y el ícono se muestra
- Si NO es tuya → el botón permanece oculto
- Al hacer clic → se envía la petición a la API para eliminar la tarjeta del servidor y se elimina de la interfaz

> Se corrigió la ruta de las imágenes (`../../images/`) y los nombres reales de los archivos (`basurero.png`, `corazon.svg`) para que los íconos se visualicen correctamente.

---

### ❤️ Contador de "Me gusta"
- Muestra la cantidad de personas que han dado "me gusta" a cada tarjeta
- Se usó encadenamiento opcional (`card.likes?.length || 0`) para evitar errores cuando los datos aún no han cargado
- Al hacer clic en el corazón → se envía la petición al servidor y se actualiza el contador en tiempo real

---

## 🛠️ Tecnologías Utilizadas

- **React** — Componentes funcionales con Hooks
- **React Router** — Navegación entre páginas
- **CSS** — Estilos con metodología BEM
- **API REST** — Autenticación, gestión de usuarios y tarjetas
- **LocalStorage** — Almacenamiento del token de sesión


---

## 🚀 Cómo funciona el flujo completo

1. El usuario se registra o inicia sesión → recibe un token
2. El token se guarda en `localStorage` para mantener la sesión abierta
3. Al verificar el token → se cargan los datos del usuario y sus tarjetas
4. En el encabezado aparece su correo y el botón de cerrar sesión
5. En las tarjetas propias → se muestra el ícono de eliminar
6. El usuario puede dar "me gusta" o borrar sus publicaciones
7. Al cerrar sesión → se elimina el token y se redirige al inicio