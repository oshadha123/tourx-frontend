import React, {useRef,useState} from 'react';
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
import { getWeather, dailyForecast, showWeather, getLocation } from 'react-native-weather-api';

import SunIcon from '../../assets/images/sun.svg';
import CloudIcon from '../../assets/images/cloudy.svg';
import MoonIcon from '../../assets/images/moon.svg';
import RainIcon from '../../assets/images/rain.svg';
import MenuIcon from '../../assets/images/menu.svg';
import SearchIcon from '../../assets/images/search.svg';
// import {Locations} from '../../model/data2';
// import Locations from '../../model/data2';

// import { getStatusBarHeight } from 'react-native-status-bar-height';
var description2
var description3
var description4
var description5
var description6
var description7
var temp_min2
var temp_max2
var temp_min3
var temp_max3
var temp_min4
var temp_max4
var temp_min5
var temp_max5
var temp_min6
var temp_max6
var temp_min7
var temp_max7
var h2
var h3
var h4
var h5
var h6
var h7
const WeatherIcon = weatherType => {
  if (weatherType == 'Day') {
    return <SunIcon width={34} height={34} fill="#fff" />;
  }
  if (weatherType == 'Rainy') {
    return <RainIcon width={34} height={34} fill="#fff" />;
  }
  if (weatherType == 'Weather') {
    return <CloudIcon width={34} height={34} fill="#fff" />;
  }
  if (weatherType == 'Night') {
    return <MoonIcon width={34} height={34} fill="#fff" />;
  }
};
let temp;
let wind;
// let city;
const CheckWeather = ({route}) => {
  const [h2,setH2]=useState();
    const {latitude,longitude}=route.params;
    console.log(latitude)
  const [city,setCity]=useState('');
  const [temp,setTemp]=useState(0.0);
  const [windy,setWindy]=useState(0.0);
  const [weather,setWeather]=useState(0);
  const [humidity,setHumidity]=useState(0.0);
  const [sunny,setSunny]=useState('');
  const [type,setType]=useState('');
getLocation().then((location) => {
			
getWeather({

	key: "081f5a841fb90fdd362ebd75807fce8e",
	lat: latitude,
	lon: longitude,
	unit: "metric"

}).then(() => {

	var data = new showWeather();
	var temperature = data.temp;
	var windy = data.wind;
  var name_city= data.name;
  var weath= data.feels_like;
  var humid= data.humidity;
  // var sunny = data.sun.set;
  // console.log(list.sys.pod)
  setCity(name_city);
  setTemp(temperature);
  setWindy(windy);
  setWeather(weath)
  setHumidity(humid)
  setSunny(sunny)
  let hours =  date.getHours();
  console.log(hours)
  if (18<hours<24){
    setType('Night')
  }
});
dailyForecast({

	key: "081f5a841fb90fdd362ebd75807fce8e",
	lat: location.coords.latitude,
	lon: location.coords.longitude,
	unit: "metric"

}).then((data) => {

	 temp_min2 = data.daily[1].temp.min;
	 temp_max2 = data.daily[1].temp.max;
   temp_min3 = data.daily[2].temp.min;
	 temp_max3 = data.daily[2].temp.max;
   temp_min4 = data.daily[3].temp.min;
	 temp_max4 = data.daily[3].temp.max;
   temp_min5 = data.daily[4].temp.min;
	 temp_max5 = data.daily[4].temp.max;
   temp_min6 = data.daily[5].temp.min;
	 temp_max6 = data.daily[5].temp.max;
   temp_min7 = data.daily[6].temp.min;
	 temp_max7 = data.daily[6].temp.max;
   console.log(temp_min2)
	// var description1 = data.daily[0].weather[0].description;
	 description2 = data.daily[1].weather[0].description;
	 description3 = data.daily[2].weather[0].description;
	 description4 = data.daily[3].weather[0].description;
	 description5 = data.daily[4].weather[0].description;
	 description6 = data.daily[4].weather[0].description;
	 description7 = data.daily[4].weather[0].description;

   setH2(data.daily[1].humidity)
   
   h3=data.daily[2].humidity
   h4=data.daily[3].humidity
   h5=data.daily[4].humidity
   h6=data.daily[5].humidity
   h7=data.daily[6].humidity

  console.log("hum"+h2);
});

});
console.log(city)
const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();


  const Locations = [
    {
      id: 1,
      city: city,
      dateTime: `${day}-${month}-${year}`,
      temparature: temp+'\u2103',
      weatherType: 'Day',
      wind: windy*3600/1000,
      rain: weather,
      humidity: humidity,
    },
    {
      id: 2,
      city: description2,
      dateTime: `${++day}-${month}-${year}`,
      temparature: temp_min2+'\u2103',
      weatherType: 'Cloudy',
      wind: windy*3600/1000,
      rain: weather,
      humidity: "88",
    },
    {
      id: 3,
      city: description3,
      dateTime: `${++day}-${month}-${year}`,
      temparature: temp_min3+'\u2103',
      weatherType: 'Cloudy',
      wind: windy*3600/1000,
      rain: weather,
      humidity: "90",
    },
    {
      id: 4,
      city: description4,
      dateTime: `${++day}-${month}-${year}`,
      temparature: temp_min4+'\u2103',
      weatherType: 'Weather',
      wind: windy*3600/1000,
      rain: weather,
      humidity: "79",
    },
    {
      id: 5,
      city: description5,
      dateTime: `${++day}-${month}-${year}`,
      temparature: temp_min5+'\u2103',
      weatherType: 'Day',
      wind: windy*3600/1000,
      rain: weather,
      humidity: "78",
    },
    {
      id: 6,
      city: description6,
      dateTime: `01-${month}-${year}`,
      temparature: temp_min6+'\u2103',
      weatherType: 'Weather',
      wind: windy*3600/1000,
      rain: weather,
      humidity: "81",
    },
    {
      id: 7,
      city: description7,
      dateTime: `02-${month}-${year}`,
      temparature: temp_min7+'\u2103',
      weatherType: 'Cloudy',
      wind: windy*3600/1000,
      rain: weather,
      humidity: "85",
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
          if (location.weatherType == 'Day') {
            var bgImg = require('../../assets/images/sunny.jpg');
          } else if (location.weatherType == 'Night') {
            bgImg = require('../../assets/images/night2.jpg');
          } else if (location.weatherType == 'Cloudy') {
            bgImg = require('../../assets/images/cloudy.jpeg');
          } else if (location.weatherType == 'Weather') {
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
                      marginTop: 50,
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
                      <Text style={styles.infoText}>Feels like</Text>
                      <Text style={[styles.infoText, {fontSize: 24}]}>
                        {location.rain}
                      </Text>
                      <Text style={styles.infoText}>°C</Text>
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
    marginVertical: 50,
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
