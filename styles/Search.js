import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  heading: {
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 30,
    marginLeft: 20,
    color: "#000",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 50,
    borderRadius: 15,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  searchButton: {
    width: 80,
    height: 50,
    backgroundColor: "#fdb44b",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    marginLeft: 10,
  },
  searchButtonText: {
    fontSize: 16,
    color: "#000",
  },
  resultsList: {
    margin: 15,
    flex: 1,
    marginTop: 10,
  },
});

export default styles;
