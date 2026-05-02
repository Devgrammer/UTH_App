import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const PageHeader = ({title, heading}:{title:string, heading:string}) => {
    return (
        <View className="">
            <Text>{title.toUpperCase()}</Text>
            <Text className="text-4xl font-bold font-display">
                {heading}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({})

export default PageHeader;
