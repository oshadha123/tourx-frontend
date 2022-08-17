import React, { useState } from 'react';
import {View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Image} from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import InputField from '../components/InputField'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ImagePicker from 'react-native-image-crop-picker';
import SelectDropdownWithSearch from 'react-native-select-dropdown-with-search';
import UploadImgSVG from '../assets/images/misc/uploadimg.svg';

const AddToursScreen = () => {

    const attractions = ["Bomuru Ella", "Hortain Plains", "Dunhinda Falls", "Ravana Falls", "Sigiriya", "Bopath Ella"]

    const [tourName, setTourName] = useState();
    const [tourDescription, setTourDescription] = useState();
    const [location, setLocation] = useState();

    const consoleWrite = () => {
        console.log('Tour Name : ', tourName);
        console.log('Tour Description: ', tourDescription);
        console.log('Tourist Attraction : ', location);
    }

    const choosePhotoFromDevice = () => {
        ImagePicker.openPicker({
          cropping: false,
          multiple: true,
          maxFiles: 5,
          minFiles: 5,
        }).then(images => {
          console.log('Images : ', images);
        }).catch(e => console.log(e));
      }
  
    return (
        <View style={{ flex: 1, marginTop: 50 }}>
            <ProgressSteps
                topOffset={0}
                marginBottom={40}
                activeStepIconBorderColor='#9A52C7'
                progressBarColor='#ebebe4'
                completedProgressBarColor='#9A52C7'
                activeStepIconColor='#9A52C7'
                completedStepIconColor='#9A52C7'
                disabledStepIconColor='#ebebe4'
                labelColor='gray'
                labelFontSize={13}
                activeLabelColor='#9A52C7'
                activeLabelFontSize={13}
                completedLabelColor='black'
                activeStepNumColor='white'
                disabledStepNumColor='black'
                completedStepNumColor='white'
                completedCheckColor='white'     
            >
                <ProgressStep
                    label="Step 1"
                    nextBtnStyle={styles.nextBtnStyle}
                    nextBtnTextStyle={styles.nextBtnTextStyle}
                >
                    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
                        <View style={{paddingHorizontal: 25}}>
                            <Text
                            style={{
                                fontFamily: 'Roboto-Medium',
                                fontSize: 28,
                                fontWeight: '500',
                                color: '#333',
                                marginBottom: 40,
                            }}>
                            Instructions
                            </Text>
                            <Text
                            style={{
                                fontSize: 15,
                                color: '#333',
                                textAlign: 'justify'
                            }}                           
                            >Please note that the virtual tour will not be created as soons as you complete the next steps. It will be processed through the system and will be checked for the quality. The success of your virtual tour solely depends on the quality of the images you upload. Therefore, please make sure that suitable images are uploaded. The virtual tour will be made up of five images. Hence, it is a must to upload an exact number of five images. If not, your tour will be rejected.</Text>
                        </View>
                    </SafeAreaView>
                </ProgressStep>
                <ProgressStep
                    label="Step 2"
                    scrollable={false}
                    onNext={consoleWrite}
                    nextBtnStyle={{        
                        backgroundColor: '#9A52C7',
                        padding: 20,
                        borderRadius: 10,
                        marginBottom: -100,
                        width: 120
                    }}
                    nextBtnTextStyle={styles.nextBtnTextStyle}
                    previousBtnStyle={{
                        backgroundColor: '#9A52C7',
                        padding: 20,
                        borderRadius: 10,
                        marginBottom: -100,
                        width: 120
                    }}
                    previousBtnTextStyle={styles.previousBtnTextStyle}
                >   
                    <ScrollView>
                        <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
                            <View style={{paddingHorizontal: 25}}>
                                <Text
                                style={{
                                    fontFamily: 'Roboto-Medium',
                                    fontSize: 28,
                                    fontWeight: '500',
                                    color: '#333',
                                    marginBottom: 40,
                                }}>
                                Add Tour Details
                                </Text>
                                <InputField
                                label={'Enter Tour Name'}
                                onChangeText={(val) => setTourName(val)}
                                icon={
                                    <MaterialIcons
                                    name="flight"
                                        size={20}
                                        color="#666"
                                        style={{marginRight: 5}}
                                    />
                                    }
                                />
                                <InputField
                                label={'Enter Tour Description'}
                                onChangeText={(val) => setTourDescription(val)}
                                icon={
                                    <MaterialIcons
                                    name="description"
                                        size={20}
                                        color="#666"
                                        style={{marginRight: 5}}
                                    />
                                    }
                                />
                                <SelectDropdownWithSearch
                                    data={attractions}
                                    onSelect={(val) =>
                                        setLocation(val)
                                    }
                                    buttonTextAfterSelection={(selectedItem, index) => {
                                        return selectedItem
                                    }}
                                    buttonStyle={{
                                        flexDirection: 'row',
                                        borderBottomColor: '#ccc',
                                        borderBottomWidth: 1,
                                        paddingBottom: 8,
                                        marginBottom: 20,
                                        paddingLeft: 0,
                                        flex: 1,
                                        paddingVertical: 0,
                                        height: 40,
                                        width: '100%' ,
                                        backgroundColor: 'rgba(52, 52, 52, 0.0)'                                 
                                    }}
                                    buttonTextStyle={{
                                        textAlign: 'left',
                                        fontSize: 15
                                    }}
                                    dropdownStyle={{
                                        borderRadius: 5
                                    }}
                                    rowTextStyle={{
                                        textAlign: 'left',
                                        fontSize: 15
                                    }}
                                    defaultButtonText='Select a Tourist Attraction'
                                    renderDropdownIcon={() => {
                                        return(
                                            <MaterialIcons
                                            name="add-location"
                                                size={20}
                                                color="#666"
                                                style={{marginRight: 2}}
                                            />
                                        )
                                    }}
                                    dropdownIconPosition={'left'}
                                    rowTextForSelection={(item, index) => {
                                        return item
                                    }}
                                />
                            </View>
                        </SafeAreaView>                        
                    </ScrollView>
                </ProgressStep>
                <ProgressStep
                    label="Step 3"
                    onSubmit={() => alert('Tour will be created shortly!')}
                    nextBtnStyle={styles.nextBtnStyle}
                    nextBtnTextStyle={styles.nextBtnTextStyle}
                    previousBtnStyle={styles.previousBtnStyle}
                    previousBtnTextStyle={styles.previousBtnTextStyle}
                >
                    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
                        <View style={{paddingHorizontal: 25}}>
                            <Text
                            style={{
                                fontFamily: 'Roboto-Medium',
                                fontSize: 28,
                                fontWeight: '500',
                                color: '#333',
                                marginBottom: 40,
                            }}>
                            Add VR Images
                            </Text>
                            <View style={{alignItems: 'center'}}>
                                <TouchableOpacity onPress={choosePhotoFromDevice}>
                                    <UploadImgSVG
                                        height={175}
                                        width={175}
                                        style={{marginBottom: 25}}        
                                    />
                                </TouchableOpacity>       
                            </View>                     
                        </View>
                    </SafeAreaView>
                </ProgressStep>
            </ProgressSteps>
        </View>
    );
  };  

const styles = StyleSheet.create({
    nextBtnStyle: {
        backgroundColor: '#9A52C7',
        padding: 20,
        borderRadius: 10,
        marginBottom: 184,
        width: 120
    },
    nextBtnTextStyle: {
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 16,
        color: '#fff',
    },
    previousBtnStyle: {
        backgroundColor: '#9A52C7',
        padding: 20,
        borderRadius: 10,
        marginBottom: 184,
        width: 120
    },
    previousBtnTextStyle: {
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 16,
        color: '#fff',
    }
    });

export default AddToursScreen;