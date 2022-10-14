import { View, Text , StyleSheet} from 'react-native'
import React from 'react'

export const StatusScreen = () => {
  return (
    <View style={styles.container}>
      <Text>StatusScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  }
})
