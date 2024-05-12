import { SafeAreaView, StyleSheet } from "react-native";
import React from "react";

import GlobalStyles from "../GlobalStyles";
import AddNewPost from "../components/new post/AddNewPost";

const NewPostScreen = () => {
  return (
    <SafeAreaView style={[GlobalStyles.droidSafeArea, styles.container]}>
      <AddNewPost />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});

export default NewPostScreen;
