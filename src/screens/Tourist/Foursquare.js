
import React,{useState,useEffect} from 'react'
import { FlatList, ListView, StyleSheet, Text, View ,RefreshControl,ScrollView} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import { Avatar, Button, Card, Title, Paragraph,Appbar } from 'react-native-paper';
import PlaceSwiper from '../../components/PlaceSwiper';
import ImageView from "react-native-image-viewing";
import ImageSwiper1 from '../../components/ImageSwiper1';
import ImageSwiper2 from '../../components/ImageSwiper2';
import ImageSwiper3 from '../../components/ImageSwiper3';
import ImageSwiper4 from '../../components/ImageSwiper4';
import ImageSwiper5 from '../../components/ImageSwiper5';
import ImageSwiper6 from '../../components/ImageSwiper6';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" theme={{ colors: { primary: '#06BEE1' } }}/>

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

  // useEffect(()=>{
  //  getData()
  // },[])

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
          Authorization: 'fsq3wgfLQMlaOpJLKLCk0bTZ4dSHUSU3dXSzHshLAVOJaAQ='
        }
      };
    //   const [inf,setInf]=useState(null);
      // useEffect(()=>{
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
     
      // },[])
   
      const renderItem = () => {

        if(data!=null && pic!== null) {
        
        console.log("url"+data['results'][0]['categories'][0]['icon']['prefix']+'.png')
        console.log("name"+data['results'][0]['categories'][0]['name'])
        var i =0;
        var j=1;
        var k=2;
        var p=3;
        var w=4;
        var t=5;
        var d=0;
        // var latitude=data['results'][0]['geocodes']['main']['latitude'];
        // var longitude=data['results'][0]['geocodes']['main']['longitude'];
        // if(data!==null){
        const render = (p) => (
          <ScrollView>
          <Card>
            {/* <Card.Cover source={{ uri: pic[i]['prefix']+"960x591"+pic[i]['suffix']}} /> */}
            {/* <ImageSwiper1/> */}
            <Card.Content>
            <Title>
            <Paragraph>{data['results'][i]['name']}</Paragraph>
            </Title>
            <Title>
            <Paragraph>{data['results'][i]['categories'][0]['name']}</Paragraph>
            </Title>
            <Title>
            <Paragraph>{data['results'][i]['location']['formatted_address']}</Paragraph>
            </Title>
            <Title>
            <Paragraph>{data['results'][i]['distance']} meters away..</Paragraph>
            </Title>
            <Button icon="map" mode="contained" onPress={() => navigation.navigate('MapView',{
              latitude:data['results'][i]['geocodes']['main']['latitude'],
              longitude:data['results'][i]['geocodes']['main']['longitude'],
            })} theme={{ colors: { primary: '#06BEE1' } }}>
              See on the Map
            </Button>
            {/* </Title> */}
            </Card.Content>
            {/* <Card.Cover source={{ uri: 'https://assets.mspimages.in/wp-content/uploads/2022/05/pubg-mobile-has-earned-krafton-8-billion.jpg' }} /> */}
            {/* <Card.Cover source={{ uri: pic[j++]['prefix']+"960x591"+pic[j]['suffix']}} /> */}
            {/* <PlaceSwiper/> */}
         
        </Card>
        <Card>
            {/* <Card.Cover source={{ uri: pic[j]['prefix']+"960x591"+pic[j]['suffix']}} /> */}
            {/* <ImageSwiper2/> */}
            <Card.Content>
            <Title>
            <Paragraph>{data['results'][j]['name']}</Paragraph>
            </Title>
            <Title>
            <Paragraph>{data['results'][j]['categories'][0]['name']}</Paragraph>
            </Title>
            <Title>
            <Paragraph>{data['results'][j]['location']['formatted_address']}</Paragraph>
            </Title>
            <Title>
            <Paragraph>{data['results'][j]['distance']} meters away..</Paragraph>
            </Title>
            <Button icon="map" mode="contained" onPress={() => navigation.navigate('MapView1',{
              latitude:data['results'][j]['geocodes']['main']['latitude'],
              longitude:data['results'][j]['geocodes']['main']['longitude'],
            })} theme={{ colors: { primary: '#06BEE1' } }}>
              See on the Map
            </Button>
            {/* </Title> */}
            </Card.Content>
            {/* <Card.Cover source={{ uri: 'https://assets.mspimages.in/wp-content/uploads/2022/05/pubg-mobile-has-earned-krafton-8-billion.jpg' }} /> */}
            {/* <Card.Cover source={{ uri: pic[j++]['prefix']+"960x591"+pic[j]['suffix']}} /> */}
            {/* <PlaceSwiper/> */}
         
        </Card>
        <Card>
            {/* <Card.Cover source={{ uri: pic[k]['prefix']+"960x591"+pic[k]['suffix']}} /> */}
            {/* <ImageSwiper3/> */}
            <Card.Content>
            <Title>
            <Paragraph>{data['results'][k]['name']}</Paragraph>
            </Title>
            <Title>
            <Paragraph>{data['results'][k]['categories'][0]['name']}</Paragraph>
            </Title>
            <Title>
            <Paragraph>{data['results'][k]['location']['formatted_address']}</Paragraph>
            </Title>
            <Title>
            <Paragraph>{data['results'][k]['distance']} meters away..</Paragraph>
            </Title>
            <Button icon="map" mode="contained" onPress={() => navigation.navigate('MapView2',{
              latitude:data['results'][k]['geocodes']['main']['latitude'],
              longitude:data['results'][k]['geocodes']['main']['longitude'],
            })} theme={{ colors: { primary: '#06BEE1' } }}>
              See on the Map
            </Button>
            {/* </Title> */}
            </Card.Content>
            {/* <Card.Cover source={{ uri: 'https://assets.mspimages.in/wp-content/uploads/2022/05/pubg-mobile-has-earned-krafton-8-billion.jpg' }} /> */}
            {/* <Card.Cover source={{ uri: pic[j++]['prefix']+"960x591"+pic[j]['suffix']}} /> */}
            {/* <PlaceSwiper/> */}
         
        </Card>
        <Card>
            {/* <Card.Cover source={{ uri: pic[p]['prefix']+"960x591"+pic[p]['suffix']}} /> */}
            {/* <ImageSwiper4/> */}
            <Card.Content>
            <Title>
            <Paragraph>{data['results'][p]['name']}</Paragraph>
            </Title>
            <Title>
            <Paragraph>{data['results'][p]['categories'][0]['name']}</Paragraph>
            </Title>
            <Title>
            <Paragraph>{data['results'][p]['location']['formatted_address']}</Paragraph>
            </Title>
            <Title>
            <Paragraph>{data['results'][p]['distance']} meters away..</Paragraph>
            </Title>
            <Button icon="map" mode="contained" onPress={() => navigation.navigate('MapView3',{
              latitude:data['results'][p]['geocodes']['main']['latitude'],
              longitude:data['results'][p]['geocodes']['main']['longitude'],
            })} theme={{ colors: { primary: '#06BEE1' } }}>
              See on the Map
            </Button>
            {/* </Title> */}
            </Card.Content>
            {/* <Card.Cover source={{ uri: 'https://assets.mspimages.in/wp-content/uploads/2022/05/pubg-mobile-has-earned-krafton-8-billion.jpg' }} /> */}
            {/* <Card.Cover source={{ uri: pic[j++]['prefix']+"960x591"+pic[j]['suffix']}} /> */}
            {/* <PlaceSwiper/> */}
         
        </Card>
        <Card>
            {/* <Card.Cover source={{ uri: pic[w]['prefix']+"960x591"+pic[w]['suffix']}} /> */}
            {/* <ImageSwiper5/> */}
            <Card.Content>
            <Title>
            <Paragraph>{data['results'][w]['name']}</Paragraph>
            </Title>
            <Title>
            <Paragraph>{data['results'][w]['categories'][0]['name']}</Paragraph>
            </Title>
            <Title>
            <Paragraph>{data['results'][w]['location']['formatted_address']}</Paragraph>
            </Title>
            <Title>
            <Paragraph>{data['results'][w]['distance']} meters away..</Paragraph>
            </Title>
            <Button icon="map" mode="contained" onPress={() => navigation.navigate('MapView4',{
              latitude:data['results'][w]['geocodes']['main']['latitude'],
              longitude:data['results'][w]['geocodes']['main']['longitude'],
            })} theme={{ colors: { primary: '#06BEE1' } }}>
              See on the Map
            </Button>
            {/* </Title> */}
            </Card.Content>
            {/* <Card.Cover source={{ uri: 'https://assets.mspimages.in/wp-content/uploads/2022/05/pubg-mobile-has-earned-krafton-8-billion.jpg' }} /> */}
            {/* <Card.Cover source={{ uri: pic[j++]['prefix']+"960x591"+pic[j]['suffix']}} /> */}
            {/* <PlaceSwiper/> */}
         
        </Card>
        <Card>
            {/* <Card.Cover source={{ uri: pic[t]['prefix']+"960x591"+pic[t]['suffix']}} /> */}
            {/* <ImageSwiper6/> */}
            <Card.Content>
            <Title>
            <Paragraph>{data['results'][t]['name']}</Paragraph>
            </Title>
            <Title>
            <Paragraph>{data['results'][t]['categories'][0]['name']}</Paragraph>
            </Title>
            <Title>
            <Paragraph>{data['results'][t]['location']['formatted_address']}</Paragraph>
            </Title>
            <Title>
            <Paragraph>{data['results'][t]['distance']} meters away..</Paragraph>
            </Title>
            <Button icon="map" mode="contained" onPress={() => navigation.navigate('MapView5',{
              latitude:data['results'][t]['geocodes']['main']['latitude'],
              longitude:data['results'][t]['geocodes']['main']['longitude'],
            })} theme={{ colors: { primary: '#06BEE1' } }}>
              See on the Map
            </Button>
            {/* </Title> */}
            </Card.Content>
            {/* <Card.Cover source={{ uri: 'https://assets.mspimages.in/wp-content/uploads/2022/05/pubg-mobile-has-earned-krafton-8-billion.jpg' }} /> */}
            {/* <Card.Cover source={{ uri: pic[j++]['prefix']+"960x591"+pic[j]['suffix']}} /> */}
            {/* <PlaceSwiper/> */}
         
        </Card>
        </ScrollView>
        

        );
      
          
          return(
            <>

{/* <Paragraph>{data['results'][i]['name']}</Paragraph> */}
               {/* <FlatList
               data={data['results'][i]['name']}
               renderItem={render}
               /> */}
               {render(p)}

      </>
          
          );
              }else{
                console.log("noooooooo")
                // useEffect(()=>{
                  getData()
                  // getData2()
                  // getData3()
                  // getData4()
                  // getData5()
                  // getData6()
                // },[100])
              }
          
              // }else{
              //   console.log("no")
              // }

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
  <Appbar.Header theme={{ colors: { primary: '#06BEE1' } }}>
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
      {/* {renderItem()} */}

      </ScrollView>

   {/* <Text style={{color:'#000'}}>{JSON.stringify(pic[0]['prefix']+"100x100"+pic[0]['suffix'])}</Text> */}
      {/* <Text style={{color:'#000'}}>{JSON.stringify(data['results'][0]['categories'][0]['icon']['prefix'])}</Text> */}
      
      {renderItem()}
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