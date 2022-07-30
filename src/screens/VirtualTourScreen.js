import React from 'react'
import { View, Text } from 'react-native'

const VirtualTourScreen = ({navigation, route}) => {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>Virtual Tour Screen</Text>
      <Text>{route.params?.title}</Text>
    </View>
  )
}

export default VirtualTourScreen
