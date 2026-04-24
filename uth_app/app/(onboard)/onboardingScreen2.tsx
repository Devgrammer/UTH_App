import PrimaryButton from '@/components/ui/primaryButton';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

const onboardingImg = require("../../assets/images/ob2.png");

const OnboardingScreen2 = () => {
  const router = useRouter()
  return (
    <SafeAreaView className="justify-between flex-1 px-4">
      <Image
        className="w-full h-[60vh] rounded-2xl mt-4"
        source={onboardingImg}
      />
      <View>
        <Text className="text-4xl font-bold text-center font-heading">
          Seamless Scheduling Payment Solutions
        </Text>
        <Text className="text-center text-text-light">
          Orchestrate your veue events with precision tools designed for the
          modern coordinator.
        </Text>
      </View>

      {/* <View className="flex gap-4">
        <View className="w-full p-2 border-2 rounded-lg border-emerald-600 bg-emerald-50">
          <View>
            <View>
              <Text className="font-bold font-heading">Smart Schedulling</Text>
              <Text className="leading-5 font-body text-text-light">
                Automated timeline management for flawless flow.
              </Text>
            </View>
          </View>
        </View>

        <View className="w-full p-2 border-2 rounded-lg border-emerald-600 bg-emerald-50">
          <View>
            <View>
              <Text className="font-bold font-heading">Instant Tracking</Text>
              <Text className="leading-5 font-body text-text-light">
                Automated rental management and tracking on your fingertips
              </Text>
            </View>
          </View>
        </View>
      </View> */}

      <View className="flex-row justify-center gap-2">
        <View className="w-2 h-2 rounded bg-brand"></View>
        <View className="w-6 h-2 rounded bg-brand"></View>
        <View className="w-2 h-2 rounded bg-brand"></View>
      </View>
      <View className="flex-row items-center justify-between w-full ">
        <PrimaryButton
          addBtnClass="w-[40%]"
          handlePress={() => router.replace("/onboardingScreen1")}
          title="Back"
        />
        <PrimaryButton
          addBtnClass="w-[40%]"
          handlePress={() => router.replace("/onboardingScreen3")}
          title="Next"
        />
      </View>
    </SafeAreaView>
  );
}

export default OnboardingScreen2