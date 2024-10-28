import React from 'react';
import { StyleSheet } from "react-native";
import { Text, theme } from "galio-framework";
import Transactions from './TransactionsList';

export const CContent = ({ selectedTab }) => {
  if (selectedTab === 'expenses') {
    return <Transactions />
  } else if (selectedTab === 'income') {
    return <Text style={styles.incomeText}>Income Overview Placeholder</Text>;
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
