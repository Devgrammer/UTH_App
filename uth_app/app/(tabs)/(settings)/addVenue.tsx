import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Formik } from "formik";
import PrimaryTextField from '@/components/ui/primaryTextField';
import * as ImagePicker from 'expo-image-picker';
import { Image } from 'expo-image';
import { Droplets, House, Link2, LucideIcon, Mail, MapPin, NotebookTabs, ParkingCircle, Phone, Presentation, User, Users, UsersRound, Utensils, Wifi, Wind } from 'lucide-react-native';
import PrimaryButton from '@/components/ui/primaryButton';
import { router } from 'expo-router';
interface VenueField {
    id: number;
    label: string;
    fieldName: string;
    placeholder: string;
    multiline: boolean;
    icon: LucideIcon;
    keyboardType: "default" | "numeric" | "email-address" | "phone-pad" | "url";
    autoCapitalize: "none" | "sentences" | "words" | "characters";
}

interface AmenityField {
    id: number;
    fieldName: string;
    label: string;
    icon: LucideIcon;
    category:
    | "comfort"
    | "parking"
    | "food"
    | "room"
    | "technology"
    | "recreation";
}

interface VenueFormConfig {
    basicDetail: VenueField[];
    amenities: AmenityField[];
}

const AddVenue = () => {

    const [image, setImage] = useState<string | null>(null);



    const venueFormField: VenueFormConfig = {
        basicDetail: [
            {
                id: 1,
                label: "Venue Name",
                fieldName: "venueName",
                placeholder: "Enter venue name",
                multiline: false,
                icon: House,
                keyboardType: "default",
                autoCapitalize: "words",
            },
            {
                id: 2,
                label: "Minimum Capacity",
                fieldName: "minCapacity",
                placeholder: "0",
                multiline: false,
                icon: User,
                keyboardType: "numeric",
                autoCapitalize: "none",
            },
            {
                id: 3,
                label: "Maximum Capacity",
                fieldName: "maxCapacity",
                placeholder: "0",
                multiline: false,
                icon: UsersRound,
                keyboardType: "numeric",
                autoCapitalize: "none",
            },
            {
                id: 4,
                label: "Description",
                fieldName: "desc",
                placeholder: "Enter venue description",
                multiline: true,
                icon: NotebookTabs,
                keyboardType: "default",
                autoCapitalize: "sentences",
            },
            {
                id: 5,
                label: "Phone Number",
                fieldName: "phoneNumber",
                placeholder: "Enter phone number",
                multiline: false,
                icon: Phone,
                keyboardType: "phone-pad",
                autoCapitalize: "none",
            },
            {
                id: 6,
                label: "Email Address",
                fieldName: "email",
                placeholder: "Enter email address",
                multiline: false,
                icon: Mail,
                keyboardType: "email-address",
                autoCapitalize: "none",
            },
            {
                id: 7,
                label: "Address",
                fieldName: "address",
                placeholder: "Enter venue address",
                multiline: true,
                icon: MapPin,
                keyboardType: "default",
                autoCapitalize: "words",
            },
            {
                id: 8,
                label: "Google Business Profile",
                fieldName: "googleBusinessProfile",
                placeholder: "Enter Google Business Profile URL",
                multiline: false,
                icon: Link2,
                keyboardType: "url",
                autoCapitalize: "none",
            },
        ],
        amenities: [
            {
                id: 1,
                fieldName: "airConditioned",
                label: "Air Conditioned",
                icon: Wind,
                category: "comfort",
            },
            {
                id: 2,
                fieldName: "valetParking",
                label: "Valet Parking",
                icon: ParkingCircle,
                category: "parking",
            },
            {
                id: 3,
                fieldName: "inhouseCatering",
                label: "In-house Catering",
                icon: Utensils,
                category: "food",
            },
            {
                id: 4,
                fieldName: "brideSuite",
                label: "Bride Suite",
                icon: Users,
                category: "room",
            },
            {
                id: 5,
                fieldName: "highSpeedWifi",
                label: "High Speed WiFi",
                icon: Wifi,
                category: "technology",
            },
            {
                id: 6,
                fieldName: "audioVisual",
                label: "Audio-Visual",
                icon: Presentation,
                category: "technology",
            },
            {
                id: 7,
                fieldName: "swimmingPool",
                label: "Swimming Pool",
                icon: Droplets,
                category: "recreation",
            },
        ],
    };

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library.
        // Manually request permissions for videos on iOS when `allowsEditing` is set to `false`
        // and `videoExportPreset` is `'Passthrough'` (the default), ideally before launching the picker
        // so the app users aren't surprised by a system dialog after picking a video.
        // See "Invoke permissions for videos" sub section for more details.
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (!permissionResult.granted) {
            Alert.alert('Permission required', 'Permission to access the media library is required.');
            return;
        }

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images', 'videos'],
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };


    return (
      <SafeAreaView className="px-4">
        <PrimaryButton
          title="Back to Settings"
          handlePress={() => {
            router.replace("/(tabs)/(settings)");
          }}
          addBtnClass=" justify-start "
          addTitleClass=" font-bold text-left"
        />
        <ScrollView>
          <View>
            <Text>New Estate Venue</Text>
            <Text>
              Complete the details below to resister your premium venuein the
              directory
            </Text>
          </View>
          <View>
            <Formik
              initialValues={{
                venueName: "",
                minCapacity: 0,
                maxCapacity: 0,
                desc: "",
                amenities: [],
                location: "",
                phoneNumber: "",
                googleProfile: "",
              }}
              onSubmit={(values) => console.log(values)}
            >
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                setFieldValue,
              }) => {
                const handlePress = (fieldName: string) => {
                  const amenities = values.amenities;
                  if (!amenities.includes(fieldName)) {
                    setFieldValue("amenities", [...amenities, fieldName]);
                  } else {
                    const updatedAmenities = amenities.filter(
                      (el) => el !== fieldName
                    );
                    setFieldValue("amenities", updatedAmenities);
                  }
                };
                return (
                  <View className="gap-y-8">
                    {/* MEDIA */}
                    <View>
                      <Text>Media</Text>
                      <View>
                        <TouchableOpacity
                          className="items-center justify-center w-full h-24 border border-dashed rounded-lg border-neutral-600 bg-neutral-300"
                          onPress={pickImage}
                        >
                          <Text>Pick an image from camera roll</Text>
                        </TouchableOpacity>
                        {image && <Image source={{ uri: image }} />}
                      </View>
                    </View>
                    {/* BASIC DETAILS */}
                    <View className="gap-y-4">
                      <Text>BASIC DETAIL</Text>
                      {venueFormField.basicDetail.map((el, index) => {
                        const {
                          label,
                          fieldName,
                          multiline,
                          id,
                          placeholder,
                          icon,
                          autoCapitalize,
                          keyboardType,
                        } = el;
                        return (
                          <View key={`BD-${index}_${id}`}>
                            <Text>{label}</Text>
                            <PrimaryTextField
                              Icon={icon}
                              fieldName={fieldName}
                              handleChange={handleChange}
                              placeholder={placeholder}
                              secure={false}
                              value={(values as any)[fieldName]}
                              handleBlur={handleBlur}
                              multiline={multiline}
                              autoCapitalize={autoCapitalize}
                              keyboardType={keyboardType}
                            />
                          </View>
                        );
                      })}
                    </View>
                    {/* AMENITIES */}
                    <View className="gap-y-8">
                      <Text>Amenities</Text>
                      <View className="flex-row flex-wrap gap-4 mx-auto">
                        {venueFormField.amenities.map((el, index) => {
                          const { label, fieldName, id } = el;
                          return (
                            <>
                              <TouchableOpacity
                                key={`AM-${index}_${id}`}
                                className={`items-center justify-center w-[47%] h-32  rounded-lg ${values.amenities.includes(fieldName) ? "bg-emerald-200 border-2 border-emerald-800" : "bg-white"}`}
                                onPress={() => handlePress(fieldName)}
                              >
                                <View className="">
                                  <View className="mx-auto">
                                    <el.icon size={24} />
                                  </View>
                                  <Text className="font-bold text-brand font-heading">
                                    {label.toUpperCase()}
                                  </Text>
                                </View>
                              </TouchableOpacity>
                            </>
                          );
                        })}
                      </View>
                    </View>
                    <PrimaryButton
                      handlePress={handleSubmit}
                      title="Add Venue"
                    />
                  </View>
                );
              }}
            </Formik>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
}



export default AddVenue;
