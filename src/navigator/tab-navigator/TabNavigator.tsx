import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabNavigatorElem } from "./tab-navigation-elems";
import {Authorisation} from "../../pages/authorisation/authorisation";
import {HouseIcon} from "../icons/house";


const Tab = createBottomTabNavigator();

export const TabNavigator = () => (
  <Tab.Navigator
    initialRouteName="Wallet"
    screenOptions={{
      tabBarShowLabel: false,
    }}
  >
    <Tab.Screen
      name="Мои пациенты"
      component={Authorisation}
      options={{
        tabBarIcon: ({ focused }) => (
          <TabNavigatorElem
            colorItem={focused ? '#CDCDCD' : "#8C64FF"}
            icon={<HouseIcon color={focused ? '#CDCDCD' : "#8C64FF"} />}
            navigatorName="Home"
          />
        ),
        headerShown: false,
      }}
    />

      <Tab.Screen
          name="Календарь"
          component={Authorisation}
          options={{
              tabBarIcon: ({ focused }) => (
                  <TabNavigatorElem
                      colorItem={focused ? '#CDCDCD' : "#8C64FF"}
                      icon={<HouseIcon color={focused ? '#CDCDCD' : "#8C64FF"} />}
                      navigatorName="Home"
                  />
              ),
              headerShown: false,
          }}
      />

      <Tab.Screen
          name="Чаты"
          component={Authorisation}
          options={{
              tabBarIcon: ({ focused }) => (
                  <TabNavigatorElem
                      colorItem={focused ? '#CDCDCD' : "#8C64FF"}
                      icon={<HouseIcon color={focused ? '#CDCDCD' : "#8C64FF"} />}
                      navigatorName="Home"
                  />
              ),
              headerShown: false,
          }}
      />

      <Tab.Screen
          name="Профиль"
          component={Authorisation}
          options={{
              tabBarIcon: ({ focused }) => (
                  <TabNavigatorElem
                      colorItem={focused ? '#CDCDCD' : "#8C64FF"}
                      icon={<HouseIcon color={focused ? '#CDCDCD' : "#8C64FF"} />}
                      navigatorName="Home"
                  />
              ),
              headerShown: false,
          }}
      />


  </Tab.Navigator>
);
