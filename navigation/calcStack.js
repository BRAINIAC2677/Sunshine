import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Calc from "../pages/visualizer";
import Humidity from "../pages/visualizer/humidity";
import Solar from "../pages/visualizer/solar";
import Temperature from "../pages/visualizer/temperature";
import Wind from "../pages/visualizer/wind";
import Map from "../pages/map/Map";
import { colors, fonts } from "../styles/global";
import Header from "./header";

const CalcStack = createStackNavigator();
// visualizer

export default function CalcStackNavigator() {
  return (
    <CalcStack.Navigator
      initialRouteName={"Home"}
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.bg2,
        },
        headerTintColor: colors.primary,
        headerTitleStyle: {
          fontFamily: fonts.bold,
        },
      }}
    >
      <CalcStack.Screen
        name="Calc"
        component={Calc}
        screenOptions={{ headerShown: false }}
        options={{ headerShown: false }}
      />
      <CalcStack.Screen
        name="Map"
        component={Map}
        options={{ headerTitle: (props) => <Header {...props} title="Map" /> }}
      />
      <CalcStack.Screen
        name="Solar"
        component={Solar}
        options={{
          headerTitle: (props) => (
            <Header {...props} title="Solar Irradiance" />
          ),
        }}
      />
      <CalcStack.Screen
        name="Temperature"
        component={Temperature}
        options={{
          headerTitle: (props) => <Header {...props} title="Temperature" />,
        }}
      />
      <CalcStack.Screen
        name="Wind"
        component={Wind}
        options={{
          headerTitle: (props) => <Header {...props} title="Wind Flow" />,
        }}
      />
      <CalcStack.Screen
        name="Humidity"
        component={Humidity}
        options={{
          headerTitle: (props) => <Header {...props} title="Humidity" />,
        }}
      />
    </CalcStack.Navigator>
  );
}
