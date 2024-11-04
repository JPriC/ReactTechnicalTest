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

- **Functionality:** The page header hides when the user scrolls down and reappears when the user scrolls up, allowing easy access to different pages without the header occupying unnecessary space.
- **Implementation Details:**
  - In `MainNavigation.js`: Added an event listener within `useEffect()` to detect scrolling, and created a `handleScroll` function to manage the navbar’s state.
  - In `MainNavigation.css`: Applied CSS classes that control the header’s visibility and position with smooth transitions.

### 2. **SEO-Friendly URL Navigation**

- **Functionality:** Users can navigate to different pages from the header, with each navigation reflected in the URL (e.g., `/favorites` for the favorites page), enhancing SEO and usability.
- **Implementation Details:**
  - Used `React Router` (via the `react-router-dom` dependency) to manage routing within the application.
  - Defined specific routes for each page (e.g., `/`, `/favorites`, `/all-meetups`).
  - Updated header links to use `Link` for navigation and `useLocation` to access the current route.

### 3. **Functional Add/Remove Favorites Button**

- **Functionality:** Users can add or remove meetups from their favorites list by clicking a button that visually changes state to indicate whether the meetup is favorited.
- **Implementation Details:**
  - Implemented **Context API** (`favoritesContext.js`) to manage the global state of favorites.
  - Used `localStorage` as a temporary solution, given that the backend storage solution for favorites is not yet determined.
  - In the `MeetupItem` component, added logic to check if a meetup is in favorites and toggle its status accordingly.
  - Updated the button’s visual state with dynamic CSS classes, which change the color and apply smooth animations on click.

### 4. **Testing Implementation**

- **Functionality:** Added unit tests to verify that core functionalities, such as adding and removing favorites, work correctly.
- **Implementation Details:**
  - Utilized `Jest` and `React Testing Library` alongside `Enzyme` to write unit tests.
  - Wrote tests for the favorites context to verify the add and remove methods.
  - Added tests for key components like `MeetupItem` and `Favorites` to confirm correct rendering and responsiveness to user interactions.

## 🛠️ Tools and Technologies Used

- `React`: Primary library for building the user interface.
- `React Router`: For managing navigation and routing within the application.
- `Context API`: For global state management of favorites.
- `CSS Modules`: For component-based styling and avoiding naming conflicts.
- `Jest and React Testing Library`: For unit testing.

## 🎨 Styles and Animations

- **Custom Scrollbar:** Enhanced the scrollbar’s appearance in the `.content` container for the meetup.
- **Smooth Animations:** Applied smooth transitions to the header and favorite buttons, enhancing user experience by making interactions feel more fluid and natural.

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
