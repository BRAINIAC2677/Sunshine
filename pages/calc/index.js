import React from "react";

import { View, Text, TouchableOpacity } from "react-native";
import { colors } from "../../styles/global";


export default function Calc({navigation}) {
  return (
    <View>
      <Text>
        Calc
      </Text>
      <TouchableOpacity style={{backgroundColor: colors.green, padding: 4}} onPress={() => navigation.navigate('Map')}>
        <Text>Go to map</Text>
      </TouchableOpacity>
    </View>
  )
}