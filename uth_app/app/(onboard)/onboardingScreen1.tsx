import PrimaryButton from '@/components/ui/primaryButton'
import { Image } from 'expo-image'
import { useRouter } from 'expo-router'
import React from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const onboardingImg = require('../../assets/images/ob1.png')

const OnboardingScreen1 = () => {
    const router = useRouter()
  return (
    <SafeAreaView className="justify-between flex-1 px-4">
      <Image
        className="w-full h-[60vh] rounded-2xl mt-4"
        source={onboardingImg}
      />
      <View>
        <Text className="text-4xl font-bold text-center font-heading">
          Manage Your Venue Business Effortlessly
        </Text>
        <Text className="text-center text-text-light">
          Orchestrate every event with precision and polish with full on control.
        </Text>
      </View>
      <View className="flex-row justify-center gap-2">
        <View className="w-6 h-2 rounded bg-brand"></View>
        <View className="w-2 h-2 rounded bg-brand"></View>
        <View className="w-2 h-2 rounded bg-brand"></View>
      </View>
      <PrimaryButton
        handlePress={() => router.replace("/onboardingScreen2")}
        title="Get Started"
      />
    </SafeAreaView>
  );
}

export default OnboardingScreen1