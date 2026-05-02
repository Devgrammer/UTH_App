import BookingCardLg from "@/components/ui/bookingCardLg";
import BookingCardSm from "@/components/ui/bookingCardSm";
import FloatingButton from "@/components/ui/floatingActionBtn";
import PageHeader from "@/components/ui/pageHeader";
import { router } from "expo-router";
import { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TextInputComponent,
  TouchableOpacity,
  View,
} from "react-native";
import { Calendar } from "react-native-calendar-ui";
import { SafeAreaView } from "react-native-safe-area-context";

const BookingScreen = () => {
  const [view, setView] = useState("calendar");

  const handleFloat=() =>{ router.push('/booking/addBookingScreen')}
  return (
    <SafeAreaView className="relative flex-1" >
      <ScrollView className="flex min-h-screen " style={{ padding: 16 }}>
        <PageHeader title={'Event orchestration'} heading={'Booking Calendar'}/>
        <View className="flex-row w-1/2 gap-2 px-2 py-1 my-4 rounded-md bg-surface-container-high">
          <TouchableOpacity
            className="px-1 rounded-sm text-primary active:bg-surface-container-lowest w-fit"
            onPress={() => setView("calendar")}
          >
            <Text> Calendar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="px-1 rounded-sm text-primary active:bg-surface-container-lowest w-fit"
            onPress={() => setView("list")}
          >
            <Text> List view</Text>
          </TouchableOpacity>
        </View>
        <View>
          {/* CALENDAR VIEW */}
          {view === "calendar" && (
            <View className="">
              <Calendar
                style={{ height: 320 }}
                onDateSelect={(date) => console.log("Selected:", date)}
                colors={{
                  primary: "#007AFF",
                  selectedText: "#FFFFFF",
                }}
              />
              <View className="flex-row items-center justify-between w-full">
                <Text>Event Booking on Apr 12</Text>
                <View>
                  <Text>2 Events</Text>
                </View>
              </View>
              <ScrollView className="gap-4">
                <BookingCardSm
                  eventType="wedding"
                  paymentStatus="paid"
                  eventDate={new Date()}
                  eventHeading={"Veer Di Weddding"}
                  eventGuest={250}
                  eventLocation="Both Hall"
                  eventService="With Diesel"
                />
                <BookingCardSm
                  eventType="wedding"
                  paymentStatus="paid"
                  eventDate={new Date()}
                  eventHeading={"Veer Di Weddding"}
                  eventGuest={250}
                  eventLocation="Both Hall"
                  eventService="With Diesel"
                />
                <BookingCardSm
                  eventType="wedding"
                  paymentStatus="paid"
                  eventDate={new Date()}
                  eventHeading={"Veer Di Weddding"}
                  eventGuest={250}
                  eventLocation="Both Hall"
                  eventService="With Diesel"
                />
              </ScrollView>
            </View>
          )}

          {/* LIST VIEW */}
          {view === "list" && (
            <View>
              <TextInput
                className="h-12 p-2 rounded-lg bg-surface-container"
                placeholder="Search by client or event"
              />
              <View className="flex-row gap-4 my-2">
                <TouchableOpacity className="flex items-center px-4 py-1 rounded-full w-fit bg-surface-container-high active:text-surface-container-lowest active:bg-primary ">
                  <Text>All Booking</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex items-center px-4 py-1 rounded-full w-fit bg-surface-container-high active:text-surface-container-lowest active:bg-primary ">
                  <Text>Confirm</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex items-center px-4 py-1 rounded-full w-fit bg-surface-container-high active:text-surface-container-lowest active:bg-primary ">
                  <Text>Completed</Text>
                </TouchableOpacity>
              </View>
              <ScrollView>
                <BookingCardLg
                  eventType="wedding"
                  paymentStatus="paid"
                  eventDate={new Date()}
                  eventHeading={"Veer Di Weddding"}
                  eventGuest={250}
                  eventLocation="Both Hall"
                  eventService="With Diesel"
                />
              </ScrollView>
            </View>
          )}
        </View>
      </ScrollView>
      <FloatingButton onPress={handleFloat} />
    </SafeAreaView>
  );
};

export default BookingScreen;
