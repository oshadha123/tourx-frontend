import React from 'react'
import {useState} from 'react'
import { View, Text } from 'react-native'
import ImageView from "react-native-image-viewing";
import ImageFooter from '../components/ImageFoter';
import CustomButton from '../components/CustomButton';
import { Avatar, Button, Card, Title, Paragraph,IconButton} from 'react-native-paper';
const VirtualTourScreen = ({navigation}) => {
  
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
    <Card.Title title="Bomburu Ella waterfall" subtitle="Nuwara Eliya" left={LeftContent} />
    <Card.Content>
      {/* <Title>Bomburu Ella waterfall</Title> */}
      <Paragraph>Bomburu Ella, also known as Perawella Falls, is a waterfall at Uva-Paranagama Divisional Secretariat of Sri Lanka. It is located near the border of Nuwara Eliya and Badulla districts, approximately 15 km from Welimada town. Bomburu Ella is the widest waterfall in Sri Lanka and consists of several small waterfalls grouped together. The source of the falls is a lake located in the central highlands of Sri Lanka.</Paragraph>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://res.cloudinary.com/fleetnation/image/private/c_fit,w_1120/fl_no_overflow,g_south,l_text:style_gothic2:%C2%A9%20DilRuk,o_20,y_10/fl_no_overflow,g_center,l_watermark4,o_25,y_50/v1589507587/scthhzcjawmtdmnmz73z.jpg' }} />
    <Card.Actions>
    
  <Button icon="virtual-reality" mode="contained" style={{marginLeft:"28%",marginTop:"20%"}} onPress={() => setVisible(true)}>
    VR Photo Tour
  </Button>
    </Card.Actions>
  </Card>
 

  </View>
  )
}

export default VirtualTourScreen
