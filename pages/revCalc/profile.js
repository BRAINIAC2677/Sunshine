import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useAuth } from '../../contexts/authContext'

const Profile = () => {

  const {logout} = useAuth()

  return (
    <View>
      <Text>Profile</Text>

      <TouchableOpacity onPress={logout}>
        <Text>
          Logout
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})
