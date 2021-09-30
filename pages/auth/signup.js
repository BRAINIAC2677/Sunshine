import React from 'react';
import { Keyboard, ScrollView, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import RegistrationForm from '../../components/forms/registrationForm';
import SocialConnect from '../../components/forms/socialConnect';
import { useAuth } from '../../contexts/authContext';
import styles from '../../styles/auth';

export default function Signup({ navigation }) {

  const { login } = useAuth()

  function toLogin() {
    navigation.navigate('Login')
  }

  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.title}>Solar Stat</Text>
        </View>

        <RegistrationForm />

        <SocialConnect />

        <TouchableOpacity onPress={toLogin}>
          <Text style={styles.authInstruction}>Already have an account? Log in!</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
    </ScrollView>
  )
}