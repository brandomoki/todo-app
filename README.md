# Todo List - Context

Authors: Brandon Pitts paired often with Stephen Clemmer

> **Describe how global state is consumed by the components**

React tracks state usage in render so that if only the part of state consumed by the component is changed, it will re-render only the components that require re-rendering.[Source](https://www.basefactor.com/global-state-with-react)

> **Describe the operation of the hook: useForm()**

 This function takes in a callback function and default values, and returns an object with a

* handleChange function, a handleSubmit function, and a values object. The callback is the callback function that will be called when the form is submitted.
* @param [defaultValues] - an object with the default values for the form

## [x] Implement the React Context API for defining settings across the entire application

* [x] Create a Context file for managing application display settings and provide this at the application level.
* [x] Display or Hide completed items (boolean).
* [x] Number of items to display per screen (number).
* [x] Default sort field (string).
* [x] Manually set (hard code) those state settings in the context provider’s state, they should not be changeable.

## [x] Consume and utilize context values throughout your components

* [x] Show a maximum of a certain number of items per screen in the <List /> component
* [x] Use the Mantine Pagination component to let the users navigate a long list of items
* [x] Hide completed items in the list (the ability to show will be added in a later lab)

## [x] Pagination

* [x] Only display the first n items in the list, where n is the number to display per screen in your settings context.
* [x] If you have more than n items in the list, the Pagination Component will add a button that, when clicked, will replace the list with the next n items in the list.
* [x] the Pagination Component will also manage the previous (<) and next(>) arrow buttons upon correct implementation.

## [x] Style

* [x] Style the application using the Mantine Component API{target:_blank}
* [x] Use the image comp found in the lab instructions to style your ToDo App

## Resources

I transcribed content from Ryan's in-class demo code.
[React Context API Tutorial](https://www.youtube.com/watch?v=3yrMcx02jXs)

<!-- ______________________________________________________ -->
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
