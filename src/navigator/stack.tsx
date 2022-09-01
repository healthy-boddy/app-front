import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Authorisation } from "../pages/authorisation/authorisation";
import { PickRegistration } from "../pages/pick-registration-type/pick-registration";
import { EnterPhoneNumber } from "../pages/enter-phone-number/enter-phone-number";
import { EnterName } from "../pages/enter-name/enter-name";
import { EnterPin } from "../pages/enter-pin/enter-pin";

type RootStackParamList = {
  InitialPage: undefined;
  EmailVerificationPage: undefined;
  WalletCreationPage: undefined;
};

const CarouselStackNavigator = createStackNavigator<RootStackParamList>();

const AuthorisationNavigator = createStackNavigator();
export const ScreenForAuthorisation = () => {
  return (
    <AuthorisationNavigator.Navigator>
      <AuthorisationNavigator.Screen
        name="AuthorisationStack"
        component={Authorisation}
        options={{
          headerShown: false,
        }}
      />
    </AuthorisationNavigator.Navigator>
  );
};

const PickRegistrationTypeNavigator = createStackNavigator();
export const ScreenForPickRegistrationType = () => {
  return (
    <PickRegistrationTypeNavigator.Navigator>
      <PickRegistrationTypeNavigator.Screen
        name="PickRegistrationStack"
        component={PickRegistration}
        options={{
          headerShown: false,
        }}
      />
    </PickRegistrationTypeNavigator.Navigator>
  );
};

const EnterPhoneNumberNavigator = createStackNavigator();
export const ScreenForEnterPhoneNumber = () => {
  return (
    <EnterPhoneNumberNavigator.Navigator>
      <EnterPhoneNumberNavigator.Screen
        name="EnterPhoneNumberStack"
        component={EnterPhoneNumber}
        options={{
          headerShown: false,
        }}
      />
    </EnterPhoneNumberNavigator.Navigator>
  );
};

const EnterNameNavigator = createStackNavigator();
export const ScreenForEnterName = () => {
  return (
    <EnterNameNavigator.Navigator>
      <EnterNameNavigator.Screen
        name="EnterNameStack"
        component={EnterName}
        options={{
          headerShown: false,
        }}
      />
    </EnterNameNavigator.Navigator>
  );
};

const EnterPinNavigator = createStackNavigator();
export const ScreenForEnterPin = () => {
  return (
    <EnterPinNavigator.Navigator>
      <EnterPinNavigator.Screen
        name="EnterPinStack"
        component={EnterPin}
        options={{
          headerShown: false,
        }}
      />
    </EnterPinNavigator.Navigator>
  );
};
