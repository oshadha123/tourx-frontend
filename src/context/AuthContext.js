import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext,useState,useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children})=>{
    const [isLoading,setIsLoading] = useState(false);

    const [userToken,setUserToken] = useState(null);
    const login = () =>{
        setIsLoading(true);
        setUserToken('sshydggf');
        AsyncStorage.setItem('userToken','sshydggf');
       
        setIsLoading(false);
    }

    const logout=()=>{
        setIsLoading(true);
        setUserToken(null);
        AsyncStorage.removeItem('userToken');
        setIsLoading(false);
    }

    const isLoggedIn = async() =>{
        try{
            setIsLoading(true);
        let userToken = await AsyncStorage.getItem('userToken');
        setUserToken(userToken);
        setIsLoading(false);
        }catch(e){
          console.log(`isLogged in error ${e}`);
        }

    }

    useEffect(()=>{
        isLoggedIn()

    },[])
    return(
    
     <AuthContext.Provider value={{login,logout,isLoading,userToken}}>

    {children}

     </AuthContext.Provider>



    );
}