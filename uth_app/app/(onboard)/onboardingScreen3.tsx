import PrimaryButton from '@/components/ui/primaryButton';
import { AppContext } from '@/context/appContext';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React, { useContext } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

const onboardingImg = require("../../assets/images/ob3.png");

const OnboardingScreen3 = () => {
  const {setToken} = useContext(AppContext)
  const router = useRouter()
  return (
    <SafeAreaView className="justify-between flex-1 px-4">
      <Image className="w-full h-[60vh] rounded-2xl mt-4" source={onboardingImg} />
      <View>
        <Text className="text-4xl font-bold text-center font-heading">
          Master Your Operations Just like Pro
        </Text>
        <Text className="text-center text-text-light">
          Orchestrate your banquet events with precision tools designed for the
          modern coordinator.
        </Text>
      </View>

      {/* <View className="flex justify-between w-full gap-4">
        <View className="w-full p-2 border-2 rounded-lg border-emerald-600 bg-emerald-50">
          <View>
            <View>
              <Text className="font-bold font-heading">Rental Tracking</Text>
              <Text className="leading-5 font-body text-text-light">
                Precision monitoring for linens, silver, and technical equipment
                across multiple event spaces.
              </Text>
            </View>
          </View>
        </View>

        <View className="w-full p-2 border-2 rounded-lg border-emerald-600 bg-emerald-50">
          <View>
            <View>
              <Text className="font-bold font-heading">Guest Concierge</Text>
              <Text className="leading-5 font-body text-text-light">
                Digital orchestration of VIP requests and special accommodations
                with real-time staff sync.
              </Text>
            </View>
          </View>
        </View>
      </View> */}

      <View className="flex-row justify-center gap-2">
        <View className="w-2 h-2 rounded-full bg-brand"></View>
        <View className="w-2 h-2 rounded-full bg-brand"></View>
        <View className="w-6 h-2 rounded-full bg-brand"></View>
      </View>
      <View className="flex-row items-center justify-between w-full ">
        <PrimaryButton
          addBtnClass="w-[40%]"
          handlePress={() => router.replace("/onboardingScreen2")}
          title="Back"
        />
        <PrimaryButton
          addBtnClass="w-[40%]"
          handlePress={() =>{ router.replace("/loginScreen"); setToken('onboarded',true)}}
          title="Login"
        />
      </View>
    </SafeAreaView>
  );
}

export default OnboardingScreen3