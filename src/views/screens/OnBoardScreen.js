import React from 'react'
import { View,StyleSheet, ImageBackground,Text} from 'react-native';
import COLORS from '../../consts/colors';
import { StatusBar } from 'react-native';
import { Button } from 'react-native-paper';


const OnBoardScreen = ({navigation}) => {
  return (
    
    <View style={{flex:1}}>
        <StatusBar translucent backgroundColor="rgba(0,0,0,0)"/>
        <ImageBackground
        style={{flex:1}}
            source={require('../../assets/background1.jpg')}>
                <View style={style.details}>
                <Text style={{color:COLORS.white, fontSize:40, fontWeight:'bold'}}>TourX</Text>

                    {/* <Text style={{color:COLORS.white, fontSize:35, fontWeight:'bold'}}>Observe</Text> */}
                    <Text style={{color:COLORS.white, fontSize:25, fontWeight:'bold'}}>Observe the world !</Text>
                    <Text style={{color:COLORS.white, fontSize:15, fontWeight:'bold'}}>TourX is the leading tour guide platform in SriLanka. Enjoy your tour with TourX today</Text>
                    <Button  style={style.button} mode="contained" color="white" onPress={() => navigation.navigate('Login')}>Get Started</Button>

                </View>
        </ImageBackground>
    </View>
  )
}

const style = StyleSheet.create({

    details:{
        height: "50%",
        bottom: 0,
        position: 'absolute',
        paddingHorizontal:40,


    },
    button:{
        marginTop:"5%",
        width: "50%",
    },
});
export default OnBoardScreen