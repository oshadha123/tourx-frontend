import React, { useState, useContext, useEffect } from 'react'
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import InputField from '../../components/InputField';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Dropdown } from 'react-native-element-dropdown';
import { Appbar } from 'react-native-paper';
import axios from "axios";
import { AuthContext } from '../../context/AuthContext';
import { BASE_URL } from '../../config';

const ReportTourguide = ({ route, navigation }) => {
    const { userToken } = useContext(AuthContext);
    const token = {

        headers: {
            authorization: "Bearer " + userToken
        }
    }

    const { fName, lName, UID } = route.params;
    const [reportId, setReportId] = useState(null);
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const roleID = 2;
    const [description, setDescription] = useState(null);

    console.log(UID, roleID)

    const reports = [{ label: 'Haressment or Bullying', value: 1 }, { label: 'Wrong information provided', value: 2 }, { label: 'Pretending to be someone else', value: 3 }];

    const report = (UID, roleID, value, description) => {
        axios.post(`${BASE_URL}/report/user/`, {

            "accountId":
                UID,
            "reason":
                value,
            "roleId":
                roleID,
            "description":
                description

        }, token)
            .then(res => {
                console.log(res.data);
            })
            .catch(e => {

                console.log(`Updating error ${e}`)
            })
        console.log(UID, roleID, value, description)
    }

    return (
        <>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.navigate('Home')} />
                <Appbar.Content title="Report User" />
            </Appbar.Header>
            <View style={styles.container}>
                <ScrollView>
                    <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
                        <View style={{ paddingHorizontal: 25, paddingTop: 50 }}>
                            <InputField
                                label={fName + " " + lName}
                                editable={false}
                                icon={
                                    <MaterialIcons
                                        name="person"
                                        size={20}
                                        color="#666"
                                        style={{ marginRight: 5 }}
                                    />
                                }
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
                                onFocus={() => setIsFocus(true)}
                                onBlur={() => setIsFocus(false)}
                                placeholderStyle={{
                                    textAlign: 'left',
                                    fontSize: 15,
                                    color: '#999999'
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
                                data={reports}
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder={'Select Report Type'}
                                value={value}
                                onChange={item => {
                                    setReportId(item.value);
                                    setValue(item.value);
                                    setIsFocus(false);
                                    console.log(item.value);
                                }}
                                renderLeftIcon={() => (
                                    <MaterialIcons
                                        name="report"
                                        size={20}
                                        color="#666"
                                        style={{
                                            marginRight: 10,
                                        }}
                                    />
                                )}
                            />
                            <InputField
                                label={'Enter Complaint'}
                                multiline={true}
                                icon={
                                    <MaterialIcons
                                        name="description"
                                        size={20}
                                        color="#666"
                                        style={{ marginRight: 5 }}
                                    />
                                }
                                onChangeText={(description => {
                                    setDescription(description);
                                })}
                            />
                            <TouchableOpacity style={styles.commandButton} onPress={() => {{ report(UID, roleID, value, description) }; alert("User reported!"); navigation.navigate("Home")}}>
                                <Text style={styles.panelButtonTitle}>Report</Text>
                            </TouchableOpacity>
                        </View>
                    </SafeAreaView>
                </ScrollView>
            </View>
        </>
    )
}

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
    panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
    }
});

export default ReportTourguide