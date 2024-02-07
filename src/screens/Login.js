import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  Dimensions,
} from 'react-native';
import {
  scale,
  moderateVerticalScale,
  moderateScale,
  verticalScale,
} from '../libraries/scaling';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../libraries/scalingr';
import {useDispatch, useSelector} from 'react-redux';
import {userLogin} from '../store/userSlice';
import {PRIMARY, PRIMARY_BROWN, PRIMARY_DARK} from '../utils/colors';
import Loader from '../components/Loader';
import {useNavigation} from '@react-navigation/native';
import ApiError from '../components/ApiError';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Formik} from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const Login = () => {
  const dispatch = useDispatch();
  const {isLoading, isError, errorMessage, user} = useSelector(
    state => state.user,
  );
  const navigation = useNavigation();

  const handleSubmit = values => {
    // console.log('Form Values : ', values);
    dispatch(userLogin(values))
      .then(action => {
        if (action.payload && action.payload.token) {
          // console.log('Login Action', action.payload);
          AsyncStorage.setItem('token', action.payload.token);
          AsyncStorage.setItem('user', JSON.stringify(action.payload));
          // Navigate to 'Dashboard'
          navigation.navigate('Dashboard');
        }
      })
      .catch(error => {
        console.error('Error : ', error);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Loader isVisible={isLoading} message={'Signing In....'} />

      <View style={styles.mainView}>
        <Image
          style={styles.logo}
          source={require('../images/nlogo4.png')}
          resizeMode="contain"
        />
      </View>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={validationSchema}
        onSubmit={values => {
          handleSubmit(values);
        }}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View style={styles.formView}>
            <Text
              style={{
                fontSize: moderateScale(24),
                fontWeight: '700',
                marginTop: moderateVerticalScale(30),
                color: PRIMARY_BROWN,
              }}>
              Login
            </Text>

            <View style={styles.input}>
              <TextInput
                autoCapitalize="none"
                placeholder="Enter Email"
                style={styles.textInput}
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                keyboardType="email-address"></TextInput>
            </View>
            {touched.email && errors.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}
            <View style={styles.input}>
              <TextInput
                placeholder="Enter Password"
                style={styles.textInput}
                // secureTextEntry
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}></TextInput>
            </View>
            {touched.password && errors.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}
            <TouchableOpacity style={styles.loginButton} onPress={handleSubmit}>
              <Text style={{color: 'white', fontSize: 16, fontWeight: '400'}}>
                Login
              </Text>
            </TouchableOpacity>
            <ApiError isVisible={isError} error={errorMessage} />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#f77f00'},
  mainView: {
    marginTop: moderateVerticalScale(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  formView: {
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
    top: hp('27%'),
    backgroundColor: 'white',
    borderTopLeftRadius: moderateScale(50),
    borderTopRightRadius: moderateScale(50),
    height: hp(Dimensions.get('window').height - 250),
  },
  loginButton: {
    width: '90%',
    height: verticalScale(50),
    borderRadius: moderateScale(10),
    backgroundColor: PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: moderateVerticalScale(20),
  },
  logo: {
    height: verticalScale(130),
    width: scale(260),
    marginTop: moderateVerticalScale(10),
    alignSelf: 'center',
  },
  input: {
    height: verticalScale(50),
    width: '90%',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: moderateScale(10),
    marginTop: moderateVerticalScale(20),
  },
  textInput: {marginLeft: moderateScale(20)},
  errorText: {
    color: 'red',
    alignSelf: 'flex-start',
    marginLeft: moderateScale(25),
    marginTop: moderateVerticalScale(5),
  },
});

export default Login;
