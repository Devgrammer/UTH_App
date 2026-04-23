import React, { useContext } from "react";
import { Text, View } from "react-native";
import { Formik } from "formik";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { AppContext } from "@/context/appContext";
import axios from "axios";
import API_URL from "@/constant/api";
import { Lock, Mail } from "lucide-react-native";
import PrimaryButton from "@/components/ui/primaryButton";
import PrimaryTextField from "@/components/ui/primaryTextField";
const brandLogo = require("../../assets/images/logo/80.png");
const LoginScreen = () => {
  const { setToken, setError, isLoading, setIsLoading } = useContext(AppContext);

  const handleSubmit = async (values: { email: string; password: string }) => {
    try {
      setIsLoading(true)
      const response = await axios.post(API_URL.USER_LOGIN, {
        email: values.email,
        password: values.password,
      });
      if (response?.status === 200) {
        setToken("token", response.data.token);
        setIsLoading(false)
        router.replace("/(tabs)/homeScreen");
      }
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false)
    }
  };

  const router = useRouter();

  return (
    <SafeAreaView className="justify-between flex-1 p-4">
      <View className="gap-y-4">
        <Image
          className="flex-row w-20 h-20 mx-auto rounded-full"
          source={brandLogo}
        />
        <View className="items-center ">
          <Text className="tracking-[8] text-md font-bold">VENUE PRAVAAH</Text>
          <Text className="tracking-[1] text-xs text-text-light mb-2">
            MANAGE THE FLOW OF YOUR VENUE
          </Text>
          <View className="translate-y-[40] items-center">
            <Text className="text-xl tracking-[4] text-brand font-bold font-heading">
              {" "}
              KAILASH BANQUET HALL
            </Text>
            <Text className="text-md tracking-[8]  text-brand font-thin font-heading">
              UTSAV TENT HOUSE
            </Text>
          </View>
        </View>
      </View>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View className="px-6 gap-y-6">
            <View>
              <Text>Email</Text>
              <PrimaryTextField
                Icon={Mail}
                fieldName={"email"}
                handleChange={handleChange}
                placeholder={"Email"}
                secure={false}
                value={values.email}
                handleBlur={handleBlur}
              />
            </View>
            <View>
              <Text>Password</Text>
              <PrimaryTextField
                Icon={Lock}
                fieldName={"password"}
                handleChange={handleChange}
                placeholder={"Password"}
                secure={true}
                value={values.password}
                handleBlur={handleBlur}
              />
            </View>
            <PrimaryButton title="Login" handlePress={handleSubmit} />
          </View>
        )}
      </Formik>
      <View className="gap-y-4">
        <Text className="text-xs text-center text-text-lighter">
          Don't have administrator account?Request Access.
        </Text>
        <View className="flex-row justify-between">
          <Text className="text-xs text-text-lighter">Privacy Policy</Text>
          <Text className="text-xs text-text-lighter">Terms of Service</Text>
          <Text className="text-xs text-text-lighter">System Status</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
