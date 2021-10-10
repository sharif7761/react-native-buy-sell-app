import React, {useState, useEffect} from 'react';
import Screen from "../components/Screen";
import {FlatList, StyleSheet} from "react-native";
import Card from "../components/Card";
import colors from "../config/colors";
import listingApi from '../api/listings';
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import AppActivityIndicator from "../components/AppActivityIndicator";
import useApi from "../hooks/useApi";


const ListingsScreen = ({ navigation }) => {
    const {data: listings, error, loading, request: loadListings} = useApi(listingApi.getListings);

    useEffect(() => {
        loadListings();
    },[]);

    return (
        <>
            <AppActivityIndicator visible={loading} />
            <Screen style={styles.screen}>
                {error && <>
                    <AppText>Couldn't retieve the listings</AppText>
                    <AppButton title="Retry" onPress={loadListings} />
                </>
                }
                <FlatList
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    data={listings}
                    keyExtractor={listing => listing.id.toString()}
                    renderItem={({item}) =>
                        <Card
                            title={item.title}
                            subTitle={"$" + item.price}
                            imageUrl={item.images[0].url}
                            onPress={() => navigation.navigate("ListingDetails", item)}
                            thumbnailUrl={item.images[0].thumbnailUrl}
                        />
                    }
                />
            </Screen>
       </>
    );
};

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.light
    }
})

export default ListingsScreen;