import { View, Text } from 'react-native'
import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import Flatlistss from '../components/Flatlistss'

const Result = () => {
  return (
    <View>
        <HeaderComponent/>
        <Flatlistss/>
      <Text>Result</Text>
    </View>
  )
}

export default Result