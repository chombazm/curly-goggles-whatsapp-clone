import { useRoute } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";


export const ChatRoomScreen: React.FC = () => {
  const route = useRoute();

  console.warn(route.params, "checked params");
  return (
    <View>
      <Text>Chat Room Screen</Text>
    </View>
  )
}