import React from 'react';
import {View, StyleSheet, KeyboardAvoidingView} from "react-native";
import colors from "../config/colors";
import AppText from "../components/AppText";
import ListItem from "../components/ListItem";
import { Image } from 'react-native-expo-image-cache'
import ContactSellerForm from "../components/ContactSellerForm";

const ListingDetailsScreen = ({ route }) => {
    const listing = route.params;

    return (
        <KeyboardAvoidingView
            behavior="position"
            keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
        >
            <Image style={styles.image}
                   preview={{ uri: listing.images[0].thumbnailUrl}}
                   tint='light'
                   uri={listing.images[0].url} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{listing.title}</AppText>
                <AppText style={styles.price}>{listing.price}</AppText>
                <View style={styles.userContainer}>
                    <ListItem
                        image={require('../assets/mosh.jpg')}
                        title='Sharif Ahmed'
                        subTitle='5 listings'
                    />
                </View>
                <ContactSellerForm listing={listing} />
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 20,
    },
    image: {
        width: '100%',
        height: 300
    },
    price: {
        color: colors.secondary,
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 10
    },
    title: {
        fontSize: 24,
        fontWeight: "500"
    },
    userContainer: {
        marginVertical: 40
    }
});


export default ListingDetailsScreen;