import React from "react";
import { Text, View, ImageBackground, StyleSheet } from "react-native";
import tw from "tailwind-react-native-classnames";

export default function Home() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/home.jpg")}
        resizeMode="cover"
        style={tw.style(styles.bg, "justify-around items-center")}
      >
        <Text style={tw.style("text-white", "text-4xl", "capitalize")}>
          welcome to sunshine
        </Text>
        <Text style={tw.style("text-white", "text-2xl", "capitalize")}>
          make yourself solar efficient
        </Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bg: {
    flex: 1,
  },
});
