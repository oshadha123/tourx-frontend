
import React,{useState,useEffect} from 'react'
import { FlatList, ListView, StyleSheet, Text, View ,RefreshControl,ScrollView} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import { Avatar, Button, Card, Title, Paragraph,Appbar } from 'react-native-paper';
import PlaceSwiper from '../../components/PlaceSwiper';
import ImageView from "react-native-image-viewing";

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

let current_latitude=null;
let current_longitude=null;
Geolocation.getCurrentPosition(info =>{
  console.log(info.coords.latitude)
  
  current_latitude=info.coords.latitude;
  current_longitude=info.coords.longitude;
  
});
const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}
const Foursquare = ({navigation}) => {

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  var m=0;
    const [data,setData] =useState(null);
    const [pic,setPic] = useState(null);
    const [pic1,setPic1] = useState(null);
    const [pic2,setPic2] = useState(null);
    const [pic3,setPic3] = useState(null);
    const [pic4,setPic4] = useState(null);

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'fsq3zqtvuc8goaVMAvU0aw+TpEkH5A5/9EYxrNlJDYiSzjg='
        }
      };
    //   const [inf,setInf]=useState(null);
      useEffect(()=>{
        const getData = async () => {
        
        const response = await fetch(`https://api.foursquare.com/v3/places/search?ll=${current_latitude}%2C${current_longitude}`, options)
        .then(response => response.json())
        // .then( response => console.log(response))
        .then( response => setData(response))

        .catch(err => console.error(err));
        }
        const getData2 = async () => {
        
          const response2 = await fetch(`https://api.foursquare.com/v3/places/${data['results'][0]['fsq_id']}/photos`, options)
          .then(response2 => response2.json())
          // .then( response => console.log(response))
          .then( response2 => setPic(response2))
  
          .catch(err => console.error(err));
          }
          const getData3 = async () => {
        
            const response2 = await fetch(`https://api.foursquare.com/v3/places/${data['results'][1]['fsq_id']}/photos`, options)
            .then(response2 => response2.json())
            // .then( response => console.log(response))
            .then( response2 => setPic1(response2))
    
            .catch(err => console.error(err));
            }
            const getData4 = async () => {
        
              const response2 = await fetch(`https://api.foursquare.com/v3/places/${data['results'][2]['fsq_id']}/photos`, options)
              .then(response2 => response2.json())
              // .then( response => console.log(response))
              .then( response2 => setPic2(response2))
      
              .catch(err => console.error(err));
              }
              const getData5 = async () => {
        
                const response2 = await fetch(`https://api.foursquare.com/v3/places/${data['results'][3]['fsq_id']}/photos`, options)
                .then(response2 => response2.json())
                // .then( response => console.log(response))
                .then( response2 => setPic3(response2))
        
                .catch(err => console.error(err));
                }
                const getData6 = async () => {
        
                  const response2 = await fetch(`https://api.foursquare.com/v3/places/${data['results'][4]['fsq_id']}/photos`, options)
                  .then(response2 => response2.json())
                  // .then( response => console.log(response))
                  .then( response2 => setPic4(response2))
          
                  .catch(err => console.error(err));
                  }
        getData()
        getData2()
        getData3()
        getData4()
        getData5()
        getData6()

        console.log(data)
     
      },[])

      const renderItem = () => {
        console.log("url"+data['results'][0]['categories'][0]['icon']['prefix']+'.png')
        console.log("name"+data['results'][0]['categories'][0]['name'])
        var i =0;
        var j=0;
        var k=0;
        var p=0;
        var w=0;
        var t=0;
        var d=0;
        var latitude=data['results'][0]['geocodes']['main']['latitude'];
        var longitude=data['results'][0]['geocodes']['main']['longitude'];
        const render = () => (
          <Card>
            {/* <Card.Cover source={{ uri: pic[j++]['prefix']+"960x591"+pic[j]['suffix']}} /> */}
            <Card.Content>
            <Title>
            <Paragraph>{data['results'][p++]['name']}</Paragraph>
            </Title>
            <Title>
            <Paragraph>{data['results'][i++]['categories'][0]['name']}</Paragraph>
            </Title>
            <Title>
            <Paragraph>{data['results'][w++]['location']['formatted_address']}</Paragraph>
            </Title>
            <Title>
            <Paragraph>{data['results'][k++]['distance']} meters away..</Paragraph>
            </Title>
            <Button icon="map" mode="contained" onPress={() => navigation.navigate('MapView',{
              latitude:data['results'][t++]['geocodes']['main']['latitude'],
              longitude:data['results'][d++]['geocodes']['main']['longitude'],
            })}>
              See on the Map
            </Button>
            {/* </Title> */}
            </Card.Content>
            {/* <Card.Cover source={{ uri: 'https://assets.mspimages.in/wp-content/uploads/2022/05/pubg-mobile-has-earned-krafton-8-billion.jpg' }} /> */}
            {/* <Card.Cover source={{ uri: pic[j++]['prefix']+"960x591"+pic[j]['suffix']}} /> */}
            {/* <PlaceSwiper/> */}
         
        </Card>

        );
      

          return(
            <>

{/* <Paragraph>{data['results'][i]['name']}</Paragraph> */}
               <FlatList
               data={data['results'][i]['name']}
               renderItem={render}
               />

      </>
          
          );
          
        
      };
      
  return (
  //   <Card>
  //   {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} /> */}
  //   <Card.Content>
  //     <Title>Card title</Title>
      
      
  //     {/* <Paragraph>{JSON.stringify(data)}</Paragraph> */}
  //         {renderItem()}
  //   </Card.Content>
  //   <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
  //   <Card.Actions>
  //     {/* <Button>Cancel</Button>
  //     <Button>Ok</Button> */}
  //   </Card.Actions>
  // </Card>
  <>
  <Appbar.Header>
    <Appbar.BackAction onPress={() => navigation.navigate('Home')} />
    <Appbar.Content title="Check nearby places" />
  </Appbar.Header>
   <ScrollView
        // contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
        {/* <Text>Pull down to see RefreshControl indicator</Text> */}
      {renderItem()}

      </ScrollView>

   {/* <Text style={{color:'#000'}}>{JSON.stringify(pic[0]['prefix']+"100x100"+pic[0]['suffix'])}</Text> */}
      {/* <Text style={{color:'#000'}}>{JSON.stringify(data['results'][0]['categories'][0]['icon']['prefix'])}</Text> */}
      {/* {renderItem()} */}
   {/* <Text style={{color:'#000'}}>{JSON.stringify(data)}</Text> */}

  </>
  )
}

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
      color: '#000'
    },
  
  });

export default Foursquare