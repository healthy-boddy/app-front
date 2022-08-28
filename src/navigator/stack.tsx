import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {Authorisation} from "../pages/authorisation/authorisation";

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


