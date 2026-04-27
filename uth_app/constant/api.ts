
import { Platform } from "react-native";
const MODE = "dev";

const BASE_API_URL =
  MODE === "dev"
    ? Platform.OS === 'web'
      ? "http://localhost:8000"
      : "http://192.168.29.164:8000"
    : "https://api.banquethall.com";
    console.log('uri',typeof window, BASE_API_URL)

const API_URL = {
  //USER AUTH
  USER_REGISTER: `${BASE_API_URL}/api/auth/register`,
  USER_LOGIN: `${BASE_API_URL}/api/auth/login`,

  //VENUE
  VENUE_REGISTER: `${BASE_API_URL}/api/venue/register`,
  MY_VENUE: `${BASE_API_URL}/api/venue/my-venues/userId`,
};

export default API_URL;
