import React from 'react'
import { Button, Text, TextInput, View } from "react-native";
import { Formik } from "formik";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'expo-image';
import { Link, useRouter } from 'expo-router';
const brandLogo = require('../../assets/images/logo/40.png')
const loginScreen = () => {

    const router = useRouter()
    
  return (
    <SafeAreaView className="p-4">
      <View>
        <Image
          className="flex-row w-20 h-20 mx-auto rounded-full"
          source={brandLogo}
        />
        <View>
          <Text>Utsav Tent House</Text>
          <Text>Kailash Banquet Hall</Text>
          <Text>Banquet Hall Manager Pro</Text>
        </View>
      </View>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <View>
              <Text>Email</Text>
              <TextInput
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
            </View>
            <View>
              <Text>Password</Text>
              <TextInput
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
              />
            </View>
            <Button onPress={() => router.replace('/(tabs)/homeScreen')} title="Sign in" />
          </View>
        )}
      </Formik>
      <Text>Don't have administrator account?Request Access.</Text>
      <View>
        <Text>Privacy Policy</Text>
        <Text>Terms of Service</Text>
        <Text>System Status</Text>
      </View>
      <Link href="/homeScreen/">Go to About</Link>
    </SafeAreaView>
  );
}

export default loginScreen