import React,{useEffect,useState,useContext} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Text,Input } from "react-native-elements";
import Map from "../components/Map";
import { requestPermissionsAsync,watchPositionAsync,Accuracy } from "expo-location";
import {Context as LocationContext } from '../context/LocationContext';
import tracker from '../api/tracker';
import { AntDesign } from '@expo/vector-icons';

const TrackCreateScreen = () => {
  const [error, setError] = useState(null);
  const [name, setName] = useState("");
  const [subscriber, setSubscriber] = useState(null);
  const [recordingStatus,setRecordingStatus]= useState("NoStart");
  const {addLocation,startRecording,stopRecording,resetTracks,state}=useContext(LocationContext);
  
  
  const startWatchingCurrent = async () => {
    if(subscriber!=null){subscriber.remove();}
    setSubscriber(null);
    try {
      const { granted } = await requestPermissionsAsync();
      if (!granted) {
        throw new Error("Location permission not granted");
      }
      let sub=await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        (location) => {
          addLocation(location,false);
        }
      );
      setSubscriber(sub);
    } catch (e) {
      setSubscriber(sub);
      setError(e);
    }
  };

  const startWatching = async () => {
    if(subscriber!=null){subscriber.remove();}
    setSubscriber(null);
    try {
      const { granted } = await requestPermissionsAsync();
      if (!granted) {
        throw new Error("Location permission not granted");
      }
      let sub=await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        (location) => {
          addLocation(location,true);
        }
      );
      setSubscriber(sub);
    } catch (e) {
      setSubscriber(sub);
      setError(e);
    }
  };

  useEffect(() => {
    startWatchingCurrent();
  }, [])

  const saveTrack=async()=>{
    let locs=state.locations;
    await tracker.post('/tracks',{name,locations:locs});
    resetTracks();
    setRecordingStatus("NoStart");
    setName("");
  };
  return (
    <SafeAreaView>
      <Text h3 style={{ marginLeft: 10, marginTop: 10 }}>
        Create Track
      </Text>
      <Map />
      {error?<Text>Please grant location perimission</Text>:null}
      {recordingStatus==="NoStart"?<Button title="Start Recording"  buttonStyle={{marginVertical:20,marginHorizontal:10}} onPress={()=>{setRecordingStatus("Recording");startWatching();startRecording();}}/>:null}
      {recordingStatus==="Recording"?<Button title="Stop Recording"  buttonStyle={{marginVertical:20,marginHorizontal:10}} onPress={()=>{ setRecordingStatus("RecordStop");stopRecording();startWatchingCurrent();}}/>:null}
      {recordingStatus==="RecordStop"?<Input value={name} onChangeText={setName} autoCorrect={false} label="Track Name"/>:null}
      {recordingStatus==="RecordStop"?<Button title="Save Track"  buttonStyle={{marginVertical:20,marginHorizontal:10}} onPress={()=>{saveTrack();}}/>:null}
      {recordingStatus==="RecordStop"?<Button title="Discard"  buttonStyle={{marginVertical:5,marginHorizontal:10}} onPress={()=>{resetTracks();setRecordingStatus("NoStart");}}/>:null}
    </SafeAreaView>
  );
};

TrackCreateScreen.navigationOptions = {
  title: "Add Track",
  tabBarIcon: <AntDesign name="pluscircleo" size={24} color="black" />
};

export default TrackCreateScreen;
