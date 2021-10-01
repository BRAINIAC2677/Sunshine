import { AntDesign } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import Chart from "../../components/chart";
import DateSelector from "../../components/dateSelector";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import TimeSelector from "../../components/timeSelector";
import {
  dailyDataFormatter,
  dataLoader,
  monthlyDataFormatter,
  yearlyDataFormatter
} from "../../contexts/loadData";
import { useLocation } from "../../contexts/locationContext";
import { colors, fonts } from "../../styles/global";

const Wind = () => {
  const { chartLocation } = useLocation();

  const [temporal, setTemporal] = useState("daily");
  const [data, setData] = useState(null);
  const [labels, setLabels] = useState(null);
  const [parameter] = useState("WS10M");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [refresh, setRefresh] = useState(0);

  const [startDate, setStartDate] = useState("20210601");
  const [endDate, setEndDate] = useState("20210901");

  async function loadData(url) {
    setError(null);
    setData(null);
    setLabels(null);
    setLoading(true);
    try {
      const rawData = await dataLoader(url, parameter);

      if (temporal === "daily") {
        const { values, selectedLabels } = dailyDataFormatter(rawData);
        setData(values);
        setLabels(selectedLabels);
      } else if (temporal === "monthly") {
        const { values, selectedLabels } = monthlyDataFormatter(rawData);
        setData(values);
        setLabels(selectedLabels);
      } else if (temporal === "climatology") {
        const { values, selectedLabels } = yearlyDataFormatter(rawData);
        setData(values);
        setLabels(selectedLabels);
      }
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    let url =
      "https://power.larc.nasa.gov/api/temporal/daily/point?parameters=ALLSKY_SFC_SW_DWN&community=RE&longitude=90.3615&latitude=23.7548&start=20210101&end=20210331&format=JSON";
    url = `https://power.larc.nasa.gov/api/temporal/${temporal}/point?parameters=${parameter}&community=RE&longitude=${chartLocation.coords.longitude}&latitude=${chartLocation.coords.latitude}&start=${startDate}&end=${endDate}&format=JSON`;
    if (temporal === "monthly")
      url = `https://power.larc.nasa.gov/api/temporal/${temporal}/point?parameters=${parameter}&community=RE&longitude=${
        chartLocation.coords.longitude
      }&latitude=${
        chartLocation.coords.latitude
      }&start=${2016}&end=${2020}&format=JSON`;

    if (temporal === "climatology")
      url = `https://power.larc.nasa.gov/api/temporal/${temporal}/point?parameters=${parameter}&community=RE&longitude=${chartLocation.coords.longitude}&latitude=${chartLocation.coords.latitude}&format=JSON`;

    loadData(url);
  }, [temporal, chartLocation, refresh, startDate, endDate]);

  return (
    <View
      style={tw.style("items-center flex h-full", {
        backgroundColor: colors.bg1,
      })}
    >
      <TimeSelector temporal={temporal} setTemporal={setTemporal} />

      {temporal === "daily" && (
        <View style={tw.style("my-2")}>
          <View style={tw`flex flex-row justify-between items-center mb-2`}>
            <Text
              style={tw.style("mr-2", {
                fontFamily: fonts.regular,
                color: colors.text3,
              })}
            >
              Start Date
            </Text>
            <DateSelector date={startDate} setDate={setStartDate} />
          </View>
          <View style={tw`flex flex-row justify-between items-center mb-2`}>
            <Text
              style={tw.style("mr-2", {
                fontFamily: fonts.regular,
                color: colors.text3,
              })}
            >
              End Date
            </Text>
            <DateSelector date={endDate} setDate={setEndDate} />
          </View>
        </View>
      )}

      <Text style={styles.title}>WIND SPEED</Text>

      {loading ? (
        <Loading />
      ) : error ? (
        <Error error={error} />
      ) : (
        data &&
        labels && (
          <Chart data={data} labels={labels} fromZero={true} title={"Daily Wind Flow"} />
        )
      )}

      {/* summary */}
      <View style={tw`mx-6 mt-3`}>
        <Text
          style={tw.style("", { fontFamily: fonts.regular, color: colors.text3, fontSize: 15, })}
        >
          {temporal==="daily" && dailyText}
          {temporal==="monthly" && monthlyText}
          {temporal==="climatology" && yearlyText}
        </Text>
      </View>

      <TouchableOpacity
        style={tw`bg-gray-600 mt-8 w-32 justify-center items-center h-10 rounded-lg shadow`}
        onPress={() => setRefresh(refresh + 1)}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <AntDesign name="reload1" size={16} color={colors.text1} />
          <Text style={[styles.buttonText, { color: colors.text1 }]}>
            Reload
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Wind;

const styles = StyleSheet.create({
  title: {
    color: colors.text1,
    marginVertical: 12,
    fontFamily: fonts.semibold,
    fontSize: 16,
  },
  buttonText: {
    marginLeft: 12,
    fontFamily: fonts.semibold,
  },
});


const dailyText = "Daily wind speed (km/hr in 10 meter) gives an idea about the variation of wind speed in daily basis in your locality. Wind speed affects the generation of solar enery. You can interact real time with data from NASA API by changing location and time range."
const monthlyText = "Monthly wind speed (km/hr in 10 meter) gives an idea about last 5 years monthly data. You can take descition about your solar energy and wind flow from previous data. This data is powered by NASA and based on your selected location. If an error is generated make sure the time range is valid and try again by reloading."
const yearlyText = "This dataset (km/hr in 10 meter) is generated according to the climatological wind speed from 1983. It shows a clear picture about wind flow in the basis of long term. This data is fetched from NASA and based on your selected location If an error is generated make sure the time range is valid and try again by reloading."