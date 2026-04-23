import React, { useEffect, useState } from "react";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { AppContext } from "@/context/appContext";
import "../global.css";
import * as SecureStore from "expo-secure-store";
import { Text, TextInput } from "react-native";
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

interface AuthState {
  token: string | null;
  authenticated: boolean;
}

const RootLayout = () => {

  const [user, setUser] = useState({});
  const [error, setError] = useState([]);
  const [isLoading,setIsLoading]=useState(false)
  const [authState, setAuthState] = useState<AuthState>({
    token: null,
    authenticated: false,
  });

  useEffect(() => {
    async function getToken(key: string) {
      let token = await SecureStore.getItemAsync(key);
      if (token) {
        setAuthState({
          token: token,
          authenticated: true,
        });
      }
    }
    getToken("token");
  }, []);

  const [fontsLoaded] = useFonts({
    // The KEYS are what you'll reference
    "Inter-Regular": Inter_400Regular,
    "Inter-Medium": Inter_500Medium,
    "Inter-Bold": Inter_700Bold,
  });
  (Text as any).defaultProps = {
    ...(Text as any).defaultProps,
    style: [{ fontFamily: "Inter-Regular" }, (Text as any).defaultProps?.style],
  };
  (TextInput as any).defaultProps = {
    ...(TextInput as any).defaultProps,
    style: [
      { fontFamily: "Inter-Regular" },
      (TextInput as any).defaultProps?.style,
    ],
  };

  async function setToken(key: string, value: string) {
    await SecureStore.setItemAsync(key, value);
  }
  async function getToken(key: string) {
    let result = await SecureStore.getItemAsync(key);
    return result;
  }

  const value = {
    user,
    setUser,
    error,
    setError,
    isLoading,
    setIsLoading,
    getToken,
    setToken,
    authState
  };

  return (
    <AppContext.Provider value={value}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(onboard)" />
        <Stack.Screen name="(auth)" />
        <Stack.Protected guard={authState.authenticated}>
          <Stack.Screen name="(tabs)" />
        </Stack.Protected>
      </Stack>
    </AppContext.Provider>
  );
};

export default RootLayout;
