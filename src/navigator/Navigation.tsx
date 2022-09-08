import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import {
  ScreenForAuthorisation,
  ScreenForEnterName,
  ScreenForEnterPhoneNumberRegistration,
  ScreenForEnterPin,
  ScreenForEnterWeight,
  ScreenForPickBirthDate,
  ScreenForPickRegistrationType,
  ScreenForPickGender,
  ScreenForTariffPage,
  ScreenForPickMentor,
  ScreenForQuizPageOne,
  ScreenForQuizPageTwo,
  ScreenForCoachIsReady,
} from "./stack";
import { TabNavigator } from "./tab-navigator/TabNavigator";
import { CoachIsReady } from "../screens/coach-is-ready-page/coach-is-ready";

const Stack = createStackNavigator();

export type RootStackParamList = {
  Initial: undefined;
  EmailVerificationPage: undefined;
};

export default function myStack() {
  return (
    <Stack.Navigator initialRouteName="CoachIsReady">
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

      <Stack.Screen
        name="TariffPage"
        component={ScreenForTariffPage}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="PickMentor"
        component={ScreenForPickMentor}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="QuizPageOne"
        component={ScreenForQuizPageOne}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="QuizPageTwo"
        component={ScreenForQuizPageTwo}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CoachIsReady"
        component={ScreenForCoachIsReady}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
