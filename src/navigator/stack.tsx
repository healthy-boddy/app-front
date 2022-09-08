import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Authorisation } from "../screens/authorisation/authorisation";
import { PickRegistration } from "../screens/pick-registration-type/pick-registration";
import { EnterPhoneNumberRegistration } from "../screens/enter-phone-number-registration/enter-phone-number";
import { EnterNameSignIn } from "../screens/registration/enter-name/enter-name-sign-in";
import { EnterPin } from "../screens/registration/enter-pin/enter-pin";
import { PickGender } from "../screens/registration/pick-gender/pick-gender";
import { PickBirthDate } from "../screens/registration/pick-birth-date/pick-birth-date";
import { EnterWeight } from "../screens/registration/enter-weight/enter-weight";
import { EnterNameRegistration } from "../screens/registration/enter-name/enter-name-registration";
import { TariffPage } from "../screens/pick-tarification-page/tariff-page";
import { PickMentor } from "../screens/registration/pick-menthor/pick-mentor";
import { QuizOne } from "../screens/registration/quiz/quize-page-one/quiz-page-one";
import { QuizTwo } from "../screens/registration/quiz/quize-page-two/quiz-page-two";

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

const TariffPageNavigator = createStackNavigator();
export const ScreenForTariffPage = () => {
  return (
    <TariffPageNavigator.Navigator>
      <TariffPageNavigator.Screen
        name="TariffPageStack"
        component={TariffPage}
        options={{
          headerShown: false,
        }}
      />
    </TariffPageNavigator.Navigator>
  );
};

const PickMentorNavigator = createStackNavigator();
export const ScreenForPickMentor = () => {
  return (
    <PickMentorNavigator.Navigator>
      <PickMentorNavigator.Screen
        name="PickMentorStack"
        component={PickMentor}
        options={{
          headerShown: false,
        }}
      />
    </PickMentorNavigator.Navigator>
  );
};

const QuizPageOneNavigator = createStackNavigator();
export const ScreenForQuizPageOne = () => {
  return (
    <QuizPageOneNavigator.Navigator>
      <QuizPageOneNavigator.Screen
        name="QuizPageOneStack"
        component={QuizOne}
        options={{
          headerShown: false,
        }}
      />
    </QuizPageOneNavigator.Navigator>
  );
};

const QuizPageTwoNavigator = createStackNavigator();
export const ScreenForQuizPageTwo = () => {
  return (
    <QuizPageTwoNavigator.Navigator>
      <QuizPageTwoNavigator.Screen
        name="QuizPageTwoStack"
        component={QuizTwo}
        options={{
          headerShown: false,
        }}
      />
    </QuizPageTwoNavigator.Navigator>
  );
};
