import { Stack } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const RootLayout = () => {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index"  />
            <Stack.Screen name="addVenue" options={{ title: "Add Venues", headerShown: true }} />
            <Stack.Screen name="allVenues" options={{ title: "My Venues", headerShown:true}}/>
        </Stack>
    );
}



export default RootLayout;
