import { Formik } from 'formik'
import React, { useEffect } from 'react'
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native'
import tw from "tailwind-react-native-classnames"
import * as yup from 'yup'
import { useAuth } from '../../contexts/authContext'
import styles from '../../styles/auth'
import { colors, fonts } from '../../styles/global'
import CustomTextInput from './customTextInput'

const fomrValidation = yup.object({
  email: yup
    .string()
    .required('Email is required!')
    .email('Invalid email address!'),
  password: yup.
    string().
    required('Password is required!'),
})

export default function LoginForm() {
  const { login, loading, error, setError } = useAuth()

  useEffect(() => {
    setError(null)
  }, [])

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={fomrValidation}
      onSubmit={(values) => {
        login(values.email, values.password)
      }}
    >
      {(props) => (
        <View style={styles.formContainer}>
          
          {error && (
            <Text style={[styles.errorText, { color: "red", marginVertical: 10, textAlign: 'center', fontSize: 13 }]}>
              {error.message}
            </Text>
          )}

          <View style={styles.inputContainer}>
            <CustomTextInput
              placeholder='Email Adrress'
              onChangeText={props.handleChange('email')}
              value={props.values.email}
              icon='ios-mail'
            />
            <Text style={styles.errorText}>
              {props.touched.email && props.errors.email}
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <CustomTextInput
              placeholder='Password'
              securedTextEntry={true}
              onChangeText={props.handleChange('password')}
              value={props.values.password}
              icon='md-lock-open'
            />
            <Text style={styles.errorText}>
              {props.touched.password && props.errors.password}
            </Text>
          </View>

          <TouchableOpacity
            style={tw.style("px-8 py-3 rounded my-4", {
              backgroundColor: colors.primary
            })}
            onPress={props.handleSubmit}
          >
            {
              loading ? (
                <ActivityIndicator size='small' color='white' />
              ) : (
                <Text style={tw.style("text-white", {fontFamily: fonts.semibold})}>
                  Log in
                </Text>
              )
            }
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  )
}