import React from 'react';
import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import {View, StyleSheet, FlatList} from "react-native";
import colors from "../config/colors";

const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary
        }
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary
        }
    },
]

const AccountScreen = () => {
    return (
        <Screen>
            <View style={styles.container}>
                <ListItem
                    title="Sharif Ahmed"
                    subTitle="sharif@namespaceit.com"
                    image={require('../assets/mosh.jpg')}
                    onPress={() => alert('message selected', item) }
                />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={menuItem => menuItem.title}
                    renderItem={({ item }) =>
                        <ListItem
                            title={item.title}
                            ImageComponent={
                                <Icon
                                    name={item.icon.name}
                                    backgroundColor={item.icon.backgroundColor}
                                />
                            }
                        />
                    }
                />
            </View>
        </Screen>
    );
};

const styles = StyleSheet.create({
    container: {

    }
});

export default AccountScreen;