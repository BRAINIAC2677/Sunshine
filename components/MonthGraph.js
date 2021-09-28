import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { colors } from "../styles/global.js";

function MonthGraph(props) {
  const screenWidth = Dimensions.get("window").width;

  const chartConfig = {
    backgroundGradientFrom: colors.darkbg,
    backgroundGradientFromOpacity: 1,
    backgroundGradientTo: colors.darkbg,
    backgroundGradientToOpacity: 1,
    color: (opacity = 1) => colors.accent1,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };

  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        data: props.data,
        color: (opacity = 1) => colors.accent1, // optional
        strokeWidth: 2, // optional
      },
    ],
    legend: ["Sunshine"], // optional
  };

  return (
    <LineChart
      data={data}
      width={screenWidth}
      height={220}
      chartConfig={chartConfig}
    />
  );
}

export default MonthGraph;
