import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Authorisation } from "../pages/authorisation/authorisation";
import { PickRegistration } from "../pages/pick-registration-type/pick-registration";
import { EnterPhoneNumberRegistration } from "../pages/enter-phone-number-registration/enter-phone-number";
import { EnterNameSignIn } from "../pages/enter-name/enter-name-sign-in";
import { EnterPin } from "../pages/enter-pin/enter-pin";
import { PickGender } from "../pages/pick-gender/pick-gender";
import { PickBirthDate } from "../pages/pick-birth-date/pick-birth-date";
import { EnterWeight } from "../pages/enter-weight/enter-weight";
import { EnterPhoneNumberSignIn } from "../pages/enter-phone-number-sign-in/enter-phone-number";
import { EnterNameRegistration } from "../pages/enter-name/enter-name-registration";

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

const EnterPhoneNumberSignInNavigator = createStackNavigator();
export const ScreenForEnterPhoneNumberSignIn = () => {
  return (
    <EnterPhoneNumberSignInNavigator.Navigator>
      <EnterPhoneNumberSignInNavigator.Screen
        name="EnterPhoneNumberSignInStack"
        component={EnterPhoneNumberSignIn}
        options={{
          headerShown: false,
        }}
      />
    </EnterPhoneNumberSignInNavigator.Navigator>
  );
};

const EnterPhoneNumberRegistrationNavigator = createStackNavigator();
export const ScreenForEnterPhoneNumberRegistration = () => {
  return (
    <EnterPhoneNumberRegistrationNavigator.Navigator>
      <EnterPhoneNumberRegistrationNavigator.Screen
        name="EnterPhoneNumberRegistrationStack"
        component={EnterPhoneNumberRegistration}
        options={{
          headerShown: false,
        }}
      />
    </EnterPhoneNumberRegistrationNavigator.Navigator>
  );
};

const EnterNameRegistrationNavigator = createStackNavigator();
export const ScreenForEnterName = () => {
  return (
    <EnterNameRegistrationNavigator.Navigator>
      <EnterNameRegistrationNavigator.Screen
        name="EnterNameRegistrationStack"
        component={EnterNameRegistration}
        options={{
          headerShown: false,
        }}
      />
    </EnterNameRegistrationNavigator.Navigator>
  );
};

const EnterNameSignInNavigator = createStackNavigator();
export const ScreenForEnterNameSignIn = () => {
  return (
    <EnterNameSignInNavigator.Navigator>
      <EnterNameSignInNavigator.Screen
        name="EnterNameSignInStack"
        component={EnterNameSignIn}
        options={{
          headerShown: false,
        }}
      />
    </EnterNameSignInNavigator.Navigator>
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

const PickGenderNavigator = createStackNavigator();
export const ScreenForPickGender = () => {
  return (
    <PickGenderNavigator.Navigator>
      <PickGenderNavigator.Screen
        name="PickGenderTabStack"
        component={PickGender}
        options={{
          headerShown: false,
        }}
      />
    </PickGenderNavigator.Navigator>
  );
};

const EnterWeightNavigator = createStackNavigator();
export const ScreenForEnterWeight = () => {
  return (
    <EnterWeightNavigator.Navigator>
      <EnterWeightNavigator.Screen
        name="EnterWeightStack"
        component={EnterWeight}
        options={{
          headerShown: false,
        }}
      />
    </EnterWeightNavigator.Navigator>
  );
};

const PickBirthDateNavigator = createStackNavigator();
export const ScreenForPickBirthDate = () => {
  return (
    <PickBirthDateNavigator.Navigator>
      <PickBirthDateNavigator.Screen
        name="PickBirthDateStack"
        component={PickBirthDate}
        options={{
          headerShown: false,
        }}
      />
    </PickBirthDateNavigator.Navigator>
  );
};
