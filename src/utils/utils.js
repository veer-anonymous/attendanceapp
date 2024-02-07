import AsyncStorage from '@react-native-async-storage/async-storage';
import {auth_reset} from '../store/userSlice';
import {useDispatch} from 'react-redux';

export const deleteToken = async () => {
  try {
    const existingToken = await AsyncStorage.getItem('token');

    if (!existingToken) {
      // console.log('Token does not exist');
      return;
    }

    await AsyncStorage.removeItem('token');
    // console.log('Token Deleted');
  } catch (error) {
    // console.log('Error Deleting Token', error);
  }
};
