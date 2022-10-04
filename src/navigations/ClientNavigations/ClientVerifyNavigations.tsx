import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import {
    EnterSexScreen,
    EnterAgeScreen,
    EnterRateScreen,
    EnterWeightScreen,
    OnBoarding,
    EnterRateSingleScreen
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

function EnterRateSingle({route}: any) {
    const status = route?.params.status
    return <EnterRateSingleScreen status={status}/>
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

                <Stack.Screen name={'EnterRateSingle'} component={EnterRateSingle}/>

            </Stack.Navigator>
    );
};
