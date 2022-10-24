import React, { Component, useState, useEffect } from 'react'
import { Text, View, Image, Dimensions } from 'react-native'
import Swiper from 'react-native-swiper'
import Geolocation from '@react-native-community/geolocation';
const { width } = Dimensions.get('window')

let current_latitude=null;
let current_longitude=null;
Geolocation.getCurrentPosition(info =>{
  console.log(info.coords.latitude)
  
  current_latitude=info.coords.latitude;
  current_longitude=info.coords.longitude;
  
});

const styles = {
  wrapper: {
    height:250,
    
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    
    
  },
  text: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
    bottom:7
    // borderBottom:10
  },
  image: {
    width,
    flex: 1
  },
  paginationStyle: {
    position: 'absolute',
    bottom: 10,
    right: 10
  },
  paginationText: {
    color: 'white',
    fontSize: 20
  }
}

const renderPagination = (index, total, context) => {
  return (
    <View style={styles.paginationStyle}>
      <Text style={{ color: 'grey' }}>
        <Text style={styles.paginationText}>{index + 1}</Text>/{total}
      </Text>
    </View>
  )
}

export default function ImageSwiper2() {


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
    const [p,setP] = useState(null);

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

        console.log(pic)
        // setP(pic[0]['prefix']+"960x591"+pic[0]['suffix'])
     
      },[])

  return (


    
      <Swiper
        style={styles.wrapper}
        renderPagination={renderPagination}
        loop={false}
      >
        <View
          style={styles.slide}
        >
          {/* <Text style={{color:'#000'}}>{JSON.stringify(pic)}</Text> */}
          <Image style={styles.image} source={{uri: pic[0]['prefix']+"960x591"+pic[0]['suffix']}} />
        </View>
        <View
          style={styles.slide}
          
        >
          <Image style={styles.image} source={{uri:pic[1]['prefix']+"960x591"+pic[1]['suffix']}} />
        </View>
        <View
          style={styles.slide}
          
        >
          <Image style={styles.image} source={{uri:pic[2]['prefix']+"960x591"+pic[2]['suffix']}} />
        </View>
        <View
          style={styles.slide}

        >
          <Image style={styles.image} source={{uri:pic[3]['prefix']+"960x591"+pic[3]['suffix']}} />
        </View>
      </Swiper>
    );
  
}