import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from 'react'

import GlobalStyles from '../GlobalStyles';
import Header from "../components/home/Header";
import Stories from "../components/home/Stories";

const HomeScreen = () => {
  return (
    <SafeAreaView style={[GlobalStyles.droidSafeArea, styles.container]}>
          <Header />
          <Stories />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    }
})

export default HomeScreen