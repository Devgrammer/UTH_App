import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const onboardingImg = require("../../assets/images/ob1.png");

const OnboardingScreen3 = () => {
  const router = useRouter()
  return (
    <View className="p-4">
      <Image className="w-full h-96 rounded-2xl" source={onboardingImg} />
      <View>
        <Text>Master Your Operations</Text>
        <Text>
          Orchestrate your banquet events with precision tools designed for the
          modern coordinator.
        </Text>
      </View>

      <View className="flex-row">
        <View>
          <View>
            <View>
              <Text>Rental Tracking</Text>
              <Text>
                Precision monitoring for linens, silver, and technical equipment
                across multiple event spaces.
              </Text>
            </View>
          </View>
        </View>

        <View>
          <View>
            <View>
              <Text>Guest Concierge</Text>
              <Text>
                Digital orchestration of VIP requests and special accommodations
                with real-time staff sync.
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View className="flex-row gap-2">
        <View className="w-2 h-2 rounded-full bg-primary"></View>
        <View className="w-2 h-2 rounded-full bg-primary"></View>
        <View className="w-6 h-2 rounded-full bg-primary"></View>
      </View>
      <View className="flex-row items-center justify-between w-full">
        <TouchableOpacity
          onPress={() => router.replace("/onboardingScreen2")}
          className="flex-row items-center justify-center w-1/4 mx-auto rounded-full h-14"
        >
          <Text className="">BACK</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.replace("/auth/loginScreen")}
          className="flex-row items-center justify-center w-1/4 mx-auto rounded-full h-14 bg-primary"
        >
          <Text className=" text-surface-container-lowest">LOGIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default OnboardingScreen3