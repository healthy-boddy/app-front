import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import {
    EnterSexScreen,
    EnterAgeScreen,
    EnterRateScreen,
    EnterWeightScreen,
    OnBoarding
} from '../../screens/ClientScreens/AuthScreens'

function EnterSex() {
    return <EnterSexScreen/>
}

function EnterAge() {
    return <EnterAgeScreen/>
}
function EnterRate() {
    return <EnterRateScreen/>
}
function EnterWeight() {
    return <EnterWeightScreen/>
}

function OnBoardingScreen() {
    return <OnBoarding/>
}

export default function ClientVerifyNavigations() {
    return (
            <Stack.Navigator
                screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name={'OnBoarding'} component={OnBoardingScreen}/>

                <Stack.Screen name={'EnterSex'} component={EnterSex}/>

                <Stack.Screen name={'EnterAge'} component={EnterAge}/>

                <Stack.Screen name={'EnterWeight'} component={EnterWeight}/>

                <Stack.Screen name={'EnterRate'} component={EnterRate}/>


            </Stack.Navigator>
    );
};