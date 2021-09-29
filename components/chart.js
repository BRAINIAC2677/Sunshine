import React, { useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { fonts } from "../styles/global";

const Chart = ({ data, labels }) => {
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
        fromZero={true}
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
          backgroundColor: "#fff",
          backgroundGradientFrom: "#fff",
          backgroundGradientTo: "#fff",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(75, 75, 135, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(75, 75, 135, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "2",
            strokeWidth: "0.1",
            stroke: "rgba(75, 75, 135, .5)",
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
        backgroundColor: 'white',
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
    backgroundColor: "white",
    paddingRight: 15,
    paddingTop: 15,
    paddingBottom: 5,
    borderRadius: 16,
  },
  text: {
    fontFamily: fonts.semibold,
    color: `rgba(75, 75, 135, .8)`,
  },
});
