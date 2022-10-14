import { View, Text } from 'react-native'
import React from 'react'
import { Message } from '../../types'
import moment from 'moment';
import styles from './style';

type ChatMessageProps = {
  message: Message
}

export const ChatMessage: React.FC<ChatMessageProps> = ( { message } ) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{message.user.name}</Text>
      <Text style={styles.message}>{message.content}</Text>
      <Text style={styles.time}>{moment(message.createdAt).fromNow()}</Text>
    </View>
  )
}