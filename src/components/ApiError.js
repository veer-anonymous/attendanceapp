import React from 'react';
import {Text} from 'react-native';
import {PRIMARY_BROWN, TEXT_DARK, TEXT_LIGHT, TEXT_RED} from '../utils/colors';

const ApiError = ({isVisible = false, error = null, style = {}}) => {
  if (!isVisible) {
    return null;
  }

  // Merge the default styles with the custom styles
  const mergedStyles = {
    text: {
      color: TEXT_LIGHT,
      fontSize: 15,
      fontWeight: '500',
      marginTop: 5,
      // Add more default text styles if needed
    },
    errorText: {
      color: TEXT_RED,
      fontSize: 15,
      fontWeight: '400',
      // Add more default error text styles if needed
    },
    ...style, // Merge with custom styles
  };

  return (
    <Text style={mergedStyles.text}>
      Server Error : <Text style={mergedStyles.errorText}>{error}</Text>
    </Text>
  );
};

export default ApiError;
