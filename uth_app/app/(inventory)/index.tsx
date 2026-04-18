import FloatingButton from "@/components/ui/floatingActionBtn";
import { Image } from "expo-image"
import { useRouter } from "expo-router";
import { Delete, Pen } from "lucide-react-native";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native"

const product = require('../../assets/images/logo/57.png')
const Index = () => {
    const router  = useRouter();
const handleAction=()=>{
router.replace('/(inventory)/addInventoryItemScreen')
}
  return (
    <ScrollView>
      <View>
        <TextInput />
      </View>
      <View>
        <View>
          <View>
            <Image source={product} />
          </View>
          <View>
            <View>
              <Text>FURNITURE | IN STOCK</Text>
            </View>
            <Text>Lounge Chair</Text>
            <Text>50/day</Text>
          </View>
          <View>
            <TouchableOpacity>
              <Pen />
            </TouchableOpacity>
            <TouchableOpacity>
              <Delete />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <FloatingButton onPress={handleAction} />
    </ScrollView>
  );
}

export default Index