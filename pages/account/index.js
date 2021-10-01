import { Feather } from "@expo/vector-icons";
import React from "react";
import {
  Text,
  TouchableOpacity,
  View
} from "react-native";
import tw from "tailwind-react-native-classnames";
import { colors, fonts } from "../../styles/global";

export default function RevCalc({ navigation }) {
 
  const renderCard = (item) => (
    <TouchableOpacity
      key={item.id}
      onPress={() =>
        navigation.navigate(item.screen)
      }
      style={tw.style("shadow-md px-6 py-4 flex-row rounded-lg mx-8 my-3 items-center", {
        backgroundColor: colors.secondaryBg,
      })}
    >
      <View
        style={tw.style("p-4 rounded-full mr-4", {
          backgroundColor: colors.accent,
        })}
      >
        <Feather name={item.icon} size={24} color="white" />
      </View>
      <Text style={tw.style("text-white text-xl", {fontFamily: fonts.bold})}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={tw.style(`pt-12 flex h-full`, {backgroundColor: colors.bg1})}>
        {data.map(item => renderCard(item))}
    </View>
  );
}

const data = [
  {
    id: 1,
    title: "Input Daily Data",
    icon: "sun",
    bgColor: "#FF6968",
    secColor: "#FF8280",
    screen: "Input",
  },
  {
    id: 2,
    title: "View Your Stats",
    icon: "bar-chart-2",
    bgColor: "#7A54FF",
    secColor: "#946BFF",
    screen: "Stats",
  },
  {
    id: 3,
    title: "Your Profile",
    icon: "user",
    bgColor: "#2AC3FF",
    secColor: "#39D4FD",
    screen: "Profile",
  },
];
