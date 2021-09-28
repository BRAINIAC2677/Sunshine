import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { fonts } from "../styles/global";

const Header = ({ title }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
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
