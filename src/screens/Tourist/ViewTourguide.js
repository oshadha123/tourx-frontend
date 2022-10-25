import React, { useState, useContext } from 'react';
import { View, StyleSheet, Text, Image, Dimensions, TouchableOpacity, ScrollView, RefreshControl } from 'react-native';
import { Appbar } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { AuthContext } from '../../context/AuthContext';
import axios from "axios";
import { BASE_URL } from '../../config';

const ViewTourguide = ({ route, navigation }) => {
    const { fName, lName, UID, bioo, picture, points, packagee, contact } = route.params;
    const { userInfo } = useContext(AuthContext);
    const { userToken } = useContext(AuthContext);
    const [refresh, setRefresh] = useState(false);

    const pullMe = () => {
        setRefresh(true);
        setTimeout(() => {
            setRefresh(false)
        }, 2000)
    }

    if (packagee === "Premium") {
        return (
            <>
                <Appbar.Header theme={{ colors: { primary: '#06BEE1' } }}>
                    <Appbar.BackAction onPress={() => navigation.navigate('Home')} />
                    <Appbar.Content title="View Tourguide" />
                </Appbar.Header>
                <View style={styles.screen}>
                    <ScrollView refreshControl={<RefreshControl refreshing={refresh} onRefresh={() => pullMe()} />}>
                        <Image source={{ uri: 'https://cdn.pixabay.com/photo/2016/05/22/19/15/background-1409028__340.png' }}
                            style={styles.header} resizeMode='cover'
                        />
                        <View style={styles.meInfor}></View>
                        <Image source={{ uri: picture }}
                            style={styles.avatar} resizeMode='cover'
                        />
                        <View>
                            <Text style={styles.headerText}>{fName} {lName}</Text>
                        </View>
                        <View>
                            <Text style={styles.bio}>{bioo}</Text>
                        </View>
                        <View style={{ alignItems: 'center', marginTop: 10 }}>
                            <View style={styles.container}>
                                <FontAwesome name="phone" color='black' size={16} />
                                <Text style={styles.textStyle}>{contact}</Text>
                            </View>
                            <View style={styles.container}>
                                <FontAwesome name="star" color='red' size={26} />
                                <Text style={styles.textStyle}>{points}</Text>
                            </View>
                        </View>
                        <View style={styles.buttonBack}>
                            <TouchableOpacity style={styles.panelButton} onPress={() => navigation.navigate('ReportTourguide', {
                                fName: fName,
                                lName: lName,
                                UID: UID,
                            })}>
                                <Text style={styles.panelButtonTitle}>Report</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            </>
        );
    }
    else {
        return (
            <>
                <Appbar.Header theme={{ colors: { primary: '#06BEE1' } }}>
                    <Appbar.BackAction onPress={() => navigation.navigate('Home')} />
                    <Appbar.Content title="View Tourguide" />
                </Appbar.Header>
                <View style={styles.screen}>
                    <ScrollView refreshControl={<RefreshControl refreshing={refresh} onRefresh={() => pullMe()} />}>
                        <Image source={{ uri: 'https://cdn.pixabay.com/photo/2016/05/22/19/15/background-1409028__340.png' }}
                            style={styles.header} resizeMode='cover'
                        />
                        <View style={styles.meInfor}></View>
                        <Image source={{ uri: picture }}
                            style={styles.avatar} resizeMode='cover'
                        />
                        <View>
                            <Text style={styles.headerText}>{fName} {lName}</Text>
                        </View>
                        <View>
                            <Text style={styles.bio}>{bioo}</Text>
                        </View>
                        <View style={{ alignItems: 'center', marginTop: 10 }}>
                            <View style={styles.container}>
                                <FontAwesome name="phone" color='black' size={16} />
                                <Text style={styles.textStyle}>{contact}</Text>
                            </View>
                            <View style={styles.container}>
                                <FontAwesome name="star" color='black' size={16} />
                                <Text style={styles.textStyle}>{points}</Text>
                            </View>
                        </View>
                        <View style={styles.buttonBack}>
                            <TouchableOpacity style={styles.panelButton} onPress={() => navigation.navigate('ReportTourguide', {
                                fName: fName,
                                lName: lName,
                                UID: UID,
                            })}>
                                <Text style={styles.panelButtonTitle}>Report</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            </>
        );
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    alertHeader: {
        backgroundColor: '#FFFFFF',
        shadowColor: '#333333',
        shadowOffset: { width: -1, height: -3 },
        shadowRadius: 2,
        shadowOpacity: 0.4,
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    panel: {
        padding: 20,
        backgroundColor: '#FFFFFF',
        paddingTop: 20,
    },
    buttonBack: {
        padding: 20,
        backgroundColor: 'rgba(52, 52, 52, 0.0)',
        paddingTop: 20,
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
        backgroundColor: "#E26D5C",
        alignItems: 'center',
        marginVertical: 7,
    },
    panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
    },
    container: {
        flexDirection: 'row',
        marginVertical: 5,
        alignItems: 'center'
    },
    textStyle: {
        fontSize: 16,
        marginVertical: 5,
        fontFamily: 'micross',
        fontWeight: 'bold',
        color: 'black',
        marginLeft: 20
    },
    header: {
        height: 200,
        backgroundColor: '#1270BA',
    },
    meInfor: {
        top: 0,
        width: (Dimensions.get('window').width),
    },
    avatar: {
        alignItems: 'center',
        position: 'absolute',
        left: (Dimensions.get('window').width / 2) - 75,
        top: 120,
        width: 150,
        height: 150,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 5
    },
    headerText: {
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold',
        marginVertical: 5,
        paddingTop: 75,
        fontFamily: 'micross',
        textAlign: 'center',
    },
    bio: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
        marginVertical: 5,
        paddingTop: 10,
        fontFamily: 'micross',
        textAlign: 'center',
    }
});

export default ViewTourguide