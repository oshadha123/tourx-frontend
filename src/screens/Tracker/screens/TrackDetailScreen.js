import React from "react";
import MapView,{Polyline} from "react-native-maps";


const TrackDetailScreen = ({navigation}) => {
const item =navigation.getParam('item');
  return (
      <MapView style={{height:300}} initialRegion={{
          latitudeDelta:0.0009,
          longitudeDelta:0.0009,
          ...item.locations[0].coords
      }}>
        <Polyline coordinates={item.locations.map(loc=>loc.coords)}/>
      </MapView>
  );
};
TrackDetailScreen.navigationOptions=({navigation})=>{
  const item =navigation.getParam('item');
  return{
      headerTitle:item.name
  }
}

export default TrackDetailScreen;
