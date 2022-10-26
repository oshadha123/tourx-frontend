import React, { useState } from 'react';
import { StyleSheet, View, Dimensions, TouchableOpacity, Text, Linking } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
const GOOGLE_API_KEY = 'AIzaSyB3KwXlc9rPfWHXn-c88rWz3xrQSkry3rI'
import Geolocation from '@react-native-community/geolocation';
import { Appbar } from 'react-native-paper';

let current_latitude = null;
let current_longitude = null;
Geolocation.getCurrentPosition(info => {
  console.log(info.coords.latitude)

  current_latitude = info.coords.latitude;
  current_longitude = info.coords.longitude;

});


// const lat=5.954920;
const App = ({ navigation, route }) => {
  const [info, setInfo] = useState([])
  const { title, id, path, description, city, latitude, longitude } = route.params;
  const [coordinates] = useState([
    {
      latitude: current_latitude,
      longitude: current_longitude,
    },
    {
      latitude: latitude,
      longitude: longitude,
    },
  ]);
  return (
    <>
      <Appbar.Header theme={{ colors: { primary: '#06BEE1' } }}>
        <Appbar.BackAction onPress={() => navigation.navigate('Home')} />
        <Appbar.Content title="View Route" />
      </Appbar.Header>
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
          <TouchableOpacity style={styles.overlay} onPress={() => Linking.openURL(`https://www.booking.com/searchresults.en-gb.html?ss=${city}`)} theme={{ colors: { primary: '#06BEE1' } }}>
            <Text style={{ color: 'black', fontWeight: '700' }}> Visit Booking.com</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.overlay1} onPress={() => Linking.openURL(`https://www.tripadvisor.com/Search?q=${city}`)} theme={{ colors: { primary: '#06BEE1' } }}>
            <Text style={{ color: 'black', fontWeight: '700' }}> Visit TripAdvisor.com</Text>
          </TouchableOpacity>
      </View>
    </>
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
  overlay: {
    position: 'absolute',
    bottom: 50,
    marginLeft: 50,
    backgroundColor: '#06BEE1',
    padding: 10,
    borderRadius: 5
  },
  overlay1: {
    position: 'absolute',
    bottom: 50,
    marginLeft: 220,
    backgroundColor: '#06BEE1',
    padding: 10,
    borderRadius: 5
  },
});
export default App;