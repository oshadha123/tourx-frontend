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
// import { Bubbles, DoubleBounce, Bars, Pulse } from 'react-native-loader';

import BannerSlider from '../components/BannerSlider';
import {windowWidth} from '../utils/Dimensions';
import Toast from 'react-native-toast-message';
import {leaderboard, yourTours, sliderData} from '../model/data';
import CustomSwitch from '../components/CustomSwitch';
import ListItem from '../components/ListItem';
import { AuthContext } from '../context/AuthContext';
import ImageSwiper from '../components/ImageSwiper';
import ListItem2 from '../components/ListItem2';
// import { CirclesLoader, PulseLoader, TextLoader, DotsLoader,BubblesLoader} from 'react-native-indicator';
// import { TourGuideHomeScreenContext } from '../context/TourGuide/TourGuideHomeScreenContext';
import { Appbar } from 'react-native-paper';
export default function HomeScreen({navigation}) {
  
  const [viewSearch,setViewSearch]=useState(false);
  const _handleSearch = () => {
    if(viewSearch==false){setViewSearch(true)} 
    else{setViewSearch(false)}
  };

  const [Tab, setTab] = useState(1);
  const {userInfo}=useContext(AuthContext);
  const {getLeaderboard}=useContext(AuthContext);
  const {getYourTours}=useContext(AuthContext);

  const {leaderboardInfo}=useContext(AuthContext);
  const {yourToursInfo}=useContext(AuthContext);
  // const [isLoading,setIsLoading]=useState(false);

  const renderBanner = ({item, index}) => {
    return <BannerSlider data={item} />;
  };


  const onSelectSwitch = value => {
    setTab(value);
    

    // console.log(leaderboardInfo)

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
    getLeaderboard()
    getYourTours()

},[])
  
  if(!leaderboardInfo || !yourToursInfo){
     
    return(
    
    <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#fff'}}>
    
        <ActivityIndicator size='large' color="#1768AC"/>
        {/* <Bars size={10} color="#FDAAFF" /> */}
    
           
    </View>
    );

}

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <Appbar.Header style={{backgroundColor:"#1768AC"}} >
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
            marginBottom: 10,
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
            // marginVertical: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 18, fontFamily: 'Roboto-Medium',color:"#000",fontStyle:"italic",paddingBottom:10}}>
            Check out the Leaderboard....!
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Moments')}>
            {/* <Text style={{color: '#0aada8'}}>See all</Text> */}
          </TouchableOpacity>
        </View>
        <ImageSwiper/>
        {/* <Carousel
          ref={c => {
            this._carousel = c;
          }}
          data={sliderData}
          renderItem={renderBanner}
          sliderWidth={windowWidth - 40}
          itemWidth={300}
          loop={true}
        /> */}

        <View style={{marginVertical: 20, paddingTop: 30}}>
          <CustomSwitch
            selectionMode={1}
            option1="Leaderboard"
            option2="Your Tours"
            onSelectSwitch={onSelectSwitch}
          />
        </View>

        {
        //leaderboardInfo
        Tab == 1 &&
          leaderboardInfo.map(item => (
            <ListItem
              key={item.userId}
              photo={{uri:item.profilePicture}}
              firstName={item.firstName}
              lastName={item.lastName}
              points={item.points}
              isFree={'Yes'}
              // onPress={() =>
              //   navigation.navigate('VirtualTour', {
              //     title: item.title,
              //     id: item.id,
              //   })
              // }
            />
          ))
          
          
          
          }
        {Tab == 2 &&
          yourToursInfo.map(item => {
            if(item.guideId == userInfo.userId){
              return(
                <ListItem2
                  key={item.attractionId}
                  photo={{uri:item.path}}
                  title={item.attractionName}
                  subTitle={item.attarctionName}
                  isFree={'No'}
                  
                  onPress={() =>
                    navigation.navigate('VirtualTour', {
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
              )
            }
          })}
      </ScrollView>
      
    </SafeAreaView>
  );
}
