import React from 'react';
import { Image, Keyboard, ScrollView, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import logo from '../../assets/favicon.png';
import LoginForm from '../../components/forms/loginForm';
import SocialConnect from '../../components/forms/socialConnect';
import { useAuth } from '../../contexts/authContext';
import styles from '../../styles/auth';


export default function Login({ navigation }) {

  const { login } = useAuth()

  function toSignup() {
    navigation.navigate('Signup')
  }

  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.topContainer}>
            <Image source={logo} style={styles.logoImage} />
            <Text style={styles.title}>Solar Stat</Text>
          </View>

          <View>
            <LoginForm />
            <TouchableOpacity>
              <Text style={styles.authInstruction}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>

          <SocialConnect />

          <TouchableOpacity onPress={toSignup}>
            <Text style={styles.authInstruction}>Don't have an account? Create now!</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  )
}