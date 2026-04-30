import { Picker } from '@react-native-picker/picker';
import { Activity, LucideIcon } from 'lucide-react-native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { cssInterop } from 'nativewind';
import { FormikErrors, FormikValues } from 'formik';
cssInterop(Picker, {
    className: 'style',
});

interface ButtonProps {

    handlePress?: () => void;
    addPickerClass?: string;
    Icon?:LucideIcon;
    size?:number;
    placeholder?:string;
    fieldName:string;

    data: {
        label: string;
        value: string;
    }[];
    initialValue: {
        label: string;
        value: string;
    };
    setFieldValue: (
        field: string,
        value: any,
        shouldValidate?: boolean
    ) => Promise<void | FormikErrors<any>>|undefined
}

const PrimaryPicker = ({ data, handlePress, addPickerClass, initialValue, setFieldValue,Icon, size, placeholder , fieldName}: ButtonProps) => {
    return (
        <View className={`flex-row rounded-lg bg-neutral-300 h-12 items-center gap-2 px-2 `}>
        {
                Icon ? <Icon size={size}/> : <Activity size={14} />
        }
        <View className='w-[95%]' >
        <Picker
            itemStyle={{fontSize:'10px'}}
            selectedValue={initialValue}
                    style={{ backgroundColor: 'none', fontSize: '5px' }}
            onValueChange={(itemValue, itemIndex) => {
                setFieldValue(fieldName, itemValue)
            }}
            className={`w-full h-16 placeholder:text-neutral-700 flex-row justify-center items-center bg-neutral-300  rounded-lg ${addPickerClass}`}
                ><Picker.Item label={placeholder} value={null} enabled={false} color="#999" style={{ fontSize: 14 }} />
            {
                        data.map((el, index) => { return (<Picker.Item key={`vs-${index}`} label={el.label} value={el.value} style={{ fontSize: 14 }} />) })
            }
        </Picker>
            </View>
        </View >
    );
}


export default PrimaryPicker;
