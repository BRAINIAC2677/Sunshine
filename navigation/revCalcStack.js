import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Header from './header'
import Map from '../pages/map/Map'
import RevCalc from '../pages/revCalc'
import { colors, fonts } from '../styles/global'

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
        name='Map'
        component={Map}
        options={{ headerTitle: (props) => <Header {...props} title="Pore nam dibo" /> }}
      />
    </RevCalcStack.Navigator>
  )
}