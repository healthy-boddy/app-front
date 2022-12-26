import * as React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
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
import {TabNavigatorElem} from "../ClientNavigations/tab-bar-elem/tab-navigation-elems";
import {HomeSvg} from "../ClientNavigations/icons/home";
import {Constructor} from "./icons/constructor";
import {CalendarSvg} from "../ClientNavigations/icons/calendar";
import {ClientDetailsPage} from "../../screens/CoacheScreens/MainScreens/client-details-page";
import {ConstructorScreen} from "../../screens/CoacheScreens/AuthScreens/ConstructorScreen";
import {
    EditingScreen
} from "../../screens/CoacheScreens/AuthScreens/ConstructorScreen/program-details-screen/editing-screen";
import {TaskDetailsScreen} from "../../screens/CoacheScreens/AuthScreens/ConstructorScreen/task-details-screen";
import {GoalsEditing} from "../../screens/CoacheScreens/AuthScreens/ConstructorScreen/goasl-editing-screen";
import {ProgramDetails} from "../../screens/CoacheScreens/AuthScreens/ConstructorScreen/program-details-screen";
import {TaskEditing} from "../../screens/CoacheScreens/AuthScreens/ConstructorScreen/task-editing-screen";
import {Goals} from "../../screens/CoacheScreens/AuthScreens/ConstructorScreen/goals-screen";
import {ClientGoalsDetailsPage} from "../../screens/CoacheScreens/MainScreens/clients-goals/global-goals-screen";
import {UserList} from "../../screens/CoacheScreens/AuthScreens/CalendarScreen/user-list-screen";
import {ClientProgramsClient} from "../../screens/CoacheScreens/MainScreens/client-programs";
import {ProgramDetailsClient} from "../../screens/CoacheScreens/MainScreens/client-programs/program-details-screen";
import {GlobalGoalsEditing} from "../../screens/CoacheScreens/MainScreens/clients-goals/global-goasl-editing-screen";
import {ClientGoals} from "../../screens/CoacheScreens/MainScreens/clients-goals";
import {ClientProgramsScreen} from "../../screens/CoacheScreens/MainScreens/client-programs/client-programs";
import {
    ProgramDetailsForAssign
} from "../../screens/CoacheScreens/MainScreens/client-programs/program-details-for-assigne";
import {EditingScreenClient} from "../../screens/CoacheScreens/MainScreens/client-programs/editing-screen";
import {GoalsClient} from "../../screens/CoacheScreens/MainScreens/client-programs/editing-screen/goals-screen";
import {
    GoalsEditingClient
} from "../../screens/CoacheScreens/MainScreens/client-programs/editing-screen/goasl-editing-screen";
import {ClientQuiz} from "../../screens/CoacheScreens/MainScreens/client-quiz";
import {ClientQuizDetails} from "../../screens/CoacheScreens/MainScreens/client-quiz/quiz-details";
import {ClientCondition} from "../../screens/CoacheScreens/MainScreens/client-condition";
import {TaskDetailsClientScreen} from "../../screens/CoacheScreens/MainScreens/client-programs/task-details-screen";
import {
    TaskDetailsForAssign
} from "../../screens/CoacheScreens/MainScreens/client-programs/program-details-for-assigne/task-for-assigne";
import {
    GoalsForAssign
} from "../../screens/CoacheScreens/MainScreens/client-programs/program-details-for-assigne/goals-for-assigne/goals-screen";
import {
    GoalsEditingForAssign
} from "../../screens/CoacheScreens/MainScreens/client-programs/program-details-for-assigne/goals-for-assigne/goasl-editing-screen";
import {
    EditingScreenForAssign
} from "../../screens/CoacheScreens/MainScreens/client-programs/program-details-for-assigne/editing-screen-for-assign";
import {
    TaskEditingForAssign
} from "../../screens/CoacheScreens/MainScreens/client-programs/task-editing-screen-for-assign";
import {createStackNavigator} from "@react-navigation/stack";

let Tab = createBottomTabNavigator();
let Stack = createStackNavigator();

function Greetings() {
    return <GreetingsScreen/>;
}

function Greetings2() {
    return <GreetingsScreen2/>;
}

function Greetings3() {
    return <GreetingsScreen3/>;
}

function Greetings4() {
    return <GreetingsScreen4/>;
}

function Greetings5() {
    return <GreetingsScreen5/>;
}

function First() {
    return <FirstScreen/>;
}

function ConstructorPage() {
    return <ConstructorScreen/>;
}

function CalendarPage() {
    return <CalendarScreen/>;
}

function FirstTutorial() {
    return <FirstTutorialScreen/>;
}

function SecondTutorial() {
    return <SecondTutorialScreen/>;
}

function TutorialQuestions() {
    return <TutorialQuestionsScreen/>;
}

function ThirdTutorial() {
    return <ThirdTutorialScreen/>;
}

function SecondFirstTutorial() {
    return <SecondFirstTutorialScreen/>;
}

function SecondTwoTutorial() {
    return <SecondTwoTutorialScreen/>;
}

function SecondThirdTutorial() {
    return <SecondThirdTutorialScreen/>;
}

function ThirdDayTutorial() {
    return <ThirdDayTutorialScreen/>;
}

function TyFormTutorials() {
    return <TyScreenFormTutorials/>;
}

function CoachSingleScreen() {
    return <CoachSinglePage/>;
}

function TyScreenFromSecondDayPage() {
    return <TyScreenFromSecondDay/>;
}

function CoachEditData() {
    return <CoachEditDataScreen/>;
}

