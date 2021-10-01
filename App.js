import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { AuthProdiver } from "./contexts/authContext.js";
import { LocationProvider } from "./contexts/locationContext.js";
import MainTabContainer from "./navigation/mainTab";

export default function App() {
  let [fontsLoaded] = useFonts({
    "barlow-regular": require("./assets/fonts/Barlow-Regular.ttf"),
    "barlow-bold": require("./assets/fonts/Barlow-Bold.ttf"),
    "barlow-semibold": require("./assets/fonts/Barlow-SemiBold.ttf"),
  });

  if (fontsLoaded) {
    return (
      <LocationProvider>
        <AuthProdiver>
          <StatusBar animated={true} style="light" />
          <MainTabContainer />
        </AuthProdiver>
      </LocationProvider>
    );
  } else {
    return <AppLoading />;
  }
}
