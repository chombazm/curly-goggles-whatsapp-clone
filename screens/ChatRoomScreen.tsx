import { useRoute } from "@react-navigation/native";
import React from "react";
import { View, Text, FlatList, ImageBackground, StyleSheet } from "react-native";
import { ChatMessage } from "../components/ChatMessage";
import { Chats } from "../data/Chats";


const BG = require('../assets/images/BG.png');

export const ChatRoomScreen: React.FC = () => {
  // const route = useRoute();

  return (
    <ImageBackground source={BG} style={styles.container}>
        {/* <FlatList data={Chats.messages} renderItem={({item}) => <ChatMessage message={item} />} /> */}
    </ImageBackground>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})