import { View, Text, Image } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import SignupForm from "../components/signup/SignupForm"

const SignUpScreen = () => {
  return (
    <View style={styles.conatiner}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/instagram_logo.png")}
          style={{ width: 100, height: 100 }}
        />
      </View>
      <SignupForm />
    </View>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 50,
    paddingHorizontal: 12,
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 60,
  },
});
export default SignUpScreen;
