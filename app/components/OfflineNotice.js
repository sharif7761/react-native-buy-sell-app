import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppText from "./AppText";
import colors from "../config/colors";
import Constants from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";

const OfflineNotice = (props) => {
 const netInfo = useNetInfo();

 if(netInfo.type !== "unknown" && netInfo.isInternetReachable === false)

 return (
  <View style={styles.container}>
    <AppText style={styles.text}>No Internet Connection</AppText>
  </View>
 );

 return null;
};

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary,
        height: 50,
        position: 'absolute',
        top: Constants.statusBarHeight,
        width: '100%',
        zIndex: 1,
    },
    text: {
        color: colors.white
    }
});

export default OfflineNotice;