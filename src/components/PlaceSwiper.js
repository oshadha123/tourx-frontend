import React, { Component } from 'react'
import { Text, View, Image, Dimensions } from 'react-native'
import Swiper from 'react-native-swiper'
const { width } = Dimensions.get('window')

const styles = {
  wrapper: {
    height:150,
    
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

export default function ImageSwiper() {
  return (
    
      <Swiper
        style={styles.wrapper}
        renderPagination={renderPagination}
        loop={false}
      >
        <View
          style={styles.slide}
          title={
            <Text numberOfLines={1} style={styles.text}>Bomburu Ella Waterfall</Text>
          }
        >
          <Image style={styles.image} source={{uri:"https://api.travelql.com/images/0aeda8f4-358a-49eb-919a-5790a03ce5d0.webp"}} />
        </View>
        <View
          style={styles.slide}
          title={<Text numberOfLines={1} style={styles.text}>Sigiriya</Text>}
        >
          <Image style={styles.image} source={{uri:"https://www.experiencetravelgroup.com/reposit/20160330103043.jpg"}} />
        </View>
        <View
          style={styles.slide}
          title={<Text numberOfLines={1} style={styles.text}>Galle Fort</Text>}
        >
          <Image style={styles.image} source={{uri:"https://static.saltinourhair.com/wp-content/uploads/2016/11/23154307/galle-dutch-fort-sri-lanka-header.jpg"}} />
        </View>
        <View
          style={styles.slide}
          title={
            <Text numberOfLines={1} style={styles.text}>Ella</Text>
          }
        >
          <Image style={styles.image} source={{uri:"https://destinationlesstravel.com/wp-content/uploads/2020/04/Ella-train.jpg"}} />
        </View>
      </Swiper>
    );
  
}