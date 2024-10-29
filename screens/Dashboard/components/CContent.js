import React from 'react';
import { StyleSheet } from "react-native";
import { Text, theme } from "galio-framework";
import Transactions from './TransactionsList';

export const CContent = ({ selectedTab }) => {
  if (selectedTab === 'Expenses') {
    return <Transactions />
  } else if (selectedTab === 'Income') {
    return <Text style={styles.incomeText}>Income Overview Placeholder</Text>;
  } else if (selectedTab === 'Transfers') {
    return <Text style={styles.incomeText}>Transfers Overview Placeholder</Text>;
  }

}

const styles = StyleSheet.create({
  incomeText: {
    marginTop: 20,
    textAlign: 'center',
    color: theme.COLORS.HEADER,
    fontFamily: "montserrat-regular",
    fontSize: 16,
  },
});
