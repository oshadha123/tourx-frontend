import React from "react";
import {SafeAreaView, View, Text, TouchableOpacity, StyleSheet} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import InputField from '../components/InputField';
import ResetPwSVG from '../assets/images/misc/resetpw.svg';

const ResetPassword = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center',backgroundColor:'#fff'}}>
      <View style={{paddingHorizontal: 25}}>
        <View style={{alignItems: 'center'}}>
        <ResetPwSVG
            height={300}
            width={300}
            style={{transform: [{rotate: '-5deg'}]}}        
        />
        </View>
        <Text
          style={{
            fontFamily: 'Roboto-Medium',
            fontSize: 28,
            fontWeight: '500',
            color: '#333',
            marginBottom: 30,
            marginTop: 40
          }}>
          Reset Password
        </Text>
        <InputField
            label={'Password'}
            icon={
              <Ionicons
              name="ios-lock-closed-outline"
              size={20}
              color="#9A52C7"
              style={{marginRight: 5}}
            />
            }
            inputType="password"
          />
        <InputField
            label={'Confirm Password'}
            icon={
              <Ionicons
              name="ios-lock-closed-outline"
              size={20}
              color="#9A52C7"
              style={{marginRight: 5}}
            />
            }
            inputType="password"
          />
        <View>
          <TouchableOpacity style={styles.panelButton} onPress={() => alert('Successfully reseted the password. Please log in again!')}>
              <Text style={styles.panelButtonTitle}>Submit</Text>
          </TouchableOpacity>
       </View>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  panelButton: {
    backgroundColor: '#9A52C7',
    padding: 20,
    borderRadius: 10,
    marginBottom: 30,
  },
  panelButtonTitle: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 16,
    color: '#fff',
  },  
});

export default ResetPassword;