import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Divider } from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const Post = ({ postData }) => {
  return (
    <View style={styles.container}>
      <Divider width={1} orientation="vertical" />
      <PostHeader postData={postData} />
      <PostImage postData={postData} />
      <PostFooter postData={postData} />
    </View>
  );
};

const PostHeader = ({ postData }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 5,
      }}
    >
      <View style={{ alignItems: "center", flexDirection: "row" }}>
        <Image source={{ uri: postData.userImage }} style={styles.image} />
        <Text style={{ color: "white", marginLeft: 5, fontWeight: "700" }}>
          {postData.username}
        </Text>
      </View>
      <Text style={{ color: "white", fontWeight: "900" }}>...</Text>
    </View>
  );
};

const PostImage = ({ postData }) => {
  return (
    <View style={{ width: "100%", height: 450 }}>
      <Image
        source={{ uri: postData.imageUrl }}
        style={{ height: "100%", resizeMode: "cover" }}
      />
    </View>
  );
};

const PostFooter = ({ postData }) => {
  return (
    <View style={{ marginHorizontal: 15, marginTop: 10 }}>
      <Icon />
      <Likes postData={postData} />
      <Caption postData={postData} />
      <CommentSection postData={postData} />
      <Comments postData={postData} />
    </View>
  );
};

const Icon = () => {
  return (
    <View
      style={{
        flexDirection: "row",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          width: "32%",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity>
          <AntDesign name="hearto" size={33} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../../assets/comment_logo.png")}
            style={{ width: 33, height: 33 }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="send" size={33} color="white" />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, alignItems: "flex-end" }}>
        <TouchableOpacity>
          <Image
            source={require("../../assets/archive_logo.png")}
            style={{ width: 33, height: 33 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Likes = ({ postData }) => {
  return (
    <View style={{ flexDirection: "row", marginTop: 4 }}>
      <Text style={{ color: "white", fontWeight: "600" }}>
        {postData.likes} likes
      </Text>
    </View>
  );
};

const Caption = ({ postData }) => {
  return (
    <View style={{ flexDirection: "row", marginTop: 5 }}>
      <Text style={{ color: "white" }}>
        <Text style={{ fontWeight: "600" }}>{postData.username}</Text>
        <Text> {postData.caption}</Text>
      </Text>
    </View>
  );
};

const CommentSection = ({ postData }) => {
  return (
    <View style={{ marginTop: 5 }}>
      {postData.comments.length > 0 && (
        <Text style={{ color: "gray" }}>
          View
          <Text>
            {postData.comments.length > 1 ? " all " : " "}
            {postData.comments.length}{" "}
            {postData.comments.length > 1 ? "comments" : "comment"}
          </Text>
        </Text>
      )}
    </View>
  );
};

const Comments = ({ postData }) => {
  return (
    <>
      {postData.comments.map((comment, index) => (
        <View key={index} style={{ flexDirection: "row", marginTop: 5 }}>
          <Text style={{ color: "white" }}>
            <Text style={{ fontWeight: "600" }}>{comment.username}</Text>
            <Text> {comment.text}</Text>
          </Text>
        </View>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },
  text: {
    color: "white",
  },
  image: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 1.5,
    borderColor: "#ff8501",
  },
});

export default Post;
