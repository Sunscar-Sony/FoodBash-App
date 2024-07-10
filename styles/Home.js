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
  header: {
    paddingTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    backgroundColor: "#fff",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  searchBar: {
    flex: 1,
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  profile: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  mainHeading: {
    marginLeft: 20,
    fontSize: 28,
    fontWeight: "bold",
    margin: 10,
    textAlign: "left",
  },
  vendorList: {
    width: "90%",
    flexGrow: 1,
    alignSelf: "center",
  },
  navBarContainer: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
  },
  navBarWithKeyboard: {
    position: 'absolute',
    bottom: 0,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  modalClose: {
    alignSelf: "flex-end",
  },
  closeText: {
    fontSize: 18,
    color: "#007BFF",
  },
  modalImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginVertical: 20,
  },
});

export default styles;
