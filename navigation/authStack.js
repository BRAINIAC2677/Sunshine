import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Login from '../pages/auth/login'
import Signup from '../pages/auth/signup'
import { colors, fonts } from '../styles/global'
import Header from './header'


const AuthStack = createStackNavigator()

export default function AuthStackNavigator() {
  return (
    <AuthStack.Navigator
    initialRouteName={"Sign Up"}
    screenOptions={{
      headerStyle: {
        backgroundColor: colors.bg,
      },
      headerTintColor: colors.primary,
      headerTitleStyle: {
        fontFamily: fonts.bold,
      },
    }}
    >
      <AuthStack.Screen
        name='Signup'
        component={Signup}
        options={{ headerTitle: (props) => <Header {...props} title="Sign up" /> }}
      />
      <AuthStack.Screen
        name='Login'
        component={Login}
        options={{ headerTitle: (props) => <Header {...props} title="Login" /> }}
      />
    </AuthStack.Navigator>
  )
}