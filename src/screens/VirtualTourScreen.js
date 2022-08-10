import React from 'react'
import {useState} from 'react'
import { View, Text } from 'react-native'
import ImageView from "react-native-image-viewing";
import ImageFooter from '../components/ImageFoter';
import CustomButton from '../components/CustomButton';
import { Avatar, Button, Card, Title, Paragraph,IconButton} from 'react-native-paper';
const VirtualTourScreen = ({route,navigation}) => {
  const {title,id,path,description,city,latitude,longitude}=route.params;
  const [visible,setVisible] = useState(false)
  const onRequestClose = () => setVisible(false);
 
  const [currentImageIndex, setImageIndex] = useState(0);
  const LeftContent = props => <Avatar.Icon {...props} icon="camera" />
  const images = [
    {
      uri: "https://i.pinimg.com/736x/3a/9a/5a/3a9a5a8cc1e5c90f00c417a267711c39.jpg",
    },
    {
      uri: "https://l13.alamy.com/360/2J782D3/polonnaruwa-ruins-sri-lanka-2J782D3.jpg",
    },
    {
      uri: "https://thumbs.dreamstime.com/b/beautiful-tropical-waterfall-thaliya-wetuna-ella-falls-virtual-reality-waterfall-tropical-forest-thaliya-wetuna-ella-falls-238260922.jpg",
    },
  ];

 
  return (
   
    <View >
        <ImageView
        images={images}
        // imageIndex={0}
        imageIndex={currentImageIndex}
        visible={visible}
        animationType={'slide'}
        doubleTapToZoomEnabled={true}
        presentationStyle="overFullScreen"
        
        FooterComponent={({ imageIndex }) => (
          <ImageFooter imageIndex={imageIndex} imagesCount={images.length} />
        )}
        onRequestClose={onRequestClose}
        />
      <Card style={{height:"100%"}}>
    <Card.Title title={title} subtitle={city} left={LeftContent} />
    <Card.Content>
      {/* <Title>Bomburu Ella waterfall</Title> */}
      <Paragraph>{description}</Paragraph>
    </Card.Content>
    <Card.Cover source={{ uri: path }} />
    <Card.Actions>
    
  <Button icon="virtual-reality" mode="contained"  onPress={() => setVisible(true)}>
    VR Photo Tour
  </Button>
  <Button icon="map" mode="contained" style={{marginLeft:"13%"}} onPress={() => navigation.navigate('MapView',{
    latitude:latitude,
    longitude:longitude,
  })}>
    See on the Map
  </Button>
    </Card.Actions>
  </Card>
 

  </View>
  )
}

export default VirtualTourScreen
