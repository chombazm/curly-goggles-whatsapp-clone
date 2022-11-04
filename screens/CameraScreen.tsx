import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Camera, CameraType } from 'expo-camera';

export const CameraScreen = () => {
  const [type, setType] = React.useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  // request permission
  React.useEffect(() => {
    requestPermission();
  }, []);

  console.log({ permission });
  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    width: '100%',
    height: '100%',
  },
});
