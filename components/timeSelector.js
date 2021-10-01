import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import tw from 'tailwind-react-native-classnames'
import { colors, fonts } from '../styles/global'

const TimeSelector = ({temporal, setTemporal}) => {
  return (
    <View style={tw.style(`flex-row rounded-full my-4 shadow-md`, {backgroundColor: colors.secondaryBg})}>
        <TouchableOpacity
          onPress={() => setTemporal("daily")}
          style={[
            styles.tempoSelect,
            temporal === "daily" && { backgroundColor: colors.accent },
          ]}
        >
          <Text
            style={[
              styles.tempoText,
              temporal === "daily" && { color: "black" },
            ]}
          >
            Daily
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setTemporal("monthly")}
          style={[
            styles.tempoSelect,
            temporal === "monthly" && { backgroundColor: colors.accent },
          ]}
        >
          <Text
            style={[
              styles.tempoText,
              temporal === "monthly" && { color: "black" },
            ]}
          >
            Monthly
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setTemporal("climatology")}
          style={[
            styles.tempoSelect,
            temporal === "climatology" && { backgroundColor: colors.accent },
          ]}
        >
          <Text
            style={[
              styles.tempoText,
              temporal === "climatology" && { color: "black" },
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
    color: colors.text3,
    fontFamily: fonts.semibold,
  },
})
