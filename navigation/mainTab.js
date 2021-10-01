import {
  Feather
} from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { useAuth } from '../contexts/authContext'
import About from '../pages/calculator'
import Home from '../pages/home/Home'
import { colors } from '../styles/global'
import AuthStackNavigator from "./authStack"
import CalcStackNavigator from './calcStack'
import RevCalcStackNavigator from './revCalcStack'

const MainTab = createBottomTabNavigator()

export default function MainTabContainer() {
  const {currentUser} = useAuth()
  
  return (
    <NavigationContainer>
      <MainTab.Navigator
        initialRouteName={'Local'}
        screenOptions={({ route }) => ({
          headerShown: false,
          //label
          showLabel: true,
          tabBarActiveBackgroundColor: colors.bg2,
          tabBarInactiveBackgroundColor: colors.bg1,
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.text2,
          //icons in bottom tab
          tabBarIcon: ({ focused }) => {
            if (route.name === 'Home') {
              if (focused) {
                return (
                  <Feather name="home" size={24} color={colors.primary} />
                )
              } else {
                return (
                  <Feather name="home" size={24} color={colors.text2} />
                )
              }
            } else if (route.name === 'Visualizer') {
              if (focused) {
                return (
                  <Feather name="bar-chart-2" size={24} color={colors.primary} />
                )
              } else {
                return (
                  <Feather name="bar-chart-2" size={24} color={colors.text2} />
                )
              }
            } else if (route.name === 'User') {
              if (focused) {
                return (
                  <Feather name="user" size={24} color={colors.primary} />
                )
              } else {
                return (
                  <Feather name="user" size={24} color={colors.text2} />
                )
              }
            } else if (route.name === 'About') {
              if (focused) {
                return (
                  <Feather name="info" size={24} color={colors.primary} />
                )
              } else {
                return (
                  <Feather name="info" size={24} color={colors.text2} />
                )
              }
            } else return <></>
          }
        })}
      >

        <MainTab.Screen
          name="Home"
          component={Home}
        />

        <MainTab.Screen
          name="Visualizer"
          component={CalcStackNavigator}
        />

        <MainTab.Screen
          name="User"
          component={currentUser ? RevCalcStackNavigator : AuthStackNavigator}
        />

        <MainTab.Screen
          name="About"
          component={About}
        />

      </MainTab.Navigator>
    </NavigationContainer>
  )
}