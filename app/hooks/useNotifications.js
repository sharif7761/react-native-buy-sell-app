import React, {useEffect} from 'react';
import * as Notifications from "expo-notifications";
import navigation from "../navigation/rootNavigation";
import expoPushTokensApi from "../api/expoPushTokens";

export default (notificationListener) => {
    useEffect(() => {
        registerForPushNotifications();

       if(notificationListener) Notifications.addPushTokenListener(notificationListener)
    },[]);

    const registerForPushNotifications =  async () => {
        try {
            const token = await Notifications.getExpoPushTokenAsync();
            expoPushTokensApi.register(token['data']);
        } catch (e) {
            console.log("error", e)
        }
    };
};