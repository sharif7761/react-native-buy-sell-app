import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from "../config/colors";

const NewListingButton = ({ onPress }) => {
 return (
     <TouchableOpacity onPress={onPress}>
         <View style={styles.container}>
             <MaterialCommunityIcons name='plus-circle' color={colors.white} size={30} />
         </View>
     </TouchableOpacity>
 );
};

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary,
        height: 70,
        width: 70,
        borderRadius: 35,
        bottom: 35,
        borderColor: colors.white,
        borderWidth: 10
    },
});

export default NewListingButton;