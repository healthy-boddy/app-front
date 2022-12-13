import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  CalendarScreen,
  CoachSinglePage,
  FirstScreen,
  FirstTutorialScreen,
  GreetingsScreen,
  GreetingsScreen2,
  GreetingsScreen3,
  GreetingsScreen4,
  GreetingsScreen5,
  SecondFirstTutorialScreen,
  SecondThirdTutorialScreen,
  SecondTutorialScreen,
  SecondTwoTutorialScreen,
  ThirdDayTutorialScreen,
  ThirdTutorialScreen,
  TutorialQuestionsScreen,
  TyScreenFormTutorials,
  TyScreenFromSecondDay,
  CoachEditDataScreen,
  EducationAndSpecialisations,
} from "../../screens/CoacheScreens/AuthScreens";
import { TabNavigatorElem } from "../ClientNavigations/tab-bar-elem/tab-navigation-elems";
import { HomeSvg } from "../ClientNavigations/icons/home";
import { Constructor } from "./icons/constructor";
import { CalendarSvg } from "../ClientNavigations/icons/calendar";
import { ClientDetailsPage } from "../../screens/CoacheScreens/MainScreens/client-details-page";
import { ConstructorScreen } from "../../screens/CoacheScreens/AuthScreens/ConstructorScreen";
import { EditingScreen } from "../../screens/CoacheScreens/AuthScreens/ConstructorScreen/program-details-screen/editing-screen";
import { TaskDetailsScreen } from "../../screens/CoacheScreens/AuthScreens/ConstructorScreen/task-details-screen";
import { GoalsEditing } from "../../screens/CoacheScreens/AuthScreens/ConstructorScreen/goasl-editing-screen";
import { ProgramDetails } from "../../screens/CoacheScreens/AuthScreens/ConstructorScreen/program-details-screen";
import { TaskEditing } from "../../screens/CoacheScreens/AuthScreens/ConstructorScreen/task-editing-screen";
import { Goals } from "../../screens/CoacheScreens/AuthScreens/ConstructorScreen/goals-screen";
import { ClientGoalsDetailsPage } from "../../screens/CoacheScreens/MainScreens/clients-goals/global-goals-screen";
import { UserList } from "../../screens/CoacheScreens/AuthScreens/CalendarScreen/user-list-screen";
import { ClientProgramsClient } from "../../screens/CoacheScreens/MainScreens/client-programs";
import { ProgramDetailsClient } from "../../screens/CoacheScreens/MainScreens/client-programs/program-details-screen";
import { GlobalGoalsEditing } from "../../screens/CoacheScreens/MainScreens/clients-goals/global-goasl-editing-screen";
import { ClientGoals } from "../../screens/CoacheScreens/MainScreens/clients-goals";
import { ClientProgramsScreen } from "../../screens/CoacheScreens/MainScreens/client-programs/client-programs";
import { ProgramDetailsForAssign } from "../../screens/CoacheScreens/MainScreens/client-programs/program-details-for-assigne";
import { EditingScreenClient } from "../../screens/CoacheScreens/MainScreens/client-programs/editing-screen";
import { GoalsClient } from "../../screens/CoacheScreens/MainScreens/client-programs/editing-screen/goals-screen";
import { GoalsEditingClient } from "../../screens/CoacheScreens/MainScreens/client-programs/editing-screen/goasl-editing-screen";
import { ClientQuiz } from "../../screens/CoacheScreens/MainScreens/client-quiz";
import { ClientQuizDetails } from "../../screens/CoacheScreens/MainScreens/client-quiz/quiz-details";

let Tab = createBottomTabNavigator();

function Greetings() {
  return <GreetingsScreen />;
}

function Greetings2() {
  return <GreetingsScreen2 />;
}

function Greetings3() {
  return <GreetingsScreen3 />;
}

function Greetings4() {
  return <GreetingsScreen4 />;
}

function Greetings5() {
  return <GreetingsScreen5 />;
}

function First() {
  return <FirstScreen />;
}

function ConstructorPage() {
  return <ConstructorScreen />;
}

function CalendarPage() {
  return <CalendarScreen />;
}

function FirstTutorial() {
  return <FirstTutorialScreen />;
}

function SecondTutorial() {
  return <SecondTutorialScreen />;
}

function TutorialQuestions() {
  return <TutorialQuestionsScreen />;
}

function ThirdTutorial() {
  return <ThirdTutorialScreen />;
}

function SecondFirstTutorial() {
  return <SecondFirstTutorialScreen />;
}

function SecondTwoTutorial() {
  return <SecondTwoTutorialScreen />;
}

function SecondThirdTutorial() {
  return <SecondThirdTutorialScreen />;
}

function ThirdDayTutorial() {
  return <ThirdDayTutorialScreen />;
}
function TyFormTutorials() {
  return <TyScreenFormTutorials />;
}
function CoachSingleScreen() {
  return <CoachSinglePage />;
}
function TyScreenFromSecondDayPage() {
  return <TyScreenFromSecondDay />;
}
function CoachEditData() {
  return <CoachEditDataScreen />;
}

function EducationAndSpecialisationsScreen() {
  return <EducationAndSpecialisations />;
}

