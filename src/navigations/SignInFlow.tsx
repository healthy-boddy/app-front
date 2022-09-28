import * as React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

let Tab = createBottomTabNavigator();

import {
    WelcomeScreen,
    CreateAccountScreen,
    PinCodeScreen,
    EnterNameScreen,
    LoginScreen,
    LoginPinScreen,
    EmailRegistration,
    LoginWithEmailScreen,
} from '../screens/CoacheScreens/AuthScreens'

function Welcome() {
    return <WelcomeScreen/>
}

function EnterName() {
    return <EnterNameScreen/>
}

function CreateAccount({route}: any) {
    const role = route?.params?.role
    return <CreateAccountScreen role={role}/>
}

function PinCode({route}: any) {
    const {email_name} = route?.params
    return <PinCodeScreen email_name={email_name}/>
}

function Login() {
    return <LoginScreen/>
}

function EmailReg({route}: any) {
    const {role} = route?.params
    return <EmailRegistration role={role}/>
}

function LoginPin({route}: any) {
    const {phone_number, email} = route?.params
    return <LoginPinScreen email={email} phone_number={phone_number}/>
}

function LoginEmail() {
    return <LoginWithEmailScreen/>
}


export default function SignInFlow() {
    return (
        <Tab.Navigator
            initialRouteName='First'
            screenOptions={{
                headerShown: false
            }}>
            <Tab.Screen name='Welcome' component={Welcome}
                        options={({route}) => ({
                            tabBarButton: () => null,
                            tabBarStyle: {display: 'none'},
                        })}
            />
            <Tab.Screen name='EnterName' component={EnterName}
                        options={({route}) => ({
                            tabBarButton: () => null,
                            tabBarStyle: {display: 'none'},
                        })}
            />
            <Tab.Screen name='CreateAccount' component={CreateAccount}
                        options={({route}) => ({
                            tabBarButton: () => null,
                            tabBarStyle: {display: 'none'},
                        })}
            />

            <Tab.Screen name='PinCode' component={PinCode}
                        options={({route}) => ({
                            tabBarButton: () => null,
                            tabBarStyle: {display: 'none'},
                        })}
            />
            <Tab.Screen name='Login' component={Login}
                        options={({route}) => ({
                            tabBarButton: () => null,
                            tabBarStyle: {display: 'none'},
                        })}
            />
            <Tab.Screen name='LoginPin' component={LoginPin}
                        options={({route}) => ({
                            tabBarButton: () => null,
                            tabBarStyle: {display: 'none'},
                        })}
            />
            <Tab.Screen name='EmailReg' component={EmailReg}
                        options={({route}) => ({
                            tabBarButton: () => null,
                            tabBarStyle: {display: 'none'},
                        })}
            />
            <Tab.Screen name='LoginEmail' component={LoginEmail}
                        options={({route}) => ({
                            tabBarButton: () => null,
                            tabBarStyle: {display: 'none'},
                        })}
            />
        </Tab.Navigator>
    )
}
