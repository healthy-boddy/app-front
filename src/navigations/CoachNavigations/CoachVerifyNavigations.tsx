import * as React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

let Tab = createBottomTabNavigator();

import {
    GreetingsScreen,
    GreetingsScreen2,
    GreetingsScreen3,
    GreetingsScreen4,
    GreetingsScreen5,
    FirstScreen,
    ConstructorScreen,
    CalendarScreen,
    FirstTutorialScreen,
    SecondTutorialScreen,
    TutorialQuestionsScreen,
    ThirdTutorialScreen,
    SecondFirstTutorialScreen,
    SecondTwoTutorialScreen,
    SecondThirdTutorialScreen,
    ThirdDayTutorialScreen,
    SelfLoveScreen,
    EditingScreen
} from '../../screens/CoacheScreens/AuthScreens'
import {TabNavigatorElem} from "../ClientNavigations/tab-bar-elem/tab-navigation-elems";
import {HomeSvg} from "../ClientNavigations/icons/home";
import {Constructor} from "./icons/constructor";
import {CalendarSvg} from "../ClientNavigations/icons/calendar";
import {ClientDetailsPage} from "../../screens/CoacheScreens/MainScreens/client-details-page";

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

function ConstructorPage() {
    return <ConstructorScreen/>
}

function CalendarPage() {
    return <CalendarScreen/>
}

function FirstTutorial() {
    return <FirstTutorialScreen/>
}

function SecondTutorial() {
    return <SecondTutorialScreen/>
}

function TutorialQuestions() {
    return <TutorialQuestionsScreen/>
}

function ThirdTutorial() {
    return <ThirdTutorialScreen/>
}

function SecondFirstTutorial() {
    return <SecondFirstTutorialScreen/>
}

function SecondTwoTutorial() {
    return <SecondTwoTutorialScreen/>
}

function SecondThirdTutorial() {
    return <SecondThirdTutorialScreen/>
}

function ThirdDayTutorial() {
    return <ThirdDayTutorialScreen/>
}
function SelfLove() {
    return <SelfLoveScreen/>
}
function Editing() {
    return <EditingScreen/>
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

            <Tab.Screen name='Greetings5' component={Greetings5}
                        options={({route}) => ({
                            tabBarButton: () => null,
                            tabBarStyle: {display: 'none'},
                        })}
            />

            <Tab.Screen name='FirstTutorial' component={FirstTutorial}
                        options={({route}) => ({
                            tabBarButton: () => null,
                            tabBarStyle: {display: 'none'},
                        })}
            />

            <Tab.Screen name={'ClientDetailsPage'} component={ClientDetailsPage}
                        options={({route}) => ({
                            tabBarButton: () => null,
                            tabBarStyle: {display: 'none'},
                        })}/>

            <Tab.Screen name='SecondTutorial' component={SecondTutorial}
                        options={({route}) => ({
                            tabBarButton: () => null,
                            tabBarStyle: {display: 'none'},
                        })}
            />
            <Tab.Screen name='TutorialQuestions' component={TutorialQuestions}
                        options={({route}) => ({
                            tabBarButton: () => null,
                            tabBarStyle: {display: 'none'},
                        })}
            />

            <Tab.Screen name='ThirdTutorial' component={ThirdTutorial}
                        options={({route}) => ({
                            tabBarButton: () => null,
                            tabBarStyle: {display: 'none'},
                        })}
            />
            <Tab.Screen name='SecondFirstTutorial' component={SecondFirstTutorial}
                        options={({route}) => ({
                            tabBarButton: () => null,
                            tabBarStyle: {display: 'none'},
                        })}
            />
            <Tab.Screen name='SecondTwoTutorial' component={SecondTwoTutorial}
                        options={({route}) => ({
                            tabBarButton: () => null,
                            tabBarStyle: {display: 'none'},
                        })}
            />
            <Tab.Screen name='SecondThirdTutorial' component={SecondThirdTutorial}
                        options={({route}) => ({
                            tabBarButton: () => null,
                            tabBarStyle: {display: 'none'},
                        })}
            />
            <Tab.Screen name='ThirdDayTutorial' component={ThirdDayTutorial}
                        options={({route}) => ({
                            tabBarButton: () => null,
                            tabBarStyle: {display: 'none'},
                        })}
            />
            <Tab.Screen name='SelfLove' component={SelfLove}
                        options={({route}) => ({
                            tabBarButton: () => null,
                            tabBarStyle: {display: 'none'},
                        })}
            />
            <Tab.Screen name='Editing' component={Editing}
                        options={({route}) => ({
                            tabBarButton: () => null,
                            tabBarStyle: {display: 'none'},
                        })}
            />

            <Tab.Screen name='Greetings4' component={Greetings4} options={{
                tabBarIcon: ({focused}) => (
                    <TabNavigatorElem
                        colorItem={focused ? "#7454CF" : "#797979"}
                        icon={<HomeSvg color={focused ? "#7454CF" : "#797979"}/>}
                        navigatorName="Главная"
                    />
                ),
                tabBarShowLabel: false,
            }}/>

            <Tab.Screen name='CalendarPage' component={CalendarPage} options={{
                tabBarIcon: ({focused}) => (
                    <TabNavigatorElem
                        colorItem={focused ? "#7454CF" : "#797979"}
                        icon={<CalendarSvg color={focused ? "#7454CF" : "#797979"}/>}
                        navigatorName="Календарь"
                    />
                ),
                tabBarShowLabel: false,
            }}/>

            <Tab.Screen name='ConstructorPage' component={ConstructorPage} options={{
                tabBarIcon: ({focused}) => (
                    <TabNavigatorElem
                        colorItem={focused ? "#7454CF" : "#797979"}
                        icon={<Constructor color={focused ? "#7454CF" : "#797979"}/>}
                        navigatorName="Конструктор"
                    />
                ),
                tabBarShowLabel: false,
            }}/>

        </Tab.Navigator>
    )
}
