import React, {useState, useContext} from 'react';
import {View, Text, TouchableOpacity, ImageBackground, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import ImagePicker from 'react-native-image-crop-picker';
import InputField from '../components/InputField';
import { AuthContext } from '../context/AuthContext';
import { BASE_URL } from "../config";

import axios from "axios";

const EditProfile = ({navigation}) => {
    const {userInfo}=useContext(AuthContext);
    const {userToken}=useContext(AuthContext);
    const token = {
    
      headers: {
         authorization: "Bearer " + userToken
      }
   }

    const[proPicture, setImage]=useState(userInfo.profilePicture);
    const[fName, setFName]=useState(userInfo.firstName);
    const[lName, setLName]=useState(userInfo.lastName);
    const[contact, setContact]=useState(userInfo.contact);
    const[bio, setBio]=useState(userInfo.bio);
    

    const update=(profilePicture,firstName,lastName,contactNumber,bio)=>{
      console.log(profilePicture);
      console.log(firstName);
      console.log(lastName);
      console.log(contactNumber);
      console.log(bio);

      axios.patch(`${BASE_URL}/profile`, {
        
        "change": {
          profilePicture,
          firstName,
          lastName,
          bio
        }

         }, token)
         .then(res=>{
             console.log(res.data);
             
         })
         .catch(e=>{
          
             console.log(`Updating error ${e}`)
         })

      if(userInfo.contact == null) {
        axios.post(`${BASE_URL}/contact`, {
         
          "contact": 
            [contactNumber]
   
           }, token)
           .then(res=>{
               console.log(res.data);
           })
           .catch(e=>{
            
               console.log(`Updating error ${e}`)
           })
      } else{
        axios.patch(`${BASE_URL}/contact`, {
         
          "contact": 
            [contactNumber]
   
           }, token)
           .then(res=>{
               console.log(res.data);
           })
           .catch(e=>{
            
               console.log(`Updating error ${e}`)
           })        
      };

    }
  
    const takePhotoFromCamera = () => {
      ImagePicker.openCamera({
        width: 500,
        height: 500,
        cropping: true,
        compressImageQuality: 0.7
      }).then(image => {
        setImage(image.path);
        const uri = image.path;
        const type = image.mime;
        const name = image.path.split(".")[1];
        const source = {uri,type,name}
        handleUpload(source);
        bs.current.snapTo(1);
      });
    }
  
    const choosePhotoFromLibrary = () => {
      ImagePicker.openPicker({
        width: 500,
        height: 500,
        cropping: true,
        compressImageQuality: 0.7
      }).then(image => {
        setImage(image.path);
        const uri = image.path;
        const type = image.mime;
        const name = image.path.split(".")[1];
        const source = {uri,type,name}
        handleUpload(source);
        bs.current.snapTo(1);
      });
    }

    const handleUpload = (image) => {
      const data = new FormData()
      data.append('file',image)
      data.append('upload_preset','tourxApp')
      data.append('cloud_name','tourx')

      fetch("https://api.cloudinary.com/v1_1/tourx/image/upload", {

        method: 'POST',
        body: data

      }).then(res => res.json()).
      then(data=>{
        setImage(data.url);
      })
      .catch(e=>{
            
        console.log(`Uploading error ${e}`)
    }) 
    }
  
    renderInner = () => (
      <View style={styles.panel}>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.panelTitle}>Upload Photo</Text>
          <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
        </View>
        <TouchableOpacity style={styles.panelButton} onPress={takePhotoFromCamera}>
          <Text style={styles.panelButtonTitle}>Take Photo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.panelButton} onPress={choosePhotoFromLibrary}>
          <Text style={styles.panelButtonTitle}>Choose From Device</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.panelButton}
          onPress={() => bs.current.snapTo(1)}>
          <Text style={styles.panelButtonTitle}>Cancel</Text>
        </TouchableOpacity>
      </View>
    );
  
    renderHeader = () => (
      <View style={styles.header}>
        <View style={styles.panelHeader}>
          <View style={styles.panelHandle} />
        </View>
      </View>
    );
  
    bs = React.createRef();
    fall = new Animated.Value(1);
  
    return (
      <View style={styles.container}>
        <BottomSheet
          ref={bs}
          snapPoints={[330, 0]}
          renderContent={renderInner}
          renderHeader={renderHeader}
          initialSnap={1}
          callbackNode={fall}
          enabledGestureInteraction={true}
        />
        <Animated.View style={{margin: 20,
          opacity: Animated.add(0.1, Animated.multiply(fall, 1.0)),
      }}>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity onPress={() => bs.current.snapTo(0)}>
              <View
                style={{
                  marginTop: 50,
                  height: 100,
                  width: 100,
                  borderRadius: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <ImageBackground
                  source={{uri: userInfo.profilePicture}}
                  style={{height: 100, width: 100, marginBottom: 30}}
                  imageStyle={{borderRadius: 15}}>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Icon
                      name="camera"
                      size={35}
                      color="#fff"
                      style={{
                        opacity: 0.8,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderWidth: 1,
                        borderColor: '#fff',
                        borderRadius: 10,
                      }}
                    />
                  </View>
                </ImageBackground>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{paddingTop: 30}}></View>
          <InputField
            label={userInfo.firstName}
            icon={
                <Ionicons
                    name="person-outline"
                    size={20}
                    color="#666"
                    style={{marginRight: 5}}
                />
                }
            onChangeText={(fname => {
              setFName(fname);
            })}
          />
          <InputField
            label={userInfo.lastName}
            icon={
                <Ionicons
                    name="person-outline"
                    size={20}
                    color="#666"
                    style={{marginRight: 5}}
                />
                }
            onChangeText={(lname => {
              setLName(lname);
            })}
          />
          <InputField
            keyboardType="numeric"
            label={userInfo.contact}
            icon={
                <Ionicons
                    name="call"
                    size={20}
                    color="#666"
                    style={{marginRight: 5}}
                />
                }
            onChangeText={(phone => {
              setContact(phone);
            })}
          />
          <InputField
            label={userInfo.bio}
            multiline={true}
            icon={
                <Ionicons
                    name="create"
                    size={20}
                    color="#666"
                    style={{marginRight: 5}}
                />
                }
            onChangeText={(bioo => {
              setBio(bioo);
            })}
          />
          <TouchableOpacity style={styles.commandButton} onPress={() => {{update(proPicture, fName, lName, contact, bio)}; alert("Profile successfully updated!"); navigation.navigate("Home")}}>
            <Text style={styles.panelButtonTitle}>Update</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    );
  };  

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      commandButton: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#1768AC',
        alignItems: 'center',
        marginTop: 10,
      },
      panel: {
        padding: 20,
        backgroundColor: '#FFFFFF',
        paddingTop: 20,
      },
      header: {
        backgroundColor: '#FFFFFF',
        shadowColor: '#333333',
        shadowOffset: {width: -1, height: -3},
        shadowRadius: 2,
        shadowOpacity: 0.4,
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      },
      panelHeader: {
        alignItems: 'center',
      },
      panelHandle: {
        width: 40,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#00000040',
        marginBottom: 10,
      },
      panelTitle: {
        fontSize: 27,
        height: 35,
      },
      panelSubtitle: {
        fontSize: 14,
        color: 'gray',
        height: 30,
        marginBottom: 10,
      },
      panelButton: {
        padding: 13,
        borderRadius: 10,
        backgroundColor: '#1768AC',
        alignItems: 'center',
        marginVertical: 7,
      },
      panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
      }
    });

export default EditProfile;