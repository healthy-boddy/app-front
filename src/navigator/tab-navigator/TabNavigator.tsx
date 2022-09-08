import React from "react";
import { SafeAreaView, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabNavigatorElem } from "./tab-navigation-elems";
import { Calendar } from "../icons/calendar";
import { HomeIcon } from "../icons/house";
import { ForkAndKnife } from "../icons/fork-and-knife";
import { Person } from "../icons/person";
import { Chat } from "../icons/chat";
import { MainPage } from "../../screens/tab-screens/main-page/main-page";

const Tab = createBottomTabNavigator();

export const TabNavigator = () => (
  <Tab.Navigator
    initialRouteName="Главная"
    screenOptions={{
      tabBarShowLabel: false,
    }}
  >
    <Tab.Screen
      name="Home"
      component={MainPage}
      options={{
        tabBarIcon: ({ focused }) => (
          <TabNavigatorElem
            colorItem={focused ? "#8C64FF" : "#CDCDCD"}
            icon={<HomeIcon color={focused ? "#8C64FF" : "#CDCDCD"} />}
            navigatorName="Главная"
          />
        ),
        headerShown: false,
      }}
    />

    <Tab.Screen
      name="Calendar"
      component={React.useCallback(
        () => (
          <SafeAreaView>
            <Text>Calendar</Text>
          </SafeAreaView>
        ),
        []
      )}
      options={{
        tabBarIcon: ({ focused }) => (
          <TabNavigatorElem
            colorItem={focused ? "#8C64FF" : "#CDCDCD"}
            icon={<Calendar color={focused ? "#8C64FF" : "#CDCDCD"} />}
            navigatorName="Календарь"
          />
        ),
        headerShown: false,
      }}
    />

    <Tab.Screen
      name="Food and water"
      component={React.useCallback(
        () => (
          <SafeAreaView>
            <Text>Food and water</Text>
          </SafeAreaView>
        ),
        []
      )}
      options={{
        tabBarIcon: ({ focused }) => (
          <TabNavigatorElem
            colorItem={focused ? "#8C64FF" : "#CDCDCD"}
            icon={<ForkAndKnife color={focused ? "#8C64FF" : "#CDCDCD"} />}
            navigatorName="Еда и вода"
          />
        ),
        headerShown: false,
      }}
    />

    <Tab.Screen
      name="health status"
      component={React.useCallback(
        () => (
          <SafeAreaView>
            <Text>Health status</Text>
          </SafeAreaView>
        ),
        []
      )}
      options={{
        tabBarIcon: ({ focused }) => (
          <TabNavigatorElem
            colorItem={focused ? "#8C64FF" : "#CDCDCD"}
            icon={<Person color={focused ? "#8C64FF" : "#CDCDCD"} />}
            navigatorName="Состояние"
          />
        ),
        headerShown: false,
      }}
    />

    <Tab.Screen
      name="Chat"
      component={React.useCallback(
        () => (
          <SafeAreaView>
            <Text>Chat</Text>
          </SafeAreaView>
        ),
        []
      )}
      options={{
        tabBarIcon: ({ focused }) => (
          <TabNavigatorElem
            colorItem={focused ? "#8C64FF" : "#CDCDCD"}
            icon={<Chat color={focused ? "#8C64FF" : "#CDCDCD"} />}
            navigatorName="Чат"
          />
        ),
        headerShown: false,
      }}
    />
  </Tab.Navigator>
);
