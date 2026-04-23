import { Image } from 'expo-image'
import { useRouter } from 'expo-router'
import React from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const onboardingImg = require('../../assets/images/ob1.png')

const OnboardingScreen1 = () => {
    const router = useRouter()
  return (
    <SafeAreaView className="px-4">
      <Image className="w-full h-96 rounded-2xl" source={onboardingImg} />
      <View>
        <Text>Manage Your Banquet Business Effortlessly</Text>
        <Text>Orchestrate every event with precision and polish.</Text>
      </View>
      <View className="flex-row gap-2">
        <View className="w-6 h-2 rounded-full bg-primary"></View>
        <View className="w-2 h-2 rounded-full bg-primary"></View>
        <View className="w-2 h-2 rounded-full bg-primary"></View>
      </View>
      <TouchableOpacity onPress={()=>router.replace('/onboardingScreen2')} className="flex-row items-center justify-center w-1/2 mx-auto rounded-full h-14 bg-primary">
        <Text className=" text-surface-container-lowest">GET STARTED</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default OnboardingScreen1