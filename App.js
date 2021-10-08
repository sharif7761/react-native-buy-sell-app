import React, {useState, useEffect} from 'react';
import { StyleSheet, Button, Switch, Text, TextInput, View, Image, Platform, StatusBar, TouchableOpacity, Alert, TouchableWithoutFeedback } from 'react-native';
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import Card from "./app/components/Card";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessageScreen from "./app/screens/MessageScreen";
import AccountScreen from "./app/screens/AccountScreen";
import ListItem from "./app/components/ListItem";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";
import AppText from "./app/components/AppText";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import OfflineNotice from "./app/components/OfflineNotice";

export default function App() {

    const Link = () => {
        const navigation = useNavigation();

        return(
        <Button
            title="View Tweet"
            onPress={() => navigation.navigate("TweetDetails", { id: 1 })}
        />
    )};

    const Tweets = ({ navigation }) => (
        <Screen>
            <AppText>Tweets</AppText>
            {/*<Button*/}
            {/*    title="View Tweet"*/}
            {/*    onPress={() => navigation.navigate("TweetDetails")}*/}
            {/*/>*/}
            <Link />
        </Screen>
    );

    const TweetDetails = ({ route }) => (
        <Screen>
            <AppText>Tweet Details {route.params.id} </AppText>
        </Screen>
    );

    const Account = () => (
        <Screen>
            <AppText>Account </AppText>
        </Screen>
    );

    const Stack = createStackNavigator();
    const StackNavigator = () => (
        <Stack.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: 'blue' },
            }}
        >
            <Stack.Screen
                name="Tweets"
                component={Tweets}
                options={{
                    headerStyle: { backgroundColor: 'tomato' },
                }}
            />
            <Stack.Screen
                name="TweetDetails"
                component={TweetDetails}
                options={({ route }) => ({title: route.params.id })}
            />
        </Stack.Navigator>
    );

    const Tab = createBottomTabNavigator();
    const TabNavigator = () => (
        <Tab.Navigator
            tabBarOptions={{
                activeBackgroundColor: "tomato",
                inctiveBackgroundColor: "#eee",
                activeTintColor: "white",
                inctiveTintColor: "black",
            }}
        >
            <Tab.Screen
                name="Feed"
                component={Tweets}
                options={{
                    tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name='home' size={size} color={color} />
                }}
            />
        </Tab.Navigator>
    );

  return (
        <>
            <NavigationContainer theme={navigationTheme} >
                <AppNavigator />
            </NavigationContainer>
            <OfflineNotice />
        </>
      // <Screen>
      //     <ImageInputList
      //         imageUris={imageUris}
      //         onAddImage={uri => handleAdd(uri)}
      //         onRemoveImage={uri => handleRemove(uri)}
      //     />
      // </Screen>
    // <WelcomeScreen/>
     //  <ViewImageScreen/>
    //   <View style={{
    //     backgroundColor: '#f8f4f4',
    //     padding: 20,
    //     paddingTop: 100
    //   }}>
    //     <Card
    //       title="Red jacket for sale"
    //       subTitle="$100"
    //       image={require("./app/assets/jacket.jpg")}
    //     />
    //   </View>
    //   <ListingDetailsScreen />
        //<MessageScreen/>
    //   <Screen>
    //     <ListItem
    //         title="Title"
    //         ImageComponent={<Icon
    //                         name="email"
    //                         size={50}
    //                         backgroundColor='red'
    //                         iconColor='white' />
    //         }
    //     />
    //   </Screen>
    //   <AccountScreen/>
    //   <ListingsScreen/>
    //   <Screen>
    //     {/*<Text>{firstName}</Text>*/}
    //     {/*<TextInput*/}
    //     {/*  placeholder="First Name"*/}
    //     {/*  style={{*/}
    //     {/*    borderBottomColor: '#ccc',*/}
    //     {/*    borderBottomWidth: 1,*/}
    //     {/*  }}*/}
    //     {/*  onChangeText={(text) => setFirstName(text)}*/}
    //     {/*  keyboardType="numeric"*/}
    //     {/*  secureTextEntry*/}
    //     {/*/>*/}
    //
    //     <AppTextInput placeholder="Username" icon='email' />
    //     <Switch
    //         value={isNew}
    //         onValueChange={(newValue) => setIsNew(newValue)}
    //     />
    //     <AppPicker
    //         selectedItem={category}
    //         onSelectItem={item => setCategory(item)}
    //         items={categories}
    //         icon='apps'
    //         placeholder='Category' />
    //   </Screen>

      // <LoginScreen />
     // <ListingEditScreen/>
  );
}