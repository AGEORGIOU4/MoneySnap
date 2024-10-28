
import { StyleSheet, Dimensions } from "react-native";
import { theme } from "galio-framework";

const { width } = Dimensions.get("screen");

export const styles = StyleSheet.create({
  block: {
    backgroundColor: '#f5f5f5',
    width: width,
    height: "100%",
  },
  tabs: {
    marginTop: 10,
    backgroundColor: '#f5f5f5',
  },
  incomeText: {
    marginTop: 20,
    textAlign: 'center',
    color: theme.COLORS.HEADER,
    fontFamily: "montserrat-regular",
    fontSize: 16,
  },
  transactionList: {
    padding: 10,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    marginVertical: 5,
    borderRadius: 15,
    backgroundColor: '#fff'
  },
  photo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 15,
  },
  details: {
    flex: 1,
  },
  date: {
    fontSize: 14,
    padding: 10,
    color: '#666',
    fontFamily: 'montserrat-regular',
    textAlign: 'right'
  },
  description: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    fontFamily: 'montserrat-regular',
  },
  account: {
    fontSize: 14,
    color: '#666',
  },
  amount: {
    fontSize: 16,
    color: '#000',
  },
});