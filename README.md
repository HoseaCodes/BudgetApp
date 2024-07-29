# Finance App

## Tech Stack

- [React Native](https://reactnative.dev/docs/environment-setup)

## Testing

### Static Analysis

ESLint - Linters analyze code to catch common errors such as unused code and to help avoid pitfalls, to flag style guide no-nos like using tabs instead of spaces (or vice versa, depending on your configuration).

TypeScript - Type checking ensures that the construct you’re passing to a function matches what the function was designed to accept, preventing passing a string to a counting function that expects a number, for instance.

### Unit Tests

Jest - Unit tests cover the smallest parts of code, like individual functions or classes.
Sometimes, when your tested objects have external dependencies, you’ll want to “mock them out.” “Mocking” is when you replace some dependency of your code with your own implementation.

When writing larger software systems, individual pieces of it need to interact with each other. In unit testing, if your unit depends on another one, you’ll sometimes end up mocking the dependency, replacing it with a fake one.


### Integration Tests

In integration testing, real individual units are combined (same as in your app) and tested together to ensure that their cooperation works as expected. This is not to say that mocking does not happen here: you’ll still need mocks (for example, to mock communication with a weather service), but you'll need them much less than in unit testing.

### Component Tests

Test Renderer or React Native Testing Library - React components are responsible for rendering your app, and users will directly interact with their output. Even if your app's business logic has high testing coverage and is correct, without component tests you may still deliver a broken UI to your users. 

- Interaction: to ensure the component behaves correctly when interacted with by a user (eg. when user presses a button)

- Rendering: to ensure the component render output used by React is correct (eg. the button's appearance and placement in the UI)

### End-to-End Tests

Detox or Appium or Maestro - In end-to-end (E2E) tests, you verify your app is working as expected on a device (or a simulator / emulator) from the user perspective.

This is done by building your app in the release configuration and running the tests against it. In E2E tests, you no longer think about React components, React Native APIs, Redux stores or any business logic. That is not the purpose of E2E tests and those are not even accessible to you during E2E testing.


## References 

### Core 

- [React Native Core Components](https://reactnative.dev/docs/components-and-apis)
- [React Native APIS](https://reactnative.dev/docs/accessibilityinfo)
- [Expo Components](https://docs.expo.dev/develop/user-interface/splash-screen/)
- [Expo Builds](https://docs.expo.dev/develop/development-builds/introduction/)
- [Expo Plugins](https://docs.expo.dev/config-plugins/introduction/)
- [Expo API](https://docs.expo.dev/versions/latest/)
- [Expo Guides](https://docs.expo.dev/guides/overview/)
- [Expo Tutorial](https://docs.expo.dev/tutorial/introduction/)
- [React Navigation](https://reactnavigation.org/docs/getting-started/)

### APIs
- [Expo Vectors](https://icons.expo.fyi/Index)
- [NativeWind](https://www.nativewind.dev/)
- [React Navigation](https://reactnavigation.org)
- [React Native Paper](https://reactnativepaper.com/)
- [React Native Paper Icons](https://callstack.github.io/react-native-paper/4.0/icons.html)
- [React Native Modal](https://www.npmjs.com/package/react-native-modal)
- [Onboarding Swiper](https://github.com/jfilter/react-native-onboarding-swiper?tab=readme-ov-file)
- [React Native Storage](https://github.com/sunnylqm/react-native-storage)
- [React Native Async](https://reactnative.dev/docs/asyncstorage#methods)


