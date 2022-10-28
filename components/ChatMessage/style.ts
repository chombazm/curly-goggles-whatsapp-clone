import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  chatBubbleText: {
    fontSize: 16,
  },
  timeHolder: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  time: {
    fontSize: 12,
    color: '#888',
  },
  chatBubbleContainer: {
    marginVertical: 10,
    maxWidth: '100%',
    minWidth: '30%',
    alignSelf: 'flex-start',
    paddingHorizontal: 15,
    paddingBottom: 20,
    paddingTop: 10,
    backgroundColor: 'white',
    display: 'flex',
    elevation: 5,
    position: 'relative',
    shadowColor: '#666',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // borrderRadius: 30,
    flexDirection: 'row',
    borderRadius: 10,
  },
});

export default styles;
