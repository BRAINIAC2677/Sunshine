import React from "react";
import { StyleSheet, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import { useLocation } from "../contexts/locationContext";
import { fonts, colors } from "../styles/global";

const Location = () => {
  const { chartLocation } = useLocation();

  return (
    <View
      style={tw.style("flex pl-4 items-center justify-center", {
        borderLeftWidth: 5,
        borderLeftColor: colors.accent,
      })}
    >
      <Text
        style={tw.style("text-white text-lg", {
          fontFamily: fonts.regular,
        })}
      >
        Latitude: {parseFloat(chartLocation.coords.latitude).toFixed(2)}
      </Text>
      <Text
        style={tw.style("text-white text-lg", {
          fontFamily: fonts.regular,
        })}
      >
        Longitude: {parseFloat(chartLocation.coords.longitude).toFixed(2)}
      </Text>
    </View>
  );
};

export default Location;

const styles = StyleSheet.create({});
