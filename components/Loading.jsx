import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { colors, fonts } from "../styles/global";

const Loading = () => {
  return (
    <View style={styles.content}>
      <Text style={styles.text}>Loading</Text>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  content: {
    height: 220,
    width: Dimensions.get("window").width - 50,
    paddingHorizontal: 20,
    backgroundColor: colors.bg2,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    marginVertical: 8,
  },
  text: {
    fontFamily: fonts.bold,
    fontSize: 20,
    color: colors.text2,
    textAlign: "center",
  },
});
