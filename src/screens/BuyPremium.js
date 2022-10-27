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
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [today, setToday] = useState(null);
  const [timePeriod, setTimePeriod] = useState(null);
  const [remainingPeriod, setRemainingPeriod] = useState(null);

  const token = {

    headers: {
      authorization: "Bearer " + userToken
    }
  }

  axios.get(`${BASE_URL}/profile`, token)
    .then(details => {
      setPremium(details.data.data[0].premium);
      setStartDate(details.data.data[0].datePurchased);
      setEndDate(details.data.data[0].endDate);
      setToday(new Date());
      setTimePeriod(endDate - startDate);
      setRemainingPeriod(endDate - today);
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