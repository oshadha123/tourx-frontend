import React from 'react'
import { View, Text } from 'react-native'
import Diamond from '../screens/LeaderboardScreen'
const SettingsScreen = () => {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#fff'}}>
      {/* <Text>Settings Screen</Text> */}
      <Diamond active/>
    </View>
  )
}

export default SettingsScreen