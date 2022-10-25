import React from 'react'
import { useState } from 'react'
import { View, Text, Linking } from 'react-native'
import ImageView from "react-native-image-viewing";
import ImageFooter from '../components/ImageFoter';
import CustomButton from '../components/CustomButton';
import { Avatar, Button, Card, Title, Paragraph, IconButton } from 'react-native-paper';
const VirtualTourScreen = ({ route, navigation }) => {
  const { title, id, path, description, city, latitude, longitude } = route.params;
  const [visible, setVisible] = useState(false)
  const onRequestClose = () => setVisible(false);

  const [currentImageIndex, setImageIndex] = useState(0);
  const LeftContent = props => <Avatar.Icon {...props} icon="camera" theme={{ colors: { primary: '#06BEE1' } }} />
  const images = [
    {
      uri: "https://www.lakpura.com/images/LK94008486-01-E.JPG?",
    },
    {
      uri: "https://www.lakpura.com/images/LK94008486-03-E.JPG?",
    },
    {
      uri: "https://www.lakpura.com/images/LK94008486-02-E.JPG?",
    },
    {
      uri: "https://www.lakpura.com/images/LK94008486-05-E.JPG?",
    },
    {
      uri: "https://www.lakpura.com/images/LK94008486-06-E.JPG?",
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
      <Card style={{ height: "100%" }}>
        <Card.Title title={title} subtitle={city} left={LeftContent} />
        <Card.Content>
          {/* <Title>Bomburu Ella waterfall</Title> */}
          <Paragraph>{description}</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: path }} />
        <Card.Actions>
          <Card.Actions>
            <View style={{ flex: 1 }} >
              <Button icon="virtual-reality" mode="contained" style={{ marginLeft: "5%", marginRight: "5%", marginTop: "5%" }} onPress={() => setVisible(true)} theme={{ colors: { primary: '#06BEE1' } }}>
                View Photos
              </Button>
              <Button icon="map" mode="contained" style={{ marginLeft: "5%", marginRight: "5%", marginTop: "5%" }} onPress={() => navigation.navigate('MapView', {
                latitude: latitude,
                longitude: longitude,
              })} theme={{ colors: { primary: '#06BEE1' } }}>
                See on the Map
              </Button>
              <Button icon="map" mode="contained" onPress={() => Linking.openURL('https://kuula.co/share/collection/7lG5x?thumbs=-1&chromeless=1')} style={{ marginLeft: "5%", marginRight: "5%", marginTop: "5%" }} theme={{ colors: { primary: '#06BEE1' } }}>
              VR Photo Tour
              </Button>
            </View>
          </Card.Actions>
        </Card.Actions>
      </Card>


    </View>
  )
}

export default VirtualTourScreen
