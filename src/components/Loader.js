import React from 'react';
import {StyleSheet, View, ActivityIndicator, Text} from 'react-native';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from '../libraries/scaling';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../libraries/scalingr';

const Loader = ({
  size = 'large',
  color = '#9d0208',
  isVisible = false,
  message = 'Loading...',
}) => {
  if (!isVisible) {
    return null;
  }
  return (
    <View style={styles.overlay}>
      <View style={styles.loadingBox}>
        <ActivityIndicator size={size} color={color} />
        {message != '' && (
          <Text
            style={{
              alignSelf: 'center',
              color: '#14213d',
              fontSize: 12,
              fontWeight: '600',
              marginTop: moderateVerticalScale(6),
            }}>
            {message}
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.13)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  loadingBox: {
    width: scale(90),
    height: verticalScale(85),
    borderRadius: 14,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loader;