function EducationAndSpecialisationsScreen() {
    return <EducationAndSpecialisations/>;
}

function ReturnTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Coach"
            screenOptions={{
                headerShown: false,
            }}>
            <Tab.Screen
                name="Greetings4"
                component={Greetings4}
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
    )
}

export default function CoachVerify() {
    return (
        <Stack.Navigator
            initialRouteName="Coach"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name={'Coach'} component={ReturnTabs}/>
            <Stack.Screen
                name="First"
                component={First}/>
            <Stack.Screen
                name="Greetings"
                component={Greetings}/>
            <Stack.Screen
                name="Greetings2"
                component={Greetings2}/>
            <Stack.Screen
                name="Greetings3"
                component={Greetings3}/>

            <Stack.Screen
                name="Greetings5"
                component={Greetings5}/>

            <Stack.Screen
                name="FirstTutorial"
                component={FirstTutorial}/>

            <Stack.Screen
                name={"ClientDetailsPage"}
                component={ClientDetailsPage}/>
            <Stack.Screen
                name={"ClientProgramsClient"}
                component={ClientProgramsClient}/>

            <Stack.Screen
                name={"TaskDetails"}
                component={TaskDetailsScreen}/>
            <Stack.Screen
                name={"TaskDetailsClientScreen"}
                component={TaskDetailsClientScreen}/>

            <Stack.Screen
                name="SecondTutorial"
                component={SecondTutorial}/>
            <Stack.Screen
                name="TutorialQuestions"
                component={TutorialQuestions}/>
            <Stack.Screen
                name="EditingScreen"
                component={EditingScreen}/>

            {/*DONT DELETE - PAGE WITH DETAILS CLIENT, JUST COPY THIS CODE AND ENTER TO YOURS IN CASE OF CONFLICTS*/}

            <Stack.Screen
                name="ClientsPrograms"
                component={TaskDetailsScreen}/>
            <Stack.Screen
                name="ClientGoals"
                component={ClientGoals}/>

            <Stack.Screen
                name="ClientQuiz"
                component={ClientQuiz}/>
            <Stack.Screen
                name="ClientCondition"
                component={ClientCondition}/>

            <Stack.Screen
                name="ClientQuizDetails"
                component={ClientQuizDetails}/>

            <Stack.Screen
                name="TaskEditing"
                component={TaskEditing}/>

            {/*DONT DELETE - PAGE WITH DETAILS CLIENT, JUST COPY THIS CODE AND ENTER TO YOURS IN CASE OF CONFLICTS*/}

            <Stack.Screen
                name="ThirdTutorial"
                component={ThirdTutorial}/>
            <Stack.Screen
                name="SecondFirstTutorial"
                component={SecondFirstTutorial}/>
            <Stack.Screen
                name="SecondTwoTutorial"
                component={SecondTwoTutorial}/>
            <Stack.Screen
                name="SecondThirdTutorial"
                component={SecondThirdTutorial}/>
            <Stack.Screen
                name="ThirdDayTutorial"
                component={ThirdDayTutorial}/>

            <Stack.Screen
                name="ProgramDetails"
                component={ProgramDetails}/>
            <Stack.Screen
                name="GoalsEditing"
                component={GoalsEditing}/>

            <Stack.Screen
                name="Goals"
                component={Goals}/>

            <Stack.Screen
                name="ConstructorScreen"
                component={ConstructorScreen}/>

            <Stack.Screen
                name="TyFormTutorials"
                component={TyFormTutorials}/>
            <Stack.Screen
                name="CoachSingleScreen"
                component={CoachSingleScreen}/>
            <Stack.Screen
                name="TyScreenFromSecondDayPage"
                component={TyScreenFromSecondDayPage}/>

            {/*client details page*/}

            <Stack.Screen
                name="ClientGoalsDetailsPage"
                component={ClientGoalsDetailsPage}/>

            <Stack.Screen
                name="GlobalGoalsEditing"
                component={GlobalGoalsEditing}/>

            <Stack.Screen
                name="ClientsDetailPageWithPrograms"
                component={ClientProgramsClient}
            />
            <Stack.Screen
                name="ProgramDetailsClient"
                component={ProgramDetailsClient}/>

            <Stack.Screen
                name="ClientProgramsScreen"
                component={ClientProgramsScreen} />

            <Stack.Screen
                name="ProgramDetailsForAssign"
                component={ProgramDetailsForAssign}/>

            <Stack.Screen
                name="EditingScreenClient"
                component={EditingScreenClient}/>

            <Stack.Screen
                name="GoalsEditingClient"
                component={GoalsEditingClient}/>
            <Stack.Screen
                name="GoalsClient"
                component={GoalsClient}/>
            <Stack.Screen
                name="CoachEditData"
                component={CoachEditData}/>
            <Stack.Screen
                name="EducationAndSpecialisationsScreen"
                component={EducationAndSpecialisationsScreen}/>

            <Stack.Screen
                name="TaskDetailsForAssign"
                component={TaskDetailsForAssign}/>

            <Stack.Screen
                name="GoalsForAssign"
                component={GoalsForAssign}/>

            <Stack.Screen
                name="GoalsEditingForAssign"
                component={GoalsEditingForAssign}/>

            <Stack.Screen
                name="EditingScreenForAssign"
                component={EditingScreenForAssign}/>

            <Stack.Screen
                name="TaskEditingForAssign"
                component={TaskEditingForAssign}/>

            {/*client details page*/}
        </Stack.Navigator>
    );
}
