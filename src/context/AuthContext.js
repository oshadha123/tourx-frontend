import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { createContext,useState,useEffect } from "react";
import { BASE_URL } from "../config";
import { Modal, ModalFooter, ModalButton, ModalContent } from 'react-native-modals';

import ShowToast from "../components/ShowToast";

export const AuthContext = createContext();

export const AuthProvider = ({children})=>{
    const [isLoading,setIsLoading] = useState(false);

    const [userToken,setUserToken] = useState(null);
    const [userInfo,setUserInfo] = useState(null);
    const [userId,setUserId]=useState(null);
    const [error,setError]=useState(0);
    const [success,setSuccess]=useState(0);
    const [comp,setComp]=useState('');
    const [email,setEmail]=useState('');
    //Login page
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
            
            
            setSuccess(userInfo.success);
            if(res.data.success==1){
            setUserInfo(userInfo);
            setUserId(userInfo.userId);
            setUserToken(userInfo.token);
            AsyncStorage.setItem('userInfo',JSON.stringify(userInfo));

            AsyncStorage.setItem('userToken',userInfo.token);
            }else{
                setError(1);
                setComp(ShowToast);
            }
            console.log('User info'+userInfo.token)
        })
        .catch(e=>{
            setError(1);
            setSuccess(0);
            console.log(`Logging error ${e}`)
        })
        // setUserToken('sshydggf');
        // AsyncStorage.setItem('userToken','sshydggf');
       
        setIsLoading(false);
    }

    // Register page

    const register = (firstName,lastName,email,password,profilePic,roleId) =>{
        console.log(firstName)
        console.log(lastName)
        console.log(email)
        console.log(profilePic)
        console.log(roleId)
        setEmail(email);
        setIsLoading(true);
        axios.post(`${BASE_URL}/register`,{

         firstName,
         lastName,
         email,
         password,
         profilePic,
         roleId

        })
        .then(res=>{
            console.log(res.data);
            // let userInfo = res.data;
            
            // setUserInfo(userInfo);
            // setUserId(userInfo.userId);
            // setUserToken(userInfo.token)
            // AsyncStorage.setItem('userInfo',JSON.stringify(userInfo));

            // AsyncStorage.setItem('userToken',userInfo.token);
            // console.log('User info'+userInfo.token)
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
        setSuccess(0);
        setError(0);
        setComp('');
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




//Tourist Auth context functions

const [leaderboardInfo2,setleaderboardInfo2] = useState(null);
const tokenConfig2 = {
    
    headers: {
       Authorization: "Bearer " + userToken
    }
 }
const getLeaderboard2 = () =>{
      

    setIsLoading(true);
    axios.get(`${BASE_URL}/tourguide`,tokenConfig2)
    .then(res=>{
        // console.log(res.data);
        let leaderboardInfo2 = res.data.data;
        console.log(leaderboardInfo2);
        setleaderboardInfo2(leaderboardInfo2);
        // setUserToken(leaderboardInfo.token)
        AsyncStorage.setItem('leaderboardInfo2',JSON.stringify(leaderboardInfo2));

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
const [findToursInfo,setfindToursInfo]=useState(null);
const getFindTours = () =>{

    
   let userId=userInfo.userId;
    console.log(userInfo.userId)
    setIsLoading(true);


    axios.get(`${BASE_URL}/tour`, tokenConfig2)
    .then(res=>{
        console.log(res.data);
        let findToursInfo = res.data.data;
        console.log(findToursInfo);
        setfindToursInfo(findToursInfo);
        // setUserToken(findToursInfo.token)
        AsyncStorage.setItem('findToursInfo',JSON.stringify(findToursInfo));

        // AsyncStorage.setItem('userToken',findToursInfo.token);
        // console.log('User info'+findToursInfo.token)
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
    
     <AuthContext.Provider value={{login,logout,isLoading,userToken,userInfo,getLeaderboard,leaderboardInfo,getYourTours,yourToursInfo,register,error,success,comp,email,getLeaderboard2,leaderboardInfo2,getFindTours,findToursInfo}}>

    {children}

     </AuthContext.Provider>



    );
}