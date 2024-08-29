import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 36,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#000',
  },
  cartItem: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    backgroundColor: "#f9f9f9"
  },
  itemName: {
    fontSize: 18,
    fontWeight: "500"
  },
  itemPrice: {
    fontSize: 16,
    color: "#888",
    marginTop: 4
  },
  emptyCart: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  emptyCartText: {
    fontSize: 18,
    color: "#888"
  },
  orderNowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  totalValueText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  orderNowButton: {
    backgroundColor: '#fdb44b',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  orderNowText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  }
});


export default styles;
