import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    width: width,
    height: height,
    resizeMode: 'cover',
},
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'left',
  },
  mainHeading: {
    textAlign:'left',
    fontSize: 64,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  subHeading: {
    fontSize: 16,
    color: '#5D5D5D',
    marginBottom: 50,
  },
  loader: {
    alignSelf: 'center',
    marginBottom: 20,
  },
  footerText: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: 20,
    textAlign: 'center',
    color: '#000',
    fontSize: 12,
  },
});
export default styles;