import { AntDesign } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import Chart from "../../components/chart";
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
import { fonts } from "../../styles/global";

const Solar = () => {
  const { chartLocation } = useLocation();

  const [temporal, setTemporal] = useState("daily");
  const [data, setData] = useState(null);
  const [labels, setLabels] = useState(null);
  const [parameter] = useState("ALLSKY_SFC_SW_DWN");
  const [range, setRange] = useState({
    start: "20210101",
    end: "20210331",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [refresh, setRefresh] = useState(0);

  async function loadData(url) {
    setError(null);
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
    if (temporal === "daily") {
      setRange({
        start: "20210101",
        end: "20210331",
      });
    } else if (temporal === "monthly") {
      setRange({
        start: "2015",
        end: "2020",
      });
    }

    let url =
      "https://power.larc.nasa.gov/api/temporal/daily/point?parameters=ALLSKY_SFC_SW_DWN&community=RE&longitude=90.3615&latitude=23.7548&start=20210101&end=20210331&format=JSON";
    url = `https://power.larc.nasa.gov/api/temporal/${temporal}/point?parameters=${parameter}&community=RE&longitude=${chartLocation.coords.longitude}&latitude=${chartLocation.coords.latitude}&start=${range.start}&end=${range.end}&format=JSON`;
    if (temporal === "climatology")
      url = `https://power.larc.nasa.gov/api/temporal/${temporal}/point?parameters=${parameter}&community=RE&longitude=${chartLocation.coords.longitude}&latitude=${chartLocation.coords.latitude}&format=JSON`;

    loadData(url);
  }, [temporal, chartLocation, refresh]);

  return (
    <View style={tw`items-center justify-center`}>
      <TimeSelector temporal={temporal} setTemporal={setTemporal} />

      <Text style={styles.title}>SOLAR POWER</Text>

      {loading ? (
        <Loading />
      ) : error ? (
        <Error error={error} />
      ) : (
        data &&
        labels && (
          <Chart data={data} labels={labels} title={"Daily Solar Power"} />
        )
      )}

      <TouchableOpacity
        style={tw`bg-gray-300 mt-8 w-32 justify-center items-center h-12 rounded-lg shadow`}
        onPress={() => setRefresh(refresh + 1)}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <AntDesign name="reload1" size={16} color="black" />
          <Text style={styles.buttonText}>Reload</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Solar;

const styles = StyleSheet.create({
  title: {
    marginVertical: 10,
    fontFamily: fonts.semibold,
    fontSize: 16
  },
  buttonText: {
    marginLeft: 12,
    fontFamily: fonts.semibold,
  },
});
