import React from 'react';
import Constants from "expo-constants";
import {FlatList, SafeAreaView, StyleSheet, StatusBar, Platform} from "react-native";

const Screen = ({children}) => {
    return (
        <SafeAreaView style={styles.screen}>
            {children}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    screen: {
        //  paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
        paddingTop: Constants.statusBarHeight
    }
});

export default Screen;