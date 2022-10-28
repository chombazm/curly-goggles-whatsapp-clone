import { View, Text } from 'react-native';
import React from 'react';
// import { Message } from '../../types';
import moment from 'moment';
import styles from './style';

type ChatMessageProps = {
  id: string;
  content: string;
  time: string;
};

export const ChatMessage: React.FC<ChatMessageProps> = ({
  id,
  content,
  time,
}) => {
  return (
    <View
      style={[
        styles.chatBubbleContainer,

        id === '1'
          ? { alignSelf: 'flex-end', backgroundColor: '#deffc8' }
          : null,
      ]}>
      <Text style={styles.chatBubbleText}>{content}</Text>
      <View style={styles.timeHolder}>
        <Text style={styles.time}>{time}</Text>
      </View>
    </View>
  );
};
