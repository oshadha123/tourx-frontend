import React,{useState} from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import MapView,{Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
// const GOOGLE_API_KEY = 'AIzaSyBWzrDQpNPhMLPdSi6DLijIqYOSiAk8S4M'
const GOOGLE_API_KEY = 'AIzaSyB3KwXlc9rPfWHXn-c88rWz3xrQSkry3rI'
import Geolocation from '@react-native-community/geolocation';

let current_latitude=null;
let current_longitude=null;
Geolocation.getCurrentPosition(info =>{
  console.log(info.coords.latitude)
  
  current_latitude=info.coords.latitude;
  current_longitude=info.coords.longitude;
  
});


// const lat=5.954920;
const App = ({route}) => {
  const [info,setInfo]=useState([])
  const {title,id,path,description,city,latitude,longitude}=route.params;
  const [coordinates] = useState([
    {
      latitude:  current_latitude,
      longitude: current_longitude,
    },
    {
      latitude: latitude,
      longitude: longitude,
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