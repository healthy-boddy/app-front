import * as React from "react";

import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

let Tab = createBottomTabNavigator();

import {
    HomeScreen,
    ConditionScreen,
    CalendarScreen,
    QuestionsScreen,
    UserSinglePage
} from "../../screens/ClientScreens/MainScreens";
import {TabNavigatorElem} from "./tab-bar-elem/tab-navigation-elems";
import {HomeSvg} from "./icons/home";
import {CalendarSvg} from "./icons/calendar";
import {AnalyzesSvg} from "./icons/ analyzes";
import {PersonSvg} from "./icons/person";

function Home() {
    return <HomeScreen/>;
}

function Calendar() {
    return <CalendarScreen/>;
}

function Condition() {
    return <ConditionScreen/>;
}

function Questions() {
    return <QuestionsScreen/>;
}
function UserSingle() {
    return <UserSinglePage/>;
}

export default function ClientMain() {
    return (
        <Tab.Navigator
            initialRouteName="Main"
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    borderTopWidth: 0,
                },
            }}
        >
            <Tab.Screen
                name="Main"
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => (
                        <TabNavigatorElem
                            colorItem={focused ? "#7454CF" : "#797979"}
                            icon={<HomeSvg color={focused ? "#7454CF" : "#797979"}/>}
                            navigatorName="Главная"
                        />
                    ),
                    tabBarShowLabel: false,
                }}
            />

            <Tab.Screen
                name="Calendar"
                component={Calendar}
                options={{
                    tabBarIcon: ({focused}) => (
                        <TabNavigatorElem
                            colorItem={focused ? "#7454CF" : "#797979"}
                            icon={<CalendarSvg color={focused ? "#7454CF" : "#797979"}/>}
                            navigatorName="Календарь"
                        />
                    ),
                    tabBarShowLabel: false,
                }}
            />

            <Tab.Screen
                name="Analyzes"
                component={Calendar}
                options={{
                    tabBarIcon: ({focused}) => (
                        <TabNavigatorElem
                            colorItem={focused ? "#7454CF" : "#797979"}
                            icon={<AnalyzesSvg color={focused ? "#7454CF" : "#797979"}/>}
                            navigatorName="Анализы"
                        />
                    ),
                    tabBarShowLabel: false,
                }}
            />

            <Tab.Screen
                name="Person"
                component={Condition}
                options={{
                    tabBarIcon: ({focused}) => (
                        <TabNavigatorElem
                            colorItem={focused ? "#7454CF" : "#797979"}
                            icon={<PersonSvg color={focused ? "#7454CF" : "#797979"}/>}
                            navigatorName="Состояние"
                        />
                    ),
                    tabBarShowLabel: false,
                }}
            />
            <Tab.Screen
                name="Questions"
                component={Questions}
                options={({route}) => ({
                    tabBarButton: () => null,
                    tabBarStyle: {display: 'none'},
                })}
            />
            <Tab.Screen
                name="UserSingle"
                component={UserSingle}
                options={({route}) => ({
                    tabBarButton: () => null,
                    tabBarStyle: {display: 'none'},
                })}
            />
        </Tab.Navigator>
    );
}
