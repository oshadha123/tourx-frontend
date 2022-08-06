// import AsyncStorage from "@react-native-async-storage/async-storage";
// import axios from "axios";
// import React, { createContext,useState,useEffect } from "react";
// import { BASE_URL } from "../../config";

// export const TourGuideHomeScreenContext = createContext();

// export const AuthProvider = ({children})=>{
//     const [isLoading,setIsLoading] = useState(false);

//     // const [userToken,setUserToken] = useState(null);
//     const [leaderboardInfo,setleaderboardInfo] = useState(null);


//     const getLeaderboard = () =>{
      

//         setIsLoading(true);
//         axios.get(`${BASE_URL}/leaderboard`)
//         .then(res=>{
//             console.log(res.data);
//             let leaderboardInfo = res.data;
            
//             setleaderboardInfo(leaderboardInfo);
//             // setUserToken(leaderboardInfo.token)
//             AsyncStorage.setItem('leaderboardInfo',JSON.stringify(leaderboardInfo));

//             // AsyncStorage.setItem('userToken',leaderboardInfo.token);
//             // console.log('User info'+leaderboardInfo.token)
//         })
//         .catch(e=>{
//             console.log(`Logging error ${e}`)
//         })
//         // setUserToken('sshydggf');
//         // AsyncStorage.setItem('userToken','sshydggf');
       
//         setIsLoading(false);
//     }

    
//     const isleaderboard = async() =>{
//         try{
//             setIsLoading(true);
//         let leaderboardInfo = await AsyncStorage.getItem('leaderboardInfo');

//         // let userToken = await AsyncStorage.getItem('userToken');
//         leaderboardInfo = JSON.parse(leaderboardInfo);
//         if(leaderboardInfo){
//             // setUserToken(userToken);
//             setleaderboardInfo(leaderboardInfo);
            
//         }
       
//         setIsLoading(false);
//         }catch(e){
//           console.log(`isLogged in error ${e}`);
//         }

//     }
    

//     useEffect(()=>{
//         isleaderboard()

//     },[])
//     return(
    
//      <AuthContext.Provider value={{getLeaderboard,isLoading,leaderboardInfo}}>

//     {children}

//      </AuthContext.Provider>



//     );
// }