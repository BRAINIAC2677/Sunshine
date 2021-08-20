import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'

import About from '../pages/about'
import CalcStackNavigator from './calcStack'
import RevCalcuSTackNavigator from './revCalcStack'
import Home from '../pages/home/Home'

import {
  FontAwesome,
  Feather,
} from '@expo/vector-icons';

import {colors, fonts} from '../styles/global'

const MainTab = createBottomTabNavigator()

export default function MainTabContainer() {
  return (
    <NavigationContainer>
      <MainTab.Navigator
        initialRouteName={'Local'}
        screenOptions={({ route }) => ({
          //header style
          // header: ({ navigation, route, options }) => {
          //   const title = getHeaderTitle(options, route.name);

          //   return (
          //     <MyHeader title={title} />
          //   )
          // },
          //label
          showLabel: true,
          tabBarActiveTintColor: colors.primary,
          //icons in bottom tab
          tabBarIcon: ({ focused }) => {
            if (route.name === 'Home') {
              if (focused) {
                return (
                  <Feather name="home" size={24} color={colors.primary} />
                )
              } else {
                return (
                  <Feather name="home" size={24} color={colors.secondary} />
                )
              }
            } else if (route.name === 'Caclu') {
              if (focused) {
                return (
                  <FontAwesome name="globe" size={24} color={colors.primary} />
                )
              } else {
                return (
                  <FontAwesome name="globe" size={24} color={colors.secondary} />
                )
              }
            } else if (route.name === 'RevCalcu') {
              if (focused) {
                return (
                  <Feather name="settings" size={24} color={colors.primary} />
                )
              } else {
                return (
                  <Feather name="settings" size={24} color={colors.secondary} />
                )
              }
            } else if (route.name === 'About') {
              if (focused) {
                return (
                  <Feather name="info" size={24} color={colors.primary} />
                )
              } else {
                return (
                  <Feather name="info" size={24} color={colors.secondary} />
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
          name="Calcu"
          component={CalcStackNavigator}
        />

        <MainTab.Screen
          name="RevCalcu"
          component={RevCalcuSTackNavigator}
        />

        <MainTab.Screen
          name="About"
          component={About}
        />

      </MainTab.Navigator>
    </NavigationContainer>
  )
}