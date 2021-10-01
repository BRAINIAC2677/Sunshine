import { Feather, Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import tw from "tailwind-react-native-classnames";
import Location from "../../components/location";
import { colors, fonts } from "../../styles/global";

export default function Calc({ navigation }) {
  const renderCard = (item) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(item.screen, { parameter: item.parameter })
      }
      style={tw.style("shadow-md p-4", {
        backgroundColor: item.bgColor,
        ...styles.card,
      })}
    >
      <View
        style={{
          backgroundColor: item.secColor,
          ...styles.iconBg,
        }}
      >
        {item.icon !== "water-outline" ? (
          <Feather name={item.icon} size={24} color="white" />
        ) : (
          <Ionicons name={item.icon} size={24} color="white" />
        )}
      </View>
      <Text style={styles.titleText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Visualize Data</Text>

      <ScrollView
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        
        <Location />
        
        <TouchableOpacity
          style={tw`bg-gray-600 my-8 w-48 justify-center items-center h-12 rounded-lg shadow`}
          onPress={() => navigation.navigate("Map")}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Feather name="map" size={16} color={colors.text1} />
            <Text style={styles.buttonText}>Change Location</Text>
          </View>
        </TouchableOpacity>
        
        <FlatList
          data={data}
          renderItem={({ item }) => renderCard(item)}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ alignSelf: "flex-start" }}
          numColumns={Math.ceil(data.length / 2)}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingTop: 68,
    backgroundColor: colors.bg1,
  },
  heading: {
    marginBottom: 20,
    fontFamily: fonts.bold,
    fontSize: 24,
    color: colors.text1,
  },
  card: {
    width: 150,
    height: 150,
    borderRadius: 20,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  iconBg: {
    padding: 10,
    borderRadius: 80,
    padding: 15,
    marginHorizontal: "auto",
    marginBottom: 20,
  },
  titleText: {
    fontFamily: fonts.bold,
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
  buttonText: {
    marginLeft: 12,
    fontFamily: fonts.semibold,
    color: colors.text1,
  },
});

const data = [
  {
    id: 1,
    title: "Solar Power",
    icon: "sun",
    bgColor: "#FF6968",
    secColor: "#FF8280",
    screen: "Solar",
    parameter: "ALLSKY_SFC_SW_DWN",
  },
  {
    id: 2,
    title: "Temperature",
    icon: "thermometer",
    bgColor: "#7A54FF",
    secColor: "#946BFF",
    screen: "Temperature",
    parameter: "T2M",
  },
  {
    id: 3,
    title: "Wind Flow",
    icon: "wind",
    bgColor: "#2AC3FF",
    secColor: "#39D4FD",
    screen: "Wind",
    parameter: "WS10M",
  },
  {
    id: 4,
    title: "Humidity",
    icon: "water-outline",
    bgColor: "#FF8F61",
    secColor: "#FFA57A",
    screen: "Humidity",
    parameter: "RH2M",
  },
];
