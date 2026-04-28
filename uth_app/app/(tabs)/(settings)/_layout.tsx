import { Stack } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const RootLayout = () => {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="addVenue" />
            <Stack.Screen name="allVenues" />
        </Stack>
    );
}



export default RootLayout;
