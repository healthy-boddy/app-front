import * as React from "react";

import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

let Tab = createBottomTabNavigator();

import {
    HomeScreen,
    ConditionScreen,
    AnalyzesScreen,
    QuestionsScreen,
    UserSinglePage,
    CoachSingle,
    PaidQuizzesScreen,
    TyScreen,
    AddAnalyzes,
    AddManualAnalyze

} from "../../screens/ClientScreens/MainScreens";
import {TabNavigatorElem} from "./tab-bar-elem/tab-navigation-elems";
import {HomeSvg} from "./icons/home";
import {AnalyzesSvg} from "./icons/ analyzes";
import {PersonSvg} from "./icons/person";

function Home() {
    return <HomeScreen/>;
}

function Analyzes() {
    return <AnalyzesScreen/>;
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
function CoachSingleScreen() {
    return <CoachSingle/>;
}
function PaidQuizzes() {
    return <PaidQuizzesScreen/>;
}
function TyPage() {
    return <TyScreen/>;
}

function AddAnalyzesScreen() {
    return <AddAnalyzes/>;
}
function AddManual() {
    return <AddManualAnalyze/>;
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
                name="Analyzes"
                component={Analyzes}
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
            <Tab.Screen
                name="CoachSingleScreen"
                component={CoachSingleScreen}
                options={({route}) => ({
                    tabBarButton: () => null,
                    tabBarStyle: {display: 'none'},
                })}
            />
            <Tab.Screen
                name="PaidQuizzes"
                component={PaidQuizzes}
                options={({route}) => ({
                    tabBarButton: () => null,
                    tabBarStyle: {display: 'none'},
                })}
            />
            <Tab.Screen
                name="TyPage"
                component={TyPage}
                options={({route}) => ({
                    tabBarButton: () => null,
                    tabBarStyle: {display: 'none'},
                })}
            />
            <Tab.Screen
                name="AddAnalyzes"
                component={AddAnalyzesScreen}
                options={({route}) => ({
                    tabBarButton: () => null,
                    tabBarStyle: {display: 'none'},
                })}
            />
            <Tab.Screen
                name="AddManual"
                component={AddManual}
                options={({route}) => ({
                    tabBarButton: () => null,
                    tabBarStyle: {display: 'none'},
                })}
            />
        </Tab.Navigator>
    );
}
