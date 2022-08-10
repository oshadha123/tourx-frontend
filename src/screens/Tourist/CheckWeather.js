import React, {useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  useWindowDimensions,
  StatusBar,
  Animated,
  TouchableOpacity,
} from 'react-native';


import SunIcon from '../../assets/images/sun.svg';
import CloudIcon from '../../assets/images/cloudy.svg';
import MoonIcon from '../../assets/images/moon.svg';
import RainIcon from '../../assets/images/rain.svg';
import MenuIcon from '../../assets/images/menu.svg';
import SearchIcon from '../../assets/images/search.svg';
// import {Locations} from '../../model/data2';
// import Locations from '../../model/data2';

// import { getStatusBarHeight } from 'react-native-status-bar-height';

const WeatherIcon = weatherType => {
  if (weatherType == 'Sunny') {
    return <SunIcon width={34} height={34} fill="#fff" />;
  }
  if (weatherType == 'Rainy') {
    return <RainIcon width={34} height={34} fill="#fff" />;
  }
  if (weatherType == 'Cloudy') {
    return <CloudIcon width={34} height={34} fill="#fff" />;
  }
  if (weatherType == 'Night') {
    return <MoonIcon width={34} height={34} fill="#fff" />;
  }
};

const CheckWeather = () => {
  const Locations = [
    {
      id: 1,
      city: 'Kolkata',
      dateTime: '07:50 PM — Wednesday, 26 May 2021',
      temparature: '27\u2103',
      weatherType: 'Night',
      wind: 14,
      rain: 50,
      humidity: 70,
    },
    {
      id: 2,
      city: 'London',
      dateTime: '03:20 PM — Wednesday, 26 May 2021',
      temparature: '15\u2103',
      weatherType: 'Cloudy',
      wind: 8,
      rain: 7,
      humidity: 82,
    },
    {
      id: 3,
      city: 'New York',
      dateTime: '10:20 AM — Wednesday, 26 May 2021',
      temparature: '17\u2103',
      weatherType: 'Sunny',
      wind: 5,
      rain: 15,
      humidity: 61,
    },
    {
      id: 4,
      city: 'Sydney',
      dateTime: '12:20 AM — Thursday, 27 May 2021',
      temparature: '10\u2103',
      weatherType: 'Rainy',
      wind: 20,
      rain: 70,
      humidity: 91,
    }
  ];
  const {width: windowWidth, height: windowHeight} = useWindowDimensions();

  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <>
      <StatusBar barStyle="light-content" />
      <ScrollView
        horizontal={true}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX,
                },
              },
            },
          ],
          {useNativeDriver: false},
        )}
        scrollEventThrottle={1}>
        {Locations.map((location, index) => {
          if (location.weatherType == 'Sunny') {
            var bgImg = require('../../assets/images/sunny.jpg');
          } else if (location.weatherType == 'Night') {
            bgImg = require('../../assets/images/night2.jpg');
          } else if (location.weatherType == 'Cloudy') {
            bgImg = require('../../assets/images/cloudy.jpeg');
          } else if (location.weatherType == 'Rainy') {
            bgImg = require('../../assets/images/rainy.jpg');
          }

          return (
            <View
              style={{width: windowWidth, height: windowHeight}}
              key={index}>
              <ImageBackground
                source={bgImg}
                style={{
                  flex: 1,
                }}>
                <View
                  style={{
                    flex: 1,
                    backgroundColor: 'rgba(0,0,0,0.3)',
                    padding: 20,
                  }}>
                  <View style={styles.topInfoWrapper}>
                    <View>
                      <Text style={styles.city}>{location.city}</Text>
                      <Text style={styles.time}>{location.dateTime}</Text>
                    </View>
                    <View>
                      <Text style={styles.temparature}>
                        {location.temparature}
                      </Text>
                      <View style={{flexDirection: 'row'}}>
                        {WeatherIcon(location.weatherType)}
                        <Text style={styles.weatherType}>
                          {location.weatherType}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      borderBottomColor: 'rgba(255,255,255,0.7)',
                      marginTop: 20,
                      borderBottomWidth: 1,
                    }}
                  />
                  <View style={styles.bottomInfoWrapper}>
                    <View style={{alignItems: 'center'}}>
                      <Text style={styles.infoText}>Wind</Text>
                      <Text style={[styles.infoText, {fontSize: 24}]}>
                        {location.wind}
                      </Text>
                      <Text style={styles.infoText}>km/h</Text>
                      <View style={styles.infoBar}>
                        <View
                          style={{
                            width: location.wind / 2,
                            height: 5,
                            backgroundColor: '#69F0AE',
                          }}
                        />
                      </View>
                    </View>
                    <View style={{alignItems: 'center'}}>
                      <Text style={styles.infoText}>Rain</Text>
                      <Text style={[styles.infoText, {fontSize: 24}]}>
                        {location.rain}
                      </Text>
                      <Text style={styles.infoText}>%</Text>
                      <View style={styles.infoBar}>
                        <View
                          style={{
                            width: location.rain / 2,
                            height: 5,
                            backgroundColor: '#F44336',
                          }}
                        />
                      </View>
                    </View>
                    <View style={{alignItems: 'center'}}>
                      <Text style={styles.infoText}>Humidity</Text>
                      <Text style={[styles.infoText, {fontSize: 24}]}>
                        {location.humidity}
                      </Text>
                      <Text style={styles.infoText}>%</Text>
                      <View style={styles.infoBar}>
                        <View
                          style={{
                            width: location.humidity / 2,
                            height: 5,
                            backgroundColor: '#F44336',
                          }}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              </ImageBackground>
            </View>
          );
        })}
      </ScrollView>

      <View style={styles.appHeader}>
        <TouchableOpacity onPress={() => {}}>
          <SearchIcon width={24} height={24} fill="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <MenuIcon width={24} height={24} fill="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.indicatorWrapper}>
        {Locations.map((location, index) => {
          const width = scrollX.interpolate({
            inputRange: [
              windowWidth * (index - 1),
              windowWidth * index,
              windowWidth * (index + 1),
            ],
            outputRange: [5, 12, 5],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View key={index} style={[styles.normalDot, {width}]} />
          );
        })}
      </View>
    </>
  );
};

export default CheckWeather;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  appHeader: {
    position: 'absolute',
    top: 0,
    width: '100%',
    // height: getStatusBarHeight() + 40,
    height:50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: 20
  },
  topInfoWrapper: {
    flex: 1,
    marginTop: 160,
    justifyContent: 'space-between',
  },
  city: {
    color: '#fff',
    fontSize: 30,
    fontFamily: 'Lato-Regular',
    fontWeight: 'bold',
  },
  time: {
    color: '#fff',
    fontFamily: 'Lato-Regular',
    fontWeight: 'bold',
  },
  temparature: {
    color: '#fff',
    fontFamily: 'Lato-Light',
    fontSize: 85,
  },
  weatherType: {
    color: '#fff',
    fontFamily: 'Lato-Regular',
    fontWeight: 'bold',
    fontSize: 25,
    lineHeight: 34,
    marginLeft: 10,
  },
  bottomInfoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  infoText: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Lato-Regular',
    fontWeight: 'bold',
  },
  infoBar: {
    width: 45,
    height: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  indicatorWrapper: {
    position: 'absolute',
    top: 140,
    left: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  normalDot: {
    height: 5,
    width: 5,
    borderRadius: 4,
    marginHorizontal: 4,
    backgroundColor: '#fff',
  },
});
