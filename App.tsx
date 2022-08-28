import React from "react";
import Navigator from './src/navigator/Navigation'
import {NavigationContainer} from "@react-navigation/native";

export default function App() {
  return (
 <NavigationContainer>
   <Navigator />
 </NavigationContainer>
  );
}

