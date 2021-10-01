import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors, fonts } from "../styles/global";

const Header = ({ title }) => {
  return (
    <View>
      <Text style={[styles.title, { color: colors.text1 }]}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontFamily: fonts.bold,
    margin: 10,
  },
});
