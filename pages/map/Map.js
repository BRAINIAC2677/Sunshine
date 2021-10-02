import { EvilIcons } from "@expo/vector-icons";
import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import MapView, { Callout, Circle, Marker } from "react-native-maps";
import tw from "tailwind-react-native-classnames";
import homeMarker from "../../assets/homeMarker.png";
import { useLocation } from "../../contexts/locationContext";
import { colors, fonts } from "../../styles/global";

export default function Map({ navigation }) {
  const { location, setChartLocation, chartLocation } = useLocation();

  const [pin, setPin] = React.useState({
    latitude: location.coords.latitude,
    longitude: location.coords.longitude,
  });
  const [region, setRegion] = React.useState({
    latitude: location.coords.latitude,
    longitude: location.coords.longitude,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  return (
    <View style={styles.container}>
      {/* <GooglePlacesAutocomplete
        placeholder="Search"
        fetchDetails={true}
        GooglePlacesSearchQuery={{
          rankby: "distance",
        }}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
          setRegion({
            latitude: details.geometry.location.lat,
            longitude: details.geometry.location.lng,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          });
        }}
        query={{
          key: "API_KEY",
          language: "en",
          components: "country:us",
          types: "establishment",
          radius: 30000,
          location: `${region.latitude}, ${region.longitude}`,
        }}
        styles={{
          container: {
            flex: 0,
            position: "absolute",
            width: "100%",
            zIndex: 10,
          },
          listView: { backgroundColor: "white" },
        }}
      /> api key needed -- additional feature */}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: chartLocation.coords.latitude,
          longitude: chartLocation.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        provider="google"
      >
        <Marker
          coordinate={{
            latitude: region.latitude,
            longitude: region.longitude,
          }}
        >
          <Image
            source={homeMarker}
            style={{ height: 20, width: 20, zIndex: 10 }}
          />
        </Marker>

        <Marker
          coordinate={{
            latitude: chartLocation.coords.latitude,
            longitude: chartLocation.coords.longitude,
          }}
          icon={<EvilIcons name="location" size={24} color="black" />}
          pinColor="black"
          draggable={true}
          // onDragStart={(e) => {
          //   console.log("Drag start", e.nativeEvent.coordinates);
          // }}
          onDragEnd={(e) => {
            setPin({
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude,
            });
            setChartLocation({
              coords: {
                latitude: e.nativeEvent.coordinate.latitude,
                longitude: e.nativeEvent.coordinate.longitude,
              },
            });
          }}
        >
          <Callout>
            <Text>I'm here</Text>
          </Callout>
        </Marker>
        <Circle center={pin} radius={1000} />
      </MapView>

      <TouchableOpacity
        style={tw.style("absolute mx-auto bottom-4 px-4 py-2 rounded", {
          backgroundColor: colors.secondaryBg,
        })}
        onPress={() => {
          setChartLocation(location);
          setPin({
            latitude: location.coords.longitude,
            longitude: location.coords.longitude,
          });
        }}
      >
        <Text style={tw.style("text-white", { fontFamily: fonts.semibold })}>
          Back to your current Location
        </Text>
      </TouchableOpacity>
      <Text
        style={tw.style(
          "absolute bg-gray-200 bg-opacity-50 px-3 py-1 mx-auto bottom-16",
          { fontFamily: fonts.regular }
        )}
      >
        Long press and drag the marker the change location.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
