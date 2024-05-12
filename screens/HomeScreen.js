import { ScrollView, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import GlobalStyles from "../GlobalStyles";
import Header from "../components/home/Header";
import Stories from "../components/home/Stories";
import Post from "../components/home/Post";
import PostData from "../data/PostData";
import BottomTab from "../components/home/BottomTab";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={[GlobalStyles.droidSafeArea, styles.container]}>
      <Header navigation={navigation} />
      <Stories />
      <ScrollView>
        {PostData.map((post, index) => (
          <Post key={index} postData={post} />
        ))}
      </ScrollView>
      <BottomTab />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});

export default HomeScreen;
