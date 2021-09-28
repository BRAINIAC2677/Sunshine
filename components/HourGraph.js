import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { colors } from "../styles/global.js";

function HourGraph(props) {
  const data = {
    labels: [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
    ],
    datasets: [
      {
        data: props.data,
        strokeWidth: 2,
        color: (opacity = 1) => colors.accent1,
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: colors.primary,
    backgroundGradientTo: colors.primary,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 2, // optional, default 3
  };

  return (
    <LineChart
      data={data}
      //width={Dimensions.get("window").width} // from react-native
      height={220}
      chartConfig={chartConfig}
      bezier
      style={{
        marginVertical: 8,
        borderRadius: 16,
      }}
    />
  );
}

export default HourGraph;
