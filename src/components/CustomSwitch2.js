import React, {useState,useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { AuthContext } from '../context/AuthContext';


export default function CustomSwitch2({
  selectionMode,
  option1,
  option2,
  onSelectSwitch,
}) {
const {getLeaderboard2}=useContext(AuthContext);
const {getFindTours}=useContext(AuthContext);

  const [getSelectionMode, setSelectionMode] = useState(selectionMode);

  const updateSwitchData = value => {
    setSelectionMode(value);
    onSelectSwitch(value);
  };

  return (
    <View
      style={{
        height: 44,
        width: '100%',
        backgroundColor: '#e4e4e4',
        borderRadius: 10,
        borderColor: '#1768AC',
        flexDirection: 'row',
        justifyContent: 'center',
      }}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {updateSwitchData(1);getFindTours()}}
        style={{
          flex: 1,
          backgroundColor: getSelectionMode == 1 ? '#1768AC' : '#e4e4e4',
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: getSelectionMode == 1 ? 'white' : '#1768AC',
            fontSize: 14,
            fontFamily: 'Roboto-Medium',
          }}>
          {option1}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {updateSwitchData(2);getLeaderboard2() }}
        style={{
          flex: 1,
          backgroundColor: getSelectionMode == 2 ? '#1768AC' : '#e4e4e4',
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: getSelectionMode == 2 ? 'white' : '#1768AC',
            fontSize: 14,
            fontFamily: 'Roboto-Medium',
          }}>
          {option2}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
