import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { createContext,useState,useEffect } from "react";
import { BASE_URL } from "../config";

export const AuthContext = createContext();

export const AuthProvider = ({children})=>{
    const [isLoading,setIsLoading] = useState(false);

    const [userToken,setUserToken] = useState(null);
    const [userInfo,setUserInfo] = useState(null);
    const [userId,setUserId]=useState(null);

    const login = (email,password) =>{
        console.log(email)
        console.log(password)

        setIsLoading(true);
        axios.post(`${BASE_URL}/login`,{
            
         email,
         password

        })
        .then(res=>{
            console.log(res.data);
            let userInfo = res.data;
            
            setUserInfo(userInfo);
            setUserId(userInfo.userId);
            setUserToken(userInfo.token)
            AsyncStorage.setItem('userInfo',JSON.stringify(userInfo));

            AsyncStorage.setItem('userToken',userInfo.token);
            console.log('User info'+userInfo.token)
        })
        .catch(e=>{
            console.log(`Logging error ${e}`)
        })
        // setUserToken('sshydggf');
        // AsyncStorage.setItem('userToken','sshydggf');
       
        setIsLoading(false);
    }

    const logout=()=>{
        setIsLoading(true);
        setUserToken(null);
        AsyncStorage.removeItem('userInfo');

        AsyncStorage.removeItem('userToken');
        setIsLoading(false);
    }

    const isLoggedIn = async() =>{
        try{
            setIsLoading(true);
        let userInfo = await AsyncStorage.getItem('userInfo');

        let userToken = await AsyncStorage.getItem('userToken');
        userInfo = JSON.parse(userInfo);
        if(userInfo){
            setUserToken(userToken);
            setUserInfo(userInfo);
            
        }
       
        setIsLoading(false);
        }catch(e){
          console.log(`isLogged in error ${e}`);
        }

    }

  

//Tour Guides Auth context functions

const [leaderboardInfo,setleaderboardInfo] = useState(null);
const tokenConfig = {
    
    headers: {
       Authorization: "Bearer " + userToken
    }
 }
const getLeaderboard = () =>{
      

    setIsLoading(true);
    axios.get(`${BASE_URL}/leaderboard`,tokenConfig)
    .then(res=>{
        // console.log(res.data);
        let leaderboardInfo = res.data.data;
        console.log(leaderboardInfo);
        
        setleaderboardInfo(leaderboardInfo);
        // setUserToken(leaderboardInfo.token)
        AsyncStorage.setItem('leaderboardInfo',JSON.stringify(leaderboardInfo));

        // AsyncStorage.setItem('userToken',leaderboardInfo.token);
        // console.log('User info'+leaderboardInfo.token)
    })
    .catch(e=>{
        console.log(`Logging error ${e}`)
    })
    // setUserToken('sshydggf');
    // AsyncStorage.setItem('userToken','sshydggf');
   
    setIsLoading(false);
}

// let userId=userInfo.userId;
const [yourToursInfo,setyourToursInfo]=useState(null);
const getYourTours = () =>{
   let userId=userInfo.userId;
console.log(userInfo.userId)
    setIsLoading(true);
    
    axios.post(`${BASE_URL}/yourtours`,{
      
        
     userId

    })
    .then(res=>{
        console.log(res.data);
        let yourToursInfo = res.data.data;
        console.log(yourToursInfo);
        setyourToursInfo(yourToursInfo);
        // setUserToken(yourToursInfo.token)
        AsyncStorage.setItem('yourToursInfo',JSON.stringify(yourToursInfo));

        // AsyncStorage.setItem('userToken',yourToursInfo.token);
        // console.log('User info'+yourToursInfo.token)
    })
    .catch(e=>{
        console.log(`Logging error ${e}`)
    })
    // setUserToken('sshydggf');
    // AsyncStorage.setItem('userToken','sshydggf');
   
    setIsLoading(false);
}















  useEffect(()=>{
        isLoggedIn()
        

    },[])

    return(
    
     <AuthContext.Provider value={{login,logout,isLoading,userToken,userInfo,getLeaderboard,leaderboardInfo,getYourTours,yourToursInfo}}>

    {children}

     </AuthContext.Provider>



    );
}