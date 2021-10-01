import React from 'react';
import { Keyboard, ScrollView, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import RegistrationForm from '../../components/forms/registrationForm';
import SocialConnect from '../../components/forms/socialConnect';
import styles from '../../styles/auth';
import { colors } from '../../styles/global';

export default function Signup({ navigation }) {

  function toLogin() {
    navigation.navigate('Login')
  }

  return (
    <ScrollView style={tw.style("", { backgroundColor: colors.bg1 })}>
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