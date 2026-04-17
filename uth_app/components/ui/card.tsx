import React from 'react'
import { View, Text } from 'react-native'
interface HomeCardType{
title:string;
fig:number;
icon:React.ReactNode;
color:string;
type:string;

}

const HomeCard = ({type, fig, title, icon, color}: HomeCardType) => {
  return (
    <View className='flex max-w-full p-4 rounded bg-surface-container-lowest shadow-current'>
        <View className='flex-row items-center justify-between'>
            <Text className='font-bold text-on_surface-variant font-title text-title-lg'>{title.toUpperCase()}</Text>
           <View className='p-2 bg-green-200 rounded-lg'>{icon}</View>
        </View>
        <View className='flex-row gap-1'>
            <Text className='text-display-md'>{fig}</Text>
            <Text className={color}>{type.toUpperCase()}</Text>
        </View>
    </View>
  )
}

export default HomeCard