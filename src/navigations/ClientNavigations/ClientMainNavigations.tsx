import * as React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

let Tab = createBottomTabNavigator();
let Stack = createStackNavigator();

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
  AddManualAnalyze,
  SaveAnalyzes,
  AnalyseSingleScreen,
  EditAnalyseScreen,
  AnalyseResultScreen,
  UserEditNameScreen,
} from "../../screens/ClientScreens/MainScreens";
import { TabNavigatorElem } from "./tab-bar-elem/tab-navigation-elems";
import { HomeSvg } from "./icons/home";
import { AnalyzesSvg } from "./icons/ analyzes";
import { PersonSvg } from "./icons/person";
import { GoalsClientDetails } from "../../screens/ClientScreens/MainScreens/HomeScreen/goals-screen";
import { DetailsProgramClient } from "../../screens/ClientScreens/MainScreens/HomeScreen/program-details-screen";
import { TaskDetailsScreen } from "../../screens/CoacheScreens/AuthScreens/ConstructorScreen/task-details-screen";
import { TaskDetailsClientScreen } from "../../screens/CoacheScreens/MainScreens/client-programs/task-details-screen";
import { ProgramDetailGoals } from "../../screens/ClientScreens/MainScreens/HomeScreen/program-details-goals-screen";
import { TaskDetailsScreenClientFlow } from "../../screens/ClientScreens/MainScreens/HomeScreen/task-details-screen-client-flow";
import {createStackNavigator} from "@react-navigation/stack";

function Home() {
  return <HomeScreen />;
}

function Analyzes() {
  return <AnalyzesScreen />;
}

function Condition() {
  return <ConditionScreen />;
}

function Questions() {
  return <QuestionsScreen />;
}
function UserSingle() {
  return <UserSinglePage />;
}
function CoachSingleScreen() {
  return <CoachSingle />;
}
function PaidQuizzes() {
  return <PaidQuizzesScreen />;
}
function TyPage() {
  return <TyScreen />;
}

function AddAnalyzesScreen() {
  return <AddAnalyzes />;
}
function AddManual() {
  return <AddManualAnalyze />;
}
function AnalyseSingle() {
  return <AnalyseSingleScreen />;
}
function EditAnalyse() {
  return <EditAnalyseScreen />;
}
function AnalyseResult() {
  return <AnalyseResultScreen />;
}
function UserEditName() {
  return <UserEditNameScreen />;
}

function ReturnTabs(){
    return(
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
                    tabBarIcon: ({ focused }) => (
                        <TabNavigatorElem
                            colorItem={focused ? "#7454CF" : "#797979"}
                            icon={<HomeSvg color={focused ? "#7454CF" : "#797979"} />}
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
                    tabBarIcon: ({ focused }) => (
                        <TabNavigatorElem
                            colorItem={focused ? "#7454CF" : "#797979"}
                            icon={<AnalyzesSvg color={focused ? "#7454CF" : "#797979"} />}
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
                    tabBarIcon: ({ focused }) => (
                        <TabNavigatorElem
                            colorItem={focused ? "#7454CF" : "#797979"}
                            icon={<PersonSvg color={focused ? "#7454CF" : "#797979"} />}
                            navigatorName="Состояние"
                        />
                    ),
                    tabBarShowLabel: false,
                }}
            />
        </Tab.Navigator>
    )
}
export default function ClientMain() {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false,
        }}
      initialRouteName="Main">

      <Stack.Screen name={'Home'} component={ReturnTabs}/>

      <Stack.Screen
        name="Questions"
        component={Questions}
      />

      <Stack.Screen
        name="UserSingle"
        component={UserSingle}
      />
      <Stack.Screen
        name="CoachSingleScreen"
        component={CoachSingleScreen}
      />
      <Stack.Screen
        name="PaidQuizzes"
        component={PaidQuizzes}
      />
      <Stack.Screen
        name="TyPage"
        component={TyPage}
      />
      <Stack.Screen
        name="AddAnalyzes"
        component={AddAnalyzesScreen}
      />
      <Stack.Screen
        name="AddManual"
        component={AddManual}
      />
      <Stack.Screen
        name="SaveAnalyzesScreen"
        component={SaveAnalyzes}
      />
      <Stack.Screen
        name="AnalyseSingle"
        component={AnalyseSingle}
      />
      <Stack.Screen
        name="EditAnalyse"
        component={EditAnalyse}
      />
      <Tab.Screen
        name="AnalyseResult"
        component={AnalyseResult}
      />
      <Stack.Screen
        name="UserEditName"
        component={UserEditName}
      />

      <Stack.Screen
        name="GoalsClientDetails"
        component={GoalsClientDetails}
      />

      <Stack.Screen
        name="DetailsProgramClient"
        component={DetailsProgramClient}
      />

      <Stack.Screen
        name={"TaskDetails"}
        component={TaskDetailsScreen}
      />

      <Stack.Screen
        name={"TaskDetailsClientScreen"}
        component={TaskDetailsClientScreen}
      />

      <Stack.Screen
        name={"ProgramDetailGoals"}
        component={ProgramDetailGoals}
      />

      <Stack.Screen
        name={"TaskDetailsScreenClientFlow"}
        component={TaskDetailsScreenClientFlow}
      />
    </Stack.Navigator>
  );
}
