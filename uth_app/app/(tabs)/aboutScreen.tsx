import PageHeader from "@/components/ui/pageHeader";
import { Image } from "expo-image";
import { Share } from "lucide-react-native";
import { Button, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AboutScreen = () => {
  return (
    <SafeAreaView>
    <ScrollView className="p-4">
      <PageHeader title={'The loving history'} heading={'Kailash Banquet Hall'} />
      <View>
        <Image
          source={
            "https://lh3.googleusercontent.com/2vFkcT7_iXiHWV0pYZyP8WUVF6tqgQLf0z89xj5AHxNoDyXF9BP1Z0GO1hXQIeI6ZK2cLxHcK2eH7BNb=s360-w360-h360"
          }
          className="w-full rounded-lg h-44"
        />
      </View>
      <View>
        <View>
          <Text> Kailash Banquet Hall</Text>
          <Text>4.9+ (!28 reviews)</Text>
        </View>
        <TouchableOpacity>
          <Text>Share</Text>
        </TouchableOpacity>
      </View>
      <View>
        <View>
          <Text>Capacit 500+</Text>
        </View>
        <View>
          <Text>Capacit 500+</Text>
        </View>
        <View>
          <Text>Capacit 500+</Text>
        </View>
        <View>
          <Text>Capacit 500+</Text>
        </View>
      </View>
      <View>
        <Text>About the Venue</Text>
        <Text>
          Kailash Banquet Hall is Sarai Aquil ka pehla choice for all shubh
          functions: Shadi, Sangeet, Haldi, Mehndi, Tilak, corporate meetings,
          Janamdin, Mundan, Puja & Bhandara. Trusted by 100+ families for
          seamless, yaadgaar experiences. Kya aap ek aisa bharosa-ka, poora
          venue dhoondh rahe hain jo aapka function sabse khaas aur tension-free
          banaye? Hum aapka swaagat karte hain!{" "}
        </Text>
      </View>
      <View>
        <View>
          <Text>Gallery Setup</Text>
          <View>
            <Text>View All</Text>
            <Share />
          </View>
        </View>
        <View>
          <View>
            <Image
              source={
                "https://lh3.googleusercontent.com/2vFkcT7_iXiHWV0pYZyP8WUVF6tqgQLf0z89xj5AHxNoDyXF9BP1Z0GO1hXQIeI6ZK2cLxHcK2eH7BNb=s360-w360-h360"
              }
              className="w-full rounded-lg h-44"
            />
            <Text>Caption</Text>
          </View>
        </View>
      </View>
      <View>
        <Text>Ammenities</Text>
        <View>
          <Text>Facilities</Text>
        </View>
      </View>
      {/* LOCATION */}
      <View>
        <View></View>
        <View>
          <Button title="Share" />
          <Button title="Directions" />
        </View>
      </View>
      {/* CONTACT */}
      <View>
        <View>
          <Text>CALL US</Text>
          <Text>+91 9919433233</Text>
        </View>
        <View>
          <Text>MAIL US</Text>
          <Text>rastogi.abhinav8@gmail.com</Text>
        </View>
      </View>
      {/* CALL TO ACTION */}
      <View>
        <View>
          <Text>Starting at</Text>
          <Text>₹ 35000/event</Text>
        </View>
        <View>
          <Button title="Check Availability" />
        </View>
      </View>
    </ScrollView>
    </SafeAreaView>
  );
};

export default AboutScreen;
