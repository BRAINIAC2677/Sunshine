import React from "react";
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MapView from 'react-native-maps';
import { colors } from "../../styles/global";

export default function Map({navigation}) {
  return (
    <View>
      <View style={styles.container}>
      <MapView style={styles.map} />
    </View>
      <TouchableOpacity style={{backgroundColor: colors.green, padding: 4}} onPress={() => navigation.goBack()}>
        <Text>Ok</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});