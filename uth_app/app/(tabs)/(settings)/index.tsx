import { router } from 'expo-router';
import { PlusCircle } from 'lucide-react-native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SettingScreen = () => {
    return (
      <SafeAreaView className="justify-center p-4">
        <Text className='text-xl font-bold font-heading'>Setting</Text>
        <TouchableOpacity onPress={()=>router.replace('/addVenue')} className="items-center justify-center w-2/3 mx-auto border rounded-lg h-44">
          <View>
            <View className="p-1 mx-auto rounded-full gap-y-4 w-9 h-fit bg-emerald-200">
              <PlusCircle />
            </View>
            <Text className="text-center">Add Venue</Text>
            <Text className="text-xs text-text-lighter">Register and manage new locations</Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({})

export default SettingScreen;
