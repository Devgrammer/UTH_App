import HomeCard from "@/components/ui/card";
import DetailCard from "@/components/ui/detailCard";
import { Calendar } from "lucide-react-native";
import { ScrollView, Text, View } from "react-native";

const HomeScreen = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        padding: 16, // Removes all padding from content area
        margin: 0,
      }}
      automaticallyAdjustContentInsets={false}
    >
      <View className="flex-1 gap-x-4"></View>
      <View className="">
        <Text className="text-4xl font-bold font-display">
          Good Morning, Abhinav
        </Text>
        <Text>Your banquet floor is ready for today orchestration.</Text>
      </View>

      <View className="flex gap-4">
        <HomeCard
          type="event"
          fig={47}
          color="text-green-800"
          title="Today's event"
          icon={<Calendar />}
        />
        <HomeCard
          type="event"
          fig={47}
          color="text-green-800"
          title="Today's event"
          icon={<Calendar />}
        />
        <HomeCard
          type="event"
          fig={47}
          color="text-green-800"
          title="Today's event"
          icon={<Calendar />}
        />
      </View>

      <View className="flex-row flex-wrap justify-between ">
        <DetailCard
          desc="Manage schedules and venue availability."
          color="text-green-800"
          title="Booking Calendar"
          icon={<Calendar />}
        />
        <DetailCard
          desc="event"
          color="text-green-800"
          title="Today's event"
          icon={<Calendar />}
        />
        <DetailCard
          desc="event"
          color="text-green-800"
          title="Today's event"
          icon={<Calendar />}
        />
        <DetailCard
          desc="event"
          color="text-green-800"
          title="Today's event"
          icon={<Calendar />}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
