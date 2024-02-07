import React, {useEffect, useState} from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
  Appearance,
  Image,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getUserInfo} from '../store/userSlice';
import {useDispatch} from 'react-redux';
import {THEME_COLOR} from '../utils/colors';
import {
  moderateVerticalScale,
  scale,
  verticalScale,
} from '../libraries/scaling';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../libraries/scalingr';

const Splash = () => {
  const navigation = useNavigation();
  const [barStyle, setBarStyle] = useState('light-content');
  const [barColor, setBarColor] = useState(THEME_COLOR);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      if (Appearance.getColorScheme() === 'dark') {
        setBarStyle('light-content');
      }
      if (Appearance.getColorScheme() === 'light') {
        setBarStyle('default');
      }

      if (Platform.OS === 'android') {
        setBarColor(THEME_COLOR);
        // setBarStyle('default');
        if (Appearance.getColorScheme() === 'dark') {
          setBarStyle('light-content');
        }
        if (Appearance.getColorScheme() === 'light') {
          setBarStyle('default');
        }
      }
      const checkToken = async () => {
        try {
          const token = await AsyncStorage.getItem('token');
          if (token) {
            // console.log('Token ', token);
            dispatch(getUserInfo())
              .then(action => {})
              .catch(error => {});
            navigation.navigate('Dashboard');
          } else {
            navigation.navigate('Login');
          }
        } catch (error) {
          console.error('Error reading token from AsyncStorage:', error);
          navigation.navigate('Login');
        }
      };

      checkToken();
    }, 2000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar barStyle={"dark-content"} backgroundColor={THEME_COLOR}/> */}
      {Platform.OS === 'android' && (
        <StatusBar backgroundColor={barColor} barStyle={barStyle} />
      )}
      {/*{Platform.OS === 'ios' && <StatusBar barStyle={barStyle} />}*/}
      <Image
        source={require('../images/nlogo4.png')}
        style={styles.logo}
        resizeMode={'contain'}
      />
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.logoText}>School</Text>
        <Text style={styles.logoText}>Management System</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME_COLOR,
  },
  logoText: {
    color: 'white',
    fontSize: 30,
    fontWeight: '700',
  },
  logo: {
    height: verticalScale(150),
    width: scale(300),
    marginTop: hp('20%'),
    alignSelf: 'center',
    marginBottom: moderateVerticalScale(30),
  },
});

export default Splash;
