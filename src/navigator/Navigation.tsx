import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import {
  ScreenForAuthorisation,
  ScreenForEnterName,
  ScreenForEnterPhoneNumberRegistration,
  ScreenForEnterPhoneNumberSignIn,
  ScreenForEnterPin,
  ScreenForEnterWeight,
  ScreenForPickBirthDate,
  ScreenForPickRegistrationType,
  ScreenForPickGender,
} from "./stack";
import { TabNavigator } from "./tab-navigator/TabNavigator";

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

      <Stack.Screen
        name="PickRegistration"
        component={ScreenForPickRegistrationType}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="EnterPhoneNumberSignIn"
        component={ScreenForEnterPhoneNumberSignIn}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="EnterPhoneNumberRegistration"
        component={ScreenForEnterPhoneNumberRegistration}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="EnterNameSignIn"
        component={ScreenForEnterName}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="EnterNameRegistration"
        component={ScreenForEnterName}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="EnterPin"
        component={ScreenForEnterPin}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="PickGender"
        component={ScreenForPickGender}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="PickBirthDate"
        component={ScreenForPickBirthDate}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="EnterWeight"
        component={ScreenForEnterWeight}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
