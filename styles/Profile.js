import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  content: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  profileContainer: {
    marginTop: 40,
    padding: 20,
    borderRadius: 20,
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.4)",
    marginBottom: 10,
  },
  profileImage: {
    alignSelf: "center",
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
  },
  email: {
    fontSize: 16,
    color: "#ffffff",
    marginBottom: 10,
  },
  btnContainer: {
    width: '100%',
    flexDirection: 'colomn',
    justifyContent: 'space-between',
  },
  button: {
    alignItems: 'center',
    backgroundColor: "#fdb44b",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000000",
  },
});

export default styles;
