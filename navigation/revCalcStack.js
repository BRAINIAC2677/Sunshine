import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import RevCalc from '../pages/revCalc'
import Map from '../pages/map/Map'

import { colors, fonts } from '../styles/global'

const RevCalcStack = createStackNavigator()

export default function RevCalcStackNavigator() {
  return (
    <RevCalcStack.Navigator
      initialRouteName={'RevCalc'}
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
        options={{ headerShown: false }}
      />
      <RevCalcStack.Screen
        name='Map'
        component={Map}
        options={{ headerShown: false }}
      />
    </RevCalcStack.Navigator>
  )
}