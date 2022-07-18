import * as React from 'react';
import { Avatar } from 'react-native-paper';

const Profile = () => (
  <Avatar.Image size={30} source={require('../assets/avatar.jpg')} />
);
export default Profile;