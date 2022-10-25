import React, {useState,useContext,useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
// import Carousel from 'react-native-snap-carousel';
import Feather from 'react-native-vector-icons/Feather';

import BannerSlider from '../../components/BannerSlider';
import { windowWidth } from '../../utils/Dimensions';
import Toast from 'react-native-toast-message';
import CustomSwitch2 from '../../components/CustomSwitch2';
import ListItem from '../../components/ListItem';
import { AuthContext } from '../../context/AuthContext';
import ImageSwiper from '../../components/ImageSwiper';
//import ListItem2 from '../../components/ListItem2';
import { Appbar } from 'react-native-paper';
import ListItem3 from '../../components/ListItem3';
import ListItem4 from '../../components/ListItem4';

export default function TouristHomeScreen({navigation}) {

  const [viewSearch,setViewSearch]=useState(false);
  const _handleSearch = () => {
    if(viewSearch==false){setViewSearch(true)} 
    else{setViewSearch(false)}
  };

  const [Tab, setTab] = useState(1);
  const {userInfo}=useContext(AuthContext);
  const {getLeaderboard2}=useContext(AuthContext);
  const {getFindTours}=useContext(AuthContext);

  const {leaderboardInfo2}=useContext(AuthContext);
  const {findToursInfo}=useContext(AuthContext);

  const renderBanner = ({item, index}) => {
    return <BannerSlider data={item} />;
  };

  const onSelectSwitch = value => {
    setTab(value);
  };

  const showToast = () => {
    Toast.show({
      type: 'success',
      position:'top',
      visibilityTime:4000,
      topOffset:10,
      text1: 'Hello',
      text2: `Welcome back, ${userInfo.firstName}`,
    });
  }

  useEffect(()=>{
    
    showToast()
    getLeaderboard2()
    getFindTours()

},[])
  
  if(!leaderboardInfo2 || !findToursInfo){
     
    return(
    
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    
        <ActivityIndicator size='large' color="#0000ff"/>
        {/* <Bars size={10} color="#FDAAFF" /> */}
    
           
    </View>
    );

}

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <Appbar.Header style={{backgroundColor:"#9A52C7"}} >
      {/* <Appbar.BackAction onPress={_goBack} /> */}
      <Appbar.Content title="Home" />
      <Appbar.Action icon="magnify" onPress={_handleSearch} />
      {/* <Appbar.Action icon="dots-vertical" onPress={_handleMore} /> */}
      </Appbar.Header>      
      <ScrollView style={{padding: 20}}>
      <View style={{zIndex:1}}><Toast/></View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}>
          <Text style={{fontSize: 18, fontFamily: 'Roboto-Medium'}}>
            Hello {userInfo.firstName},
          </Text>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <ImageBackground
              source={{uri:userInfo.profilePicture}}
              style={{width: 35, height: 35}}
              imageStyle={{borderRadius: 25}}
            />
          </TouchableOpacity>
        </View>

        {viewSearch==1?(

          <View
          style={{
            flexDirection: 'row',
            borderColor: '#C6C6C6',
            borderWidth: 1,
            borderRadius: 8,
            paddingHorizontal: 10,
            paddingVertical: 3,
          }}>
          {/* <Feather
            name="search"
            size={20}
            color="#C6C6C6"
            style={{marginRight: 5}}
          /> */}
          <TextInput placeholder="Search" />
          </View>):<></>}

        <View
          style={{
            // marginVertical: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 18, fontFamily: 'Roboto-Medium',color:"#000",fontStyle:"italic"}}>
            Explore new places to travel...!
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Moments')}>
            {/* <Text style={{color: '#0aada8'}}>See all</Text> */}
          </TouchableOpacity>
        </View>
        <ImageSwiper/>
        

        <View style={{marginVertical: 20}}>
          <CustomSwitch2
            selectionMode={1}
            option1="Find Tours"
            option2="Search Tour Guides"
            onSelectSwitch={onSelectSwitch}
          />
        </View>

        {Tab == 1 &&
          findToursInfo.map(item => (
            <ListItem3
            key={item.attractionId}
            photo={{uri:item.path}}
            title={item.attractionName}
            subTitle={'Tour created by ' + item.firstName}
            isFree={'No'}
              
              onPress={() =>
                navigation.navigate('VirtualTour2', {
                  title: item.attractionName,
                  id: item.id,
                  path:item.path,
                  latitude:item.latitude,
                  longitude:item.longitude,
                  description: item.description,
                  city:item.villageName,
                })
              }
            />
          ))}
        {Tab == 2 &&
          leaderboardInfo2.map(item => {
            if(item.package === 'Premium'){
              return(
                <ListItem4
                  key={item.userId}
                  photo={{uri:item.profilePicture}}
                  firstName={item.firstName}
                  lastName={item.lastName}
                  points={item.points}
                  isFree={'Yes'}
                  
                  onPress={() =>
                    navigation.navigate('ViewTourguide', {
                      UID:item.userId,
                      fName:item.firstName,
                      lName:item.lastName,
                      bioo:item.bio,
                      picture:item.profilePicture,
                      points:item.points,
                      packagee:item.package,
                      contact:item.contactNumber,
                    })
                  }
                />
              )
            }
            else{
              return(
                <ListItem
                  key={item.userId}
                  photo={{uri:item.profilePicture}}
                  firstName={item.firstName}
                  lastName={item.lastName}
                  points={item.points}
                  isFree={'Yes'}
                  
                  onPress={() =>
                    navigation.navigate('ViewTourguide', {
                      UID:item.userId,
                      fName:item.firstName,
                      lName:item.lastName,
                      bioo:item.bio,
                      picture:item.profilePicture,
                      points:item.points,
                      packagee:item.package,
                      contact:item.contactNumber,
                    })
                  }
                />
              )
            }
            })}
      </ScrollView>
      
    </SafeAreaView>
  );
}
