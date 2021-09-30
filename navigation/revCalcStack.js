import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import RevCalc from '../pages/revCalc'
import Profile from '../pages/revCalc/profile'
import { colors, fonts } from '../styles/global'
import Header from './header'

const RevCalcStack = createStackNavigator()

export default function RevCalcStackNavigator() {
  return (
    <RevCalcStack.Navigator
    initialRouteName={"RevCalc"}
    screenOptions={{
      headerStyle: {
        backgroundColor: colors.lightbg,
      },
      headerTintColor: colors.primary,
      headerTitleStyle: {
        fontFamily: fonts.bold,
      },
    }}
    >
      <RevCalcStack.Screen
        name='RevCalc'
        component={RevCalc}
        options={{ headerTitle: (props) => <Header {...props} title="User" /> }}
      />
      <RevCalcStack.Screen
        name='Profile'
        component={Profile}
        options={{ headerTitle: (props) => <Header {...props} title="Profile" /> }}
      />
    </RevCalcStack.Navigator>
  )
}