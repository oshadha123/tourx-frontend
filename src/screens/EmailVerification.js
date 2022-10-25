import React, { useState,useContext } from "react";
import {SafeAreaView, View, Text, TouchableOpacity, StyleSheet} from "react-native";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import EnterOTP from '../assets/images/misc/enterotp.svg';
import { BASE_URL } from "../config";

import axios from "axios";

import { AuthContext } from '../context/AuthContext';

const EmailVerification = ({navigation}) => {
    const[verifyCode,setVerifyCode]=useState('');
   const {email}=useContext(AuthContext);

    const verify=(email,otp)=>{
        console.log(email);
        console.log(otp);

        axios.patch(`${BASE_URL}/verify`,{
            
            email,
            otp
   
           })
           .then(res=>{
               console.log(res.data);
               
           })
           .catch(e=>{
            
               console.log(`Logging error ${e}`)
           })

    }
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <View style={{paddingHorizontal: 25}}>
        <View style={{alignItems: 'center'}}>
        <EnterOTP
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
            marginBottom: 0,
            marginTop: 30
          }}>
          Enter OTP
        </Text>
        <View style={{alignItems: 'center'}}>
          <OTPInputView
            pinCount={6}
            style={{width: '80%', height: 80}}
            autoFocusOnLoad
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            onCodeFilled = {(code => {
              console.log(`Code is ${code}, you are good to go!`)
              setVerifyCode(code);
            })}
          />
        </View>
        <Text
          style={{
            fontFamily: 'Roboto-Medium',
            fontSize: 12,
            fontWeight: '500',
            color: '#333',
            textAlign: 'center',
            marginBottom: 30,
          }}>
          Please enter the 6 digit OTP code which was sent to your email.
        </Text>
        <View>
          <TouchableOpacity style={styles.panelButton} onPress={() => {navigation.navigate("Login");verify(email,verifyCode)}}>
              <Text style={styles.panelButtonTitle}>Submit</Text>
          </TouchableOpacity>
       </View>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  panelButton: {
    backgroundColor: '#1768AC',
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
  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    color: "black"
  },
  underlineStyleHighLighted: {
    borderColor: "black",
    borderBottomWidth: 3,
    color: "black"
  },
});

export default EmailVerification;