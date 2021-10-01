import moment from "moment";
import React, { useEffect } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { ContributionGraph, ProgressChart } from "react-native-chart-kit";
import { useState } from "react/cjs/react.development";
import tw from "tailwind-react-native-classnames";
import firebase from "../../config/firebaseConfig";
import { useAuth } from "../../contexts/authContext";

const Stats = () => {
  const [selectedData, setSelectedData] = useState();
  const [powerData, setPowerData] = useState(null);

  const { currentUser } = useAuth();

  useEffect(() => {
    let ans = [];
    let db = firebase.firestore();
    db.collection("powerData")
      .where("user", "==", currentUser.uid)
      .onSnapshot((snapshot) => {
        setPowerData(
          snapshot.docs.map((doc) => ({
            date: `${doc.data().date.slice(0, 4)}-${doc
              .data()
              .date.slice(4, 6)}-${doc.data().date.slice(6, 8)}`,
            count: doc.data().power,
          }))
        );
      });
  }, [currentUser]);

  // console.log(powerData)

  return (
    <View style={tw`items-center flex`}>
      {powerData && (
        <ContributionGraph
          values={powerData}
          endDate={new Date(new Date())}
          numDays={105}
          width={Dimensions.get("window").width}
          height={220}
          chartConfig={chartConfig}
          onDayPress={(value) => {
            setSelectedData(value);
          }}
        />
      )}

      <Text>Generated vs Expected Energy</Text>
      {selectedData && (
        <>
          <Text>
            Selected Date: {moment(selectedData.date).format("DD/MM/YYYY")}
          </Text>
          <Text>
            Generated Energy: {selectedData.count} kW-hr
          </Text>
        </>
      )}
      <ProgressChart
        data={data}
        width={Dimensions.get("window").width - 60}
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
  data: [0.4, 0.6],
};

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
  color: (opacity = 1) => `rgba(26, 26, 26, ${opacity || 1})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

const styles = StyleSheet.create({});
