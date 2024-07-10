import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  backgroundImage: {
    position: 'absolute',
    width: width,
    height: height,
    resizeMode: 'cover',
  },
  keyboardAvoidingView: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  heroImage: {
    width: 220,
    resizeMode: "contain",
    marginTop: 10,
  },
  formContainer: {
    width: "92%",
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 20,
    alignItems: "center",
    marginBottom: 10,
  },
  heading: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
    color: "#333",
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#f9a825",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  toggleText: {
    color: "#f9a825",
    fontSize: 14,
    textAlign: "center",
  },
});
