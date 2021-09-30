import React, { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { TextField } from "@ubaids/react-native-material-textfield";
import tw from "tailwind-react-native-classnames";
import { ProgressChart } from "react-native-chart-kit";

export default function About() {
  let refConsumption = React.createRef();
  let refWattage = React.createRef();

  const [consumption, setConsumption] = useState(null);
  const [wattage, setWattage] = useState(null);
  const [peakHours, setPeakHours] = useState(1);
  const [noOfPanels, setNoOfPanels] = useState(0);
  const [showChart, setShowChart] = useState(false);

  const panelData = {
    labels: [
      `${Math.ceil(noOfPanels / 4)} panels`,
      `${Math.ceil(noOfPanels / 2)} panels`,
      `${noOfPanels} panels`,
    ],
    data: [0.25, 0.5, 1],
  };

  const calculate = () => {
    if (consumption > 0 && wattage > 0 && peakHours > 0) {
      refConsumption.current.blur();
      refWattage.current.blur();
      let totalPower = consumption / 30 / peakHours;
      setNoOfPanels(Math.ceil((totalPower * 1000) / wattage));
      setShowChart(true);
    } else {
      //errors
    }
  };

  const chartConfig = {
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  };

  return (
    <View style={tw.style(styles.container, "justify-around bg-gray-800 p-4")}>
      <Text style={tw.style("text-4xl text-center text-white")}>
        solar calculator
      </Text>
      <View>
        <TextField
          label="Monthly Power Consumption(kw-hr)"
          keyboardType="phone-pad"
          onChangeText={setConsumption}
          onFocus={() => setShowChart(false)}
          value={consumption}
          textColor="white"
          baseColor="white"
          tintColor="white"
          fontSize={20}
          labelFontSize={15}
          lineWidth={2}
          ref={refConsumption}
          style={tw.style(styles.input)}
        ></TextField>
        <TextField
          label="Panel Wattage"
          keyboardType="phone-pad"
          onChangeText={setWattage}
          onFocus={() => setShowChart(false)}
          value={wattage}
          textColor="white"
          baseColor="white"
          tintColor="white"
          fontSize={20}
          labelFontSize={15}
          lineWidth={2}
          ref={refWattage}
          style={tw.style(styles.input)}
        ></TextField>
        <TouchableOpacity
          style={tw.style("self-center my-8 p-2 w-48 rounded-md bg-gray-500")}
          onPress={() => calculate()}
        >
          <View>
            <Text
              style={tw.style(
                "capitalize text-center text-lg text-white font-bold"
              )}
            >
              calculate
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      {showChart && (
        <ProgressChart
          data={panelData}
          width={Dimensions.get("window").width - 60}
          height={200}
          strokeWidth={15}
          radius={30}
          chartConfig={chartConfig}
          hideLegend={false}
          style={tw.style("self-center rounded-md")}
        ></ProgressChart>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
