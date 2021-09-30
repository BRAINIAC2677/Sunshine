import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { ContributionGraph, ProgressChart } from "react-native-chart-kit";
import { useState } from "react/cjs/react.development";
import tw from "tailwind-react-native-classnames";

const Stats = () => {

  const [selectedDate, setSelectedDate] = useState(new Date())

  return (
    <View style={tw`items-center flex`}>
      <ContributionGraph
        values={commitsData}
        endDate={new Date(new Date())}
        numDays={105}
        width={Dimensions.get("window").width}
        height={220}
        chartConfig={chartConfig}
        onDayPress={(value) => {
          setSelectedDate(value.date);
          console.log(selectedDate)
        }}
      />

      <Text>Generated vs Expected Energy</Text>
      <ProgressChart
        data={data}
        width={Dimensions.get("window").width-60}
        height={220}
        strokeWidth={12}
        radius={24}
        chartConfig={chartConfig}
        hideLegend={true}
        style={tw.style("self-center rounded-md")}
      />
    </View>
  );
};

export default Stats;

const data = {
  labels: ["Output", "Expected"], // optional
  data: [0.4, 0.6]
}

const commitsData = [
  { date: "2021-06-02", count: 1 },
  { date: "2021-05-03", count: 2 },
  { date: "2021-07-04", count: 3 },
  { date: "2021-08-05", count: 4 },
  { date: "2021-09-06", count: 5 },
  { date: "2021-07-30", count: 2 },
  { date: "2021-09-31", count: 3 },
  { date: "2021-08-01", count: 2 },
  { date: "2021-08-02", count: 4 },
  { date: "2021-06-05", count: 2 },
  { date: "2021-08-30", count: 4 },
];

const chartConfig = {
  backgroundGradientFrom: "transparent",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "transparent",
  backgroundGradientToOpacity: 0,
  color: (opacity = 1) => `rgba(26, 26, 26, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

const styles = StyleSheet.create({});
