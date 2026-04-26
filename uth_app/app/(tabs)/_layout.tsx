import { Tabs } from "expo-router";
import * as SplashScreen from "expo-splash-screen";

import {
  Bell,
  Calendar,
  House,
  Layers2,
  MessageSquare,
  Settings,
} from "lucide-react-native";
import { Button, Text, TouchableOpacity, View } from "react-native";
import { Image } from "expo-image";
import { cssInterop } from "nativewind";

// This bridges className to style for expo-image
cssInterop(Image, { className: "style" });

const Avatar = require("../../assets/images/logo/40.png");

export default function RootLayout() {
  return (
    <Tabs
      backBehavior="history"
      screenOptions={{
        sceneStyle: {
          backgroundColor: "#F7F8F9", // Your surface color
        },
        headerTitle: (props) => (
          <View className="flex-row items-center gap-4">
            <Image
              className="w-8 h-8 rounded-full"
              contentFit="cover"
              source={Avatar}
            />
            <Text className="font-bold text-headline-md text-primary-fixed">
              Avatar
            </Text>
          </View>
        ),
        headerRight: () => (
          <TouchableOpacity className="p-4">
            <Bell />
          </TouchableOpacity>
        ),
      }}
    >
      <Tabs.Screen
        name="homeScreen"
        options={{
          title: "Home",
          tabBarIcon: ({ focused, color, size }) => (
            <House size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="booking"
        options={{
          title: "Bookings",
          tabBarIcon: ({ focused, color, size }) => (
            <Calendar size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(rentals)"
        options={{
          title: "Rentals",
          tabBarIcon: ({ focused, color, size }) => (
            <Layers2 size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="aboutScreen"
        options={{
          title: "About",
          tabBarIcon: ({ focused, color, size }) => (
            <MessageSquare size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="(settings)"
        options={{
          title: "Setting",
          tabBarIcon: ({ focused, color, size }) => (
            <Settings size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
