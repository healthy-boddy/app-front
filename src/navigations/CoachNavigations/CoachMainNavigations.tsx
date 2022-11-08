import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
let Stack = createStackNavigator();

import {
    GreetingsScreen6,
    GreetingsScreen7,
    HomeScreen

} from "../../screens/CoacheScreens/MainScreens";
import {createStackNavigator} from "@react-navigation/stack";
import {CoachTabNavigator} from "./CoachTabNavigator";
import {CoachSinglePage} from "../../screens/CoacheScreens/Profile/CoachProfile";

function Home() {
    return <HomeScreen/>
}

function Greetings6() {
    return <GreetingsScreen6/>
}
function Greetings7() {
    return <GreetingsScreen7/>
}
let Tab = createBottomTabNavigator();

export default function Main(){
    return(
    <Stack.Navigator
        initialRouteName='Greetings6'
        screenOptions={{
            headerShown: false
        }}>
        <Stack.Screen name='Greetings6' component={Greetings6}/>
        <Stack.Screen name='Greetings7' component={Greetings7}/>
        <Stack.Screen name={'Home'} component={CoachTabNavigator} />
        <Stack.Screen name={'CoachProfile'} component={CoachSinglePage} />
    </Stack.Navigator>
    )
}
