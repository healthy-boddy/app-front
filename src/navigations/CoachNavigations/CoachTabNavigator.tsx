import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {HomeScreen} from "../../screens/CoacheScreens/MainScreens";
import {TabNavigatorElem} from "../ClientNavigations/tab-bar-elem/tab-navigation-elems";
import {HomeSvg} from "../ClientNavigations/icons/home";
import {Calendar} from "./icons/calendar";
import {Constructor} from "./icons/constructor";

export const CoachTabNavigator = () => {
    let Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={{
                headerShown: false
            }}>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                        <TabNavigatorElem
                            colorItem={focused ? "#7454CF" : "#797979"}
                            icon={<HomeSvg color={focused ? "#7454CF" : "#797979"}/>}
                            navigatorName="Мои клиенты"
                        />
                    ),
                    tabBarShowLabel: false,
                }}
            />
            <Tab.Screen
                name="Calendar"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                        <TabNavigatorElem
                            colorItem={focused ? "#7454CF" : "#797979"}
                            icon={<Calendar color={focused ? "#7454CF" : "#797979"}/>}
                            navigatorName="Календарь"
                        />
                    ),
                    tabBarShowLabel: false,
                }}
            />
            <Tab.Screen
                name="Constructor"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                        <TabNavigatorElem
                            colorItem={focused ? "#7454CF" : "#797979"}
                            icon={<Constructor color={focused ? "#7454CF" : "#797979"}/>}
                            navigatorName="Конструктор"
                        />
                    ),
                    tabBarShowLabel: false,
                }}
            />
        </Tab.Navigator>
    );
};
