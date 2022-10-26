import React, { useState, useContext } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { Appbar } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { AuthContext } from '../context/AuthContext';
import { BASE_URL } from "../config";
import axios from "axios";

const BuyPremium = ({ route, navigation }) => {
  const { userInfo } = useContext(AuthContext);
  const { userToken } = useContext(AuthContext);
  const [premium, setPremium] = useState(null);

  const token = {

    headers: {
      authorization: "Bearer " + userToken
    }
  }

  axios.get(`${BASE_URL}/profile`, token)
    .then(details => {
      console.log(details.data.data[0])
      setPremium(details.data.data[0].profilePicture);
    })
    .catch(e => {

      console.log(`Retrieving error ${e}`)
    })


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