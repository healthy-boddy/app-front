import * as React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

let Tab = createBottomTabNavigator();

import {
    GreetingsScreen,
    GreetingsScreen2,
    GreetingsScreen3,
    GreetingsScreen4,
    GreetingsScreen5,
    FirstScreen
} from '../../screens/CoacheScreens/AuthScreens'


function Greetings() {
    return <GreetingsScreen/>
}

function Greetings2() {
    return <GreetingsScreen2/>
}
function Greetings3() {
    return <GreetingsScreen3/>
}
function Greetings4() {
    return <GreetingsScreen4/>
}
function Greetings5() {
    return <GreetingsScreen5/>
}

function First() {
    return <FirstScreen/>
}

export default function CoachVerify() {
    return (
        <Tab.Navigator
            initialRouteName='Coach'
            screenOptions={{
                headerShown: false
            }}>
            <Tab.Screen name='First' component={First}
                        options={({route}) => ({
                            tabBarButton: () => null,
                            tabBarStyle: {display: 'none'},
                        })}
            />
            <Tab.Screen name='Greetings' component={Greetings}
                        options={({route}) => ({
                            tabBarButton: () => null,
                            tabBarStyle: {display: 'none'},
                        })}
            />
            <Tab.Screen name='Greetings2' component={Greetings2}
                        options={({route}) => ({
                            tabBarButton: () => null,
                            tabBarStyle: {display: 'none'},
                        })}
            />
            <Tab.Screen name='Greetings3' component={Greetings3}
                        options={({route}) => ({
                            tabBarButton: () => null,
                            tabBarStyle: {display: 'none'},
                        })}
            />
            <Tab.Screen name='Greetings4' component={Greetings4}
                        options={({route}) => ({
                            tabBarButton: () => null,
                            tabBarStyle: {display: 'none'},
                        })}
            />
            <Tab.Screen name='Greetings5' component={Greetings5}
                        options={({route}) => ({
                            tabBarButton: () => null,
                            tabBarStyle: {display: 'none'},
                        })}
            />
        </Tab.Navigator>
    )
}
