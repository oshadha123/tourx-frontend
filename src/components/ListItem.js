import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import { windowWidth } from '../utils/Dimensions';

export default function ListItem({photo, firstName, subTitle, isFree, points, onPress,lastName,attractionName}) {
  return (
    <View style={{
      flexDirection:'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20,
    }}>
      <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
        <Image
          source={photo}
          style={{width: 55, height: 55, borderRadius: 10, marginRight: 8}}
        />
        <View style={{width: windowWidth - 220}}>
          <Text
            style={{
              color: '#333',
              fontFamily: 'Roboto-Medium',
              fontSize: 14,
            }}>
            {subTitle}
          </Text>
          <Text
            numberOfLines={1}
            style={{
              color: '#333',
              fontFamily: 'Roboto-Medium',
              fontSize: 14,
              textTransform: 'uppercase',
            }}>
            {firstName} {lastName}
            
          </Text>
        </View>
      </View>

      <TouchableOpacity onPress={onPress} style={{
        backgroundColor:'#1768AC',
        padding:10,
        width: 100,
        borderRadius: 10,
      }}>
        <Text style={{
          color: '#fff',
          textAlign: 'center',
          fontFamily: 'Roboto-Medium',
          fontSize: 14,
        }}>
          {points} {'pts'}
          {isFree == 'No' && 'View'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
