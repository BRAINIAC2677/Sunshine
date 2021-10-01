import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { useLocation } from '../contexts/locationContext'
import { fonts } from '../styles/global'

const Location = () => {
  const {chartLocation} = useLocation()
  
  return (
    <View style={tw.style("flex items-center justify-center",)}>
      <Text style={tw.style("text-white", {fontFamily: fonts.regular})}>Latitude: {parseFloat(chartLocation.coords.latitude).toFixed(2)}</Text>
      <Text style={tw.style("text-white", {fontFamily: fonts.regular})}>Longitude: {parseFloat(chartLocation.coords.longitude).toFixed(2)}</Text>
    </View>
  )
}

export default Location

const styles = StyleSheet.create({})
