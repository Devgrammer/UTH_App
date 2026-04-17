import { Image } from 'expo-image'
import React from 'react'
import { Text, TextInput, View } from 'react-native'

const rentalItems = require("../../assets/images/logo/180.png");
interface RentalCardPropType {
  rentalItem:string;
  rentalItemName:string;
  rentalItemCategory:string;
  rentalItemRentPerDay:number;
}

const RentalCard = ({rentalItem, rentalItemName, rentalItemCategory, rentalItemRentPerDay}:RentalCardPropType) => {
  return (
    <View className="flex-row w-full h-32 rounded-lg ">
      <View className="h-full  w-[30%]">
        <Image className="w-full h-full rounded-l-lg" source={rentalItems} />
      </View>
      <View className="flex w-[70%] p-2 bg-surface-container-lowest">
        <View className="flex-row items-center justify-between ">
          <View>
            <Text>{rentalItemName}</Text>
            <Text>{rentalItemCategory}</Text>
          </View>
          <Text>₹{rentalItemRentPerDay}</Text>
        </View>
        <View className="flex-row items-center gap-4">
          <View className="w-1/3">
            <Text>QTY</Text>
            <TextInput className="bg-surface-container-high" />
          </View>
          <View className="w-1/3">
            <Text>Days</Text>
            <TextInput className="bg-surface-container-high" />
          </View>
        </View>
      </View>
    </View>
  );
}

export default RentalCard