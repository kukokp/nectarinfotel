import 'react-native-gesture-handler';
import React from 'react';
import { Platform, StatusBar, } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//StackNavigator.
import { CustomerStackNavigator } from './navigators/CustomerStackNavigator';
//StackNavigator.

//Logger.
import AppLogger from './utils/AppLogger'
import ColorCode from './utils/ColorCode'
import AppConstant from './utils/AppConstant'

//theme + auth section : for manage switch stack.
//Context
import { ThemeContext } from './contexts/ThemeContext';

//Theme
import { lightTheme } from './themes/light';
import { darkTheme } from './themes/dark';



export default function () {

  AppLogger.showInfo("$App.js == Platform.OS ::" + Platform.OS);
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const switchTheme = React.useCallback(() => {
    setIsDarkMode(!isDarkMode);
  }, [isDarkMode]);

  function renderScreens() {
    return <CustomerStackNavigator />;

  }

  return (
    <ThemeContext.Provider value={switchTheme}>
      {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} hidden /> */}
      <StatusBar
        barStyle="dark-content"
        // dark-content, light-content and default
        hidden
        //To hide statusBar : Now It's work
        backgroundColor="#ff5d05"
        //Background color of statusBar only works for Android
        translucent={true}
        //allowing light, but not detailed shapes
        networkActivityIndicatorVisible={true}
      />

      <NavigationContainer theme={isDarkMode ? darkTheme : lightTheme}>
        {renderScreens()}
      </NavigationContainer>

    </ThemeContext.Provider>
  );
}