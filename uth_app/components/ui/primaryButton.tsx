import { LucideIcon } from 'lucide-react-native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

interface ButtonProps {
  Icon?: LucideIcon;
  title?: string;
  handlePress?: () => void;
  addBtnClass?: string;
  addTitleClass?: string;
}

const PrimaryButton = ({ Icon, title, handlePress, addBtnClass, addTitleClass }: ButtonProps) => {
  return (
    <TouchableOpacity onPress={handlePress} className={`w-full h-14 flex-row justify-center items-center bg-brand-dark active:bg-brand rounded-lg ${addBtnClass}`}>
      {Icon && <View>{<Icon />}</View>}
      <Text className={`text-white text-lg  ${addTitleClass}`}>{title}</Text>
    </TouchableOpacity>
  );
}


export default PrimaryButton;
