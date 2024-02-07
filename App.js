import React from 'react';
import {Provider} from 'react-redux';
import store from './src/store/store';
import MainNavigator from './src/navigation/MainNavigator';
import Result from './src/screens/Result';

const App = () => {
  return (
    // <Provider store={store}>
    //   <MainNavigator />
    // </Provider>
    <Result/>
  );
};

export default App;
