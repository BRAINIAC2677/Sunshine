import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../styles/global";


export default function RevCalc({ navigation }) {
  return (
    <View>
      <Text>RevCalc</Text>
      <TouchableOpacity
        style={{ backgroundColor: colors.green, padding: 4 }}
        onPress={() => navigation.navigate("Map")}
      >
        <Text>Go to map</Text>
      </TouchableOpacity>
    </View>
  );
}
