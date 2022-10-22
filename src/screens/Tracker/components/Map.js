import React,{useContext} from 'react'
import MapView,{Polyline,Circle} from 'react-native-maps';
import {Context as LocationContext } from '../context/LocationContext';

const Map = () => {
    const {state:{ currentLocation,locations}}=useContext(LocationContext);
    if(!currentLocation){
        return null;
    }
    return (

        <MapView style={{height:300,marginTop:10}} initialRegion={{
            ...currentLocation.coords,
            latitudeDelta:0.0009,
            longitudeDelta:0.0009
        }}
        region={{
            ...currentLocation.coords,
            latitudeDelta:0.0009,
            longitudeDelta:0.0009
        }}
        >
        <Circle center={currentLocation.coords}
            radius={1}
            strokeColor="rgba(158,158,255,1.0)"
            fillColor="rgba(158,158,255,0.3)"/>
        <Polyline coordinates={locations.map(loc=>loc.coords)}/>
        </MapView>
    )
}

export default Map
