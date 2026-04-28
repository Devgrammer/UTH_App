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

const PrimaryPicker = ({ data, handlePress, addPickerClass, initialValue, setFieldValue }: ButtonProps) => {
    return (
        <View className={`flex-row rounded-lg bg-neutral-300 h-14 items-center gap-2 px-2 `}>
        <Activity size={14}/>
        <View className='w-[95%]' >
        <Picker
            selectedValue={initialValue}
            style={{backgroundColor:'none'}}
            onValueChange={(itemValue, itemIndex) => {
                setFieldValue('status', itemValue)
            }}
            className={`w-full h-16 placeholder:text-neutral-700 flex-row justify-center items-center bg-neutral-300  rounded-lg ${addPickerClass}`}
            ><Picker.Item label={"Select Status"} value={null} enabled={false} color="#999" />
            {
                data.map((el, index) => { return (<Picker.Item key={`vs-${index}`} label={el.label} value={el.value} />) })
            }
        </Picker>
            </View>
        </View >
    );
}


export default PrimaryPicker;
