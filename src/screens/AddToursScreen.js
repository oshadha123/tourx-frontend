import React from 'react'
import {useState} from 'react'
import { View, Text } from 'react-native'
import ImageView from "react-native-image-viewing";

const AddToursScreen = ({navigation}) => {
  // const [isVisible, setIsVisible] = useState(false);
  const [visible,setVisible] = useState(true)
  const onRequestClose = () => setVisible(false);
 

  const images = [
    {
      uri: "https://t4.ftcdn.net/jpg/03/58/04/63/360_F_358046307_Tdl06yGjgJJvY4GNKNsPO0XZDwD95cLO.jpg",
    },
    {
      uri: "https://l13.alamy.com/360/2J782D3/polonnaruwa-ruins-sri-lanka-2J782D3.jpg",
    },
    {
      uri: "https://thumbs.dreamstime.com/b/beautiful-tropical-waterfall-thaliya-wetuna-ella-falls-virtual-reality-waterfall-tropical-forest-thaliya-wetuna-ella-falls-238260922.jpg",
    },
  ];
  // const onRequestClose = () => setIsVisible(false);
 
  // const [visible, setIsVisible] = useState(false);
  return (
    // <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    //   <Text>Moments Screen</Text>
    // </View>
    <View>
    <ImageView
        images={images}
        imageIndex={0}
        visible={visible}
        animationType={'slide'}
        doubleTapToZoomEnabled={true}
        
        onRequestClose={onRequestClose}
        /></View>
  )
}

export default AddToursScreen