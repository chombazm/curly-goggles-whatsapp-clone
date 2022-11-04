import { useRoute } from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  FlatList,
  ImageBackground,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { ChatMessage } from '../components/ChatMessage';
import { TextInputChat } from '../components/TextInputChat';
import { Chats } from '../data/Chats';

const BG = require('../assets/images/BG.png');

const chats = [
  {
    id: '1',
    content:
      'So you know you can do it even without necessarily reading everything',
    time: '10:00 pm',
  },
  {
    id: '2',
    content: 'Mwa shiner',
    time: '10:00 pm',
  },
  {
    id: '1',
    content: 'Thank you uncle Dev..😊😊',
    time: '10:00 pm',
  },
  {
    id: '1',
    content: 'Hey Uncle Dev. Are you going back to Lilayi today?',
    time: '10:00 pm',
  },
  {
    id: '2',
    content: 'Yes I will have to',
    time: '10:00 pm',
  },
  {
    id: '2',
    content: 'What time are you leaving?',
    time: '10:00 pm',
  },
  {
    id: '1',
    content: 'I may be leaving in about 30 minutes.',
    time: '10:00 pm',
  },
  {
    id: '2',
    content: 'You having class today ?',
    time: '10:00 pm',
  },
  {
    id: '1',
    content: "No No, I don't. Am going home.",
    time: '10:00 pm',
  },
  // {
  //   id: '2',
  //   content: 'hi',
  //   time: '10:00 pm',
  // },
  {
    id: '1',
    content: 'Hello, How are you?',
    time: '10:00 pm',
  },
];
export const ChatRoomScreen: React.FC = () => {
  // const route = useRoute();

  return (
    <ImageBackground source={BG} style={styles.container}>
      <ScrollView style={styles.chatsContainer}>
        {chats.map((chat, index) => (
          <ChatMessage
            key={index}
            id={chat.id}
            content={chat.content}
            time={chat.time}
          />
        ))}
      </ScrollView>
      <TextInputChat />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: '100%',
    // padding: 10,
    // paddingHorizontal1
    // padding: 10,
    paddingBottom: 40,
  },
  chatsContainer: {
    paddingHorizontal: 10,
    paddingBottom: 300,
    // backgroundColor: 'pink',
  },
});
