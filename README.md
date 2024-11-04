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

## 🚀 Implemented Features

### 1. **Animated Header with Scroll Control**

- **What It Does:** The page header hides when the user scrolls down and reappears when the user scrolls up. This allows quick access to different pages without the header taking up unnecessary space.
- **How I Did It:**
  - At `MainNavigation.js`: Used an event listener inside useEffect() to detect the scroll, and created handleScroll function to change the navbar state.
  - At `MainNavigation.css`: Applied CSS classes that control the header’s visibility and position through smooth transitions.

### 2. **SEO-Friendly URL Navigation**

- **What It Does:** From the header, users can navigate to different pages of the application, and each navigation is reflected in the URL (e.g., `/favorites` for the favorites page). This improves SEO and usability.
- **How I Did It:**
  - `React Router` to handle the application’s routing, through `react-router-dom` dependency.
  - Specific routes for each page (e.g., `/`, `/favorites`, `/all-meetups`).
  - Updated the links in the header to use `Link`, to navigate through the different routes and `useLocation`, to get the current route.

### 3. **Functional Add/Remove Favorites Button**

- **What It Does:** Users can add or remove meetups from their favorites list by clicking a button. This button visually changes its state to reflect whether the meetup is in favorites or not.
- **How I Did It:**
  - Implemented a **Context API** (`favoritesContext.js`) to manage the global state of favorites.
  -
  - In the `MeetupItem` component, added logic to check if a meetup is in favorites and to add or remove it accordingly.
  - Updated the button’s visual state using dynamic CSS classes that change the color and apply smooth animations on click.

### 4. **Implementation of Tests**

- **What It Does:** Added unit tests to ensure that main functionalities, such as adding and removing favorites, work correctly.
- **How I Did It:**
  - Used **Jest** and **React Testing Library** along with **Enzyme** to write unit tests.
  - Wrote tests for the favorites context, verifying that the add and remove methods work as expected.
  - Added tests for key components like `MeetupItem` and `Favorites` to ensure they render correctly and respond to user interactions.

## 🛠️ Tools and Technologies Used

- **React**: Main library for building the user interface.
- **React Router**: For handling navigation and routing within the application.
- **Context API**: For managing the global state of favorites.
- **CSS Modules**: For styling components in a modular way and avoiding name conflicts.
- **Jest and React Testing Library**: For writing and running unit tests.

## 🎨 Styles and Animations

- **Custom Scrollbar:** Enhanced the appearance of the scrollbar in the `.content` container of the meetup.
- **Smooth Animations:** Applied smooth transitions to the header and favorite buttons to improve the user experience, making interactions feel more fluid and natural.

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
