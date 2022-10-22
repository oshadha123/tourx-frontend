import React from 'react'
import {useState} from 'react'
import { View, Text } from 'react-native'
import ImageView from "react-native-image-viewing";
import ImageFooter from '../components/ImageFoter';
import CustomButton from '../components/CustomButton';
import { Avatar, Button, Card, Title, Paragraph,IconButton} from 'react-native-paper';
const VirtualTourScreen2 = ({route,navigation}) => {
  const {title,id,path,description,city,latitude,longitude}=route.params;
  const [visible,setVisible] = useState(false)
  const onRequestClose = () => setVisible(false);
 
  const [currentImageIndex, setImageIndex] = useState(0);
  const LeftContent = props => <Avatar.Icon {...props} icon="camera" />
  const images = [
  	{
      uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Horton_Plains_National_Park_in_Sri_Lanka.jpg/1280px-Horton_Plains_National_Park_in_Sri_Lanka.jpg",
    },
    {
      uri: "https://h8r3x6j3.rocketcdn.me/wp-content/uploads/2020/01/worlds-end-horton-plains-1.jpg",
    },
    {
      uri: "https://www.timetravelturtle.com/wp-content/uploads/2015/01/Sri-Lanka-2014-679_feat.jpg",
    },
	  {
      uri: "https://www.srilankaeconomytours.com/wp-content/uploads/2016/11/horton-plains-national-park.jpg",
    },
	  {
      uri: "https://cdn.shopify.com/s/files/1/1762/3971/products/LK7301A000-01-E-1280-720.jpg?v=1624074587",
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
    <View style={{flex:1}}>
  <Button icon="virtual-reality" mode="contained" style={{margin:"5%"}}  onPress={() => setVisible(true)}>
    VR Photo Tour
  </Button>
  <Button icon="map" mode="contained" style={{margin:"5%"}} onPress={() => navigation.navigate('MapView',{
    latitude:latitude,
    longitude:longitude,
  })}>
    See on the Map
  </Button>
  <Button icon="cloud" mode="contained" style={{marginLeft:"5%",marginRight:"5%"}} onPress={() => navigation.navigate('VisitWeather',{
    latitude:latitude,
    longitude:longitude,
  })}>
    Weather
  </Button>
  </View>
    </Card.Actions>
  </Card>
 

  </View>
  )
}

export default VirtualTourScreen2
