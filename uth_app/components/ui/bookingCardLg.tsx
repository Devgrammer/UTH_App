import { View,Text } from 'react-native'
interface BookingCardLGPropType {
  eventType:string;
  paymentStatus:string;
  eventHeading:string;
  eventLocation:string;
  eventGuest:number;
  eventService:string;
  eventDate:Date;
}


const BookingCardLg = ({eventType, paymentStatus, eventHeading, eventLocation, eventGuest, eventService, eventDate}:BookingCardLGPropType) => {
  return (
    <View className="w-full p-2 rounded h-36 shadow-ambient bg-surface-container-lowest">
      <View className="flex-row justify-between w-full">
        <Text className="">{eventType.toUpperCase()}</Text>
        <View>
          <Text>{paymentStatus.toUpperCase()}</Text>
        </View>
      </View>
      <Text>{eventHeading.toUpperCase()}</Text>
      <View className="flex-row">
        <Text>{new Date(eventDate).toLocaleDateString()}</Text>
        <Text>{eventGuest}</Text>
      </View>
      <View className="flex-row">
        <Text>{eventLocation.toUpperCase()}</Text>
        <Text>{eventService.toUpperCase()}</Text>
      </View>
    </View>
  );
}

export default BookingCardLg