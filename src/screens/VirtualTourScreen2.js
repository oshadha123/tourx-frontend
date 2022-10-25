import React from 'react'
import { useState } from 'react'
import { View, Text, StyleSheet, Image, ScrollView, Linking } from 'react-native'
import ImageView from "react-native-image-viewing";
import ImageFooter from '../components/ImageFoter';
import CustomButton from '../components/CustomButton';
import { Avatar, Button, Card, Title, Paragraph, IconButton } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';

const VirtualTourScreen2 = ({ route, navigation }) => {
  const { title, id, path, description, city, latitude, longitude } = route.params;
  const [visible, setVisible] = useState(false)
  const onRequestClose = () => setVisible(false);
  const [isClick, setClick] = useState(false);
  const [defaultRating, setDefaultRating] = useState();
  const [maxRating, setMaxRating] = useState([0]);

  const starImgFilled = 'https://res.cloudinary.com/tourx/image/upload/v1666571489/HeartFilled_oqcs1v.png';
  const starImgCorner = 'https://res.cloudinary.com/tourx/image/upload/v1666571489/HeartOutline_qkghr6.png';
  const [currentImageIndex, setImageIndex] = useState(0);
  const LeftContent = props => <Avatar.Icon {...props} icon="camera" theme={{ colors: { primary: '#06BEE1' } }}/>
  const RightContent = props => <CustomRatingBar />

  const CustomRatingBar = () => {
    return (

      <View style={styles.customRatingBarStyle}>
        {
          maxRating.map((item, key) => {
            return (
              <TouchableOpacity
                activeOpacity={0.7}
                key={item}
                onPress={() => { setDefaultRating(item); alert(defaultRating) }}
              >
                <Image
                  style={styles.starImageStyle}
                  source={
                    item <= defaultRating
                      ? { uri: starImgFilled }
                      : { uri: starImgCorner }
                  }
                />
              </TouchableOpacity>
            )
          })
        }
      </View>
    )
  }

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
    <ScrollView>
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
          <Card.Title title={title} subtitle={city} left={LeftContent} right={RightContent} />
          <Card.Content>
            {/* <Title>Bomburu Ella waterfall</Title> */}
            <Paragraph>{description}</Paragraph>
          </Card.Content>
          <Card.Cover source={{ uri: path }} />
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
              <Button icon="cloud" mode="contained" style={{ marginLeft: "5%", marginRight: "5%", marginTop: "5%" }} onPress={() => navigation.navigate('VisitWeather', {
                latitude: latitude,
                longitude: longitude,
              })} theme={{ colors: { primary: '#06BEE1' } }}>
                Weather
              </Button>
              {title=="Sigiriya"?<Button icon="cloud" mode="contained" style={{ marginLeft: "5%", marginRight: "5%", marginTop: "5%"}} onPress={() => Linking.openURL('https://kuula.co/share/collection/799hb?logo=1&info=1&fs=1&vr=0&zoom=1&autop=10&autopalt=1&thumbs=1')} theme={{ colors: { primary: '#06BEE1' } }}>
                VR Photo Tour
              </Button>: <Button icon="cloud" mode="contained" style={{ marginLeft: "5%", marginRight: "5%", marginTop: "5%" }} onPress={() => Linking.openURL('https://kuula.co/share/collection/799hW?logo=1&info=1&fs=1&vr=0&zoom=1&autop=10&autopalt=1&thumbs=1')} theme={{ colors: { primary: '#06BEE1' } }}>
                VR Photo Tour
              </Button>}
            </View>
          </Card.Actions>
        </Card>


      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  customRatingBarStyle: {
    flexDirection: "row",
    justifyContent: 'flex-end',
    marginTop: 10,
    marginRight: 50,
    marginBottom: 20
  },
  starImageStyle: {
    width: 40,
    height: 40,
    resizeMode: 'cover'
  }
});

export default VirtualTourScreen2
