import React from "react";

import { View, Text, TouchableOpacity } from "react-native";
import { colors } from "../../styles/global";

export default function Map({navigation}) {
  return (
    <View>
      <Text>
        Map
      </Text>
      <TouchableOpacity style={{backgroundColor: colors.green, padding: 4}} onPress={() => navigation.goBack()}>
        <Text>Ok</Text>
      </TouchableOpacity>
    </View>
  )
}