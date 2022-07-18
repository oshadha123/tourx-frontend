import * as React from 'react'
import { Appbar} from 'react-native-paper';
import Profile from '../components/Profile';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Header = ({navigation}) => {
    const _goBack = () => navigation.navigate('Logout');
const _handleMore = () => console.log('Shown more');
const _goProfilePage=()=>navigation.navigate('ProfilePage');
  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={_goBack} />
      <Appbar.Content title="Explore the places" />
      <TouchableOpacity onPress={_goProfilePage}>
      <Profile />
      </TouchableOpacity>
      

      {/* <Appbar.Action icon="magnify" onPress={_handleSearch} /> */}
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
    </Appbar.Header>
  )
}

export default Header