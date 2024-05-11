import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import userStories from '../../data/userStories'

const Stories = () => {
  return (
    <View style={{ marginBottom: 13 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {userStories.map((story, index) => (
          <View key={index} style={ {alignItems: "center"}}>
            <Image source={{ uri: story.imageUrl }} style={styles.story} />
            <Text style={{ color: "white" }}>{story.username.length > 11 ? story.username.slice(0,10).toLowerCase() + "..." : story.username.toLowerCase()}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    story: {
        width: 70,
        height: 70,
        borderRadius: 50,
        marginLeft: 6,
        borderWidth: 3,
        borderColor: "#ff8501"
        
    }

});

export default Stories