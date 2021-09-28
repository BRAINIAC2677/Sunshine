import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import tw from 'tailwind-react-native-classnames'
import { fonts } from '../styles/global'

const TimeSelector = ({temporal, setTemporal}) => {
  return (
    <View style={tw`flex-row bg-gray-200 rounded-full my-4 shadow-md`}>
        <TouchableOpacity
          onPress={() => setTemporal("daily")}
          style={[
            styles.tempoSelect,
            temporal === "daily" && { backgroundColor: "#4B4B87" },
          ]}
        >
          <Text
            style={[
              styles.tempoText,
              temporal === "daily" && { color: "white" },
            ]}
          >
            Daily
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setTemporal("monthly")}
          style={[
            styles.tempoSelect,
            temporal === "monthly" && { backgroundColor: "#4B4B87" },
          ]}
        >
          <Text
            style={[
              styles.tempoText,
              temporal === "monthly" && { color: "white" },
            ]}
          >
            Monthly
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setTemporal("climatology")}
          style={[
            styles.tempoSelect,
            temporal === "climatology" && { backgroundColor: "#4B4B87" },
          ]}
        >
          <Text
            style={[
              styles.tempoText,
              temporal === "climatology" && { color: "white" },
            ]}
          >
            Yearly
          </Text>
        </TouchableOpacity>
      </View>
  )
}

export default TimeSelector

const styles = StyleSheet.create({
  tempoSelect: {
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 100,
  },
  tempoText: {
    color: 'gray',
    fontFamily: fonts.semibold,
  },
})
