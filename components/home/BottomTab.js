import React, { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from '@expo/vector-icons';
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

import userStories from "../../data/userStories";
import { Divider } from "react-native-elements";

function BottomTab() {
  const [activeTab, setActiveTab] = useState("home");

  const handleTabPress = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <View>
      <Divider width={1} orientation="vertical" />
      <View style={styles.container}>
        <TouchableOpacity onPress={() => handleTabPress("home")}>
          <Entypo
            name="home"
            size={30}
            color={activeTab === "home" ? "white" : "gray"}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTabPress("search")}>
          <FontAwesome
            name="search"
            size={30}
            color={activeTab === "search" ? "white" : "gray"}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTabPress("reel")}>
          <Image
            source={
              activeTab === "reel"
                ? require("../../assets/reel_active.png")
                : require("../../assets/reel_inactive.png")
            }
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTabPress("shopping-bag")}>
          <Feather
            name="shopping-bag"
            size={30}
            color={activeTab === "shopping-bag" ? "white" : "gray"}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTabPress("profile")}>
          <Image
            source={{
              uri:
                activeTab === "profile"
                  ? userStories[0].imageUrl
                  : userStories[0].imageUrl,
            }}
            style={styles.story}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 50,
    paddingTop: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
  story: {
    width: 30,
    height: 30,
    borderRadius: 30,
  },
});

export default BottomTab;
