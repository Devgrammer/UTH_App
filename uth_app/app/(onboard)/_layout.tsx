import { Stack } from "expo-router"

 const RootLayout =()=>{
    return(
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="onboardingScreen1" />
      <Stack.Screen name="onboardingScreen2" />
      <Stack.Screen name="onboardingScreen3" />

    </Stack>
    )
 }

 export default RootLayout;