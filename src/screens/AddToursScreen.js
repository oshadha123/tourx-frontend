import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import InputField from '../components/InputField'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ImagePicker from 'react-native-image-crop-picker';
import { Dropdown, MultiSelect } from 'react-native-element-dropdown';
import UploadImgSVG from '../assets/images/misc/uploadimg.svg';
import { Checkbox } from 'react-native-paper';
import { Appbar } from 'react-native-paper';
import { add } from 'react-native-reanimated';
import { AuthContext } from '../context/AuthContext';
import { BASE_URL } from "../config";

import axios from "axios";

const AddToursScreen = ({ navigation }) => {

    const { userInfo } = useContext(AuthContext);
    const { userToken } = useContext(AuthContext);
    const token = {

        headers: {
            authorization: "Bearer " + userToken
        }
    }

    const attractions = [{ label: 'Bomuru Ella', value1: 1 }, { label: 'Hortain Plains', value1: 2 }, { label: 'Dunhinda Falls', value1: 3 }, { label: 'Ravana Falls', value1: 4 }, { label: 'Sigiriya', value1: 5 }, { label: 'Bopath Ella', value1: 6 }];
    const paths = [{ label: 'Path to Maskeliya', value: 1 }, { label: 'Path to Riverston', value: 2 }, { label: 'Path to Pitawala Pathana', value: 3 }, { label: 'Path to Kuruwita', value: 4 }, { label: 'Path to Mandaram Nuwara', value: 5 }, { label: 'Path to Meemure', value: 6 }];
    const start = [{ label: 'Nuwara Eliya', value2: 1 }, { label: 'Maskeliya', value2: 2 }, { label: 'Dayagama', value2: 3 }, { label: 'Dikoya', value2: 4 }, { label: 'Udapussellawa', value2: 5 }, { label: 'Norwood', value2: 6 }];
    const types = [{ label: 'Waterfalls', value3: 1 }, { label: 'Beaches', value3: 2 }, { label: 'Forests', value3: 4 }, { label: 'National Parks', value3: 5 }, { label: 'Water Reserviors', value3: 6 }, { label: 'Wild Life', value3: 7 }];
    const [tourName, setTourName] = useState();
    const [tourDescription, setTourDescription] = useState();
    const [tourCost, setTourCost] = useState();
    const [days, setDays] = useState();
    const [nights, setNights] = useState();
    const [vrURL, setVrURL] = useState();
    const [checked, setChecked] = useState(false);
    const [pathId, setPathId] = useState(null);
    const [attractionId, setAttractionId] = useState(null);
    const [startId, setStartId] = useState(null);
    const [attractionTypeId, setAttractionTypeId] = useState([]);
    const [image, setImage] = useState(null);
    const [value, setValue] = useState(null);
    const [value1, setValue1] = useState(null);
    const [value2, setValue2] = useState(null);

    const [isFocus, setIsFocus] = useState(false);
    let check = 0;

    const add = (tourName, description, cost, days, nights, start, destination, hiddenPlace, vrUrl, photoPath, attractionType, attractionId) => {
        axios.post(`${BASE_URL}/tour/add`, {

            tourName,
            description,
            cost,
            days,
            nights,
            start,
            destination,
            hiddenPlace,
            vrUrl,
            photoPath,
            attractionType,
            attractionId

        }, token)
            .then(res => {
                console.log(res.data);

            })
            .catch(e => {

                console.log(`Adding error ${e}`)
            })
    }

    const consoleWrite = () => {
        if (checked == true) {
            check = 1;
        }
        console.log('Tour Name : ', tourName);
        console.log('Tour Description: ', tourDescription);
        console.log('Cost per Head: ', tourCost);
        console.log('Number of Days: ', days);
        console.log('Number of Nights: ', nights);
        console.log('VR Url: ', vrURL);
        console.log('Attraction Types : ', attractionTypeId);
        console.log("Is Checked : ", check);
        console.log("Hidden Path : ", pathId);
        console.log('Tourist Attraction : ', attractionId);
        console.log("Start Location : ", startId);
    }

    const choosePhotoFromDevice = () => {
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
            const source = { uri, type, name }
            handleUpload(source);
        }).catch(e => console.log(e));
    }

    const handleUpload = (image) => {
        const data = new FormData()
        data.append('file', image)
        data.append('upload_preset', 'tourxApp')
        data.append('cloud_name', 'tourx')

        fetch("https://api.cloudinary.com/v1_1/tourx/image/upload", {

            method: 'POST',
            body: data

        }).then(res => res.json()).
            then(data => {
                setImage(data.url);
                console.log("Image URL : ", data.url);
            })
            .catch(e => {
                console.log(`Uploading error ${e}`)
            })
    }

    return (
        <>
            <Appbar.Header theme={{ colors: { primary: '#06BEE1' } }}>
                <Appbar.BackAction onPress={() => navigation.navigate('Home')} />
                <Appbar.Content title="Add Tour" />
            </Appbar.Header>
            <View style={{ flex: 1, marginTop: 50 }}>
                <ProgressSteps
                    topOffset={0}
                    marginBottom={40}
                    activeStepIconBorderColor='#1768AC'
                    progressBarColor='#ebebe4'
                    completedProgressBarColor='#1768AC'
                    activeStepIconColor='#1768AC'
                    completedStepIconColor='#1768AC'
                    disabledStepIconColor='#ebebe4'
                    labelColor='gray'
                    labelFontSize={13}
                    activeLabelColor='#1768AC'
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
                        <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
                            <View style={{ paddingHorizontal: 25 }}>
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
                                        textAlign: 'justify',
                                        paddingBottom: 20
                                    }}
                                >Please note that the virtual tour will not be created as soons as you complete the next steps.It will be processed through the system and will be checked for the quality.</Text>
                                <Text
                                    style={{
                                        fontSize: 15,
                                        color: '#333',
                                        textAlign: 'justify',
                                        paddingBottom: 20
                                    }}
                                >The success of your virtual tour solely depends on the quality of the images you upload. Therefore, please make sure that suitable images are uploaded.</Text>
                                <Text
                                    style={{
                                        fontSize: 15,
                                        color: '#333',
                                        textAlign: 'justify',
                                        paddingBottom: 20
                                    }}
                                >Before creating a virtual tour, it is recommended to visit kuula player and create a VR tour and submit the sharable link in the upcoming steps. If not, your tour will be rejected.</Text>
                            </View>
                        </SafeAreaView>
                    </ProgressStep>
                    <ProgressStep
                        label="Step 2"
                        scrollable={false}
                        onNext={consoleWrite}
                        nextBtnStyle={{
                            backgroundColor: '#1768AC',
                            padding: 20,
                            borderRadius: 10,
                            marginBottom: -100,
                            width: 120
                        }}
                        nextBtnTextStyle={styles.nextBtnTextStyle}
                        previousBtnStyle={{
                            backgroundColor: '#1768AC',
                            padding: 20,
                            borderRadius: 10,
                            marginBottom: -100,
                            width: 120
                        }}
                        previousBtnTextStyle={styles.previousBtnTextStyle}
                    >
                        <ScrollView>
                            <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
                                <View style={{ paddingHorizontal: 25 }}>
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
                                        label={'Tour Name'}
                                        onChangeText={(val) => setTourName(val)}
                                        icon={
                                            <MaterialIcons
                                                name="flight"
                                                size={20}
                                                color="#666"
                                                style={{ marginRight: 5 }}
                                            />
                                        }
                                    />
                                    <InputField
                                        label={'Tour Description'}
                                        onChangeText={(val) => setTourDescription(val)}
                                        icon={
                                            <MaterialIcons
                                                name="description"
                                                size={20}
                                                color="#666"
                                                style={{ marginRight: 5 }}
                                            />
                                        }
                                    />
                                    <InputField
                                        label={'Cost Per Head'}
                                        keyboardType='number-pad'
                                        onChangeText={(val) => setTourCost(val)}
                                        icon={
                                            <MaterialIcons
                                                name="payments"
                                                size={20}
                                                color="#666"
                                                style={{ marginRight: 5 }}
                                            />
                                        }
                                    />
                                    <InputField
                                        label={'Number of Days'}
                                        keyboardType='numeric'
                                        onChangeText={(val) => setDays(val)}
                                        icon={
                                            <MaterialIcons
                                                name="wb-sunny"
                                                size={20}
                                                color="#666"
                                                style={{ marginRight: 5 }}
                                            />
                                        }
                                    />
                                    <InputField
                                        label={'Number of Nights'}
                                        keyboardType='numeric'
                                        onChangeText={(val) => setNights(val)}
                                        icon={
                                            <MaterialIcons
                                                name="bedtime"
                                                size={20}
                                                color="#666"
                                                style={{ marginRight: 5 }}
                                            />
                                        }
                                    />
                                    <InputField
                                        label={'VR Tour URL'}
                                        keyboardType='url'
                                        onChangeText={(val) => setVrURL(val)}
                                        icon={
                                            <MaterialIcons
                                                name="link"
                                                size={20}
                                                color="#666"
                                                style={{ marginRight: 5 }}
                                            />
                                        }
                                    />
                                </View>
                            </SafeAreaView>
                        </ScrollView>
                    </ProgressStep>
                    <ProgressStep
                        label="Step 3"
                        scrollable={false}
                        onNext={consoleWrite}
                        nextBtnStyle={{
                            backgroundColor: '#1768AC',
                            padding: 20,
                            borderRadius: 10,
                            marginBottom: -10,
                            width: 120
                        }}
                        nextBtnTextStyle={styles.nextBtnTextStyle}
                        previousBtnStyle={{
                            backgroundColor: '#1768AC',
                            padding: 20,
                            borderRadius: 10,
                            marginBottom: -10,
                            width: 120
                        }}
                        previousBtnTextStyle={styles.previousBtnTextStyle}
                    >
                        <ScrollView>
                            <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
                                <View style={{ paddingHorizontal: 25 }}>
                                    <Text
                                        style={{
                                            fontFamily: 'Roboto-Medium',
                                            fontSize: 28,
                                            fontWeight: '500',
                                            color: '#333',
                                            marginBottom: 40,
                                        }}>
                                        Add Locations
                                    </Text>
                                    <MultiSelect
                                        style={{
                                            height: 40,
                                            backgroundColor: 'rgba(52, 52, 52, 0.0)',
                                            paddingBottom: 8,
                                            marginBottom: 20,
                                            paddingLeft: 0,
                                            shadowOffset: {
                                                width: 0,
                                                height: 1,
                                            },
                                            borderBottomWidth: 1,
                                            borderBottomColor: '#ccc',
                                            marginBottom: 20,
                                        }}
                                        placeholderStyle={{
                                            textAlign: 'left',
                                            fontSize: 15,
                                            color: 'grey'
                                        }}
                                        selectedTextStyle={{
                                            fontSize: 15,
                                            color: 'black'
                                        }}
                                        itemTextStyle={{
                                            color: 'black'
                                        }}
                                        containerStyle={{
                                            color: 'grey',
                                            backgroundColor: 'white',
                                            borderRadius: 5
                                        }}
                                        activeColor="#9fa1a6"
                                        iconStyle={{
                                            width: 20,
                                            height: 20,
                                            alignContent: 'flex-start'
                                        }}
                                        data={types}
                                        labelField="label"
                                        valueField="value3"
                                        placeholder="Select item"
                                        value={attractionTypeId}
                                        onChange={item => {
                                            setAttractionTypeId(item);
                                            console.log(item);
                                        }}
                                        renderLeftIcon={() => (
                                            <MaterialIcons
                                                name="edit-location"
                                                size={20}
                                                color="grey"
                                                style={{
                                                    marginRight: 10,
                                                }}
                                            />
                                        )}
                                        selectedStyle={{
                                            borderRadius: 12,
                                        }}
                                    />
                                    <View style={{ flex: 1, flexDirection: "row", paddingBottom: 10, paddingTop: -10 }}>
                                        <Text style={{ color: "grey", paddingTop: 7, paddingRight: 20 }}>Hidden Path</Text>
                                        <Checkbox
                                            status={checked ? 'checked' : 'unchecked'}
                                            color="grey"
                                            onPress={() => {
                                                setChecked(!checked);
                                            }}
                                        >
                                        </Checkbox>
                                    </View>
                                    {checked && (
                                        <Dropdown
                                            style={{
                                                height: 40,
                                                backgroundColor: 'rgba(52, 52, 52, 0.0)',
                                                paddingBottom: 8,
                                                marginBottom: 20,
                                                paddingLeft: 0,
                                                shadowOffset: {
                                                    width: 0,
                                                    height: 1,
                                                },
                                                borderBottomWidth: 1,
                                                borderBottomColor: '#ccc',
                                                marginBottom: 40,
                                            }}
                                            itemTextStyle={{
                                                color: 'grey'
                                            }}
                                            containerStyle={{
                                                color: 'grey',
                                                backgroundColor: '#9fa1a6',
                                                borderRadius: 5
                                            }}
                                            activeColor="grey"
                                            onFocus={() => setIsFocus(true)}
                                            onBlur={() => setIsFocus(false)}
                                            placeholderStyle={{
                                                textAlign: 'left',
                                                fontSize: 15,
                                                color: 'grey'
                                            }}
                                            selectedTextStyle={{
                                                fontSize: 15,
                                                color: 'black'
                                            }}
                                            iconStyle={{
                                                width: 20,
                                                height: 20,
                                                alignContent: 'flex-start'
                                            }}
                                            data={paths}
                                            maxHeight={300}
                                            labelField="label"
                                            valueField="value"
                                            placeholder={'Select Hidden Path'}
                                            placeholderTextColor="grey"
                                            value={value}
                                            onChange={item => {
                                                setPathId(item.value);
                                                setValue(item.value);
                                                setIsFocus(false);
                                                console.log(item.value);
                                            }}
                                            renderLeftIcon={() => (
                                                <MaterialIcons
                                                    name="add-location"
                                                    size={20}
                                                    color="grey"
                                                    style={{
                                                        marginRight: 10,
                                                    }}
                                                />
                                            )}
                                        />
                                    )}
                                    <Dropdown
                                        style={{
                                            height: 40,
                                            backgroundColor: 'rgba(52, 52, 52, 0.0)',
                                            paddingBottom: 8,
                                            marginBottom: 20,
                                            paddingLeft: 0,
                                            shadowOffset: {
                                                width: 0,
                                                height: 1,
                                            },
                                            borderBottomWidth: 1,
                                            borderBottomColor: '#ccc',
                                            marginBottom: 40,
                                        }}
                                        itemTextStyle={{
                                            color: 'grey'
                                        }}
                                        containerStyle={{
                                            color: 'grey',
                                            backgroundColor: '#9fa1a6',
                                            borderRadius: 5
                                        }}
                                        activeColor="grey"
                                        onFocus={() => setIsFocus(true)}
                                        onBlur={() => setIsFocus(false)}
                                        placeholderStyle={{
                                            textAlign: 'left',
                                            fontSize: 15,
                                            color: 'grey'
                                        }}
                                        selectedTextStyle={{
                                            fontSize: 15,
                                            color: 'black'
                                        }}
                                        iconStyle={{
                                            width: 20,
                                            height: 20,
                                            alignContent: 'flex-start'
                                        }}
                                        data={attractions}
                                        maxHeight={300}
                                        labelField="label"
                                        valueField="value1"
                                        placeholder={'Select Attraction Place'}
                                        placeholderTextColor="grey"
                                        value={value1}
                                        onChange={item => {
                                            setAttractionId(item.value1);
                                            setValue1(item.value1);
                                            setIsFocus(false);
                                            console.log(item.value1);
                                        }}
                                        renderLeftIcon={() => (
                                            <MaterialIcons
                                                name="edit-location"
                                                size={20}
                                                color="grey"
                                                style={{
                                                    marginRight: 10,
                                                }}
                                            />
                                        )}
                                    />
                                    <Dropdown
                                        style={{
                                            height: 40,
                                            backgroundColor: 'rgba(52, 52, 52, 0.0)',
                                            paddingBottom: 8,
                                            marginBottom: 20,
                                            paddingLeft: 0,
                                            shadowOffset: {
                                                width: 0,
                                                height: 1,
                                            },
                                            borderBottomWidth: 1,
                                            borderBottomColor: '#ccc',
                                            marginBottom: 40,
                                        }}
                                        itemTextStyle={{
                                            color: 'grey'
                                        }}
                                        containerStyle={{
                                            color: 'grey',
                                            backgroundColor: '#9fa1a6',
                                            borderRadius: 5
                                        }}
                                        activeColor="grey"
                                        onFocus={() => setIsFocus(true)}
                                        onBlur={() => setIsFocus(false)}
                                        placeholderStyle={{
                                            textAlign: 'left',
                                            fontSize: 15,
                                            color: 'grey'
                                        }}
                                        selectedTextStyle={{
                                            fontSize: 15,
                                            color: 'black'
                                        }}
                                        iconStyle={{
                                            width: 20,
                                            height: 20,
                                            alignContent: 'flex-start'
                                        }}
                                        data={start}
                                        maxHeight={300}
                                        labelField="label"
                                        valueField="value2"
                                        placeholder={'Select Starting Location'}
                                        placeholderTextColor="grey"
                                        value={value2}
                                        onChange={item => {
                                            setStartId(item.value2);
                                            setValue2(item.value2);
                                            setIsFocus(false);
                                            console.log(item.value2);
                                        }}
                                        renderLeftIcon={() => (
                                            <MaterialIcons
                                                name="edit-location"
                                                size={20}
                                                color="grey"
                                                style={{
                                                    marginRight: 10,
                                                }}
                                            />
                                        )}
                                    />
                                </View>
                            </SafeAreaView>
                        </ScrollView>
                    </ProgressStep>
                    <ProgressStep
                        label="Step 4"
                        onSubmit={() => { { add(tourName, tourDescription, tourCost, days, nights, startId, attractionId, check, vrURL, image, attractionTypeId, attractionId) }; alert('Tour will be created shortly!'); navigation.navigate("Home") }}
                        nextBtnStyle={styles.nextBtnStyle}
                        nextBtnTextStyle={styles.nextBtnTextStyle}
                        previousBtnStyle={styles.previousBtnStyle}
                        previousBtnTextStyle={styles.previousBtnTextStyle}
                    >
                        <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
                            <View style={{ paddingHorizontal: 25 }}>
                                <Text
                                    style={{
                                        fontFamily: 'Roboto-Medium',
                                        fontSize: 28,
                                        fontWeight: '500',
                                        color: '#333',
                                        marginBottom: 40,
                                    }}>
                                    Add Images
                                </Text>
                                <View style={{ alignItems: 'center' }}>
                                    <TouchableOpacity onPress={choosePhotoFromDevice}>
                                        <UploadImgSVG
                                            height={175}
                                            width={175}
                                            style={{ marginTop: 50 }}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </SafeAreaView>
                    </ProgressStep>
                </ProgressSteps>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    nextBtnStyle: {
        backgroundColor: '#1768AC',
        padding: 20,
        borderRadius: 10,
        marginBottom: 120,
        width: 120
    },
    nextBtnTextStyle: {
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 16,
        color: '#fff',
    },
    previousBtnStyle: {
        backgroundColor: '#1768AC',
        padding: 20,
        borderRadius: 10,
        marginBottom: 120,
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