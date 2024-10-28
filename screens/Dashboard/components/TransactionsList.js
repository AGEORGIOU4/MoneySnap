import React, { useContext } from 'react';
import { FlatList, View, Text, StyleSheet, Image } from 'react-native';
import DataContext from '../../../api/DataContext';
import { styles } from '../styles/Styles';
import { monthNames } from '../../../constants/months';
import { Block } from 'galio-framework';

// Sample JSON data for transactions
const transactions = [
  { id: '0', date: '2024-09-01', description: 'Groceries', account: 'Visa', amount: -50, owner: 'John', photo: 'https://ui-avatars.com/api/?name=Andreas+Georgiou&background=0D8ABC&color=fff' },
  { id: '1', date: '2024-10-01', description: 'Groceries', account: 'Visa', amount: -50, owner: 'John', photo: 'https://ui-avatars.com/api/?name=Andreas+Georgiou&background=0D8ABC&color=fff' },
  { id: '2', date: '2024-10-02', description: 'Gas', account: 'MasterCard', amount: -20, owner: 'John', photo: 'https://ui-avatars.com/api/?name=COnstantina+Hadjianastasi&background=9b15e2&color=fff' },
  { id: '3', date: '2024-10-05', description: 'Salary', account: 'Bank Transfer', amount: 200, owner: 'John', photo: 'https://via.placeholder.com/40' },
  { id: '4', date: '2024-10-10', description: 'Coffee', account: 'Cash', amount: -15, owner: 'Jane', photo: 'https://via.placeholder.com/40' },
  { id: '5', date: '2024-10-15', description: 'Utility Bill', account: 'Direct Debit', amount: -100, owner: 'John', photo: 'https://via.placeholder.com/40' },
  { id: '6', date: '2021-10-15', description: 'Utility Bill', account: 'Direct Debit', amount: -100, owner: 'John', photo: 'https://via.placeholder.com/40' },
];

const renderTransaction = ({ item }) => (
  <View>
    <Text style={styles.date}>{item.date}</Text>
    <View style={styles.card}>
      <Image source={{ uri: item.photo }} style={styles.photo} />
      <View style={styles.details}>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.account}>{item.account}</Text>
      </View>
      <Text style={styles.amount}>{item.amount < 0 ? '-' : '+'}€{Math.abs(item.amount)}</Text>
    </View>
  </View>
);

const Transactions = () => {
  const { data } = useContext(DataContext);
  const { month, year } = data;

  const monthNumber = monthNames[month];

  const filteredTransactions = transactions.filter(item => {
    const transactionDate = new Date(item.date);
    const transactionMonth = transactionDate.getMonth();
    const transactionYear = transactionDate.getFullYear().toString();

    return transactionMonth == monthNumber && transactionYear == year;
  });

  return (
    <FlatList
      data={filteredTransactions}
      renderItem={renderTransaction}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.transactionList}
    />

  );
};

export default Transactions; // Export the Transactions component