export default function CoachVerify() {
  return (
    <Tab.Navigator
      initialRouteName="Coach"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="First"
        component={First}
        options={({ route }) => ({
          tabBarButton: () => null,
          tabBarStyle: { display: "none" },
        })}
      />
      <Tab.Screen
        name="Greetings"
        component={Greetings}
        options={({ route }) => ({
          tabBarButton: () => null,
          tabBarStyle: { display: "none" },
        })}
      />
      <Tab.Screen
        name="Greetings2"
        component={Greetings2}
        options={({ route }) => ({
          tabBarButton: () => null,
          tabBarStyle: { display: "none" },
        })}
      />
      <Tab.Screen
        name="Greetings3"
        component={Greetings3}
        options={({ route }) => ({
          tabBarButton: () => null,
          tabBarStyle: { display: "none" },
        })}
      />

      <Tab.Screen
        name="Greetings5"
        component={Greetings5}
        options={({ route }) => ({
          tabBarButton: () => null,
          tabBarStyle: { display: "none" },
        })}
      />

      <Tab.Screen
        name="FirstTutorial"
        component={FirstTutorial}
        options={({ route }) => ({
          tabBarButton: () => null,
          tabBarStyle: { display: "none" },
        })}
      />

      <Tab.Screen
        name={"ClientDetailsPage"}
        component={ClientDetailsPage}
        options={({ route }) => ({
          tabBarButton: () => null,
          tabBarStyle: { display: "none" },
        })}
      />
      <Tab.Screen
        name={"ClientProgramsClient"}
        component={ClientProgramsClient}
        options={({ route }) => ({
          tabBarButton: () => null,
          tabBarStyle: { display: "none" },
        })}
      />

      <Tab.Screen
        name={"TaskDetails"}
        component={TaskDetailsScreen}
        options={({ route }) => ({
          tabBarButton: () => null,
          tabBarStyle: { display: "none" },
        })}
      />

      <Tab.Screen
        name="SecondTutorial"
        component={SecondTutorial}
        options={({ route }) => ({
          tabBarButton: () => null,
          tabBarStyle: { display: "none" },
        })}
      />
      <Tab.Screen
        name="TutorialQuestions"
        component={TutorialQuestions}
        options={({ route }) => ({
          tabBarButton: () => null,
          tabBarStyle: { display: "none" },
        })}
      />
      <Tab.Screen
        name="EditingScreen"
        component={EditingScreen}
        options={({ route }) => ({
          tabBarButton: () => null,
          tabBarStyle: { display: "none" },
        })}
      />

      {/*DONT DELETE - PAGE WITH DETAILS CLIENT, JUST COPY THIS CODE AND ENTER TO YOURS IN CASE OF CONFLICTS*/}

      <Tab.Screen
        name="ClientsPrograms"
        component={TaskDetailsScreen}
        options={({ route }) => ({
          tabBarButton: () => null,
          tabBarStyle: { display: "none" },
        })}
      />
      <Tab.Screen
        name="ClientGoals"
        component={ClientGoals}
        options={({ route }) => ({
          tabBarButton: () => null,
          tabBarStyle: { display: "none" },
        })}
      />

      <Tab.Screen
        name="ClientQuiz"
        component={ClientQuiz}
        options={({ route }) => ({
          tabBarButton: () => null,
          tabBarStyle: { display: "none" },
        })}
      />
      <Tab.Screen
        name="ClientQuizDetails"
        component={ClientQuizDetails}
        options={({ route }) => ({
          tabBarButton: () => null,
          tabBarStyle: { display: "none" },
        })}
      />

      <Tab.Screen
        name="TaskEditing"
        component={TaskEditing}
        options={({ route }) => ({
          tabBarButton: () => null,
          tabBarStyle: { display: "none" },
        })}
      />

      {/*DONT DELETE - PAGE WITH DETAILS CLIENT, JUST COPY THIS CODE AND ENTER TO YOURS IN CASE OF CONFLICTS*/}

      <Tab.Screen
        name="ThirdTutorial"
        component={ThirdTutorial}
        options={({ route }) => ({
          tabBarButton: () => null,
          tabBarStyle: { display: "none" },
        })}
      />
      <Tab.Screen
        name="SecondFirstTutorial"
        component={SecondFirstTutorial}
        options={({ route }) => ({
          tabBarButton: () => null,
          tabBarStyle: { display: "none" },
        })}
      />
      <Tab.Screen
        name="SecondTwoTutorial"
        component={SecondTwoTutorial}
        options={({ route }) => ({
          tabBarButton: () => null,
          tabBarStyle: { display: "none" },
        })}
      />
      <Tab.Screen
        name="SecondThirdTutorial"
        component={SecondThirdTutorial}
        options={({ route }) => ({
          tabBarButton: () => null,
          tabBarStyle: { display: "none" },
        })}
      />
      <Tab.Screen
        name="ThirdDayTutorial"
        component={ThirdDayTutorial}
        options={({ route }) => ({
          tabBarButton: () => null,
          tabBarStyle: { display: "none" },
        })}
      />

      <Tab.Screen
        name="ProgramDetails"
        component={ProgramDetails}
        options={({ route }) => ({
          tabBarButton: () => null,
          tabBarStyle: { display: "none" },
        })}
      />
      <Tab.Screen
        name="GoalsEditing"
        component={GoalsEditing}
        options={({ route }) => ({
          tabBarButton: () => null,
          tabBarStyle: { display: "none" },
        })}
      />

      <Tab.Screen
        name="Goals"
        component={Goals}
        options={({ route }) => ({
          tabBarButton: () => null,
          tabBarStyle: { display: "none" },
        })}
      />

      <Tab.Screen
        name="ConstructorScreen"
        component={ConstructorScreen}
        options={({ route }) => ({
          tabBarButton: () => null,
          tabBarStyle: { display: "none" },
        })}
      />

      <Tab.Screen
        name="TyFormTutorials"
        component={TyFormTutorials}
        options={({ route }) => ({
          tabBarButton: () => null,
          tabBarStyle: { display: "none" },
        })}
      />
      <Tab.Screen
        name="CoachSingleScreen"
        component={CoachSingleScreen}
        options={({ route }) => ({
          tabBarButton: () => null,
          tabBarStyle: { display: "none" },
        })}
      />
      <Tab.Screen
        name="TyScreenFromSecondDayPage"
        component={TyScreenFromSecondDayPage}
        options={({ route }) => ({
          tabBarButton: () => null,
          tabBarStyle: { display: "none" },
        })}
      />
      <Tab.Screen
        name="Greetings4"
        component={Greetings4}
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

      {/*<Tab.Screen*/}
      {/*  name="CalendarPage"*/}
      {/*  component={UserList}*/}
      {/*  options={{*/}
      {/*    tabBarIcon: ({ focused }) => (*/}
      {/*      <TabNavigatorElem*/}
      {/*        colorItem={focused ? "#7454CF" : "#797979"}*/}
      {/*        icon={<CalendarSvg color={focused ? "#7454CF" : "#797979"} />}*/}
      {/*        navigatorName="Календарь"*/}
      {/*      />*/}
      {/*    ),*/}
      {/*    tabBarShowLabel: false,*/}
      {/*  }}*/}
      {/*/>*/}

      <Tab.Screen
        name="ConstructorPage"
        component={ConstructorPage}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabNavigatorElem
              colorItem={focused ? "#7454CF" : "#797979"}
              icon={<Constructor color={focused ? "#7454CF" : "#797979"} />}
              navigatorName="Конструктор"
            />
          ),
          tabBarShowLabel: false,
        }}
      />

      {/*client details page*/}

      <Tab.Screen
        name="ClientGoalsDetailsPage"
        component={ClientGoalsDetailsPage}
        options={({ route }) => ({
          tabBarButton: () => null,
          tabBarStyle: { display: "none" },
        })}
      />

      <Tab.Screen
        name="GlobalGoalsEditing"
        component={GlobalGoalsEditing}
        options={({ route }) => ({
          tabBarButton: () => null,
          tabBarStyle: { display: "none" },
        })}
      />

      <Tab.Screen
        name="ClientsDetailPageWithPrograms"
        component={ClientProgramsClient}
        options={({ route }) => ({
          tabBarButton: () => null,
          tabBarStyle: { display: "none" },
        })}
      />
      <Tab.Screen
        name="ProgramDetailsClient"
        component={ProgramDetailsClient}
        options={({ route }) => ({
          tabBarButton: () => null,
          tabBarStyle: { display: "none" },
        })}
      />

      <Tab.Screen
        name="ClientProgramsScreen"
        component={ClientProgramsScreen}
        options={({ route }) => ({
          tabBarButton: () => null,
          tabBarStyle: { display: "none" },
        })}
      />

      <Tab.Screen
        name="ProgramDetailsForAssign"
        component={ProgramDetailsForAssign}
        options={({ route }) => ({
          tabBarButton: () => null,
          tabBarStyle: { display: "none" },
        })}
      />

      <Tab.Screen
        name="EditingScreenClient"
        component={EditingScreenClient}
        options={({ route }) => ({
          tabBarButton: () => null,
          tabBarStyle: { display: "none" },
        })}
      />

      <Tab.Screen
        name="GoalsEditingClient"
        component={GoalsEditingClient}
        options={({ route }) => ({
          tabBarButton: () => null,
          tabBarStyle: { display: "none" },
        })}
      />
      <Tab.Screen
        name="GoalsClient"
        component={GoalsClient}
        options={({ route }) => ({
          tabBarButton: () => null,
          tabBarStyle: { display: "none" },
        })}
      />
      <Tab.Screen
        name="CoachEditData"
        component={CoachEditData}
        options={({ route }) => ({
          tabBarButton: () => null,
          tabBarStyle: { display: "none" },
        })}
      />
      <Tab.Screen
        name="EducationAndSpecialisationsScreen"
        component={EducationAndSpecialisationsScreen}
        options={({ route }) => ({
          tabBarButton: () => null,
          tabBarStyle: { display: "none" },
        })}
      />

      {/*client details page*/}
    </Tab.Navigator>
  );
}
