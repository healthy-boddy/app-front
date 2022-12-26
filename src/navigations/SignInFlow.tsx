import * as React from "react";

let Stack = createStackNavigator();

import {
  WelcomeScreen,
  CreateAccountScreen,
  PinCodeScreen,
  EnterNameScreen,
  LoginScreen,
  LoginPinScreen,
  EmailRegistration,
  LoginWithEmailScreen,
    IsNotTrustedEmailScreen
} from "../screens/CoacheScreens/AuthScreens";
import {createStackNavigator} from "@react-navigation/stack";

function Welcome() {
  return <WelcomeScreen />;
}

function EnterName() {
  return <EnterNameScreen />;
}

function CreateAccount({ route }: any) {
  return <CreateAccountScreen />;
}

function PinCode({ route }: any) {
  const email_name = route?.params?.email_name;
  const phone_number = route?.params?.phone_number;
  return <PinCodeScreen phone_number={phone_number} email_name={email_name} />;
}

function Login() {
  return <LoginScreen />;
}

function EmailReg({ route }: any) {
  return <EmailRegistration />;
}

function LoginPin({ route }: any) {
  const { phone_number, email } = route?.params;
  return <LoginPinScreen email={email} phone_number={phone_number} />;
}

function LoginEmail() {
  return <LoginWithEmailScreen />;
}
function IsNotTrustedEmail() {
  return <IsNotTrustedEmailScreen />;
}

export default function SignInFlow() {
  return (
    <Stack.Navigator
      initialRouteName="First"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Welcome"
        component={Welcome}
      />
      <Stack.Screen
        name="EnterName"
        component={EnterName}
      />
      <Stack.Screen
        name="CreateAccount"
        component={CreateAccount}
      />

      <Stack.Screen
        name="PinCode"
        component={PinCode}
      />
      <Stack.Screen
        name="Login"
        component={Login}
      />
      <Stack.Screen
        name="LoginPin"
        component={LoginPin}
      />
      <Stack.Screen
        name="EmailReg"
        component={EmailReg}
      />
      <Stack.Screen
        name="LoginEmail"
        component={LoginEmail}
      />
        <Stack.Screen
        name="IsNotTrustedEmail"
        component={IsNotTrustedEmail}
      />
    </Stack.Navigator>
  );
}
