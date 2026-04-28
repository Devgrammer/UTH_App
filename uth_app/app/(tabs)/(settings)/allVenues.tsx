import PrimaryButton from "@/components/ui/primaryButton";
import API_URL from "@/constant/api";
import { AppContext } from "@/context/appContext";
import axios from "axios";
import { Image } from "expo-image";
import { router } from "expo-router";
import { MapPin, StepBack } from "lucide-react-native";
import React, { useContext, useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
interface VenueProps {
    _id: string;
    venueName: string;
    minCapacity: number;
    maxCapacity: string;
    desc: string;
    amenities: [string];
    location: string;
    phoneNumber: string;
    googleProfile: string;
    status: string;
    userId: string;
    venueId: string;
    venueImage: string;
}
const AllVenues = () => {
    const [venues, setVenues] = useState<VenueProps[]>([]);
    const { user }: any = useContext(AppContext)
    const userId: string = JSON.parse(user)._id



    const getMyVenues = async () => {
        try {
            const response = await axios.get(
                API_URL.MY_VENUE.replace("userId", userId)
            );
            if (response.status === 200) {
                console.log("venue", response.data.data);
                setVenues(response.data.data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getMyVenues();
    }, []);
    return (
        <ScrollView className="p-4">
            <Text>Venue</Text>
            <PrimaryButton
                title="Back to Settings"
                handlePress={() => {
                    router.replace("/(tabs)/(settings)");
                }}
                addBtnClass=" justify-start "
                addTitleClass=" font-bold text-left"
            />
            {venues.map((venue, index) => {
                const {
                    venueImage,
                    venueName,
                    location,
                    status,
                    maxCapacity,
                    amenities,
                } = venue;
                return (
                    <View
                        key={`v_${index}`}
                        className="w-full p-4 bg-white shadow-xs gap-y-4 h-fit rounded-xl"
                    >
                        <Image source={venueImage} className="w-full h-44 rounded-xl" />

                        <View className="flex-row items-start justify-between">
                            <View>
                                <Text>{venueName}</Text>
                                <View className="flex-row items-center gap-1">
                                    <MapPin size={12} />
                                    <Text className="text-xs">{location}</Text>
                                </View>
                            </View>

                            <View className="p-1 px-2 rounded-full w-fit h-fit bg-emerald-200">
                                <Text className="text-xs font-semibold ">
                                    {status.toUpperCase()}
                                </Text>
                            </View>
                        </View>

                        <View className="flex-row gap-4">
                            <View>
                                <Text className="text-sm text-text-lighter">CAPACITY</Text>
                                <Text className="text-xl font-bold text-brand-light">
                                    {maxCapacity}
                                </Text>
                            </View>
                            <View>
                                <Text className="text-sm text-text-lighter">AMENITIES</Text>
                                <Text className="text-xl font-bold text-brand-light">
                                    {amenities.length}+
                                </Text>
                            </View>
                        </View>
                    </View>
                );
            })}
        </ScrollView>
    );
};

export default AllVenues;
