import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

const Header = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.logo}
          source={require("../../assets/insta_logo.png")}
        />
      </TouchableOpacity>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={ () => navigation.push("NewPostScreen")}>
          <Feather
            name="plus-square"
            style={styles.icon}
            size={30}
            color="white"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign
            name="hearto"
            style={styles.icon}
            size={30}
            color="white"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.icon}
            source={require("../../assets/messenger_logo.png")}
          />
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadText}>11</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 20,
  },
  iconContainer: {
    flexDirection: "row",
  },
  icon: {
    width: 30,
    height: 30,
    marginLeft: 10,
    resizeMode: "contain",
  },
  unreadBadge: {
    backgroundColor: "#FF3250",
    position: "absolute",
    left: 20,
    bottom: 18,
    width: 25,
    height: 18,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
  },
  unreadText: {
    color: "white",
    fontWeight: "600",
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
  },
});

export default Header;
