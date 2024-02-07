import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from '../libraries/scaling';
import {PRIMARY, PRIMARY_DARK, TEXT_BLUE, TEXT_DARK} from '../utils/colors';
import {useNavigation} from '@react-navigation/native';
import {auth_reset, getUserInfo} from '../store/userSlice';
import {deleteToken} from '../utils/utils';
import Loader from '../components/Loader';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Dashboard = () => {
  const navigation = useNavigation();
  const [userInfo, setUserInfo] = useState();
  const dispatch = useDispatch();

  const {user, isLoading} = useSelector(state => state.user);

  useEffect(() => {
    const getUser = async () => {
      await AsyncStorage.getItem('user')
        .then(data => setUserInfo(JSON.parse(data)))
        .catch(error => console.error('Error AsyncStorage :', error));
    };
    getUser();
  }, []);
  // console.log('UserInfo :', userInfo);
  const logout = () => {
    deleteToken()
      .then(action => {
        dispatch(auth_reset());
        navigation.navigate('Login');
      })
      .catch(err => {
        console.error('Logout Error', err);
      });
  };
  return (
    <SafeAreaView style={styles.container}>
      {/*<Loader isVisible={isLoading} />*/}
      <View style={styles.mainView}>
        <Image
          style={styles.logo}
          source={require('../images/nlogo4.png')}
          resizeMode="contain"
        />
        <View style={{marginTop: moderateVerticalScale(50)}}>
          <View
            style={{
              flexDirection: 'row',
              marginTop: moderateVerticalScale(5),
            }}>
            <Text
              style={{
                fontSize: moderateScale(18),
                fontWeight: '600',
                color: TEXT_DARK,
              }}>
              Welcome Back
            </Text>
            <Text
              style={{
                fontSize: moderateScale(18),
                fontWeight: '700',
                marginLeft: moderateScale(5),
                color: TEXT_BLUE,
              }}>
              {userInfo?.firstname + ' ' + userInfo?.lastname}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: moderateVerticalScale(5),
            }}>
            <Text
              style={{
                fontSize: moderateScale(18),
                fontWeight: '600',
                color: TEXT_DARK,
              }}>
              Email :
            </Text>
            <Text
              style={{
                fontSize: moderateScale(18),
                fontWeight: '700',
                marginLeft: moderateScale(5),
                color: TEXT_BLUE,
              }}>
              {userInfo?.email}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: moderateVerticalScale(5),
            }}>
            <Text
              style={{
                fontSize: moderateScale(18),
                fontWeight: '600',
                color: TEXT_DARK,
              }}>
              Designation :
            </Text>
            <Text
              style={{
                fontSize: moderateScale(18),
                fontWeight: '700',
                marginLeft: moderateScale(5),
                color: TEXT_BLUE,
              }}>
              {userInfo?.designation}
            </Text>
          </View>
        </View>

        <TouchableOpacity style={styles.logoutButton} onPress={logout}>
          <Text style={{color: 'white'}}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  mainView: {
    marginTop: moderateVerticalScale(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: verticalScale(100),
    width: scale(220),
    marginTop: moderateVerticalScale(10),
    alignSelf: 'center',
  },
  logoutButton: {
    width: '90%',
    height: verticalScale(50),
    borderRadius: moderateScale(10),
    backgroundColor: PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: moderateVerticalScale(50),
  },
  details: {
    marginTop: moderateVerticalScale(5),
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Dashboard;
