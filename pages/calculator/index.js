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
import { BarChart } from "react-native-chart-kit";
import { colors, fonts } from "../../styles/global";

export default function About() {
  let refConsumption = React.createRef();
  let refWattage = React.createRef();

  const [consumption, setConsumption] = useState(null);
  const [wattage, setWattage] = useState(null);
  const [peakHours, setPeakHours] = useState(5);
  const [noOfPanels, setNoOfPanels] = useState(0);
  const [showChart, setShowChart] = useState(false);

  const panelData = {
    labels: ["25%", "50%", "75%", "100%"],
    datasets: [
      {
        data: [
          Math.ceil(noOfPanels / 4),
          Math.ceil(noOfPanels / 2),
          Math.ceil((3 * noOfPanels) / 4),
          noOfPanels,
        ],
      },
    ],
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
    backgroundGradientFrom: colors.secondaryBg,
    backgroundGradientTo: colors.secondaryBg,
    color: (opacity = 1) => `rgba(248, 198, 28, ${opacity})`,
  };

  return (
    <View
      style={tw.style(styles.container, "p-4", {
        backgroundColor: colors.primaryBg,
      })}
    >
      <Text
        style={tw.style(
          "pt-20 capitalize tracking-wide text-4xl text-center text-white",
          { color: colors.accent, fontFamily: fonts.bold }
        )}
      >
        solar calculator
      </Text>
      <View style={tw.style("pt-10")}>
        <TextField
          label="Monthly Power Consumption(kw-hr)"
          labelTextStyle={{ fontFamily: fonts.regular }}
          inputTextStyle={{ fontFamily: fonts.regular }}
          keyboardType="phone-pad"
          onChangeText={setConsumption}
          onFocus={() => setShowChart(false)}
          value={consumption}
          textColor="white"
          baseColor="white"
          tintColor={colors.accent}
          fontSize={20}
          labelFontSize={10}
          lineWidth={2}
          ref={refConsumption}
        ></TextField>
        <TextField
          label="Solar Panel Wattage(watt)"
          labelTextStyle={{ fontFamily: fonts.regular }}
          inputTextStyle={{ fontFamily: fonts.regular }}
          keyboardType="phone-pad"
          onChangeText={setWattage}
          onFocus={() => setShowChart(false)}
          value={wattage}
          textColor="white"
          baseColor="white"
          tintColor={colors.accent}
          fontSize={20}
          labelFontSize={10}
          lineWidth={2}
          ref={refWattage}
        ></TextField>
        <TouchableOpacity
          style={tw.style("self-center my-8 p-2 w-48 rounded-md", {
            backgroundColor: colors.accent,
          })}
          onPress={() => calculate()}
        >
          <View>
            <Text
              style={tw.style("capitalize text-center text-lg text-black", {
                fontFamily: fonts.semibold,
              })}
            >
              calculate
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      {showChart && (
        <View>
          <BarChart
            data={panelData}
            width={Dimensions.get("window").width - 30}
            height={220}
            chartConfig={chartConfig}
            yAxisSuffix=" Panels "
            yLabelsOffset={-10}
            horizontalLabelRotation={0}
            fromZero={true}
            showValuesOnTopOfBars={true}
            withInnerLines={false}
            style={tw.style("self-center", { borderRadius: 10 })}
          />
          <Text
            style={tw.style("mt-2 capitalize text-white text-sm", {
              fontFamily: fonts.regular,
            })}
          >
            no of solar panels vs percentage of generated energy of your total
            consumption
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
