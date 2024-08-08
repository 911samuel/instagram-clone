import { ScrollView, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  collectionGroup,
  getFirestore,
  onSnapshot,
  snapshotEqual,
} from "firebase/firestore";


import GlobalStyles from "../GlobalStyles";
import Header from "../components/home/Header";
import Stories from "../components/home/Stories";
import Post from "../components/home/Post";
import PostData from "../data/PostData";
import BottomTab from "../components/home/BottomTab";

const HomeScreen = ({ navigation }) => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const postsRef = collectionGroup(db, "posts");

    const unsubscribe = onSnapshot(
      postsRef,
      (snapshot) => {
        const postList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPosts(postList);
      },
      (error) => {
        console.error("Error fetching posts: ", error);
      }
    );

    return () => unsubscribe(); 
  }, []);

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
