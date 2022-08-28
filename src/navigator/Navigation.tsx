import {createStackNavigator} from "@react-navigation/stack";
import React from "react";
import {ScreenForAuthorisation} from "./stack";
import {TabNavigator} from "./tab-navigator/TabNavigator";

const Stack = createStackNavigator();

export type RootStackParamList = {
  Initial: undefined;
  EmailVerificationPage: undefined;
};

export default function myStack() {
  return (
    <Stack.Navigator initialRouteName="Authorisation">
      <Stack.Screen
        name="Authorisation"
        component={ScreenForAuthorisation}
        options={{
          headerShown: false,
        }}
      />

        <Stack.Screen
            name="TabNavigator"
            component={TabNavigator}
            options={{
                headerShown: false,
            }}
        />




    </Stack.Navigator>
  );
}
