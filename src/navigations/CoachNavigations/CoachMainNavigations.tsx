import * as React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

let Tab = createBottomTabNavigator();

import {
    HomeScreen,

} from "../../screens/CoacheScreens/MainScreens";

function Home() {
    return <HomeScreen/>
}

export default function Main(){
    return(
    <Tab.Navigator
        initialRouteName='Main'
        screenOptions={{
            headerShown: false
        }}>
        <Tab.Screen name='Home' component={Home}/>
    </Tab.Navigator>
    )
}
