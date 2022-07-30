import React from 'react'
import {useState} from 'react'
import { View, Text } from 'react-native'
import ImageView from "react-native-image-viewing";

const AddToursScreen = () => {

  const onRequestClose = () => setIsVisible(false);
 

  const images = [
    {
      uri: "https://images.unsplash.com/photo-1571501679680-de32f1e7aad4",
    },
    {
      uri: "https://images.unsplash.com/photo-1573273787173-0eb81a833b34",
    },
    {
      uri: "https://images.unsplash.com/photo-1569569970363-df7b6160d111",
    },
  ];
  
  // const [visible, setIsVisible] = useState(false);
  return (
    // <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    //   <Text>Moments Screen</Text>
    // </View>
    <View>
    <ImageView
        images={images}
        imageIndex={0}
        visible={true}
        animationType={'slide'}
        doubleTapToZoomEnabled={true}
        // onRequestClose={() => setIsVisible(false)}
        /></View>
  )
}

export default AddToursScreen