import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import { colors, fonts } from "../../styles/global";

export default function Home({navigation}) {
  return (
    <View style={tw.style(styles.container)}>
      <View
        style={tw.style(
          styles.upper,
          "justify-center items-center rounded-b-full"
        )}
      >
        <Text
          style={tw.style(
            `capitalize tracking-widest text-4xl text-black text-center`,
            {fontFamily: fonts.semibold}
          )}
        >
          sunshine{"\n\n"}
          <Text style={tw.style(`tracking-wide text-xl`)}>
            {" "}
            make yourself solar efficient
          </Text>
        </Text>
        <Image
          source={require("../../assets/sun.png")}
          style={tw.style("drop-shadow-lg")}
        />
      </View>
      <View style={tw.style(styles.lower, "px-6 justify-around")}>
        <Text
          style={tw.style(styles.tag, "mt-4 capitalize text-left text-3xl", {fontFamily: fonts.regular})}
        >
          explore your solar {"\n"}possibilities
        </Text>
        <TouchableOpacity
          style={tw.style(
            styles.button,
            "flex-row justify-center items-center h-12 p-4 rounded-xl"
          )}
        >
          <Text style={tw.style("mr-4 capitalize text-xl", {fontFamily: fonts.semibold})}
            onPress={() => navigation.navigate("Visualizer")}
          >
            get started
          </Text>
          <AntDesign name="arrowright" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryBg,
  },
  upper: {
    flex: 4,
    backgroundColor: colors.accent,
  },
  lower: {
    flex: 2,
  },
  tag: {
    color: colors.accent,
  },
  button: {
    backgroundColor: colors.accent,
  },
});
