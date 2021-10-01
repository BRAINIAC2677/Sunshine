import React, { useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { colors, fonts } from "../styles/global";

const Chart = ({ data, labels, fromZero=true }) => {
  const [value, setValue] = useState(null);
  const [valuePosition, setValuePosition] = useState({x: 0, y: 0})

  return (
    <View style={styles.container}>
      <LineChart
        data={{
          labels: labels,
          datasets: [{ data: data }],
        }}
        width={Dimensions.get("window").width - 50} // from react-native
        height={220}
        // withDots={false}
        withInnerLines={false}
        fromZero={fromZero}
        yAxisLabel=""
        yAxisSuffix=""
        yAxisInterval={1} // optional, defaults to 1
        verticalLabelRotation={-45}
        xLabelsOffset={15}
        segments={5}
        onDataPointClick={(data) => {
          setValue(data.value);
          setValuePosition({x: data.x, y: data.y})
        }}
        chartConfig={{
          backgroundColor: colors.bg2,
          backgroundGradientFrom: colors.bg2,
          backgroundGradientTo: colors.bg2,
          color: (opacity = 1) => `rgba(248, 198, 28, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(248, 198, 28, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "1.5",
            strokeWidth: "1",
            stroke: "rgba(248, 198, 28, .3)",
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
      {value && <View style={{
        position: 'absolute',
        top: valuePosition.y - 15,
        left: valuePosition.x - 10,
        backgroundColor: colors.bg1,
        paddingHorizontal: 5,
        paddingVertical: 3,
        borderRadius: 3,
        elevation: 3,
      }}>
        <Text style={styles.text}>{value}</Text>
      </View>}
    </View>
  );
};

export default Chart;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.bg2,
    paddingRight: 15,
    paddingTop: 15,
    paddingBottom: 5,
    borderRadius: 16,
  },
  text: {
    fontFamily: fonts.semibold,
    color: colors.text2,
  },
});
