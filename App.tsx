import React from "react";
import Navigator from "./src/navigator/Navigation";
import { NavigationContainer } from "@react-navigation/native";
import { navigationRef } from "./src/navigator/helper/root-navigation";
import { Provider } from "react-redux";
import { configureStore } from "./src/store";

export default function App() {
  return (
    <Provider store={configureStore()}>
      <NavigationContainer ref={navigationRef}>
        <Navigator />
      </NavigationContainer>
    </Provider>
  );
}
