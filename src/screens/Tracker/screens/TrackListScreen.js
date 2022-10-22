import React, { useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ListItem,Text } from "react-native-elements";
import { NavigationEvents } from "react-navigation";
import tracker from "../api/tracker";
const TrackListScreen = ({navigation}) => {
  const [tracks, setTracks] = useState([]);
  return (
    <SafeAreaView style={{backgroundColor:'#FFFFFF',flex:1}}>
      <Text h3 style={{ marginLeft: 10, marginVertical:10 }}>My Tracks</Text>
      <NavigationEvents
        onWillFocus={async () => {
          const res = await tracker.get("/tracks");
          setTracks(res.data);
        }}
      />
      <FlatList
        data={tracks}
        keyExtractor={item=>item.name}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity  onPress={()=>navigation.navigate("TrackDetailScreen",{item})}>
              <ListItem style={{borderBottomColor:"#c0c4c2",borderBottomWidth:0.7,borderTopColor:"#c0c4c2",borderTopWidth:0.7,}}>
                <ListItem.Content>
                  <ListItem.Title>{item.name}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
};

TrackListScreen.navigationOptions=()=>{
    return{
        header:null
    }
}
export default TrackListScreen;
