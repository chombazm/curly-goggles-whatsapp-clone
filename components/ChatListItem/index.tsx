import React from 'react'
import { View, Text, Image, Pressable } from 'react-native'
import moment from "moment";

import { styles } from './style'
import { ChatRoom } from '../../types'
import { useNavigation } from '@react-navigation/native';

type ChatListItemProps = {
  chatRoom: ChatRoom
}

export const ChatListItem: React.FC<ChatListItemProps> = ({chatRoom}) => {
  const navigate = useNavigation();
  const { id, users, lastMessage } = chatRoom;
  const user = users[0];

  const handlePress = () => {
    navigate.navigate("ChatRoom",{id, name: user.name, imageUri: user.imageUri});
  }
  return (
    <Pressable onPress={handlePress}>
        <View style={styles.container}>
            <View style={styles.lefContainer}>
              <Image source={{ uri: user.imageUri }} style={styles.avatar}/>

              <View style={styles.midContainer}>
                <Text style={styles.username}>{user.name}</Text>
                <Text
                  numberOfLines={2}
                  style={styles.lastMessage}>
                  {lastMessage.content}
                </Text>
              </View>

            </View>

            <Text style={styles.time}>
              {chatRoom.lastMessage && moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")}
            </Text>
          </View>
    </Pressable>
  )
}