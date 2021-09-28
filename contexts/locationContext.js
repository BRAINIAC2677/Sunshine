import * as Location from "expo-location";
import React, { createContext, useContext, useEffect, useState } from "react";

const LocationContext = createContext();

export function useLocation() {
  return useContext(LocationContext);
}

export function LocationProvider({ children }) {
  const defaultLocation = {
    coords: {
      accuracy: 20.100000381469727,
      altitude: -7.588237211254185,
      altitudeAccuracy: 41.53496170043945,
      heading: 0,
      latitude: 24.7687455,
      longitude: 89.3971282,
      speed: 0,
    },
    mocked: false,
    timestamp: 1629471864197,
  };

  const [location, setLocation] = useState(defaultLocation);
  const [chartLocation, setChartLocation] = useState(location)
  const [error, setError] = useState("");

  useEffect(() => {
    load();
  }, []);

  async function load() {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setError("Access to location is needed.");
        return;
      }

      const location = await Location.getLastKnownPositionAsync({
        accuracy: 6,
      });
      if (location) setLocation(location)
    } catch (error) {
      console.log(error);
    }
  }

  const values = {
    location,
    error,
    chartLocation,
    setChartLocation,
  }

  return (
    <LocationContext.Provider value={values}>
      {children}
    </LocationContext.Provider>
  );
}
