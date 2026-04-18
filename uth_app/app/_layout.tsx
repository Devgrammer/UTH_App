import { Stack } from 'expo-router';
import React from 'react'
import "../global.css";

const RootLayout= () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="(onboard)" />
      <Stack.Screen name="auth" /> */}
      <Stack.Screen name="(inventory)" />
    </Stack>
  );
}

export default RootLayout;