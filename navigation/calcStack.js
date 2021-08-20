import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import Calc from '../pages/calc'
import Map from '../pages/map/Map'

import { colors, fonts } from '../styles/global'

const CalcStack = createStackNavigator()

export default function CalcStackNavigator() {
  return (
    <CalcStack.Navigator
      initialRouteName={'Home'}
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
      <CalcStack.Screen
        name='Calc'
        component={Calc}
        options={{ headerShown: false }}
      />
      <CalcStack.Screen
        name='Map'
        component={Map}
        options={{ headerShown: false }}
      />
    </CalcStack.Navigator>
  )
}