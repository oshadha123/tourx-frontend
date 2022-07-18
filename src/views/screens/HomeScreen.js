import * as React from 'react';
import { Appbar,Searchbar } from 'react-native-paper';
import { StyleSheet,Text} from 'react-native';
import Profile from '../../components/Profile';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import Carousel from 'react-native-snap-carousel';

const HomeScreen = ({navigation}) => {
  const _goBack = () => navigation.navigate('OnBoardScreen');

//   const _handleSearch = () => console.log('Searching');
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  const _handleMore = () => console.log('Shown more');
  const _goProfilePage=()=>navigation.navigate('ProfilePage');


  return (
    <>
    <Appbar.Header style={{backgroundColor:"#C3E0E5"}}>
      <Appbar.BackAction onPress={_goBack} />
      <Appbar.Content title="Explore the places" />
      <TouchableOpacity onPress={_goProfilePage}>
      <Profile />
      </TouchableOpacity>
      

      {/* <Appbar.Action icon="magnify" onPress={_handleSearch} /> */}
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
    </Appbar.Header>
    <Searchbar style={style.rach}
    placeholder="Search"
    onChangeText={onChangeSearch}
    value={searchQuery}
    
  />

  </>
  );
};

const style = StyleSheet.create({

    
});

export default HomeScreen;