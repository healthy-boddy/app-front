import * as React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

let Tab = createBottomTabNavigator();

import {
    HomeScreen,
    ConditionScreen,
    CalendarScreen
} from "../../screens/ClientScreens/MainScreens";
import HomeIcon from "./TabBarIcons/HomeIcon";
import CalendarIcon from "./TabBarIcons/CalendarIcon";
import PropertyIcon from "./TabBarIcons/PropertyIcon";

function Home() {
    return <HomeScreen/>
}
function Calendar() {
    return <CalendarScreen/>
}
function Condition() {
    return <ConditionScreen/>
}

export default function ClientMain(){
    return(
        <Tab.Navigator
            initialRouteName='Main'
            screenOptions={{
                headerShown: false
            }}>
            <Tab.Screen name='Главная' component={Home} options={{
                tabBarIcon: ({}) => (
                    <HomeIcon name='ios-home' size={25}/>
                ),

            }}/>
            <Tab.Screen name='Календарь' component={Calendar} options={{
                tabBarIcon: ({}) => (
                    <CalendarIcon name='ios-home' size={25}/>
                ),

            }}/>
            <Tab.Screen name='Состояние' component={Condition} options={{
                tabBarIcon: ({}) => (
                    <PropertyIcon name='ios-home' size={25}/>
                ),

            }}/>
        </Tab.Navigator>
    )
}
