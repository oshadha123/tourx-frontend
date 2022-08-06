import React, {useState,useContext,useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
// import Carousel from 'react-native-snap-carousel';
import Feather from 'react-native-vector-icons/Feather';


import BannerSlider from '../components/BannerSlider';
import {windowWidth} from '../utils/Dimensions';

import {leaderboard, yourTours, sliderData} from '../model/data';
import CustomSwitch from '../components/CustomSwitch';
import ListItem from '../components/ListItem';
import { AuthContext } from '../context/AuthContext';
import ImageSwiper from '../components/ImageSwiper';
import ListItem2 from '../components/ListItem2';

// import { TourGuideHomeScreenContext } from '../context/TourGuide/TourGuideHomeScreenContext';

export default function HomeScreen({navigation}) {
  const [Tab, setTab] = useState(1);
  const {userInfo}=useContext(AuthContext);
  const {getLeaderboard}=useContext(AuthContext);
  const {leaderboardInfo}=useContext(AuthContext);
  const {yourToursInfo}=useContext(AuthContext);


  const renderBanner = ({item, index}) => {
    return <BannerSlider data={item} />;
  };


  const onSelectSwitch = value => {
    setTab(value);
    

    // console.log(leaderboardInfo)

  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView style={{padding: 20}}>
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
              source={{uri:userInfo.profile}}
              style={{width: 35, height: 35}}
              imageStyle={{borderRadius: 25}}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            borderColor: '#C6C6C6',
            borderWidth: 1,
            borderRadius: 8,
            paddingHorizontal: 10,
            paddingVertical: 8,
          }}>
          <Feather
            name="search"
            size={20}
            color="#C6C6C6"
            style={{marginRight: 5}}
          />
          <TextInput placeholder="Search" />
        </View>

        <View
          style={{
            marginVertical: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 18, fontFamily: 'Roboto-Medium'}}>
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

        <View style={{marginVertical: 20}}>
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
          yourToursInfo.map(item => (
            <ListItem2
              key={item.tourGuideId}
              photo={{uri:"https://api.travelql.com/images/0aeda8f4-358a-49eb-919a-5790a03ce5d0.webp"}}
              title={item.attractionName}
              subTitle={item.attarctionName}
              isFree={'No'}
              
              onPress={() =>
                navigation.navigate('VirtualTour', {
                  title: item.title,
                  id: item.id,
                })
              }
            />
          ))}
      </ScrollView>
      
    </SafeAreaView>
  );
}
