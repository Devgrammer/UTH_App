import PrimaryButton from '@/components/ui/primaryButton';
import { AppContext } from '@/context/appContext';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import { Building, FactoryIcon, PlusCircle } from 'lucide-react-native';
import React, { useContext } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const userAvatar = 'https://images.unsplash.com/photo-1623366302587-b38b1ddaefd9?q=80&w=400'

const SettingScreen = () => {
  const { user }:any = useContext(AppContext)
  const { fullName, role } = JSON.parse(user)
  console.log('ii', user)
  return (
    <SafeAreaView className="justify-center p-4 gap-y-8">
      <View className='justify-center w-full p-4 bg-brand-dark h-44 rounded-xl'>
        <View className='flex-row items-center gap-2'>
          <Image className='w-16 h-16 border-4 rounded-full border-brand-light' source={userAvatar} />
          <View>
            <Text className='text-xl font-bold text-white' >{fullName}</Text>
            <Text className='text-white capitalize text-md'>{role}</Text>
          </View>
        </View>

      </View>
      <View className='gap-4 p-4 bg-white rounded-xl'>
        <View className="flex-row gap-2">
          <FactoryIcon />
          <Text className="text-xl font-bold">Venue Management</Text>
        </View>
        <PrimaryButton Icon={Building} title="View all Venues" handlePress={() => { router.replace('/(tabs)/(settings)/allVenues') }} addBtnClass='bg-neutral-100 px-2 gap-2 justify-between' addTitleClass='text-black font-bold' alignIcon='right' />

        <TouchableOpacity
          onPress={() => router.replace("/addVenue")}
          className="items-center justify-center w-full mx-auto border-2 border-dashed rounded-lg border-brand-light h-44"
        >
          <View>
            <View className="p-1 mx-auto rounded-full gap-y-4 w-9 h-fit bg-emerald-200">
              <PlusCircle />
            </View>
            <Text className="text-center">Add New Venue</Text>
            <Text className="text-xs text-text-lighter">
              Register and manage new locations
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}



export default SettingScreen;
