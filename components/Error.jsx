import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { colors, fonts } from "../styles/global";

const Error = ({ error }) => {
  return (
    <View style={styles.content}>
      <Text style={styles.text}>{error.message}</Text>
    </View>
  );
};

export default Error;

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
