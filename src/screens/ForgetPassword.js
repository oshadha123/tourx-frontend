import React from "react";
import {SafeAreaView, View, Text, TouchableOpacity, StyleSheet} from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import InputField from '../components/InputField';
import ForgetPwSVG from '../assets/images/misc/forgotpw.svg';

const ForgetPassword = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <View style={{paddingHorizontal: 25}}>
        <View style={{alignItems: 'center'}}>
        <ForgetPwSVG
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
          }}>
          Forgot Password?
        </Text>
        <InputField
            label={'Enter email'}
            keyboardType="email-address"
            icon={
                <MaterialIcons
                name="alternate-email"
                    size={20}
                    color="#666"
                    style={{marginRight: 5}}
                />
                }
          />
        <Text
          style={{
            fontFamily: 'Roboto-Medium',
            fontSize: 12,
            fontWeight: '500',
            color: '#333',
            textAlign: 'center',
            marginBottom: 30,
          }}>
          A 6 digit OTP code will be sent to the provided email within the next 5 minutes.
        </Text>
        <View>
          <TouchableOpacity style={styles.panelButton} onPress={() => navigation.navigate("EnterOtp")}>
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

export default ForgetPassword;