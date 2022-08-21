import React,{useContext} from 'react'
import{View,ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AuthStack from './AuthStack';
import AppStack from './AppStack';
import TouristAppStack from './TouristAppStack';
import { AuthContext } from '../context/AuthContext';

const AppNav = () => {
    const {isLoading,userToken,userInfo}=useContext(AuthContext);
    if(isLoading){

        return(
        
        <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#fff'}}>
        
            <ActivityIndicator size={'large'} color="#9A52C7"/>
        

        </View>
        );

    }

    const renderElement=()=>{
      if(userToken !== null && userInfo.role===2){return<AppStack/>}
      else if(userToken !== null && userInfo.role===3){return<TouristAppStack/>}
      else if(userToken !== null && userInfo.role===1){return<AppStack/>}
      else{return<AuthStack/>}

    }
    
  return (
    <NavigationContainer>
        {console.log(userToken)}
       {/* { userToken !== null && userInfo.role===2?<AppStack />:<AuthStack />} */}
       {renderElement()}
       


    </NavigationContainer>
  );
}

export default AppNav