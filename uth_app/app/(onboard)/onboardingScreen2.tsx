import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

const onboardingImg = require("../../assets/images/ob1.png");

const OnboardingScreen2 = () => {
  const router = useRouter()
  return (
    <SafeAreaView className="px-4">
      <Image className="w-full h-96 rounded-2xl" source={onboardingImg} />
      <View>
        <Text>Seamless Scheduling & Payments</Text>
        <Text>
          Orchestrate your banquet events with precision tools designed for the
          modern coordinator.
        </Text>
      </View>

      <View className="flex-row">
        <View>
          <View>
            <View>
              <Text>Smart Schedulling</Text>
              <Text>Automated timeline management for flawless flow.</Text>
            </View>
          </View>
        </View>

        <View>
          <View>
            <View>
              <Text>Instant Tracking</Text>
              <Text>Automated rental management for flawless flow.</Text>
            </View>
          </View>
        </View>
      </View>

      <View className="flex-row gap-2">
        <View className="w-2 h-2 rounded-full bg-primary"></View>
        <View className="w-6 h-2 rounded-full bg-primary"></View>
        <View className="w-2 h-2 rounded-full bg-primary"></View>
      </View>
      <View className="flex-row items-center justify-between w-full">
        <TouchableOpacity
          onPress={() => router.replace("/onboardingScreen1")}
          className="flex-row items-center justify-center w-1/4 mx-auto rounded-full h-14"
        >
          <Text className="">BACK</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.replace("/onboardingScreen3")}
          className="flex-row items-center justify-center w-1/4 mx-auto rounded-full h-14 bg-primary"
        >
          <Text className=" text-surface-container-lowest">NEXT</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default OnboardingScreen2