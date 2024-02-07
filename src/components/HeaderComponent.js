import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const HeaderComponent = () => {
  return (
    <View style={style.container}>
      <TouchableOpacity>
        <Image
          source={require('../images/icons/search.png')}
          style={[style.icons, {}]}
        />
      </TouchableOpacity>

      <TouchableOpacity>
        <Image
          source={require('../images/icons/download.png')}
          style={[style.icons, {}]}
        />
      </TouchableOpacity>

      <TouchableOpacity>
        <Image
          source={require('../images/icons/filter-results-button.png')}
          style={[style.icons, {}]}
        />
      </TouchableOpacity>

      <TouchableOpacity>
        <Image
          source={require('../images/icons/pencil.png')}
          style={[style.icons, {}]}
        />
      </TouchableOpacity>

      <TouchableOpacity>
        <Image
          source={require('../images/icons/printing.png')}
          style={[style.icons, {}]}
        />
      </TouchableOpacity>

      <TouchableOpacity>
        <Image
          source={require('../images/icons/plus.png')}
          style={[style.icons, {}]}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderComponent;

const style = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 15,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'pink',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  icons: {
    width:25,
    height: 25,
  },
});
