import React, { Component } from 'react';
import { StyleSheet, Platform, StatusBar, View } from 'react-native';
import R from '../global/R';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

const GeneralStatusBarColor = ({ ...props }) => (


    <View style={styles.statusBar}>
        <StatusBar backgroundColor={R.colors.primaryLight} translucent {...props} />
    </View>
);


const styles = StyleSheet.create({
    statusBar: {
        //height: STATUSBAR_HEIGHT,
        backgroundColor:R.colors.colorTransparent
    }
});

export default GeneralStatusBarColor;

//NOTES: 02/12/2020 
// STATUSBAR ISSUE:
//Check App.Js Hide the statusBar : Default Status Bar.
// GeneralStatusBar :  Comment the statusBar Height so it's stop working.
//  