import React, { useEffect, useState, createContext, useContext } from "react";
import * as Location from 'expo-location'

const LocationContext = createContext()

export function useLocation() {
  return useContext(LocationContext)
}

export function LocationProvider({children}) {

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
  }

  const [location, setLocation] = useState(defaultLocation)
  const [error, setError] = useState('')

  useEffect(() => {
    load()
  }, [])

  async function load() {
    let { status } = await Location.requestForegroundPermissionsAsync()
    if (status !== 'granted') {
      setError('Access to location is needed.')
      return
    }

    const location = await Location.getCurrentPositionAsync()
    setLocation(location)

    console.log(location)
  }

  return (
    <LocationContext.Provider value={{location, error}}>
      {children}
    </LocationContext.Provider>
  )
}