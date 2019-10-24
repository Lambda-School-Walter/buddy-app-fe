import { AsyncStorage } from "react-native";

export const storeToken = async value => {
  try {
    await AsyncStorage.setItem("@token", value);
    console.log(AsyncStorage.getItem("@token"));
  } catch (e) {
    console.log(e);
  }
}; // Stores the token into AsyncStorage

export const getToken = async () => {
  try {
    const value = await AsyncStorage.getItem("@token");
    if (value !== null) {
      return value
    }
  } catch (e) {}
}; //This is how you retrieve the token

export const onSignOut = () => AsyncStorage.removeItem("@token"); //use this function to sign out and delete token

export const isSignedIn = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem("@token")
      .then(res => {
        if (res !== null) {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch(err => reject(err));
  });
}; //use this function to determine if the token exists