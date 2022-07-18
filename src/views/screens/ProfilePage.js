import React, { Component } from 'react';
import { Appbar } from 'react-native-paper';
import Profile from '../../components/Profile';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

const ProfilePage = ({navigation})=>{


    const _goBack = () => navigation.navigate('HomeScreen');
const _handleMore = () => console.log('Shown more');
const _goProfilePage=()=>navigation.navigate('ProfilePage');

  
    return (
        <>
        <Appbar.Header style={{backgroundColor:"#C3E0E5"}}>
      <Appbar.BackAction onPress={_goBack} />
      <Appbar.Content title="My TourX Profile" />
      <TouchableOpacity onPress={_goProfilePage}>
      <Profile />
      </TouchableOpacity>
      
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
    </Appbar.Header>
      <View style={styles.container}>
          <View style={styles.header}>
          <Image style={styles.prBackground} source={require('../../assets/profileBackground2.jpg')}/>

          </View>
          <Image style={styles.avatar} source={require('../../assets/avatar.jpg')}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>John Doe</Text>
              <Text style={styles.info}>Tour guide / Photographer</Text>
              <Text style={styles.description}>Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an,</Text>
              
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>Ann Sarah</Text>  
              </TouchableOpacity>              
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>ann@gmail.com</Text> 
              </TouchableOpacity>
            </View>
        </View>
      </View>
      </>
    )
  };
export default ProfilePage;

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#5885AF",
    height:200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
    
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
    
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#5885AF",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:0,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:300,
    borderRadius:30,
    backgroundColor: "#5885AF",
  },
  prBackground:{
       width:"100%",
       height:200
  },
  
});