import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Appbar,Searchbar } from 'react-native-paper';
import { MaterialIcons,Entypo } from '@expo/vector-icons';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import Profile from "../../components/Profile";
{/* <StatusBar translucent backgroundColor="rgba(0,0,0,0)"/> */}


 
export default function App({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const _goBack = () => navigation.navigate('OnBoardScreen');
  const _handleMore = () => console.log('Shown more');
  const _goHomePage = ()=>navigation.navigate('HomeScreen');

 
  return (
    <>
    <Appbar.Header style={{backgroundColor:"#C3E0E5"}}>
      <Appbar.BackAction onPress={_goBack} />
      <Appbar.Content title="Login to tourX" />
      {/* <Appbar.Action icon="magnify" onPress={_handleSearch} /> */}
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
    </Appbar.Header>
    
          <Image style={styles.prBackground} source={require('../../assets/login.png')}/>

          
    <View style={styles.container}>
      {/* <Image style={styles.image} source={require("./assets/log2.png")} /> */}
      
 
      <StatusBar style="auto" />
      {/* <View style={styles.bottomView}>
        <View style={{padding:40}}></View>
      </View> */}
      
      <View style={styles.inputView}>
      <span><MaterialIcons name="email" size={24} color="black"/>
        <TextInput
          
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        /></span>
      </View>
 
      <View style={styles.inputView}>
        <span><Entypo name="lock" size={24} color="black" /><TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        /></span>
      </View>
 
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
 
      <TouchableOpacity style={styles.loginBtn} onPress={_goHomePage}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
    </>
  );
}
 
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    
    alignItems: "center",
    paddingTop:40,
    // justifyContent: "center",
    flex:1.5,
    backgroundColor:"#C3E0E5",
    top:"30%",
    // bottom:50,
    borderTopStartRadius:60,
    borderTopEndRadius:60,
  },
 
  image: {
    marginBottom: 40,
  },
 
  inputView: {
 
    backgroundColor: "#41729F",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
 
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
 
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#5885AF",
  },
  prBackground:{
    width: 230,
    height: 230,
    borderRadius: 120,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:62,
},
  
});