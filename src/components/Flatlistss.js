import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {PRIMARY, TEXT_BLUE, TEXT_DARK, THEME_COLOR} from '../utils/colors';

const Flatlistss = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [division, setDivision] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
  return (
    <View style={style.container}>
      <View style={style.header_container}>
        <Text>
          {'<'} {1}
        </Text>
        <Text>
          Division{' '}
          <Text style={{color: TEXT_DARK, fontWeight: 'bold'}}>
            {currentIndex == 0
              ? 'A'
              : currentIndex == 1
              ? 'B'
              : currentIndex == 2
              ? 'C'
              : currentIndex == 3
              ? 'D'
              : currentIndex == 4
              ? 'E'
              : currentIndex == 5
              ? 'F'
              : currentIndex == 6
              ? 'G'
              : currentIndex == 7
              ? 'H'
              : currentIndex == 8
              ? 'I'
              : currentIndex == 9
              ? 'J'
              : 'K'}
          </Text>{' '}
        </Text>
        <Text>
          Current Page{' '}
          <Text style={{color: TEXT_BLUE, fontWeight: 'bold'}}>
            {currentIndex}
          </Text>
        </Text>

        <Text>
          {10} {'>'}
        </Text>
      </View>

      <FlatList
        data={division}
        horizontal
        pagingEnabled={true}
        onScroll={e => {
          const X = (
            e.nativeEvent.contentOffset.x / Dimensions.get('window').width
          ).toFixed(0);
          setCurrentIndex(X);
          console.log(currentIndex);
        }}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                width: Dimensions.get('window').width,
                height: Dimensions.get('window').height,
                paddingBottom: 30,
                paddingLeft: 40,
                paddingRight: 40,
                // backgroundColor: item % 2 == 0 ? 'lightblue' : 'green',
              }}>
              <FlatList
                data={[
                  1, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 3,
                ]}
                showsVerticalScrollIndicator={false}
                renderItem={({item, index}) => {
                  return (
                    <View
                      style={{
                        width: '100%',
                        backgroundColor: '#fff',

                        justifyContent: 'space-evenly',
                        paddingBottom: 20,
                        borderBottomWidth: 2,
                        borderBottomColor: 'lightgrey',
                       
                      }}>
                      <View style={{flexDirection: 'row'}}>
                        <View
                          style={{
                            width: '50%',
                            // backgroundColor: 'orange',
                            marginTop:20
                          }}>
                          <Text
                            style={{
                              fontSize: 20,
                             
                            }}>
                            Result Type
                          </Text>
                          <Text
                            style={{
                              fontSize: 20,
                              marginTop:10
                            }}>
                            {' '}
                           Added By
                          </Text>
                          <Text
                            style={{
                              fontSize: 20,
                              marginTop:10
                            }}>
                            Date Added{' '}
                            
                          </Text>
                          <Text
                            style={{
                              fontSize: 20,
                              marginTop:10
                            }}>
                            {' '}
                            Date Updated
                          </Text>
                        </View>
                        <View
                          style={{
                            width: '50%',
                            // backgroundColor: 'green',
                            marginTop:20
                          }}>
                          <Text
                            style={{
                              fontSize: 20,
                            }}>
                          Unit Test
                          </Text>
                          <Text
                            style={{
                              fontSize: 20,
                              marginTop:10
                            }}>
                            {' '}
                            admin@sms.com
                          </Text>
                          <Text
                            style={{
                              fontSize: 20,
                              marginTop:10
                            }}>
                              April 9th 2023
                              
                          </Text>
                          <Text
                            style={{
                              fontSize: 20,
                              marginTop:10
                            }}>
                            {' '}
                          April 9th 2023
                          </Text>
                        </View>
                      </View>

                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          width: '50%',
                          marginTop: 15,
                          alignSelf: 'center',
                        }}>
                        <Image
                          source={require('../images/icons/see.png')}
                          style={{width: 25, height: 25, tintColor: PRIMARY}}
                        />
                        <Image
                          source={require('../images/icons/pencil.png')}
                          style={{
                            width: 25,
                            height: 25,
                            tintColor: THEME_COLOR,
                          }}
                        />
                        <Image
                          source={require('../images/icons/trash.png')}
                          style={{width: 25, height: 25}}
                        />
                      </View>
                    </View>
                  );
                }}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

export default Flatlistss;
const style = StyleSheet.create({
  container: {
    backgroundColor: '#ffff',
  },
  header_container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#fff',
    paddingBottom: 10,
  },
  header_middle_container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#fff',
  },
  header_middle_container_text: {
    fontSize: 13,
    color: TEXT_DARK,
    fontWeight: 'bold',
    borderRightWidth: 1,
    borderRightColor: 'green',
    paddingRight: 15,
  },
});
