import { Stack } from 'expo-router';



const RootLayout= () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="addInventoryItemScreen" />
    </Stack>
  );
}

export default RootLayout;