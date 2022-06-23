import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import * as React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./src/components/Home";
import Settings from "./src/components/Settings";
import Plus from "./src/components/Plus";
import PlusIcon from "react-native-vector-icons/Entypo";
import SettingsIcon from "react-native-vector-icons/Ionicons";
import StackIcon from "react-native-vector-icons/Octicons";
import OnBoarding from "./src/components/OnBoarding";



const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tabs.Navigator
      initialRouteName="Home"
      screenOptions={{
        keyboardHidesTabBar: true,
        activeTintColor: "black",
        showLabel: true,
        tabBarStyle: { height: 80,backgroundColor: "#f3f3f3"},
      }}
    >
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: ({ focused, color }) => (
            <Text
              style={{
                color: focused ? "#5e41f6" : "#737277",
                fontSize: 12,
                fontWeight: 500,
              }}
            ></Text>
          ),
          tabBarIcon: ({ focused, color, size }) => (
            <StackIcon name="stack" size={25} color="#49A6FC" style={{marginBottom:30}}/>
          ),
        }}
      />

      <Tabs.Screen
        name="Plus"
        component={Plus}
        options={{
          headerShown: false,

          tabBarLabel: ({ focused, color }) => (
            <Text
              style={{
                color: focused ? "#5e41f6" : "#737277",
                fontSize: 12,
                fontWeight: 500,
              }}
            ></Text>
          ),
          tabBarStyle: { height: 500 },
          tabBarIcon: ({ focused, color, size }) => (
            <>
              <PlusIcon name="circle-with-plus" size={60} color="#49A6FC" style={{marginBottom:50}}/>
              <Image
                style={{ width: 130, height: 6,borderRadius:10,bottom:21 }}
                source={require("./assets/Home-Indicator.png")}
              />
            </>
          ),
        }}
      />
      <Stack.Screen
        name="Settings"
        component={OnBoarding}
        options={{
          headerShown: false,
          tabBarLabel: ({ focused, color }) => (
            <Text
              style={{
                color: focused ? "#5e41f6" : "#737277",
                fontSize: 12,
                fontWeight: 500,
              }}
            ></Text>
          ),
          tabBarIcon: ({ focused, color, size }) => (
            <SettingsIcon name="ios-settings-sharp" size={25} color="black" style={{marginBottom:30}}/>
          ),
        }}
      />
    </Tabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeTabs}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="light" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
