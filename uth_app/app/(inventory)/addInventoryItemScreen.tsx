import React from 'react'
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
 import * as ImagePicker from "expo-image-picker";
import { Picker } from '@react-native-picker/picker';

const AddInventoryItem = () => {
 

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true, // Enable cropping
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result.assets[0].uri); // Access selected image URI
    }
  };

  return (
    <ScrollView>
      <View>
        <Text>MEDIA ASSET</Text>
        <TouchableOpacity onPress={() => pickImage()}>
          <Text>Upload</Text>
        </TouchableOpacity>
      </View>
      {/* BASIC INFO */}
      <View>
        <Text>BASIC INFORMATION</Text>
        <View>
          <Text>Item Name</Text>
          <TextInput />
        </View>
        <View>
          <Text>Category</Text>
          <Picker>
            <Picker.Item label="Furniture" value="furniture" />
          </Picker>
        </View>
      </View>
      {/* PRICING */}
      <View>
        <Text>PRICING & INVENTORY</Text>
        <View>
          <Text>Daily Rental</Text>
          <TextInput />
        </View>
        <View>
          <Text>Total Stock</Text>
          <TextInput />
        </View>
      </View>
      {/* STATUS */}
      <View>
        <Text>INITIAL STATUS</Text>
        <TouchableOpacity>Available</TouchableOpacity>
        <TouchableOpacity>Maintenance</TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Text>Complete item Inventory</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default AddInventoryItem