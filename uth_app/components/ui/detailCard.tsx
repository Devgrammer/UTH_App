import React from 'react'
import { View, Text } from 'react-native'
interface DetailCardType{
title:string;
icon:React.ReactNode;
color:string;
desc:string;

}

const DetailCard = ({desc, title, icon, color}: DetailCardType) => {
  return (
    <View className='flex w-1/2 p-4 rounded bg-surface-container-lowest shadow-current'>
           <View className='p-2 bg-green-200 rounded-lg w-fit'>{icon}</View>
            <Text className='font-bold text-on_surface font-headline text-headline-sm'>{title.toUpperCase()}</Text>
            <Text className='font-bold text-on_surface-secondary font-title text-body-md'>{desc.toUpperCase()}</Text>
    </View>
  )
}

export default DetailCard