import React from "react";
import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import AppNavigator from "./navigation/NavigationContainer";


const App = () => {
  return (
    <AppNavigator />
  );
};

export default App;

AppRegistry.registerComponent(appName, () => App);


