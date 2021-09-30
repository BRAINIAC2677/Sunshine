import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function RevCalc({ navigation }) {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <Text>Go to Profile</Text>
      </TouchableOpacity>
      
    </View>
  );
}
