import { View, StyleSheet, TextInput, Text } from 'react-native';
import {
  SmileyIcon,
  CameraIcon,
  AttachmentIcon,
  SendIcon,
} from '../../assets/icons';

export const TextInputChat = () => {
  return (
    <View style={styles.TextInputContainerMain}>
      <View style={styles.TextInputContainer}>
        <View style={styles.TextInputContainerLeft}>
          <SmileyIcon />
        </View>
        <TextInput
          style={styles.TextInput}
          multiline={true}
          placeholder="Message"
        />
        <View style={styles.TextInputContainerRight}>
          <View style={styles.flexRow}>
            <CameraIcon size={24} />
            <AttachmentIcon size={24} />
          </View>
        </View>
      </View>
      <View style={styles.recoredSend}>
        <SendIcon />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  TextInputContainerMain: {
    width: '100%',
    // height: 60,
    // backgroundColor: 'blue',
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    bottom: 0,

    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  recoredSend: {
    width: 40,
    height: 40,
    backgroundColor: 'green',
    borderRadius: 30,
    marginLeft: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextInput: {
    width: '100%',
    // backgroundColor: 'pink',
    flex: 1,
    paddingHorizontal: 5,
  },
  TextInputContainer: {
    backgroundColor: '#fff',
    // width: '88%',
    flex: 1,
    height: 50,
    borderRadius: 25,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,

    // elevation: 5,
  },
  TextInputContainerLeft: {
    width: 28,
    height: 28,
  },
  TextInputContainerRight: {},
  flexRow: {
    width: 60,
    height: 28,
    display: 'flex',
    // backgroundColor: 'lavender',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
