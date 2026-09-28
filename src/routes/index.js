import React from "react";

import { Image, Text } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Feed from "../screens/Feed";
import Find from "../screens/Find";
import Plus from "../screens/Plus";
import MessageBox from "../screens/MessageBox";
import Profile from "../screens/Profile";

import message from "../../assets/windowscomments-grey.png";
import userProfile from "../../assets/userProfile.png";
import search from "../../assets/search-grey.png";
import plusTikTokWhite from "../../assets/plusTikTok-white.png";
import home from "../../assets/home.png";

const Tab = createBottomTabNavigator();

const icons = {
  Inicio: home,
  Descobrir: search,
  Plus: plusTikTokWhite,
  "Caixa de Entrada": message,
  Eu: userProfile
};

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "grey",
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "black",
            height: 57,
            borderTopColor: "grey",
            borderTopWidth: 0.19,
            paddingVertical: 7
          },
          tabBarIcon: () => {
            const IconName = icons[route.name];

            return (
              <>
                <Image
                  source={IconName}
                  style={{
                    width: IconName === plusTikTokWhite ? 43 : 25,
                    height: IconName === plusTikTokWhite ? 28 : 25
                  }}
                />
                {route.name === "Plus" ? null : (
                  <Text style={{ color: "grey", fontSize: 10 }}>
                    {route.name}
                  </Text>
                )}
              </>
            );
          }
        })}
      >
        <Tab.Screen name="Inicio" component={Feed} />
        <Tab.Screen name="Descobrir" component={Find} />
        <Tab.Screen name="Plus" component={Plus} />
        <Tab.Screen name="Caixa de Entrada" component={MessageBox} />
        <Tab.Screen name="Eu" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
