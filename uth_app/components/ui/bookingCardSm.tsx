import { View, Text } from "react-native";

interface BookingCardSMPropType {
  eventType: string;
  paymentStatus: string;
  eventHeading: string;
  eventLocation: string;
  eventGuest: number;
  eventService: string;
  eventDate: Date;
}

const BookingCardSm = ({
  eventType,
  paymentStatus,
  eventHeading,
  eventLocation,
  eventGuest,
  eventService,
  eventDate,
}: BookingCardSMPropType) => {
  return (
    <View className="flex-row items-center w-full gap-4 p-2 rounded h-36 shadow-ambient bg-surface-container-lowest">
      <View>
        <Text>{new Date(eventDate).toLocaleTimeString()}</Text>
        <Text className="">{eventType.toUpperCase()}</Text>
      </View>
      <View className="flex-row items-center justify-between w-fit ">
        <View className="flex">
          <Text>{eventHeading.toUpperCase()}</Text>
          <View className="flex-row">
            <Text>{eventGuest}</Text>
            <Text>{eventLocation.toUpperCase()}</Text>
          </View>
          <View className="">
            <Text>{eventService.toUpperCase()}</Text>
          </View>
        </View>
        <View>
          <Text>{paymentStatus.toUpperCase()}</Text>
        </View>
      </View>
    </View>
  );
};

export default BookingCardSm;
