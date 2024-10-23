# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## 🚀 Funcionalidades Implementadas

### 1. **Header Animado con Control de Scroll**

- **Qué Hace:** El header de la página se oculta cuando el usuario hace scroll hacia abajo y reaparece cuando hace scroll hacia arriba. Esto permite un acceso rápido a las distintas páginas sin que el header ocupe espacio innecesario.
- **Cómo Lo Hice:**
  - JavaScript para detectar la dirección del scroll.
  - Aplicar clases CSS que controlan la visibilidad y la posición del header mediante transiciones suaves.
  - Eventos de scroll al componente del header para manejar la lógica de mostrar u ocultar.

### 2. **Navegación con URLs Amigables para SEO**

- **Qué Hace:** Desde el header, los usuarios pueden navegar a diferentes páginas de la aplicación, y cada navegación se refleja en la URL (por ejemplo, `/favorites` para la página de favoritos). Esto mejora el SEO y la usabilidad.

- **Cómo Lo Hice:**
  - **React Router** para manejar las rutas de la aplicación.
  - Rutas específicas para cada página (e.g., `/`, `/favorites`, `/all-meetups`).
  - Actualizar los enlaces en el header para que utilicen los componentes de navegación de React Router, asegurando que la URL cambie adecuadamente al navegar.

### 3. **Botón de Añadir/Quitar de Favoritos Funcional**

- **Qué Hace:** Los usuarios pueden añadir o quitar meetups de su lista de favoritos haciendo clic en un botón. Este botón cambia de estado visualmente para reflejar si el meetup está en favoritos o no.

- **Cómo Lo Hice:**
  - Implementamos un **Context API** (`FavoritesContext`) para manejar el estado global de los favoritos.
  - En el componente `MeetupItem`, añadimos lógica para verificar si un meetup está en favoritos y para añadirlo o quitarlo según corresponda.
  - Actualizamos el estado visual del botón mediante clases CSS dinámicas que cambian el color y aplican animaciones suaves al hacer clic.

### 4. **Implementación de Tests**

- **Qué Hace:** Añadí pruebas unitarias para asegurar que las funcionalidades principales, como añadir y quitar favoritos, funcionan correctamente.
- **Cómo Lo Hice:**
  - Utilicé **Jest** y **React Testing Library** junto con **Enzyme** para escribir pruebas unitarias.
  - Tests para el contexto de favoritos, verificando que los métodos de añadir y quitar funcionan como se espera.
  - Añadí tests para componentes clave como `MeetupItem` y `Favorites` para asegurar que renderizan correctamente y responden a las interacciones del usuario.

## 🛠️ Herramientas y Tecnologías Utilizadas

- **React**: Biblioteca principal para construir la interfaz de usuario.
- **React Router**: Para manejar la navegación y las rutas de la aplicación.
- **Context API**: Para manejar el estado global de los favoritos.
- **CSS Modules**: Para estilizar los componentes de manera modular y evitar conflictos de nombres.
- **Jest y React Testing Library**: Para escribir y ejecutar tests unitarios.

## 🎨 Estilos y Animaciones

- **Scrollbar Personalizada:** Mejoramos la apariencia de la scrollbar en el contenedor `.content` del meetup.
- **Animaciones Suaves:** Aplicamos transiciones suaves en el header y en los botones de favoritos para mejorar la experiencia de usuario, haciendo que las interacciones se sientan más fluidas y naturales.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
