import RentalCard from '@/components/ui/rentalCard';
import { ScrollView, Text, TextInput,  TouchableOpacity, View } from 'react-native'

const RentalScreen = () => {
  return (
    <View className="gap-4 p-4">
      <View className="w-full p-2 rounded-lg bg-surface-container-lowest h-fit">
        <View className="flex-row items-center justify-between">
          <Text>INVENTORY FILTERS</Text>
          <Text>124 Items Available</Text>
        </View>
        <TextInput
          className="h-12 p-2 rounded-lg bg-surface-container"
          placeholder="Search by client or event"
        />
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          className="flex-row my-2 space-x-6"
        >
          <TouchableOpacity className="flex items-center px-4 py-1 rounded-full w-fit bg-surface-container-high active:text-surface-container-lowest active:bg-primary ">
            <Text>All</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex items-center px-4 py-1 rounded-full w-fit bg-surface-container-high active:text-surface-container-lowest active:bg-primary ">
            <Text>Utensils</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex items-center px-4 py-1 rounded-full w-fit bg-surface-container-high active:text-surface-container-lowest active:bg-primary ">
            <Text>Tent</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex items-center px-4 py-1 rounded-full w-fit bg-surface-container-high active:text-surface-container-lowest active:bg-primary ">
            <Text>Bed</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex items-center px-4 py-1 rounded-full w-fit bg-surface-container-high active:text-surface-container-lowest active:bg-primary ">
            <Text>Bedsheets</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex items-center px-4 py-1 rounded-full w-fit bg-surface-container-high active:text-surface-container-lowest active:bg-primary ">
            <Text>Furnitre</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <ScrollView className="">
        <RentalCard
          rentalItem=""
          rentalItemName="Chair"
          rentalItemCategory="furnitre"
          rentalItemRentPerDay={24}
        />
        <RentalCard
          rentalItem=""
          rentalItemName="Chair"
          rentalItemCategory="furnitre"
          rentalItemRentPerDay={24}
        />
        <RentalCard
          rentalItem=""
          rentalItemName="Chair"
          rentalItemCategory="furnitre"
          rentalItemRentPerDay={24}
        />
      </ScrollView>
    </View>
  );
}

export default RentalScreen