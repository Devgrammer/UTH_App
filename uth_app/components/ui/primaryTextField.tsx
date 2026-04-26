import { LucideIcon, LucideProps, Mail, } from 'lucide-react-native'
import React from 'react'
import { KeyboardAvoidingView, Platform, Text, TextInput, View } from "react-native";

interface TextFieldProps {
  fieldName: string;
  placeholder?: string;
  handleChange: (text: string) => any;
  secure?: boolean;
  value?: string;
  handleBlur: (text: string) => any;
  Icon?: LucideIcon;
  multiline?: boolean;
  keyboardType?: "default" | "numeric" | "email-address" | "phone-pad" | "url";
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
}

const PrimaryTextField = ({ fieldName, placeholder, handleChange, secure, value, handleBlur, Icon,multiline, autoCapitalize,keyboardType }: TextFieldProps) => {
  const keyboardVerticalOffset = Platform.OS === "android" ? 64 : 0;
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={keyboardVerticalOffset}
    >
      <View className="flex-row items-center w-full h-12 gap-4 px-2 rounded-lg bg-neutral-300 text-on_surface">
        {Icon && <View className="text-sm">{<Icon size={16} />}</View>}
        <TextInput
          className="w-full h-full outline-none"
          placeholder={placeholder}
          onChangeText={handleChange(fieldName)}
          onBlur={handleBlur(fieldName)}
          secureTextEntry={secure ? true : false}
          value={value}
          multiline={multiline ? multiline : false}
          autoCapitalize={autoCapitalize}
          keyboardType={keyboardType}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

export default PrimaryTextField