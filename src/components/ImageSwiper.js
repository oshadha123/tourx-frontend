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
            <Text numberOfLines={1} style={styles.text}>waterfall__1</Text>
          }
        >
          <Image style={styles.image} source={{uri:"https://swall.teahub.io/photos/small/80-807509_high-quality-natural-beauty.jpg"}} />
        </View>
        <View
          style={styles.slide}
          title={<Text numberOfLines={1} style={styles.text}>waterfall__2</Text>}
        >
          <Image style={styles.image} source={{uri:"https://i.pinimg.com/originals/b7/f5/7a/b7f57aa715f2ab0f60895c03e482e530.jpg"}} />
        </View>
        <View
          style={styles.slide}
          title={<Text numberOfLines={1} style={styles.text}>road__1</Text>}
        >
          <Image style={styles.image} source={{uri:"https://i.pinimg.com/originals/49/73/5b/49735b38c27ca67787e201a8f4b0fd6d.jpg"}} />
        </View>
        <View
          style={styles.slide}
          title={
            <Text numberOfLines={1} style={styles.text}>river__1</Text>
          }
        >
          <Image style={styles.image} source={{uri:"https://wallpaperaccess.com/full/31193.jpg"}} />
        </View>
      </Swiper>
    );
  
}