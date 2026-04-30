import { LucideIcon, LucideProps, Mail, } from 'lucide-react-native'
import React from 'react'
import { KeyboardAvoidingView, Platform, Text, TextInput, View } from "react-native";

interface TextFieldProps {
  fieldName: string;
  placeholder?: string | undefined;
  handleChange: (text: string) => any;
  secure?: boolean;
  value?: string;
  handleBlur: (text: string) => any;
  Icon?: LucideIcon;
  multiline?: boolean;
  keyboardType?: "default" | "numeric" | "email-address" | "phone-pad" | "url";
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
  addFieldClass?:string;
   numberofLines?:number;
  textAlignVertical: "auto" | "top" | "bottom" | "center" | 'undefined'
}

const PrimaryTextField = ({ fieldName, placeholder, handleChange, secure, value, handleBlur, Icon, multiline, autoCapitalize, keyboardType, addFieldClass, numberofLines,textAlignVertical }: TextFieldProps) => {
  const keyboardVerticalOffset = Platform.OS === "android" ? 64 : 0;
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={keyboardVerticalOffset}
    >
      <View className={`flex-row items-center w-full h-fit gap-4 px-2 rounded-lg bg-neutral-300 text-on_surface`}>
        {Icon && <View className="text-sm">{<Icon size={16} />}</View>}
        <TextInput
          className={`w-full h-12 outline-none ${addFieldClass}`}
          placeholder={placeholder}
          onChangeText={handleChange(fieldName)}
          onBlur={handleBlur(fieldName)}
          secureTextEntry={secure ? true : false}
          value={value}
          multiline={multiline ? multiline : false}
          autoCapitalize={autoCapitalize}
          keyboardType={keyboardType}
          numberOfLines={numberofLines}
          textAlignVertical={textAlignVertical}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

export default PrimaryTextField