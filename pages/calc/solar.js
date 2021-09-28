import axios from "axios";
import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import tw from "tailwind-react-native-classnames";
import Chart from "../../components/chart";
import TimeSelector from "../../components/timeSelector";
import { useLocation } from "../../contexts/locationContext";

// const url = 'https://power.larc.nasa.gov/api/temporal/daily/point?parameters=ALLSKY_SFC_SW_DWN&community=RE&longitude=90.3615&latitude=23.7548&start=20210101&end=20210331&format=JSON'

const Solar = () => {
  const { chartLocation } = useLocation();

  const [temporal, setTemporal] = useState("daily");
  const [data, setData] = useState(null);
  const [labels, setLabels] = useState(null);
  const [parameter, setParameter] = useState("ALLSKY_SFC_SW_DWN");
  const [range, setRange] = useState({
    start: "20210101",
    end: "20210331",
  });

  console.log(
    `https://power.larc.nasa.gov/api/temporal/${temporal}/point?parameters=ALLSKY_SFC_SW_DWN&community=RE&longitude=${chartLocation.coords.longitude}&latitude=${chartLocation.coords.latitude}&start=20210101&end=20210331&format=JSON`
  );
  // console.log(url)

  console.log(chartLocation);

  const dataFormatter = (rawData) => {
    const values = [];
    const allLabels = [];
    for (const key in rawData) {
      values.push(rawData[key]);
      const year = key.slice(0, 4);
      const month = key.slice(4, 6);
      const day = key.slice(6, 8);
      allLabels.push(`${day}/${month}/${year}`);
    }
    const selectedLabels = [];
    for (let i = 0; i < 3; i++) {
      const select = Math.floor((allLabels.length / 4) * i);
      if (select >= allLabels.length) select--;
      selectedLabels.push(allLabels[select]);
    }
    setData(values);
    setLabels(selectedLabels);

    //----------TODO------------------------
    //handle climatology differently
    //loading and error handling
    //pass label and offsets to chart
  };

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

    let url = `https://power.larc.nasa.gov/api/temporal/${temporal}/point?parameters=${parameter}&community=RE&longitude=${chartLocation.coords.longitude}&latitude=${chartLocation.coords.latitude}&start=${range.start}&end=${range.end}&format=JSON`;
    if (temporal==='climatology') url = `https://power.larc.nasa.gov/api/temporal/${temporal}/point?parameters=${parameter}&community=RE&longitude=${chartLocation.coords.longitude}&latitude=${chartLocation.coords.latitude}&format=JSON`
    console.log(url)
    axios
      .get(url)
      .then((response) => {
        dataFormatter(response.data.properties.parameter[parameter]);
      })
      .catch((err) => console.error(err));
  }, [temporal, chartLocation]);

  return (
    <SafeAreaView style={tw`items-center justify-center`}>
      <TimeSelector temporal={temporal} setTemporal={setTemporal} />

      {data && labels ? (
        <Chart data={data} labels={labels} title={"Daily Solar Power"} />
      ) : (
        <Text>Loading</Text>
      )}
    </SafeAreaView>
  );
};

export default Solar;

const styles = StyleSheet.create({});
