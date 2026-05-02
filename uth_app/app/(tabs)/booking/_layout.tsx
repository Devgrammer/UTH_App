import { Stack, Tabs } from "expo-router";


import {
  Bell,
  Calendar,
  House,
  Layers2,
  MessageSquare,
} from "lucide-react-native";
import { Button, Text, TouchableOpacity, View } from "react-native";
import { Image } from "expo-image";
import { cssInterop } from "nativewind";

// This bridges className to style for expo-image
cssInterop(Image, { className: "style" });

// const Avatar = require("../assets/images/logo/40.png");

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown:false}}>
      <Stack.Screen name="index" options={{ title: "My Bookings" }} />
      <Stack.Screen
        name="addBookingScreen"
        options={{
          title: "Add Booking",
          headerShown:true,

        }}
      />
    </Stack>
  );
}
