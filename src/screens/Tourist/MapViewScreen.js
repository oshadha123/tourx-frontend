import React,{useState} from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import MapView,{Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
const GOOGLE_API_KEY = 'AIzaSyBWzrDQpNPhMLPdSi6DLijIqYOSiAk8S4M'
const App = () => {
  const [coordinates] = useState([
    {
      latitude: 5.954920,
      longitude: 80.554955,
    },
    {
      latitude: 6.927079,
      longitude: 79.861244,
    },
  ]);
  return (
    <View style={styles.container}>
      <MapView
        style={styles.maps}
        initialRegion={{
          latitude: coordinates[0].latitude,
          longitude: coordinates[0].longitude,
          latitudeDelta: 0.0622,
          longitudeDelta: 0.0121,
        }}>
        <MapViewDirections
          origin={coordinates[0]}
          destination={coordinates[1]}
          apikey={GOOGLE_API_KEY} 
          strokeWidth={4}
          // strokeColor="#111111"
          strokeColor="#ff0000"

        />
        <Marker coordinate={coordinates[0]} />
        <Marker coordinate={coordinates[1]} />
      </MapView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  maps: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  },
});
export default App;