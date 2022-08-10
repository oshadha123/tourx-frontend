import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ImageBackground, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import ImagePicker from 'react-native-image-crop-picker';
import InputField from '../components/InputField';

const EditProfile = () => {
    const [image, setImage] = useState('https://res.cloudinary.com/tourx/image/upload/v1659729302/m_k23t6c.png');
  
    const takePhotoFromCamera = () => {
      ImagePicker.openCamera({
        compressImageMaxWidth: 300,
        compressImageMaxHeight: 300,
        cropping: true,
        compressImageQuality: 0.7
      }).then(image => {
        console.log(image);
        setImage(image.path);
        this.bs.current.snapTo(1);
      });
    }
  
    const choosePhotoFromLibrary = () => {
      ImagePicker.openPicker({
        width: 300,
        height: 300,
        cropping: true,
        compressImageQuality: 0.7
      }).then(image => {
        console.log(image);
        setImage(image.path);
        this.bs.current.snapTo(1);
      });
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
          onPress={() => this.bs.current.snapTo(1)}>
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
          ref={this.bs}
          snapPoints={[330, 0]}
          renderContent={this.renderInner}
          renderHeader={this.renderHeader}
          initialSnap={1}
          callbackNode={this.fall}
          enabledGestureInteraction={true}
        />
        <Animated.View style={{margin: 20,
          opacity: Animated.add(0.1, Animated.multiply(this.fall, 1.0)),
      }}>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity onPress={() => this.bs.current.snapTo(0)}>
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
                  source={{
                    uri: image,
                  }}
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
            label={'Full Name'}
            icon={
                <Ionicons
                    name="person-outline"
                    size={20}
                    color="#666"
                    style={{marginRight: 5}}
                />
                }
          />
          <InputField
            keyboardType="numeric"
            label={'Phone Number'}
            icon={
                <Ionicons
                    name="call"
                    size={20}
                    color="#666"
                    style={{marginRight: 5}}
                />
                }
          />
          <InputField
            label={'Bio'}
            icon={
                <Ionicons
                    name="create"
                    size={20}
                    color="#666"
                    style={{marginRight: 5}}
                />
                }
          />
          <TouchableOpacity style={styles.commandButton} onPress={() => {}}>
            <Text style={styles.panelButtonTitle}>Submit</Text>
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
        backgroundColor: '#9A52C7',
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
        backgroundColor: '#9A52C7',
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