import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { Appbar } from 'react-native-paper';

const BuyPremium = ({ route, navigation }) => {
  return (
    <>
      <Appbar.Header theme={{ colors: { primary: '#06BEE1' } }}>
        <Appbar.BackAction onPress={() => navigation.navigate('Home')} />
        <Appbar.Content title="Buy Premium" />
      </Appbar.Header>
      <Text>BuyPremium</Text>
    </>
  )
}

export default BuyPremium